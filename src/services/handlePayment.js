import { loadRazorpay } from "../Utlis/loadRazorpay";
import { paymentService } from "./services";

 

  // Handle payment process
   export const handlePayment = async (formData) => {
    console.log('Initiating payment with form data:', formData);
  
    
    try {
    
       const sdkLoaded = await loadRazorpay();
      if (!sdkLoaded ) {
        toast.error("Unable to load Razorpay or config missing");
        return { success: false };
      }

      // Step 1: Create order on your backend
    

      const orderResponse = await paymentService.createOrder(formData);
      console.log('Order response:', orderResponse);
      if (!orderResponse.success) {
        throw new Error(orderResponse.message || 'Failed to create order');
      }
const {order}=orderResponse
      // Step 2: Initialize Razorpay checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'Design Career Metrics',
        description: `Payment for Internships - ${formData.course}`,
        image: '/img/dcm logo2.jpg',
        order_id: order.id,
        handler: async function (response) {
          // Step 3: Verify payment on your backend
          await verifyPayment(response, formData, order.id);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          workshop:formData.course,
          customer_id: formData.email,
        },
        theme: {
          color: '#4F46E5',
        },
        modal: {
          ondismiss: function() {
            console.log('Payment modal dismissed');
            setIsLoading(false);
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error('Payment error:', error);
      alert(`Payment failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Verify payment after successful transaction
  const verifyPayment = async (razorpayResponse, formData, orderId) => {
    try {
      const verificationData = {
        razorpay_order_id: orderId,
        razorpay_payment_id: razorpayResponse.razorpay_payment_id,
        razorpay_signature: razorpayResponse.razorpay_signature,
        formData: formData,
        
      };

      const verificationResponse = await paymentService.verifyPayment(verificationData);
      
      if (verificationResponse.success) {
          alert('Payment successful! You will receive a confirmation email shortly.');
        // Save payment details to your database
        // const paymentDetails = {
        //   ...verificationData,
        //   verificationResponse,
        //   status: 'success',
        //   paymentDate: new Date().toISOString(),
        // };

        // await paymentService.savePayment(paymentDetails);
        
        // // Call success callback
        // if (onSuccess) {
        //   onSuccess({
        //     paymentId: razorpayResponse.razorpay_payment_id,
        //     orderId: orderId,
        //     formData: formData,
            
        //   });
        // }
        
      } else {
        throw new Error(verificationResponse.message || 'Payment verification failed');
      }
    } catch (error) {
      console.error('Verification error:', error);
      alert(`Payment verification failed: ${error.message}`);
    }
  };
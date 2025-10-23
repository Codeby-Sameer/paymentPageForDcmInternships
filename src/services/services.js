import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const paymentApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const paymentService = {
  // Create Razorpay order
  createOrder: async (orderData) => {
    try {
      const response = await paymentApi.post('/create-order', orderData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create order');
    }
  },

  // Verify payment
  verifyPayment: async (paymentData) => {
    try {
       
      const response = await paymentApi.post('/verify-payment', paymentData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Payment verification failed');
    }
  },

  // Save payment details
  savePayment: async (paymentDetails) => {
    try {
      const response = await paymentApi.post('/save-payment', paymentDetails);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to save payment details');
    }
  }
};
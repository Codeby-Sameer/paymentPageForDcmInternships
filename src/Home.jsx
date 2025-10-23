import DetailsContent from "./DetailsContent";
import RazorpayPaymentForm from "./PaymentForm";
import { useState } from 'react';

const Homepage = () => {
    const [showPaymentForm, setShowPaymentForm] = useState(false);

    return (
        <div className="min-h-screen  overflow-x-hidden">
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: "url('/img/bg-type2.jpg')" }}
            >


                {/* Desktop Layout */}
                <div className="hidden lg:flex min-h-screen">
                    {/* Left Content - Details */}
                    <div className="w-3/4 ">
                        <div className=" bg-white ">
                            <DetailsContent
                                showPaymentForm={showPaymentForm}
                                setShowPaymentForm={setShowPaymentForm}
                            />
                        </div>
                    </div>

                    {/* Right Content - Payment Form */}
                    <div className="w-1/4 p-8">
                        <div className="form-position-ab w-2/4">
                            <RazorpayPaymentForm />
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden ">
                    <div >
                        <div className="bg-white ">
                            <DetailsContent
                                showPaymentForm={showPaymentForm}
                                setShowPaymentForm={setShowPaymentForm}
                            />
                        </div>
                    </div>

                    {/* Mobile Payment Form Overlay */}
                    {showPaymentForm && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
                            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl transform transition-transform duration-300 ease-in-out">
                                <div className="p-4 max-h-[80vh] overflow-y-auto">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold">Payment Details</h3>
                                        <button
                                            onClick={() => setShowPaymentForm(false)}
                                            className="p-2 hover:bg-gray-100 rounded-full"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    <RazorpayPaymentForm />

                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Homepage;
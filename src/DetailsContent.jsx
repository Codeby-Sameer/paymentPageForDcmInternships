import { Mail, Phone } from "lucide-react";

const DetailsContent = ({ showPaymentForm, setShowPaymentForm, workshopData }) => {
    // Backend data object structure
     const backendData = {
        company: {
            name: "Design Career Metrics",
            logo: "/img/dcm logo.jpg",
            shortName: "DC",
            email: "hr@designcareermetrics.com",
            phone: "+91  7337572543",
            collaboration: "K G Reddy Degree College"   
        },
        program: {
            title: "Industrial Trainings For B.Tech Students",
        },
        workshops: workshopData || [
            {
                id: 1,
                title: "5-Day Workshop",
                course: "Data Science & AI",
                days: 5,
                level: "Basic",
                price: 500,
            },
            {
                id: 2,
                title: "15-Day Workshop",
                course: "Data Science & AI",
                days: 15,
                level: "Intermediate",
                price: 1000,
            }
        ],
        learningOutcomes: [
            "Build and deploy machine learning models",
            "Work with real-world datasets and projects",
            "Master data visualization techniques",
            "Understand statistical analysis methods",
            "Gain hands-on experience with AI tools",
            "Real-time project implementation"
        ],
        
    };

    const {
        company,
        program,
        workshops,
        learningOutcomes,
        
    } = backendData;

    return (
        <div className="p-2 lg:p-6 lg:ps-20 lg:ms-20  lg:w-3/4">
            {/* Header */}
            <div className="text-center mb-6 lg:mb-5">
                <div className="flex  items-center justify-center ">
                    <img
                        src={company.logo}
                        alt="DCM Logo"
                        className="w-16 h-16 lg:w-20 lg:h-20"
                    />
                    <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-900 bg-clip-text text-transparent px-2">
                        {company.name}
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="space-y-3 lg:space-y-1 ">
                {/* Program Title */}
                <div className="px-2">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 text-center lg:text-start leading-tight">
                        {program.title}
                    </h2>
                    <div className="w-20 lg:w-36 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mt-2 lg:mt-3 rounded-full  "></div>
                </div>

                {/* Program Description */}
                <div  >
                    {/* Course Details */}

                    <div className="grid grid-cols-1  ">
                        {workshops.map((workshop) => (
                            <div
                                key={workshop.id}
                                className={` p-3 lg:p-4 `}
                            >
                                <h3 className={`font-semibold  text-base lg:text-lg mb-3 lg:mb-2 flex items-center`}>

                                    {workshop.title}
                                </h3>
                                <div className="space-y-2 lg:space-y-3 lg:w-3/4">
                                    <div className="flex justify-between items-center ">
                                        <span className="text-sm lg:text-base text-gray-600">Course:</span>
                                        <span className="font-medium text-sm lg:text-base">{workshop.course}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm lg:text-base text-gray-600">Duration:</span>
                                        <span className="font-medium text-sm lg:text-base">{workshop.days} days</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm lg:text-base text-gray-600">Level:</span>
                                        <span className="font-medium text-sm lg:text-base">{workshop.level}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm lg:text-base text-gray-600">Price:</span>
                                        <span className="font-bold text-green-600 text-sm lg:text-base">₹{workshop.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Learning Outcomes */}
                    <div className=" p-3 lg:p-4 ">
                        <h3 className="font-semibold text-gray-900 text-base lg:text-lg mb-3 lg:mb-4 flex items-center">
                            What You'll Learn
                        </h3>
                        <div className="grid grid-cols-1 gap-2 lg:gap-3">
                            {learningOutcomes.map((outcome, index) => (
                                <div key={index} className="flex items-start space-x-2">
                                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-indigo-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                                    </div>
                                    <span className="text-xs lg:text-sm text-gray-700 leading-relaxed">{outcome}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Organizer Details */}
                    <div className=" p-3 lg:p-4 ">
                        <h3 className="font-semibold text-gray-900 text-base lg:text-lg mb-3 lg:mb-4 flex items-center">
                            Organized By
                        </h3>
                        <div className="flex items-center space-x-3 lg:space-x-4">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-bold text-xs lg:text-sm">
                                    <img src="/img/dcm logo.jpg" alt="" />
                                </span>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900 text-sm lg:text-base">{company.name}</p>
                                <p className="text-xs lg:text-sm text-gray-600">in collaboration with</p>
                                <p className="text-xs lg:text-sm text-gray-700">{company.collaboration}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Support Details */}
                <div className=" p-3 lg:p-4 m-0  -mt-4">
                    <h3 className="font-semibold text-gray-700 text-base lg:text-lg mb-3 lg:mb-4 flex items-center">
                    
                        Contact Us
                    </h3>
                    <div className="space-y-2 lg:space-y-3">
                        <div className="flex items-center space-x-2 lg:space-x-3">
                              <Mail/>
                            
                            <a href={`mailto:${company.email}`} className="text-gray-700 hover:text-blue-500 text-sm lg:text-base break-all">
                                {company.email}
                            </a>
                        </div>
                        <div className="flex items-center space-x-2 lg:space-x-3">
                            <Phone/>
                            <a href={`tel:${company.phone}`} className="text-gray-700 hover:text-blue-500 text-sm lg:text-base">
                                {company.phone}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Terms & Conditions */}
                {/* Terms & Conditions */}
                <div className=" p-3 lg:p-4  my-0">
                    <h3 className="font-semibold text-gray-700 text-base lg:text-lg mb-3 lg:mb-4">
                        Terms & Conditions
                    </h3>
                    <div className="text-xs lg:text-sm text-gray-600 space-y-1 lg:space-y-2 leading-relaxed">
                        <p>You agree to share information entered on this page with Design Career Metrics and Razorpay</p>
                        <p>Fees once paid are non-refundable</p>
                        <p>Certificate will be provided upon successful completion by <a href="https://leviticatechnologies.com" target="_blank">Levitica Technologies Pvt Ltd</a></p>
                        <p>80% attendance is mandatory for certification</p>
                        <p>All payments are secured with 256-bit SSL encryption</p>
                    </div>

                    {/* Mobile Payment Button */}
                    <div className="lg:hidden mt-4">
                        <button
                            onClick={() => setShowPaymentForm(true)}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center text-base"
                        >
                            <span>Proceed to Payment</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 pt-4 lg:pt-6 text-center">
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
                        <img
                            src="/img/dcm logo.jpg"
                            alt="dcm logo"
                            className="h-5 lg:h-12 mx-auto lg:mx-0"
                        />
                        <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs text-gray-500">Secure Payment</span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3 lg:mt-4 leading-relaxed">
                        Powered by DCM • PCI DSS Compliant • 256-bit Encryption
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DetailsContent;
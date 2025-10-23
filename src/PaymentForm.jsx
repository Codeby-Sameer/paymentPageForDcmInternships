
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { handlePayment } from './services/handlePayment';




const RazorpayPaymentForm = () => {
    // program options with pricing
    const programOptions = [
        { id: '5days', name: '5 Days Program', days: 5, amount: 500 },
        { id: '15days', name: '15 Days Program', days: 15, amount: 1000 }
    ];

    // Department options
    const departmentOptions = [
        'Computer Science',
        'Information Technology',
        'Electronics & Communication',
        'Mechanical Engineering',
        'Civil Engineering',
        'Electrical Engineering'
    ];

    // Semester options
    const semesterOptions = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

    // Form validation schema
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
            .required('Phone number is required'),
        department: Yup.string().required('Department is required'),
        semester: Yup.string().required('Semester is required'),
        rollNumber: Yup.string().required('Roll number is required'),
        program: Yup.string().required('Please select a program'),
        amount: Yup.number().required('Amount is required')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            department: '',
            course:"data science",
            semester: '',
            rollNumber: '',
            program: '',
            amount: 0,
            college: 'K G reddy college of engineering' // Fixed college name
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log('Form submitted:', values);
            await handlePayment(values);
        }
    });

    // Update amount when program changes
    const handleprogramChange = (e) => {
        const selectedprogram = programOptions.find(program => program.id === e.target.value);
        formik.setFieldValue('program', e.target.value);
        formik.setFieldValue('amount', selectedprogram ? selectedprogram.amount : 0);
    };



    return (
      <div className='lg:w-3/4  ' >
  <div  className="bg-white shadow-lg p-10">
    {/* Title */}
    <div className="title mb-6">
      <h2 className="text-xl font-semibold text-gray-900">Payment Details</h2>
      <div className="title-underline w-12 h-1 bg-blue-600 mt-2"></div>
    </div>

    {/* Form Section */}
    <div>
      <form onSubmit={formik.handleSubmit} className="UI-form space-y-4">
        {/* Name */}
        <div className="Field">
          <label className="Field-label block text-sm font-medium text-gray-700 mb-2">
            Name of the student *
          </label>
          <div className="Field-content">
            <input
              type="text"
              name="name"
              className={`Field-el w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                formik.errors.name && formik.touched.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name && (
              <div className="Field-error text-red-500 text-xs mt-1">{formik.errors.name}</div>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="Field">
          <label className="Field-label block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <div className="Field-content">
            <input
              type="email"
              name="email"
              className={`Field-el w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="Field-error text-red-500 text-xs mt-1">{formik.errors.email}</div>
            )}
          </div>
        </div>

        {/* Phone */}
        <div className="Field">
          <label className="Field-label block text-sm font-medium text-gray-700 mb-2">
            Phone *
          </label>
          <div className="Field-content">
            <input
              type="tel"
              name="phone"
              className={`Field-el w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                formik.errors.phone && formik.touched.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your phone number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phone && formik.touched.phone && (
              <div className="Field-error text-red-500 text-xs mt-1">{formik.errors.phone}</div>
            )}
          </div>
        </div>

        {/* Department */}
<div className="Field">
  <label className="Field-label block text-sm font-medium text-gray-700 mb-2">
    Department *
  </label>
  <div className="Field-content">
    <div className="relative">
      {/* Input field that works with dropdown */}
      <input
        type="text"
        name="department"
        list="departmentOptions"
        className={`Field-el w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          formik.errors.department && formik.touched.department ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder="Select or type your department"
        value={formik.values.department}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      
      {/* HTML5 datalist for dropdown suggestions */}
      <datalist id="departmentOptions">
        {departmentOptions.map((dept) => (
          <option key={dept} value={dept} />
        ))}
      </datalist>
    </div>

    {formik.errors.department && formik.touched.department && (
      <div className="Field-error text-red-500 text-xs mt-1">{formik.errors.department}</div>
    )}
  </div>
</div>

        {/* Semester */}
        <div className="Field">
          <label className="Field-label block text-sm font-medium text-gray-700 mb-2">
            Semester *
          </label>
          <div className="Field-content">
            <select
              name="semester"
              className={`Field-el w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                formik.errors.semester && formik.touched.semester ? 'border-red-500' : 'border-gray-300'
              }`}
              value={formik.values.semester}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select Semester</option>
              {semesterOptions.map((sem) => (
                <option key={sem} value={sem}>{sem} Semester</option>
              ))}
            </select>
            {formik.errors.semester && formik.touched.semester && (
              <div className="Field-error text-red-500 text-xs mt-1">{formik.errors.semester}</div>
            )}
          </div>
        </div>

        {/* Roll Number */}
        <div className="Field">
          <label className="Field-label block text-sm font-medium text-gray-700 mb-2">
            Roll Number *
          </label>
          <div className="Field-content">
            <input
              type="text"
              name="rollNumber"
              className={`Field-el w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                formik.errors.rollNumber && formik.touched.rollNumber ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter roll number"
              value={formik.values.rollNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.rollNumber && formik.touched.rollNumber && (
              <div className="Field-error text-red-500 text-xs mt-1">{formik.errors.rollNumber}</div>
            )}
          </div>
        </div>

        {/* program Selection */}
        <div className="Field">
          <label className="Field-label block text-sm font-medium text-gray-700 mb-2">
            Choose program *
          </label>
          <div className="Field-content">
            <select
              name="program"
              className={`Field-el w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                formik.errors.program && formik.touched.program ? 'border-red-500' : 'border-gray-300'
              }`}
              value={formik.values.program}
              onChange={handleprogramChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select a program</option>
              {programOptions.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.name} - {program.days} days - ₹{program.amount}
                </option>
              ))}
            </select>
            {formik.errors.program && formik.touched.program && (
              <div className="Field-error text-red-500 text-xs mt-1">{formik.errors.program}</div>
            )}
          </div>
        </div>

        {/* Amount Display */}
        <div className="Field Field--amount bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="Field-label text-sm font-medium text-gray-700 mb-2">
            Amount
          </div>
          <div className="Field-content">
            <div className="Field-wrapper flex items-center">
              <span className="Field-addon Field-addon--before mr-2">
                <span className="currency-symbol font-bold text-gray-900">₹</span>
              </span>
              <div className="Field-el">
                <label className="font-bold text-2xl text-gray-900">
                  {formik.values.amount}.00
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Form Footer */}
        <div id="form-footer" className="mt-6">
          <div className="form-footer-payment flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <img
              id="fin-logo"
              alt="pay-methods"
              src="https://cdn.razorpay.com/static/assets/pay_methods_branding.png"
              width="180"
              className="mb-4 sm:mb-0"
            />

            <button
              type="submit"
              className="btn btn--gradient bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors flex items-center"
              tabIndex="0"
            >
              Pay <span className="ml-2">₹ {formik.values.amount}.00</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

    );
};

export default RazorpayPaymentForm;
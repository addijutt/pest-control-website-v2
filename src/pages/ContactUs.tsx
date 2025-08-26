import React, { useState } from 'react';
import { PageProps } from '../routes/routes';
import StatesSection from '../components/Sections/StatesSection';
import SimpleHero from '../components/Sections/SimpleHero';

const ContactUs: React.FC<PageProps> = ({ Pagetitle }) => {
     const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };
  return (
    <>
      <SimpleHero Pagetitle={Pagetitle} PageContent="If you have questions regarding our service or want to 
      give your feedback, or want to log a complaint, use the below form to contact us. Do you have feedback 
      for us? We are here to make your experience on Pest Controls soothing and we make sure your concern 
      is addressed as quickly as possible." />
      
      <div className="max-w-7xl mx-auto px-4 py-8 verdana">

      <div className="flex flex-col lg:flex-row w-full">
        {/* Contact Form */}
        <div className="w-full lg:w-[60%] px-6 md:mb-0 mb-8">
        <h1 className="text-2xl font-bold mb-2">Get in Touch</h1>
      <p className="mb-8 text-sm">
        We value and appreciate your suggestions, compliments or complaints in order to improve our service and the way we communicate.
      </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className='flex flex-col lg:flex-row w-full space-y-4'>
            <div className='w-full lg:w-[50%] md:px-2 '>
              <label htmlFor="name" className="block mb-1 font-medium text-sm">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#bb3434]"
              />
            </div>

            <div className='w-full lg:w-[50%] md:px-2'>
              <label htmlFor="email" className="block mb-1 font-medium text-sm">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#bb3434]"
              />
            </div>
            </div>
            <div className='flex flex-col lg:flex-row w-full space-y-4'>

            <div className='w-full lg:w-[50%] md:px-2'>
              <label htmlFor="phone" className="block mb-1 font-medium text-sm">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#bb3434]"
              />
            </div>

            <div className='w-full lg:w-[50%] md:px-2'>
              <label htmlFor="subject" className="block mb-1 font-medium text-sm">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#bb3434]"
              />
            </div>
            </div>
            <div className='md:px-2'>
              <label htmlFor="message" className="block mb-1 font-medium text-sm">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#bb3434]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-none focus:ring-offset-none disabled:opacity-50 disabled:cursor-not-allowed
              bg-[#bb3434] text-white font-normal rounded-full px-6 md:px-20 py-3  hover:bg-red-700"
            >
              Contact Us
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="w-full lg:w-[40%] px-6 ">
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Mailing Address:</h3>
              <p className="text-sm">
                <b>Pest Controls</b><br />
                P.O 1637<br />
                Pearland Texas 77588<br />
                USA
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">E-mail:</h3>
              <p className="text-sm"><a href="mailto:service@pestscontrols.com" className='underline'>service@pestscontrols.com</a></p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Call Us 24/7:</h3>
              <p className="text-sm"><a href="tel:(844) 636-7638" className='underline'>(844) 636-7638</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <StatesSection />
    </>
  );
};

export default ContactUs;
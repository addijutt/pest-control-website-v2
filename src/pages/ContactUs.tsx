/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { PageProps } from '../routes/routes';
import StatesSection from '../components/Sections/StatesSection';
import SimpleHero from '../components/Sections/SimpleHero';

interface FormData {
  Name: string;
  Phone: string;
  Email: string;
  Subject: string;
  Problem: string;
  Consent: boolean;
}
type FormErrors = {
  [K in keyof FormData]?: string;
};
const ContactUs: React.FC<PageProps> = ({ Pagetitle }) => {
   const [showFullConsent, setShowFullConsent] = useState(false);
       const consentText = `
By clicking the button below, you consent for us to use automated technology, including calls, texts and prerecorded messages, to contact you at the number and email provided about our offers. This consent is not required to make a purchase. Up to 10msg/month. Reply 'STOP' to opt-out at any time. Clicking the Submit button constitutes your electronic signature. Privacy Policy.
`;
 const [formData, setFormData] = useState<FormData>({
    Name: "",
    Phone: "",
    Email: "",
    Subject: "",
    Problem: "",
    Consent: false,
  });
 const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
  const newErrors: FormErrors = {};
  if (!formData.Name.trim()) newErrors.Name = "Name is required";
  if (!formData.Phone.trim()) newErrors.Phone = "Phone is required";
  if (formData.Phone && !/^\+?\d{7,15}$/.test(formData.Phone))
    newErrors.Phone = "Enter a valid phone number";
  if (formData.Email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email))
    newErrors.Email = "Enter a valid email";
  if (!formData.Consent) newErrors.Consent = "Consent is required";
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const params = new URLSearchParams();
      params.append("Name", formData.Name);
      params.append("Phone", formData.Phone);
      if (formData.Email) params.append("Email", formData.Email);
      if (formData.Subject) params.append("Subject", formData.Subject);
      if (formData.Problem) params.append("Problem", formData.Problem);
      params.append("Consent", String(formData.Consent));

      const apiUrl = import.meta.env.PROD
        ? "https://api.pkv-vergleichsprofi.de/submit-green-nest-pc-form"
        : "/api/submit-green-nest-pc-form";

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: params.toString(),
      });

      const data = await res.json();
      // console.log("API response:", data);

      if (data.status === "success") {
        setShowPopup(true);
        setFormData({
          Name: "",
          Phone: "",
          Email: "",
          Subject: "",
          Problem: "",
          Consent: false,
        });
        setErrors({});
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (err) {
      // console.error(err);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <SimpleHero Pagetitle={Pagetitle} PageContent="If you have questions regarding our service or want to 
      give your feedback, or want to log a complaint, use the below form to contact us. Do you have feedback 
      for us? We are here to make your experience on Local Pest Experts soothing and we make sure your concern 
      is addressed as quickly as possible." />
      
      <div className="max-w-7xl mx-auto px-4 py-8 verdana">

      <div className="flex flex-col lg:flex-row w-full">
        {/* Contact Form */}
        <div className="w-full lg:w-[60%] px-6 md:mb-0 mb-8">
        <h1 className="text-2xl font-bold mb-2">Get in Touch</h1>
      <p className="mb-8 text-sm">
        We value and appreciate your suggestions, compliments or complaints in order to improve our service and the way we communicate.
      </p>
          <form onSubmit={handleSubmit} noValidate className="space-y-4 contact-form">
            <div className='flex flex-col lg:flex-row w-full'>
            <div className='w-full lg:w-[50%] md:px-2 '>
              <label htmlFor="name" className="block mb-1 font-medium text-sm">Name *</label>
              <input
                type="text"
                name="Name" value={formData.Name} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#bb3434]"
              />
              {errors.Name && <span className="error">{errors.Name}</span>}
            </div>

            <div className='w-full lg:w-[50%] md:px-2'>
              <label htmlFor="email" className="block mb-1 font-medium text-sm">Email *</label>
              <input
                type="email"
                name="Email" value={formData.Email} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#bb3434]"
              />
              {errors.Email && <span className="error">{errors.Email}</span>}
            </div>
            </div>
            <div className='flex flex-col lg:flex-row w-full'>

            <div className='w-full lg:w-[50%] md:px-2'>
              <label htmlFor="phone" className="block mb-1 font-medium text-sm">Phone Number *</label>
              <input
                type="tel"
                name="Phone" value={formData.Phone} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#bb3434]"
              />
            </div>

            <div className='w-full lg:w-[50%] md:px-2'>
              <label htmlFor="subject" className="block mb-1 font-medium text-sm">Subject *</label>
              <input
                type="text"
                name="subject" value={formData.Subject} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#bb3434]"
              />
            </div>
            </div>
            <div className='md:px-2'>
              <label htmlFor="message" className="block mb-1 font-medium text-sm">Message *</label>
              <textarea
                name="Problem" value={formData.Problem} onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#bb3434]"
              ></textarea>
              {errors.Problem && <span className="error">{errors.Problem}</span>}
            </div>
            {/* Consent Section */}
              <div className="content px-2"> 
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="Consent"
                        checked={formData.Consent}
                        onChange={handleChange}
                      /> yes
                       
                    </label>
                      <div className="in-content">
                        By clicking ‘Submit’ you confirm that you agree to our Privacy Policy and Terms of Service
                         {/* {showFullConsent
                        ? consentText
                        : consentText.slice(0, 167) + ""}{" "}
                      <a type="button" onClick={() => setShowFullConsent(!showFullConsent)}                      >
                        {showFullConsent ? "Read less" : "Read more"}
                      </a> */}
                      {errors.Consent && <span className="error">{errors.Consent}</span>}
                      </div>
                    </div>

            <button
              type="submit" disabled={isSubmitting}
              className="inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-none focus:ring-offset-none disabled:opacity-50 disabled:cursor-not-allowed
              bg-[#bb3434] text-white font-normal rounded-full px-6 md:px-20 py-3  hover:bg-red-700"
            >
              {isSubmitting ? "Submitting..." : "Contact Us"}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="w-full lg:w-[40%] px-6 ">
          
          <div className="space-y-6">
            {/* <div>
              <h3 className="font-semibold text-lg mb-2">Mailing Address:</h3>
              <p className="text-sm">
                <b>FlowBridge Media (Nexus Quant Labs Ltd.)</b><br />
                2803 Philadelphia Pike<br />
                Suite B #1708<br />
                Claymont, DE 19703
              </p>
            </div> */}

            <div>
              <h3 className="font-semibold text-lg mb-2">E-mail:</h3>
              <p className="text-sm"><a href="mailto:info@local-pest-experts.net" className='underline'>info@local-pest-experts.net</a></p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Call Us 24/7:</h3>
              <p className="text-sm"><a href="tel:8334880407" className='underline dynamic-phone'>(833) 488-0407</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <StatesSection />
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>✅ Your pest control request has been submitted successfully!</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUs;
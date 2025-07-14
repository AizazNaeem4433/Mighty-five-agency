'use client';

import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import ReCAPTCHA from 'react-google-recaptcha';
import Notification from '@/app/components/Notification';

type FormValues = {
  name: string;
  phone: string;
  email: string;
  services: string[];
  message?: string;
};

const SERVICE_OPTIONS = ["SEO", "Paid Ads", "Social Media", "Web Design", "Brand Strategy", "Others"];

const ContactUs: React.FC = () => {
  const { register, handleSubmit, reset, watch } = useForm<FormValues>();
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const selectedServices = watch('services') || [];
  const showMessage = selectedServices.includes('Others');

  const onSubmit = async (data: FormValues) => {
    try {
      const token = await recaptchaRef.current?.executeAsync();
      recaptchaRef.current?.reset();

      if (!token) {
        setAlert({ type: 'error', message: 'reCAPTCHA verification failed. Please try again.' });
        return;
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, token }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setAlert({ type: 'success', message: 'Message sent successfully!' });
        reset();
      } else {
        setAlert({ type: 'error', message: result.error || 'Failed to send message.' });
      }
    } catch (error) {
      console.error('Form error:', error);
      setAlert({ type: 'error', message: 'Something went wrong. Please try again.' });
    }

    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <section className="w-full min-h-screen bg-white py-24 px-4 sm:px-8 lg:px-24 text-gray-800">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
          Let’s <span className="text-red-600">Talk</span>
        </h2>
        <p className="text-center text-gray-600 text-lg mb-8">
          Have a project in mind or just want to say hello? Reach out using the form below.
        </p>

        <div className="relative group w-full max-w-4xl mx-auto">
          <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-animation z-0" />
          <div className="relative z-10 bg-gray-50 border rounded-xl p-6 md:p-8 text-gray-700 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              We’re Not Your Average Marketing Agency
            </h3>
            <p className="mb-3">
              We want to be your <span className="text-red-600 font-semibold">strategic growth partner</span>, not another cookie-cutter digital marketing agency...
            </p>
            <p>
              And if you’re interested in employment opportunities, please tell us about yourself.
              <span className="italic"> (Button-pushers need not apply.)</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Form Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Panel */}
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Address</h4>
            <p className="text-sm text-gray-600">
              5900 Balcones Drive suite 7070<br />
              Austin, TX, USA
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Email & WhatsApp</h4>
            <p className="text-sm text-gray-600">
              Email: hello@mightyfive.com<br />
              WhatsApp: +13073003051
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Business Hours</h4>
            <p className="text-sm text-gray-600">
              Mon – Fri: 9:00 AM – 6:00 PM<br />
              Sat – Sun: Closed
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Follow Us</h4>
            <div className="flex space-x-3 mt-2">
              <SocialIcon url="https://x.com/" bgColor="#000" style={{ height: 28, width: 28 }} />
              <SocialIcon url="https://instagram.com/" style={{ height: 28, width: 28 }} />
              <SocialIcon url="https://facebook.com/" style={{ height: 28, width: 28 }} />
              <SocialIcon url="https://linkedin.com/" style={{ height: 28, width: 28 }} />
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-gray-200 h-fit"
        >
          {alert && <Notification type={alert.type} message={alert.message} />}

          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} size="invisible" ref={recaptchaRef} />

            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                {...register('name', { required: true })}
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Phone Number</label>
              <input
                {...register('phone', { required: true })}
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                {...register('email', { required: true })}
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Service Interest</label>
              <div className="flex flex-wrap gap-2 text-sm">
                {SERVICE_OPTIONS.map((service) => (
                  <label key={service} className="inline-flex items-center gap-1">
                    <input
                      {...register('services')}
                      type="checkbox"
                      value={service}
                      className="form-checkbox text-red-600"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            {showMessage && (
              <div>
                <label className="block text-sm font-semibold mb-1">Message</label>
                <textarea
                  {...register('message', { required: showMessage })}
                  rows={4}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                />
              </div>
            )}

            <div className="text-center mt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-red-600 border-2 border-red-600 transition text-sm"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;

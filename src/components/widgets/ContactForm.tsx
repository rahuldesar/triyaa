import axios from 'axios';
import type React from 'react';
import { useState } from 'react';

export interface ContactProps {
  title: string;
  subtitle: string;
  inputs?: { type: string; name: string; label: string; required?: boolean; placeholder?: string }[];
  textarea?: { label: string };
  disclaimer?: { label: string };
  description: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC<ContactProps> = ({ title, subtitle, description }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    await axios
      .post('/api/api-test', {
        data: formData,
      })
      .then(function (response) {
        if (response.status === 200) {
          setIsMessageSent(true);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        }
        setIsSubmitting(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsSubmitting(false);
      });

    setTimeout(() => {
      setIsMessageSent(false);
    }, 3000);
  };

  return (
    <>
      <div className="mb-8 max-w-3xl text-center md:mx-auto md:mb-12">
        <h2 className="leading-tighter text-heading font-heading text-3xl font-bold tracking-tighter md:text-4xl">
          {title}
        </h2>
        {subtitle && <p className="mt-4 text-xl text-muted">{subtitle}</p>}
      </div>
      <div className="mx-auto flex w-full max-w-xl flex-col rounded-lg border border-gray-200 bg-white p-4 shadow backdrop-blur dark:border-gray-700 dark:bg-slate-900 sm:p-6 lg:p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=""
              className="text-md block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-slate-900"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=""
              className="text-md block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-slate-900"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=""
              rows={4}
              className="text-md block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-slate-900"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-blue-600 px-4 py-4 font-bold text-white duration-150 ease-in hover:bg-blue-700"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg
                  className="mr-3 h-5 w-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V2.5A1.5 1.5 0 0113.5 1h-3A1.5 1.5 0 019 2.5V4a8 8 0 018 8h-1.5a1.5 1.5 0 110-3h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 010 2h-1.5a1.5 1.5 0 110-3h3a1.5 1.5 0 011.5 1.5V12a8 8 0 01-8 8h-3a1.5 1.5 0 01-1.5-1.5V19a1 1 0 00-1-1h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 011-1.5H12a8 8 0 01-8-8z"
                  ></path>
                </svg>
              </div>
            ) : (
              'Submit'
            )}
          </button>
          {isMessageSent && <p className="mt-2 text-green-400">Message sent!</p>}
          <div className="mt-3 text-center">
            {description && <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

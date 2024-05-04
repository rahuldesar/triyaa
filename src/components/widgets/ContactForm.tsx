// NOTE: this is not being used any where. This was just an attempt to refactor astro contact page to jsx
import type React from 'react';
import { useState } from 'react';

export interface ContactProps {
  title: string;
  subtitle: string;
  inputs: { type: string; name: string; label: string; required?: boolean; placeholder?: string }[];
  textarea: { label: string };
  disclaimer: { label: string };
  description: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC<ContactProps> = ({ title, subtitle, inputs, textarea, disclaimer, description }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Handle form submission logic here (e.g., send data to backend)
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      {inputs.map((input) => (
        <div key={input.name}>
          <label htmlFor={input.name}>{input.label}</label>
          <input
            type={input.type}
            name={input.name}
            id={input.name}
            placeholder={input.placeholder || ''}
            required={input.required || false}
            value={formData[input.name]}
            onChange={handleChange}
          />
        </div>
      ))}
      <div>
        <label htmlFor="message">{textarea.label}</label>
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
      {description && <p className="">{description}</p>}
    </form>
  );
};

export default ContactForm;

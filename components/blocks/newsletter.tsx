/*
newsletter.tsx
This file defines the newsletter block component
and the newsletter block schema for the TinaCMS.
*/

import { useState } from 'react';
import type { Template } from 'tinacms';
import { tinaField } from 'tinacms/dist/react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Section } from '../layout/section';
import { Card } from '@/components/ui/card';

// Define our own type since it's not generated yet
interface NewsletterBlock {
  title?: string;
  description?: string;
  buttonText?: string;
  placeholderText?: string;
  privacyText?: string;
  successMessage?: string;
  errorMessage?: string;
}

// Create a type for the newsletter subscription data
interface NewsletterSubscription {
  email: string;
  timestamp: string;
  source: string;
}

export const Newsletter = ({ data }: { data: NewsletterBlock }) => {
  const [email, setEmail] = useState('');
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setEmailError('');
    setSubmitStatus('idle');
    
    // Validate email
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    // Validate privacy policy consent
    if (!agreedToPolicy) {
      return;
    }
    
    setSubmitting(true);
    
    try {
      // Create subscription data
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Newsletter subscription:");

      setSubmitStatus("success");
      setEmail("");
      setAgreedToPolicy(false);
    } catch (error) {
      // Error state
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section className="bg-[#f5f7f8] py-16">
      <div className="relative flex justify-center">
        <Card className="relative z-20 w-full max-w-2xl px-8 pt-20 pb-10 bg-[#f5f7f8] rounded-2xl border-none shadow-xl">
          <div className="text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-[#002b36]">
              Join our super rad<br />
              besties newsletter —<br />
              <span className="text-[#ff6f6f]">The Perch</span>
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="newsletter-email" className="font-bold text-base text-[#002b36]">Email Address</label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder={data.placeholderText || "abc@company.com"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`h-14 text-lg px-4 bg-white border-2 border-transparent focus:border-[#ff6f6f] rounded-md ${emailError ? 'border-red-500' : ''}`}
                aria-invalid={!!emailError}
              />
              {emailError && (
                <p className="text-sm text-red-500">{emailError}</p>
              )}
            </div>
            {/* Privacy Checkbox */}
            <div className="flex items-start space-x-2">
              <Checkbox
                id="privacy-policy"
                checked={agreedToPolicy}
                onCheckedChange={(checked) => setAgreedToPolicy(!!checked)}
              />
              <label
                htmlFor="privacy-policy"
                className="text-sm text-muted-foreground"
                data-tina-field={tinaField(data, 'privacyText')}
              >
                {data.privacyText || "I agree to the privacy policy"}
              </label>
            </div>
            <Button
              type="submit"
              disabled={submitting || !agreedToPolicy}
              className="w-40 h-12 text-lg font-bold bg-[#002b36] hover:bg-[#003847] text-white rounded-lg self-start"
              data-tina-field={tinaField(data, 'buttonText')}
            >
              {submitting ? 'Submitting...' : data.buttonText || 'Subscribe'}
            </Button>
          </form>
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
              <p className="text-center">{data.successMessage || 'Thank you for subscribing!'}</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-100 text-red-800 rounded">
              <p className="text-center">{data.errorMessage || 'An error occurred. Please try again later.'}</p>
            </div>
          )}
        </Card>
      </div>
    </Section>
  );
};

export const newsletterBlockSchema: Template = {
  name: "newsletter",
  label: "Newsletter",
  ui: {
    previewSrc: "/blocks/newsletter.png",
    defaultItem: {
      title: "Subscribe to our Newsletter",
      description: "Stay updated with our latest news and updates.",
      buttonText: "Subscribe",
      placeholderText: "Your email address",
      privacyText: "I agree to receive email newsletters and accept the data privacy statement.",
      successMessage: "Thank you for subscribing!",
      errorMessage: "An error occurred. Please try again later.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      label: "Button Text",
      name: "buttonText",
    },
    {
      type: "string",
      label: "Placeholder Text",
      name: "placeholderText",
    },
    {
      type: "string",
      label: "Privacy Policy Text",
      name: "privacyText",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      label: "Success Message",
      name: "successMessage",
    },
    {
      type: "string",
      label: "Error Message",
      name: "errorMessage",
    },
  ],
}; 
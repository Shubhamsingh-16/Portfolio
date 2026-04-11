import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Github, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters';
  return errors;
}

export function Contact() {
  const { ref, visible } = useScrollAnimation();
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validate(form);

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setSubmitting(true);

    // Simulated submission (safe + honest)
    console.log('Form submitted:', form);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 800);
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border ${
      errors[field]
        ? 'border-red-400 dark:border-red-500'
        : 'border-gray-200 dark:border-gray-700 focus:border-cyan-400 dark:focus:border-cyan-500'
    } text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm outline-none transition-colors`;

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Heading */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-cyan-500 text-sm">05.</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Contact
            </h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 ml-2" />
          </div>

          <p className="text-gray-500 dark:text-gray-400 mt-2 mb-10 text-sm">
            Open to collaborations, learning opportunities, and meaningful projects.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* LEFT SIDE */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-6">
                Get in touch
              </h3>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
                  { icon: Github, label: 'GitHub', value: 'Shubhamsingh-16', href: personalInfo.github },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-md hover:shadow-cyan-500/10 transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-cyan-500" />
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        {label}
                      </p>

                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                          className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE (FORM) */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">

              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <CheckCircle className="w-14 h-14 text-emerald-500 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                    Thanks for reaching out — I’ll get back to you soon.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">

                  <div>
                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Hi Shubham, I'd like to..."
                      rows={5}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-400 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    {submitting ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                    Or email directly at{' '}
                    <a href={`mailto:${personalInfo.email}`} className="text-cyan-500 hover:underline">
                      {personalInfo.email}
                    </a>
                  </p>

                </form>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
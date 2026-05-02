import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useTheme } from '../App';

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const { dark } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => { setIsSubmitted(false); setFormData({ name: '', email: '', message: '' }); }, 3000);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sec = dark ? 'bg-[#02040a]' : 'bg-[#f0f4ff]';
  const heading = dark ? 'text-white' : 'text-gray-900';
  const sub = dark ? 'text-gray-400' : 'text-gray-500';
  const cardBg = dark ? 'bg-white/5 border-white/8 backdrop-blur-sm' : 'bg-white border-gray-200 shadow-sm';
  const label = dark ? 'text-gray-300' : 'text-gray-700';
  const input = dark
    ? 'bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20'
    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20';
  const iconBg = (c: string) => dark ? `bg-${c}-500/15 text-${c}-400` : `bg-${c}-50 text-${c}-600`;

  return (
    <section id="contact" className={`py-20 lg:py-28 relative overflow-hidden transition-colors duration-500 ${sec}`}>
      <div className={`absolute top-0 left-1/2 w-[500px] h-[300px] rounded-full blur-[120px] -translate-x-1/2 pointer-events-none ${dark ? 'bg-indigo-600/8' : 'bg-indigo-300/20'}`} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <div className="text-center mb-14">
            <span className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 ${dark ? 'text-indigo-400' : 'text-indigo-600'}`}>Contact</span>
            <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${heading}`}>
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
            <p className={`mt-4 max-w-xl mx-auto text-sm sm:text-base ${sub}`}>
              Ready to work together? Let's discuss your project and bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Info */}
            <div className="space-y-6">
              <h3 className={`text-xl font-semibold mb-2 ${heading}`}>Let's Connect</h3>
              {[
                { icon: Mail, label: 'Email', value: 'muhammadrizwanramzan300@gmail.com', color: 'indigo' },
                { icon: Phone, label: 'Phone', value: '+92 3164049722', color: 'emerald' },
                { icon: MapPin, label: 'Location', value: 'Pakistan', color: 'purple' },
              ].map(({ icon: Icon, label: l, value, color }) => (
                <div key={l} className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 card-3d ${cardBg} hover:border-indigo-500/40`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${dark ? `bg-${color}-500/15` : `bg-${color}-50`}`}>
                    <Icon className={`w-5 h-5 ${dark ? `text-${color}-400` : `text-${color}-600`}`} />
                  </div>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wide ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{l}</p>
                    <p className={`text-sm font-medium ${dark ? 'text-gray-200' : 'text-gray-700'}`}>{value}</p>
                  </div>
                </div>
              ))}

              <div className={`p-5 rounded-xl border ${dark ? 'bg-indigo-500/5 border-indigo-500/20' : 'bg-indigo-50 border-indigo-200'}`}>
                <h4 className={`font-semibold mb-2 ${heading}`}>Quick Response</h4>
                <p className={`text-sm ${sub}`}>I typically respond within 24 hours. Let's build something great together!</p>
              </div>
            </div>

            {/* Form */}
            <div className={`p-6 sm:p-8 rounded-2xl border transition-colors duration-500 ${cardBg}`}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { id: 'name', type: 'text', label: 'Name', placeholder: 'Your Name' },
                    { id: 'email', type: 'email', label: 'Email', placeholder: 'your@email.com' },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className={`block text-sm font-medium mb-2 ${label}`}>{f.label}</label>
                      <input type={f.type} id={f.id} name={f.id}
                        value={formData[f.id as keyof typeof formData]}
                        onChange={handleChange} required placeholder={f.placeholder}
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all duration-300 ${input}`} />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${label}`}>Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                      required rows={5} placeholder="Tell me about your project..."
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${input}`} />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 group">
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 animate-fade-in">
                  <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4 animate-bounce" />
                  <h3 className={`text-xl font-semibold mb-2 ${heading}`}>Message Sent!</h3>
                  <p className={`text-sm ${sub}`}>Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

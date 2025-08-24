// import React, { useState } from 'react';
// import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
// import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

// const Contact = () => {
//   const [ref, isVisible] = useIntersectionObserver();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Simulate form submission
//     setIsSubmitted(true);
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({ name: '', email: '', message: '' });
//     }, 3000);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section id="contact" className="py-20 bg-slate-800/50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div 
//           ref={ref}
//           className={`transition-all duration-1000 ${
//             isVisible 
//               ? 'opacity-100 translate-y-0' 
//               : 'opacity-0 translate-y-10'
//           }`}
//         >
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Get In Touch
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
//             <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
//               Ready to work together? Let's discuss your project and bring your ideas to life.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Info */}
//             <div className="space-y-8">
//               <h3 className="text-2xl font-semibold text-white mb-6">
//                 Let's Connect
//               </h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-center gap-4 group">
//                   <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/30 transition-colors">
//                     <Mail className="w-6 h-6 text-blue-400" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-medium">Email</h4>
//                     <p className="text-gray-300">muhammadrizwanramzan300@gmail.com</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center gap-4 group">
//                   <div className="bg-green-500/20 p-3 rounded-lg group-hover:bg-green-500/30 transition-colors">
//                     <Phone className="w-6 h-6 text-green-400" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-medium">Phone</h4>
//                     <p className="text-gray-300">+92 300 1234567</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center gap-4 group">
//                   <div className="bg-purple-500/20 p-3 rounded-lg group-hover:bg-purple-500/30 transition-colors">
//                     <MapPin className="w-6 h-6 text-purple-400" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-medium">Location</h4>
//                     <p className="text-gray-300">Pakistan</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-6 rounded-xl border border-white/10">
//                 <h4 className="text-white font-semibold mb-3">Quick Response</h4>
//                 <p className="text-gray-300 text-sm">
//                   I typically respond to messages within 24 hours. Let's discuss how I can help 
//                   bring your project to life!
//                 </p>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="bg-slate-700/30 p-8 rounded-2xl border border-slate-600/30">
//               {!isSubmitted ? (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label htmlFor="name" className="block text-white font-medium mb-2">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full bg-slate-600/50 border border-slate-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
//                       placeholder="Your Name"
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="email" className="block text-white font-medium mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full bg-slate-600/50 border border-slate-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="message" className="block text-white font-medium mb-2">
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       className="w-full bg-slate-600/50 border border-slate-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
//                       placeholder="Tell me about your project..."
//                     />
//                   </div>
                  
//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
//                   >
//                     <Send className="inline-block w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
//                     Send Message
//                   </button>
//                 </form>
//               ) : (
//                 <div className="text-center py-12 animate-fade-in">
//                   <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4 animate-bounce" />
//                   <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
//                   <p className="text-gray-300">
//                     Thank you for reaching out. I'll get back to you soon!
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Ready to work together? Let's discuss your project and bring your ideas to life.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Let's Connect
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      muhammadrizwanramzan300@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="bg-green-500/20 p-3 rounded-lg group-hover:bg-green-500/30 transition-colors">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-gray-300 text-sm sm:text-base">+92 3164049722</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 group">
                  <div className="bg-purple-500/20 p-3 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-300 text-sm sm:text-base">Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-5 sm:p-6 rounded-xl border border-white/10">
                <h4 className="text-white font-semibold mb-2 sm:mb-3">Quick Response</h4>
                <p className="text-gray-300 text-sm">
                  I typically respond to messages within 24 hours. Let's discuss how I can help bring your project to life!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-700/30 p-6 sm:p-8 rounded-2xl border border-slate-600/30">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-600/50 border border-slate-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-600/50 border border-slate-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-slate-600/50 border border-slate-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
                  >
                    <Send className="inline-block w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 sm:py-12 animate-fade-in">
                  <CheckCircle className="w-14 h-14 sm:w-16 sm:h-16 text-green-400 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
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

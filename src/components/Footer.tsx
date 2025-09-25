

// import React from "react";
// import { Github, Linkedin, Mail, Heart } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

//       <div className="container mx-auto px-6 lg:px-12 py-14 relative z-10">
//         <div className="grid md:grid-cols-3 gap-10">
//           {/* Brand */}
//           <div className="space-y-4">
//             <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
//               Muhammad Rizwan
//             </h3>
//             <p className="text-gray-400 leading-relaxed">
//               Full Stack Developer passionate about building modern, scalable, and user-friendly
//               web experiences.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h4 className="text-white font-semibold text-lg">Quick Links</h4>
//             <div className="grid grid-cols-2 gap-2">
//               {["About", "Projects", "Certifications", "Contact", "Experience", "Education"].map(
//                 (link) => (
//                   <a
//                     key={link}
//                     href={`#${link.toLowerCase()}`}
//                     className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:translate-x-1"
//                   >
//                     {link}
//                   </a>
//                 )
//               )}
//             </div>
//           </div>

//           {/* Social Links */}
//           <div className="space-y-4">
//             <h4 className="text-white font-semibold text-lg">Connect</h4>
//             <div className="flex gap-5">
//               <a
//                 href="https://github.com/Shalbandians"
//                 className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
//               >
//                 <Github size={26} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/muhammad-rizwan-093727243/"
//                 className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]"
//               >
//                 <Linkedin size={26} />
//               </a>
//               <a
//                 href="mailto:muhammadrizwanramzan300@gmail.com"
//                 className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]"
//               >
//                 <Mail size={26} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         {/* <div className="border-t border-slate-700/50 mt-10 pt-8 text-center">
//           <p className="text-gray-400 flex items-center justify-center gap-2">
//             Made with{" "}
//             <Heart className="w-4 h-4 text-red-500 animate-pulse drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]" />{" "}
//             by Muhammad Rizwan
//           </p>
//           <p className="text-gray-500 text-sm mt-2">
//             © 2023 All rights reserved.
//           </p>
//         </div> */}
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // 👈 React Icons se WhatsApp icon

const Footer = () => {
  return (
    <>
      <footer className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 py-14 relative z-10">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Muhammad Rizwan
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer passionate about building modern, scalable, and user-friendly
                web experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-lg">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {["About", "Projects", "Certifications", "Contact", "Experience", "Education"].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:translate-x-1"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-lg">Connect</h4>
              <div className="flex gap-5">
                <a
                  href="https://github.com/Shalbandians"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
                >
                  <Github size={26} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-rizwan-093727243/"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]"
                >
                  <Linkedin size={26} />
                </a>
                <a
                  href="mailto:muhammadrizwanramzan300@gmail.com"
                  className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]"
                >
                  <Mail size={26} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923164049722" // 👈 apna WhatsApp number yahan dalen (country code k sath)
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-50"
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
};

export default Footer;

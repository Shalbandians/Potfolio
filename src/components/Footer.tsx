import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from '../App';

const Footer = () => {
  const { dark } = useTheme();
  const bg = dark ? 'bg-[#02040a] border-white/8' : 'bg-white border-gray-200';
  const heading = dark ? 'text-white' : 'text-gray-900';
  const sub = dark ? 'text-gray-400' : 'text-gray-500';
  const link = dark ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600';

  return (
    <>
      <footer className={`relative border-t transition-colors duration-500 ${bg}`}>
        <div className="container mx-auto px-6 lg:px-20 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-extrabold text-gradient mb-3">MR.</h3>
              <p className={`text-sm leading-relaxed ${sub}`}>
                Full Stack Developer building modern, scalable, and user-friendly web experiences.
              </p>
            </div>
            <div>
              <h4 className={`font-semibold mb-4 ${heading}`}>Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {["About", "Projects", "Certifications", "Experience", "Education"].map(l => (
                  <a key={l} href={`#${l.toLowerCase()}`}
                    className={`text-sm transition-all duration-200 hover:translate-x-1 ${link}`}>{l}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className={`font-semibold mb-4 ${heading}`}>Connect</h4>
              <div className="flex gap-3">
                {[
                  { href: 'https://github.com/Shalbandians', icon: Github },
                  { href: 'https://www.linkedin.com/in/muhammad-rizwan-093727243/', icon: Linkedin },
                  { href: 'mailto:muhammadrizwanramzan300@gmail.com', icon: Mail },
                ].map(({ href, icon: Icon }) => (
                  <a key={href} href={href}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/50 hover:text-indigo-400 ${dark ? 'border-white/10 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={`mt-10 pt-6 border-t text-center text-xs ${dark ? 'border-white/5 text-gray-600' : 'border-gray-100 text-gray-400'}`}>
            © {new Date().getFullYear()} Muhammad Rizwan. All rights reserved.
          </div>
        </div>
      </footer>

      <a href="https://wa.me/923164049722" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-emerald-500 text-white p-3.5 rounded-full shadow-lg hover:bg-emerald-600 hover:scale-110 transition-all duration-300 z-50 shadow-emerald-500/30">
        <FaWhatsapp size={22} />
      </a>
    </>
  );
};

export default Footer;

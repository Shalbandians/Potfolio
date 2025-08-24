// import React, { useEffect, useState } from 'react';
// import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
// import profileImage from '../image/rizwan.jpg'; // Ensure you have a profile image in this path
// import cvFile from '../Muhammad Rizwan Resume.pdf'; // Path to your CV file
// const Hero = () => {
//   const [typedText, setTypedText] = useState('');
//   const fullText = 'Full Stack Developer';
  
//   useEffect(() => {
//     let i = 0;
//     const timer = setInterval(() => {
//       if (i < fullText.length) {
//         setTypedText(fullText.slice(0, i + 1));
//         i++;
//       } else {
//         clearInterval(timer);
//       }
//     }, 100);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Flex Layout: Left text | Right image */}
//         <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-12">
          
//           {/* Left Side (Text + Buttons + Socials) */}
//           <div className="text-center lg:text-left max-w-2xl animate-fade-in">
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up">
//               Muhammad Rizwan
//             </h1>
//             <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-300 mb-6 h-12 animate-slide-up delay-200">
//               {typedText}
//               <span className="animate-pulse">|</span>
//             </h2>
            
//             <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slide-up delay-400">
//               Passionate developer creating amazing web experiences with modern technologies. 
//               Specialized in React, Node.js, and full-stack development.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 animate-slide-up delay-600">
//                <a
//       href={cvFile}
//       download="Muhammad_Rizwan_Resume.pdf" 
//       className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold 
//                  hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group flex items-center"
//     >
//       <Download className="inline-block w-5 h-5 mr-2 group-hover:animate-bounce" />
//       Download Resume
//     </a>
//               {/* <button className="border border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105">
//                 View Portfolio
//               </button> */}
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-6 justify-center lg:justify-start mb-12 animate-slide-up delay-800">
//               <a href="https://github.com/Shalbandians" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
//                 <Github size={28} />
//               </a>
//               <a href="https://www.linkedin.com/in/muhammad-rizwan-093727243/" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
//                 <Linkedin size={28} />
//               </a>
//               <a href="mailto:muhammadrizwanramzan300@gmail.com" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
//                 <Mail size={28} />
//               </a>
//             </div>
//           </div>

//           {/* Right Side (Profile Image) */}
// {/* Right Side (Profile Image with Animation) */}
// <div className="w-64 md:w-80 lg:w-[420px] rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-2 shadow-2xl 
//                 animate-float hover:scale-105 transition-transform duration-500">
//   <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center overflow-hidden">
//     <img
//       src={profileImage} // 👈 apni image ka path
//       alt="Muhammad Rizwan"
//       className="w-full h-full object-cover rounded-2xl"
//     />
//   </div>
// </div>



//         </div>

//         {/* Scroll Indicator (Bottom Center) */}
//         {/* <div className="animate-bounce mt-12">
//           <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImage from '../image/rizwan.jpg';
import cvFile from '../Muhammad Rizwan Resume.pdf';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative overflow-hidden pt-24"
    >
      {/* Background animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side */}
          <div className="text-center lg:text-left max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up">
              Muhammad Rizwan
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-300 mb-6 h-12 animate-slide-up delay-200">
              {typedText}
              <span className="animate-pulse">|</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slide-up delay-400">
             Passionate MERN developer skilled in MongoDB, Express, React, and Node.js.
Creating impactful and modern web experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 animate-slide-up delay-600">
              <a
                href={cvFile}
                download="Muhammad_Rizwan_Resume.pdf" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold 
                           hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group flex items-center"
              >
                <Download className="inline-block w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start mb-12 animate-slide-up delay-800">
              <a href="https://github.com/Shalbandians" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-rizwan-093727243/" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Linkedin size={28} />
              </a>
              <a href="mailto:muhammadrizwanramzan300@gmail.com" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Right Side (Profile Image) */}
          <div className="w-64 md:w-80 lg:w-[420px] rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-2 shadow-2xl 
                          animate-float hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center overflow-hidden">
              <img
                src={profileImage}
                alt="Muhammad Rizwan"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Github, Mail, Phone, MapPin, ArrowDown } from 'lucide-react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import { personalInfo, typingRoles } from '../data/portfolio';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const typed = useTypingAnimation(typingRoles);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-950"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        <div className="max-w-3xl">

          {/* Greeting */}
          <p className="font-mono text-cyan-500 dark:text-cyan-400 text-sm mb-4">
            &gt; Hello, World!
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Shubham
            </span>{' '}
            👋
          </h1>

          {/* Typing role */}
          <div className="flex items-center gap-3 mb-6 h-10">
            <span className="text-xl sm:text-2xl font-mono font-semibold text-gray-700 dark:text-gray-200">
              {typed}
            </span>
            <span className="animate-blink text-cyan-500 text-2xl font-mono">|</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-xl mb-8 leading-relaxed">
            Computer Science student who enjoys building web applications and exploring how systems work.
            Currently focused on improving problem-solving skills and learning backend development.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">

            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5"
            >
              View Projects
            </button>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-lg hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              Download Resume
            </a>

          </div>

          {/* Contact links */}
          <div className="flex flex-wrap gap-5 text-sm text-gray-500 dark:text-gray-400">
            
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {personalInfo.phone}
            </a>

            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </span>

          </div>
        </div>
      </div>

      {/* Scroll button */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
// import { Github, Mail, Phone, MapPin, ArrowDown } from 'lucide-react';
// import { useTypingAnimation } from '../hooks/useTypingAnimation';
// import { personalInfo, typingRoles } from '../data/portfolio';

// interface HeroProps {
//   onOpenResume: () => void;
// }

// export function Hero({ onOpenResume }: HeroProps) {
//   const typed = useTypingAnimation(typingRoles);

//   const scrollToAbout = () => {
//     document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-950"
//     >
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
//         <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
//           style={{
//             backgroundImage: `linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)`,
//             backgroundSize: '60px 60px',
//           }}
//         />
//       </div>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
//         <div className="max-w-3xl">
//           <p className="font-mono text-cyan-500 dark:text-cyan-400 text-sm mb-4 animate-fade-in">
//             &gt; Hello, World!
//           </p>

//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
//             Hi, I'm{' '}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
//               Shubham
//             </span>{' '}
//             <span className="inline-block">👋</span>
//           </h1>

//           <div className="flex items-center gap-3 mb-6 h-10">
//             <span className="text-xl sm:text-2xl font-mono font-semibold text-gray-700 dark:text-gray-200">
//               {typed}
//             </span>
//             <span className="animate-blink text-cyan-500 text-2xl font-mono leading-none">|</span>
//           </div>

//           <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mb-8 leading-relaxed">
//             Computer Science student building scalable systems and clean APIs.
//             Passionate about backend engineering and solving real problems with code.
//           </p>

//           <div className="flex flex-wrap gap-4 mb-10">
//             <button
//               onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
//               className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5"
//             >
//               View Projects
//             </button>
//             <button
//               onClick={onOpenResume}
//               className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-lg hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 hover:-translate-y-0.5"
//             >
//               <a href="/resume.pdf" download>Download Resume</a>
//             </button>
//           </div>

//           <div className="flex flex-wrap gap-5 text-sm text-gray-500 dark:text-gray-400">
//             <a
//               href={personalInfo.github}
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-1.5 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
//             >
//               <Github className="w-4 h-4" />
//               GitHub
//             </a>
//             <a
//               href={`mailto:${personalInfo.email}`}
//               className="flex items-center gap-1.5 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
//             >
//               <Mail className="w-4 h-4" />
//               {personalInfo.email}
//             </a>
//             <a
//               href={`tel:${personalInfo.phone}`}
//               className="flex items-center gap-1.5 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
//             >
//               <Phone className="w-4 h-4" />
//               {personalInfo.phone}
//             </a>
//             <span className="flex items-center gap-1.5">
//               <MapPin className="w-4 h-4" />
//               {personalInfo.location}
//             </span>
//           </div>
//         </div>
//       </div>

//       <button
//         onClick={scrollToAbout}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors animate-bounce"
//         aria-label="Scroll down"
//       >
//         <ArrowDown className="w-6 h-6" />
//       </button>
//     </section>
//   );
// }

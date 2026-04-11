import { X, Download, Github, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo, skills, projects, education, certifications, courses } from '../data/portfolio';

interface ResumeProps {
  onClose: () => void;
}

export function Resume({ onClose }: ResumeProps) {
  const handlePrint = () => window.print();

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="w-full max-w-3xl my-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-4 print:hidden">
          <h2 className="text-white font-semibold">Resume</h2>

          <div className="flex gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </button>

            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div
          id="resume-content"
          className="bg-white text-gray-900 p-8 shadow-2xl"
          style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '10pt',
            lineHeight: '1.4',
          }}
        >
          
          {/* Name */}
          <div className="text-center mb-5 pb-4 border-b-2 border-gray-800">
            <h1 style={{ fontSize: '22pt', fontWeight: '700' }}>
              {personalInfo.name}
            </h1>

            <p style={{ fontSize: '11pt', color: '#374151' }}>
              Software Developer
            </p>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-600 mt-2">
              <span><MapPin className="inline w-3 h-3 mr-1" />{personalInfo.location}</span>
              <span><Phone className="inline w-3 h-3 mr-1" />{personalInfo.phone}</span>
              <span><Mail className="inline w-3 h-3 mr-1" />{personalInfo.email}</span>
              <span><Github className="inline w-3 h-3 mr-1" />github.com/Shubhamsingh-16</span>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-4">
            <h2 className="font-bold border-b border-gray-800 mb-2 uppercase text-xs">
              Summary
            </h2>

            <p style={{ fontSize: '9.5pt', color: '#374151' }}>
              Passionate and self-driven Computer Science student with a strong foundation in Java and web technologies.
              Experienced in building interactive applications and exploring backend development.
              Focused on improving problem-solving skills and writing clean, efficient code.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-4">
            <h2 className="font-bold border-b border-gray-800 mb-2 uppercase text-xs">
              Technical Skills
            </h2>

            <div style={{ fontSize: '9.5pt' }}>
              {Object.entries(skills).map(([cat, items]) => (
                <div key={cat} className="flex gap-2 mb-1">
                  <span className="font-semibold w-[120px]">{cat}:</span>
                  <span>{items.join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-4">
            <h2 className="font-bold border-b border-gray-800 mb-2 uppercase text-xs">
              Projects
            </h2>

            {projects.map((p) => (
              <div key={p.title} className="mb-3">
                <div className="flex justify-between">
                  <strong>{p.title}</strong>
                  <span className="text-xs text-gray-500">
                    {p.tech.join(' | ')}
                  </span>
                </div>

                <p className="text-xs text-gray-500 mb-1">
                  {p.live !== p.github ? p.live : p.github}
                </p>

                <ul className="list-disc pl-4 text-sm">
                  <li>
                    Built {p.subtitle.toLowerCase()} with focus on clean UI and structured logic
                  </li>

                  {p.features.slice(0, 2).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="mb-4">
            <h2 className="font-bold border-b border-gray-800 mb-2 uppercase text-xs">
              Education
            </h2>

            {education.map((edu) => (
              <div key={edu.institution} className="flex justify-between mb-2">
                <div>
                  <strong>{edu.institution}</strong>
                  <p className="text-sm">{edu.degree}</p>
                  <p className="text-xs text-gray-500">{edu.score}</p>
                </div>

                <div className="text-right text-xs text-gray-500">
                  <p>{edu.period}</p>
                  <p>{edu.type}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Certifications + Courses */}
          <div className="grid grid-cols-2 gap-6">
            
            <section>
              <h2 className="font-bold border-b border-gray-800 mb-2 uppercase text-xs">
                Certifications
              </h2>

              {certifications.map((cert) => (
                <div key={cert.title} className="mb-2">
                  <p className="font-semibold text-sm">{cert.title}</p>
                  <p className="text-xs text-gray-500">
                    {cert.issuer} — {cert.date}
                  </p>
                </div>
              ))}
            </section>

            <section>
              <h2 className="font-bold border-b border-gray-800 mb-2 uppercase text-xs">
                Courses
              </h2>

              <ul className="list-disc pl-4 text-sm text-gray-700">
                {courses.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </section>

          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #resume-content, #resume-content * { visibility: visible !important; }
          #resume-content {
            position: fixed !important;
            top: 0;
            left: 0;
            width: 100%;
            padding: 24px;
            box-shadow: none;
          }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}
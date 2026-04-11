import { Github, Mail, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="py-10 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono font-bold text-gray-800 dark:text-white">
            <Code2 className="w-4 h-4 text-cyan-500" />
            <span>shubham.dev</span>
          </div>

          <p className="text-xs text-gray-400 dark:text-gray-500 font-mono text-center">
            © {new Date().getFullYear()} Shubham Singh. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

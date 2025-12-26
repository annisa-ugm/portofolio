import { Github, ExternalLink, FileJson, Globe, Gitlab } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Annisa Mutia Rahman</h1>
        <h2 className="text-xl sm:text-2xl text-gray-700 mb-6 font-medium">Backend Developer</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
          Backend Developer specializing in high-performance RESTful APIs, complex database architecture, and scalable system design. 
          Expertise in building secure, well-documented backend solutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://drive.google.com/file/d/1f8B0p-ZRgCftF5PPUBOGccCZ2afzabVS/view?usp=sharing" className="px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-all font-medium rounded-sm">
            Download CV
          </a>
          <div className="flex gap-2">
             <a href="https://github.com/annisa-ugm" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-300 hover:bg-gray-50 transition-all rounded-sm" title="GitHub">
                <Github size={20} />
             </a>
             <a href="https://gitlab.com/annisar496" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-300 hover:bg-gray-50 transition-all rounded-sm" title="GitLab">
                <Gitlab size={20} />
             </a>
             <a href="https://www.linkedin.com/in/annisa-mutia-rahman-4833872b9/" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-300 hover:bg-gray-50 transition-all rounded-sm" title="LinkedIn">
                <ExternalLink size={20} />
             </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          
          {/* Project 1: Finance Tracking System */}
          <div className="mb-10 bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden flex flex-col">
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Finance Tracking System</h3>
                <div className="flex gap-3">
                  <a href="https://github.com/annisa-ugm/FinTrack" className="text-gray-500 hover:text-gray-900 transition-colors" title="View Source Code">
                    <Github size={22} />
                  </a>
                  <a href="https://documenter.getpostman.com/view/37959814/2sB2qfBzgk#a397af3c-6f22-4685-b375-9ecbe147783d" className="text-gray-500 hover:text-orange-600 transition-colors" title="Postman Documentation">
                    <FileJson size={22} />
                  </a>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic text-sm">
                A comprehensive financial backend system designed for multi-entity reporting and transaction management.
              </p>
              <ul className="list-disc ml-5 space-y-2 mb-8 text-gray-700">
                <li>Architected 50+ RESTful API endpoints with strict Request Validation and Eloquent logic.</li>
                <li>Implemented secure authentication using Laravel Sanctum.</li>
                <li>Optimized MySQL performance through Eager Loading and efficient Database Indexing for 15+ tables.</li>
                <li>Maintained full API documentation via Postman Collection.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[11px] font-bold uppercase tracking-wider border border-gray-200">Laravel</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[11px] font-bold uppercase tracking-wider border border-gray-200">MySQL</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[11px] font-bold uppercase tracking-wider border border-gray-200">Sanctum</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[11px] font-bold uppercase tracking-wider border border-gray-200">API Design</span>
              </div>
            </div>
          </div>

          {/* Project 2: Document Management System */}
          <div className="mb-10 bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden flex flex-col">
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Document Management System (DMS)</h3>
                <div className="flex gap-3">
                  <a href="https://gitlab.com/husnafelisacahyani/dms-pdu/-/tree/5c682cfd47c0e60ed6dc2ae2930ae30a88f58548/" className="text-gray-500 hover:text-gray-900 transition-colors" title="View Source Code">
                    <Gitlab size={22} />
                  </a>
                  <a href="https://documenter.getpostman.com/view/48557365/2sB3QGurZV" className="text-gray-500 hover:text-orange-600 transition-colors" title="Postman Documentation">
                    <FileJson size={22} />
                  </a>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic text-sm">
                A scalable enterprise solution for secure file organization and metadata management.
              </p>
              <ul className="list-disc ml-5 space-y-2 mb-8 text-gray-700">
                <li>Built robust APIs for file operations including Metadata Processing and hierarchical folder structures.</li>
                <li>Enforced data security with Sanctum middleware and protected routes.</li>
                <li>Optimized complex data retrieval using Query Pagination and optimized relationship mapping.</li>
                <li>Published professional-grade technical documentation using Postman Collection and Swagger/OpenAPI.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[11px] font-bold uppercase tracking-wider border border-gray-200">Laravel</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[11px] font-bold uppercase tracking-wider border border-gray-200">MySQL</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[11px] font-bold uppercase tracking-wider border border-gray-200">Sanctum</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[11px] font-bold uppercase tracking-wider border border-gray-200">API Design</span>
              </div>
            </div>
          </div>

          {/* Project 3: Autonomous Waste-Sorting Robot */}
          <div className="mb-10 bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden flex flex-col">
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Autonomous Waste-Sorting Robot</h3>
                <div className="flex gap-3">
                  <a href="https://github.com/GMRT-H8/KRI-NASIONAL-2025" className="text-gray-500 hover:text-gray-900 transition-colors" title="View Repository">
                    <Github size={22} />
                  </a>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic text-sm">
                Integration of computer vision and hardware control for environmental sustainability.
              </p>
              <ul className="list-disc ml-5 space-y-2 mb-8 text-gray-700">
                <li>Engineered an object detection pipeline utilizing YOLOv5 with high classification accuracy.</li>
                <li>Facilitated seamless communication between Python AI inference and C++ low-level controllers.</li>
                <li>Managed end-to-end Machine Learning lifecycle: dataset curation, model training, and deployment.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[11px] font-bold uppercase tracking-wider border border-gray-200">Python</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[11px] font-bold uppercase tracking-wider border border-gray-200">C++</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[11px] font-bold uppercase tracking-wider border border-gray-200">YOLOv5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Backend & Core</h3>
            <div className="flex flex-wrap gap-3">
              {['PHP', 'Laravel', 'Python', 'C++', 'REST API', 'MySQL', 'PostgreSQL'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm font-medium shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Tools & Standards</h3>
            <div className="flex flex-wrap gap-3">
              {['Sanctum', 'JWT', 'Docker', 'Postman', 'Swagger', 'Git', 'CI/CD', 'Railway', 'Supabase', 'Cloudflare'].map((tool) => (
                <span key={tool} className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-sm font-medium shadow-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Let's build something together.</h2>
          <div className="flex flex-col md:flex-row gap-8 text-gray-400">
            <a href="mailto:annisar496@gmail.com" className="hover:text-white transition-colors">annisar496@gmail.com</a>
            <div className="flex gap-6">
              <a href="https://github.com/annisa-ugm" className="hover:text-white transition-colors font-medium text-sm">GitHub</a>
              <a href="https://gitlab.com/annisar496" className="hover:text-white transition-colors font-medium text-sm">GitLab</a>
              <a href="https://www.linkedin.com/in/annisa-mutia-rahman-4833872b9/" className="hover:text-white transition-colors font-medium text-sm">LinkedIn</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Annisa Mutia Rahman.
          </div>
        </div>
      </footer>
    </div>
  );
}
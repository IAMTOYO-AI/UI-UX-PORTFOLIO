import { motion, AnimatePresence } from "motion/react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
import { PROJECTS } from "../data";
import { useEffect, useState } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-indigo-400 hover:underline flex items-center gap-2">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>
      </div>
    );
  }

  const nextSlide = () => {
    if (project.details.gallery) {
      setCurrentSlide((prev) => (prev + 1) % project.details.gallery!.length);
    }
  };

  const prevSlide = () => {
    if (project.details.gallery) {
      setCurrentSlide((prev) => (prev - 1 + project.details.gallery!.length) % project.details.gallery!.length);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black"
    >
      {/* Detail Header */}
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={18} /> Back to Work
            </Link>
            <div className="flex gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-white/80">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-4 leading-none">{project.title}</h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">{project.category}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Stats Grid */}
        {project.details.stats && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20">
            {project.details.stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl"
              >
                <div className="text-3xl font-display font-bold mb-1 text-indigo-400">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-6">The Challenge</h2>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
                {project.details.challenge}
              </p>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-6">The Solution</h2>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
                {project.details.solution}
              </p>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-6">The Outcome</h2>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
                {project.details.outcome}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-12">
            <div className="glass p-8 rounded-3xl sticky top-24">
              <h3 className="font-display font-bold text-xl mb-6">Project Info</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Role</div>
                  <div className="text-sm">Lead UI/UX Designer</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Client</div>
                  <div className="text-sm">{project.title} Corp</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Timeline</div>
                  <div className="text-sm">4 Months (2023)</div>
                </div>
              </div>
              
              <button className="w-full mt-10 py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white transition-all group">
                Live Prototype <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </aside>
        </div>

        {/* High-Fidelity Screens */}
        {project.details.screens && (
          <div className="mt-32">
            <div className="mb-12">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-4">Interfaces</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold">Key Screens</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.details.screens.map((screen, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group rounded-[2.5rem] bg-[#111] p-3 ring-1 ring-white/10 shadow-2xl transition-all hover:scale-[1.02] hover:ring-indigo-500/50"
                >
                  <div className="rounded-[2rem] overflow-hidden bg-black aspect-[9/19.5]">
                    <img 
                      src={screen} 
                      alt={`Screen ${i + 1}`} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Optional Label */}
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10 pointer-events-none">
                    View Interaction
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Carousel */}
        {project.details.gallery && (
          <div className="mt-40">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-4">Exploration</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold">Visual Language</h3>
              <p className="text-gray-400 mt-4">Deep dive into the colors, typography, and visual assets created for this project.</p>
            </div>
            
            <div className="relative group">
              <div className="overflow-hidden rounded-[3rem] bg-white/5 ring-1 ring-white/10 aspect-[16/10] md:aspect-[21/9]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={project.details.gallery[currentSlide]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="absolute inset-y-0 left-4 md:left-8 flex items-center">
                <button 
                  onClick={prevSlide}
                  className="p-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white hover:bg-indigo-500 hover:border-indigo-500 transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft size={24} />
                </button>
              </div>
              <div className="absolute inset-y-0 right-4 md:right-8 flex items-center">
                <button 
                  onClick={nextSlide}
                  className="p-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white hover:bg-indigo-500 hover:border-indigo-500 transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {project.details.gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      currentSlide === i ? "w-8 bg-indigo-500" : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Next Project Footer */}
      <section className="py-20 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Up Next</span>
          <button 
            onClick={() => {
              const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
              const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
              navigate(`/project/${nextProject.id}`);
            }}
            className="group"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-4">
              Next Project <ChevronRight size={48} className="text-indigo-500 group-hover:translate-x-2 transition-transform" />
            </h2>
          </button>
        </div>
      </section>
    </motion.div>
  );
}

import { motion, useScroll } from "motion/react";
import { Github, Linkedin, Mail, Twitter, ChevronRight, Quote, Zap, Users, Brain, MessageSquare, Heart, RefreshCw, Anchor, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";
import { Link, useNavigate, useLocation, Routes, Route } from "react-router-dom";
import { PROJECTS, TESTIMONIALS, SKILLS, SOCIAL_LINKS } from "./data";
import ProjectDetail from "./components/ProjectDetail";

function Home({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    const mailtoUrl = `mailto:toyosiodewenwa@gmail.com?subject=${subject}&body=${body}`;
    
    // Open user's email client
    window.location.href = mailtoUrl;
    
    // Simulate slight delay for effect
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setStatus('success');
    setFormState({ name: '', email: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="px-4 py-1 border border-white/10 rounded-full text-xs font-mono text-gray-400 uppercase tracking-widest bg-white/5">
            Available for freelance
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-8xl font-display font-bold leading-none tracking-tighter mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting <span className="text-gradient">Digital Experiences</span> That Matter.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm a UI/UX Designer obsessed with building intuitive, user-centric interfaces for startups and global brands.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-indigo-600 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-colors group"
          >
            View My Work <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </button>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured Work</h2>
            <p className="text-gray-400 max-w-lg">A selection of projects that showcase my approach to problem solving and visual storytelling.</p>
          </div>
          <div className="flex gap-4 p-1 bg-white/5 rounded-2xl border border-white/10">
            {["All", "Sustainability", "Fintech", "Mobile", "Web"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-6 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.toLowerCase() ? "bg-white text-black shadow-lg" : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.filter(p => 
            activeTab === 'all' || 
            p.tags.some(t => t.toLowerCase().includes(activeTab)) || 
            p.category.toLowerCase().includes(activeTab)
          ).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-white/5 ring-1 ring-white/10 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-indigo-500/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Designing with Purpose.</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              With over 5 years of experience in digital design, I bridge the gap between user needs and business goals. My design philosophy is rooted in simplicity, accessibility, and high visual standards. I believe that every pixel should serve a purpose and every interaction should feel natural.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 flex items-center gap-2 text-indigo-400">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Visual Identity
                </h4>
                <p className="text-sm text-gray-500">Creating memorable brand assets and design systems that scale across platforms.</p>
              </div>
              <div>
                <h4 className="font-bold mb-4 flex items-center gap-2 text-indigo-400">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Prototyping
                </h4>
                <p className="text-sm text-gray-500">Fast iteration through high-fidelity interactive prototypes to validate ideas quickly.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Expertise & Skills</h2>
              <p className="text-gray-400 mb-8">A comprehensive set of technical tools and interpersonal strengths that I bring to every collaboration.</p>
              <div className="flex flex-col gap-4">
                <div className="p-4 glass rounded-2xl flex items-center gap-4">
                  <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                    <Zap size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Fast Execution</div>
                    <div className="text-xs text-gray-500">Rapid turnaround without quality loss</div>
                  </div>
                </div>
                <div className="p-4 glass rounded-2xl flex items-center gap-4">
                  <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                    <Brain size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">User-First Logic</div>
                    <div className="text-xs text-gray-500">Psychology-driven design choices</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-12">
              {/* Technical Skills */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Technical Arsenal</h3>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05 }
                    }
                  }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                >
                  {SKILLS.filter(s => s.category === 'technical').map((skill) => (
                    <motion.div 
                      key={skill.name}
                      variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { 
                          opacity: 1, 
                          scale: 1,
                          transition: { type: "spring", stiffness: 260, damping: 20 }
                        }
                      }}
                      className="glass p-6 rounded-3xl flex flex-col items-center justify-center text-center transition-all hover:border-indigo-500/50 hover:bg-white/10"
                    >
                      <span className="text-xs font-bold uppercase tracking-widest opacity-60">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Soft Strengths</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SKILLS.filter(s => s.category === 'soft').map((skill, index) => {
                    const icons = [MessageSquare, Users, Brain, Heart, Anchor, RefreshCw];
                    const Icon = icons[index % icons.length];
                    return (
                      <motion.div 
                        key={skill.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-3xl border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <div className="p-3 bg-white/5 rounded-2xl text-gray-400 group-hover:text-white transition-colors">
                          <Icon size={20} />
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl relative group"
            >
              <Quote className="absolute top-8 right-8 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors" size={40} />
              <p className="text-gray-300 mb-8 italic relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover ring-1 ring-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 italic tracking-tighter">
              Let's build something <span className="text-indigo-500">legendary.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-md">
              Currently looking for new opportunities or interesting collaborations. My inbox is always open.
            </p>
            
            <div className="space-y-6 mb-12">
              <a 
                href="mailto:toyosiodewenwa@gmail.com" 
                className="flex items-center gap-4 text-2xl font-display font-bold hover:text-indigo-400 transition-colors group"
              >
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-indigo-500/10 transition-colors">
                  <Mail size={24} className="text-indigo-500" />
                </div>
                toyosiodewenwa@gmail.com
              </a>
            </div>
            
            <div className="flex gap-4">
              {[
                { Icon: Twitter, url: SOCIAL_LINKS.twitter },
                { Icon: Linkedin, url: SOCIAL_LINKS.linkedin },
                { Icon: Github, url: SOCIAL_LINKS.github }
              ].map(({ Icon, url }, i) => (
                <a 
                  key={i} 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 hover:bg-indigo-600 transition-all hover:-translate-y-1 border border-white/5 hover:border-white/10"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-display font-bold">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Name</label>
                    <input 
                      required
                      type="text"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Email</label>
                    <input 
                      required
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-gray-600 resize-none"
                  />
                </div>
                <button 
                  disabled={status === 'submitting'}
                  className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl font-bold flex items-center justify-center gap-3 transition-all group overflow-hidden relative"
                >
                  {status === 'submitting' ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                      <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("all");
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center bg-black/50 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          <Link to="/" className="hover:text-indigo-400 transition-colors">
            DESIGNER<span className="text-indigo-500">.</span>
          </Link>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-10">
          {["Work", "About", "Skills", "Testimonials", "Contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                onClick={() => {
                  if (window.location.hash !== "#/") {
                    navigate("/");
                    setTimeout(() => {
                      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  } else {
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-indigo-500 hover:text-white transition-all"
        >
          Hire Me
        </motion.button>
      </nav>

      <Routes>
        <Route path="/" element={<Home activeTab={activeTab} setActiveTab={setActiveTab} />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-xs">
              <Link to="/" className="text-2xl font-display font-bold tracking-tighter hover:text-indigo-400 transition-colors">
                DESIGNER<span className="text-indigo-500">.</span>
              </Link>
              <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                Focused on creating high-end digital products and memorable experiences that help brands stand out.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-20">
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white">Sitemap</h4>
                <div className="flex flex-col gap-2">
                  {["Work", "About", "Skills", "Testimonials", "Contact"].map(item => (
                    <button 
                      key={item}
                      onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-sm text-gray-500 hover:text-white transition-colors text-left"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white">Socials</h4>
                <div className="flex flex-col gap-2">
                  <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group">
                    <Twitter size={14} className="text-indigo-500 opacity-50 group-hover:opacity-100" /> Twitter
                  </a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group">
                    <Linkedin size={14} className="text-indigo-500 opacity-50 group-hover:opacity-100" /> LinkedIn
                  </a>
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group">
                    <Github size={14} className="text-indigo-500 opacity-50 group-hover:opacity-100" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-xs">© 2024 Designer Portfolio. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="text-xs text-gray-500 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-500 hover:text-white">Terms of Service</a>
            </div>
            <p className="text-gray-500 text-xs flex items-center gap-2">
              Built with <span className="text-red-500">❤️</span> using React
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

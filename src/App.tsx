import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Menu, X, Code, Database, Globe, Server, Layers, Brain, FileText, Award, GraduationCap } from 'lucide-react';
import { Helmet } from 'react-helmet';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const programmingSkills = [
    { name: 'C++', icon: Code },
    { name: 'Python', icon: Code },
    { name: 'Java', icon: Code },
    { name: 'JavaScript', icon: Code },
  ];

  const webDevSkills = [
    { name: 'HTML', icon: Globe },
    { name: 'CSS', icon: Globe },
    { name: 'Node.js', icon: Server },
    { name: 'Express.js', icon: Server },
  ];

  const databaseSkills = [
    { name: 'MySQL', icon: Database },
    { name: 'MongoDB', icon: Database },
  ];

  const toolSkills = [
    { name: 'Git/GitHub', icon: Layers },
    { name: 'VS Code', icon: Layers },
    { name: 'Postman', icon: Layers },
    { name: 'Figma', icon: Layers },
  ];

  const coreConcepts = [
    { name: 'Data Structures and Algorithms', icon: Brain },
    { name: 'Object-Oriented Programming (OOP)', icon: Brain },
    { name: 'Cloud Fundamentals', icon: Brain },
    { name: 'Responsive Design', icon: Brain },
  ];

  const projects = [
    {
      title: 'Blinkit Clone',
      description: 'A full-stack clone of Blinkit that provides a seamless user experience. I implemented product listings, cart management, and a responsive UI using JavaScript, Node.js, HTML, and CSS.',
      tech: ['JavaScript', 'Node.js', 'HTML', 'CSS'],
      github: 'https://github.com/deveshsingh641',
      live: '#',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500' 
    },
    {
      title: 'Online Payment Fraud Detection (ML)',
      description: 'I built a machine learning model to detect fraudulent transactions, achieving 95% accuracy. I used Python, Scikit-learn, and Pandas for data preprocessing, feature engineering, and model training to significantly reduce false positives.',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/deveshsingh641',
      live: '#',
      image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];
  
  const certifications = [
    { name: 'Data Structures and Algorithms', source: 'Infosys Springboard', year: '2025', icon: FileText },
    { name: 'Problem Solving (Intermediate)', source: 'HackerRank', year: '2024', icon: Award },
    { name: 'Python for Data Science', source: 'NPTEL', year: '2025', icon: FileText },
    { name: 'Google Arcade Cloud Skills Badges', source: 'Google Cloud', year: '2025', badges: ['Cloud Essentials', 'Generative AI', 'Kubernetes Basics'], icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
        <style>{`
          body { font-family: 'Lato', sans-serif; }
          h1, h2, h3, h4 { font-family: 'Poppins', sans-serif; }
        `}</style>
      </Helmet>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Devesh Singh
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors font-medium ${
                    activeSection === item
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item === 'about' ? 'About Me' : item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-1">
              {['home', 'about', 'skills', 'projects', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item === 'about' ? 'About Me' : item}
                </button>
              ))}
            </div>
          </div> 
        )}
      </nav>
      
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
                Devesh Singh
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8 max-w-3xl mx-auto">
                B.Tech IT Student | Full-Stack & Machine Learning Developer
              </p>
              <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                Motivated Computer Science undergraduate with a strong foundation in Java, C++, and Python. Experienced in developing full-stack web applications and machine learning models, as demonstrated through projects like a Blinkit Clone and a Fraud Detection System.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  I'm a motivated Computer Science undergraduate with a strong foundation in Java, C++, and Python. I'm experienced in developing full-stack web applications and machine learning models, as demonstrated by my projects like a Blinkit Clone and a Fraud Detection System.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  I possess strong problem-solving skills in Data Structures and Algorithms with exposure to cloud computing fundamentals. I'm seeking an internship or entry-level role to apply my analytical and programming expertise to solve real-world problems.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-blue-600">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">B.Tech, Information Technology</h4>
                      <p className="text-gray-600 text-sm">ABES Engineering College, 2024-Present</p>
                      <p className="text-gray-500 text-sm">CGPA: 8.0</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-blue-600">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Intermediate (CBSE)</h4>
                      <p className="text-gray-600 text-sm">Sant Atulanand Convent School, 2022-2023</p>
                      <p className="text-gray-500 text-sm">Percentage: 89.02%</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-blue-600">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">High School (CBSE)</h4>
                      <p className="text-gray-600 text-sm">Sant Atulanand Convent School, 2020-2021</p>
                      <p className="text-gray-500 text-sm">Percentage: 94.6%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="src\WhatsApp Image 2024-09-06 at 23.26.47_3cffa012.jpg"
                  alt="Professional headshot"
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Code className="text-blue-600 mr-2" />
                  Programming
                </h3>
                <div className="flex flex-wrap gap-4">
                  {programmingSkills.map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors">{skill.name}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Globe className="text-blue-600 mr-2" />
                  Web Development
                </h3>
                <div className="flex flex-wrap gap-4">
                  {webDevSkills.map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors">{skill.name}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Database className="text-blue-600 mr-2" />
                  Databases
                </h3>
                <div className="flex flex-wrap gap-4">
                  {databaseSkills.map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors">{skill.name}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Layers className="text-blue-600 mr-2" />
                  Tools & UI/UX
                </h3>
                <div className="flex flex-wrap gap-4">
                  {toolSkills.map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors">{skill.name}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 col-span-1 md:col-span-2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Brain className="text-blue-600 mr-2" />
                  Core Concepts
                </h3>
                <div className="flex flex-wrap gap-4">
                  {coreConcepts.map((concept, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors">{concept.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Github size={16} className="mr-1" />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                        <p className="text-sm text-gray-500">{cert.source}</p>
                        {cert.year && <p className="text-sm text-gray-500">({cert.year})</p>}
                        {cert.badges && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {cert.badges.map((badge, badgeIndex) => (
                              <span key={badgeIndex} className="px-2 py-0.5 bg-gray-200 text-gray-800 text-xs rounded-full">{badge}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities or interesting projects.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">deveshsingh20666@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91-9369885872</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/deveshsingh641" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/devesh-singh-0b234928b" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="bg-gray-50 rounded-lg p-8 shadow-sm">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Project Collaboration"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © 2024 Devesh Singh. Built with React and Tailwind CSS.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
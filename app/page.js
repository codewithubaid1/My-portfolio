'use client'

import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Bug, Target, Award, Mail, ChevronDown, Menu, X,  } from 'lucide-react';
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HackerPortfolio() {
  const [terminalText, setTerminalText] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);  
  const textArray = [
  '> Initializing security protocols...',
  '> Scanning for vulnerabilities...',
  '> Exploitation framework loaded...'
];

  useEffect(() => {
  let index = 0;
  const currentText = textArray[currentTextIndex];
  
  const timer = setInterval(() => {
    if (index <= currentText.length) {
      setTerminalText(currentText.slice(0, index));
      index++;
    } else {
      // Wait 2 seconds before moving to next text
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
      }, 2000);
      clearInterval(timer);
    }
  }, 50);
  
  return () => clearInterval(timer);
}, [currentTextIndex]);

  const skills = [
    { name: 'Web Application Security', level: 95 },
    { name: 'Network Penetration Testing', level: 90 },
    { name: 'Mobile App Security', level: 85 },
    { name: 'API Security Testing', level: 92 },
    { name: 'Reverse Engineering', level: 80 },
    { name: 'Exploit Development', level: 88 }
  ];

  const achievements = [
    { platform: 'HackerOne', rank: 'Top 100', bounties: '50+' },
    { platform: 'Bugcrowd', rank: 'Elite', bounties: '35+' },
    { platform: 'Synack', rank: 'Red Team', bounties: '40+' }
  ];

  const projects = [
    {
      title: 'Critical XSS in Fortune 500',
      severity: 'Critical',
      bounty: '$15,000',
      description: 'Discovered stored XSS vulnerability affecting 2M+ users'
    },
    {
      title: 'Authentication Bypass',
      severity: 'High',
      bounty: '$8,500',
      description: 'Found logic flaw in OAuth implementation'
    },
    {
      title: 'RCE via File Upload',
      severity: 'Critical',
      bounty: '$12,000',
      description: 'Remote code execution through unrestricted file upload'
    },
    {
      title: 'SQL Injection Chain',
      severity: 'High',
      bounty: '$6,000',
      description: 'Second-order SQLi leading to database compromise'
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Matrix Rain Background Effect */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-black"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-green-500/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6" />
              <span className="text-xl font-bold">ubaid@hacker:~$</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'projects', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="hover:text-green-300 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-green-500/30">
            <div className="px-4 py-4 space-y-3">
              {['about', 'skills', 'projects', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left hover:text-green-300 transition-colors capitalize py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl py-20 mx-auto text-center space-y-8 relative z-10">
          <div className="inline-block p-4 border-2 border-green-500 rounded-lg bg-black/50 backdrop-blur-sm">
            <Terminal className="w-16 h-12 mx-auto  mb-4 animate-pulse" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">SECURITY</span>
            <br />
            <span className="text-green-400">RESEARCHER</span>
          </h1>
          
          <div className="bg-black/70 border border-green-500/50 rounded p-4 text-left max-w-2xl mx-auto">
            <p className="text-sm  sm:text-base">{terminalText}<span className="animate-pulse">_</span></p>
          </div>
          
          <p className="text-lg sm:text-xl text-green-300 max-w-2xl mx-auto">
            Bug Bounty Hunter | Ethical Hacker | Penetration Tester
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-all transform hover:scale-105"
            >
              View Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border-2 border-green-500 rounded hover:bg-green-500/10 transition-all"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-green-950/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <span className="border-b-2 border-green-500">$ whoami</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 border border-green-500/30 p-6 rounded-lg bg-black/50">
              <p className="text-green-300 leading-relaxed">
                Passionate cybersecurity professional specializing in offensive security and vulnerability research. 
                With extensive experience in bug bounty programs and penetration testing, I help organizations 
                identify and remediate critical security vulnerabilities before malicious actors can exploit them.
              </p>
              <p className="text-green-300 leading-relaxed">
                My approach combines technical expertise with creative thinking to uncover complex security issues 
                across web applications, APIs, mobile apps, and network infrastructure.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="border border-green-500/30 p-4 rounded-lg bg-black/50 hover:border-green-500 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Bug className="w-5 h-5" />
                  <h3 className="font-bold text-white">Bug Bounty</h3>
                </div>
                <p className="text-sm text-green-300">125+ valid vulnerabilities reported</p>
              </div>
              
              <div className="border border-green-500/30 p-4 rounded-lg bg-black/50 hover:border-green-500 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5" />
                  <h3 className="font-bold text-white">Penetration Testing</h3>
                </div>
                <p className="text-sm text-green-300">50+ enterprise assessments completed</p>
              </div>
              
              <div className="border border-green-500/30 p-4 rounded-lg bg-black/50 hover:border-green-500 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-5 h-5" />
                  <h3 className="font-bold text-white">Recognition</h3>
                </div>
                <p className="text-sm text-green-300">Hall of Fame in 30+ organizations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 flex items-center gap-3">
            <Terminal className="w-8 h-8" />
            <span className="border-b-2 border-green-500">$ cat skills.txt</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="border border-green-500/30 p-6 rounded-lg bg-black/50">
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-green-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-green-950/30 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-b from-green-950/20 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 flex items-center gap-3">
            <Bug className="w-8 h-8" />
            <span className="border-b-2 border-green-500">$ ls -la findings/</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="border border-green-500/30 p-6 rounded-lg bg-black/50 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 text-xs font-bold rounded ${
                    project.severity === 'Critical' 
                      ? 'bg-red-500/20 text-red-400 border border-red-500' 
                      : 'bg-orange-500/20 text-orange-400 border border-orange-500'
                  }`}>
                    {project.severity}
                  </span>
                </div>
                <p className="text-green-300 mb-4 text-sm">{project.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-green-500/20">
                  <span className="text-white font-bold text-lg">{project.bounty}</span>
                  <span className="text-green-400 text-sm">Bounty Awarded</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 flex items-center gap-3">
            <Award className="w-8 h-8" />
            <span className="border-b-2 border-green-500">$ grep -i achievements</span>
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="border-2 border-green-500/50 p-8 rounded-lg bg-gradient-to-br from-green-950/30 to-black hover:border-green-500 transition-all text-center group hover:scale-105 transform"
              >
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {achievement.platform}
                </h3>
                <p className="text-green-400 font-bold text-xl mb-2">{achievement.rank}</p>
                <p className="text-green-300">{achievement.bounties} Bounties</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black to-green-950/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 flex items-center justify-center gap-3">
            <Mail className="w-8 h-8" />
            <span className="border-b-2 border-green-500">$ echo "Contact"</span>
          </h2>
          
          <div className="border border-green-500/30 p-8 rounded-lg bg-black/50 mb-8">
            <p className="text-green-300 mb-6 text-lg">
              Interested in collaboration or have a security concern?
              <br />Let's connect and make the digital world safer.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:uboy6892@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-all"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </div>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com/codewithubaid1" target="_blank" className="hover:text-green-300 transition-colors">
              <FaGithub className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/unknown-boy-65b5533a0/" target="_blank" className="hover:text-green-300 transition-colors">
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a href="https://discord.gg/GEwxr5wV" target="_blank" className="hover:text-green-300 transition-colors">
              <FaDiscord className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-500/30 py-8 px-4 text-center">
        <p className="text-green-300">
          © 2024 Security Researcher | Built with Next.js & Tailwind CSS
        </p>
        <p className="text-green-500/50 text-sm mt-2">
          ubaid@hacker:~$ logout
        </p>
      </footer>
    </div>
  );
}

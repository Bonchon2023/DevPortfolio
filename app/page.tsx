import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Github, Mail, FileText, Code2, Wrench, GraduationCap, Smartphone } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { BiCodeBlock } from "react-icons/bi";
import { SiFramework } from "react-icons/si";
import { ProjectCard } from "@/app/components/ProjectCard";
import data from "@/public/data/data.json";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">

      <main className="flex-1">
        {/* =========================================
            Hero Section
            ========================================= */}
        <section className="pt-32 pb-16 bg-secondary/5 border-b border-border">
          <div className="container mx-auto px-4 max-w-6xl text-center md:text-left">
            <div className="max-w-3xl mx-auto md:mx-0">
              <h1 className=" text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
                Hello, I am a <span className="bg-linear-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">Frontend Developer</span> & 
                <span className="pb-1.5 bg-linear-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text "> Geologist</span>
              </h1>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold">
                  Frontend Developer
                </span>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                Transitioning from the world of Geology to Web Development, I specialize in crafting user-friendly and highly efficient websites. Currently evolving from a Frontend specialist to a Fullstack Developer, I enjoy the entire lifecycle of a project—from designing elegant interfaces to managing complex backend systems.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Button size="lg" className="gap-2 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20" asChild>
                  <Link href="#projects">
                    View My Work
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="gap-2 border-border hover:bg-secondary/10" asChild>
                  <a href="https://github.com/Bonchon2023" target="_blank" rel="noopener noreferrer">
                    <Github size={18} /> GitHub Profile
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            Skills Section
            ========================================= */}
        <section className="py-20 container mx-auto px-4 max-w-6xl border-b border-border">
          <h2 className="text-3xl font-bold mb-10 text-foreground flex items-center gap-3">
            <span className="w-10 h-1.5 bg-primary rounded-full"></span>
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-primary" size={28} />
                <h3 className="text-2xl font-semibold">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "TypeScript", "Python", "SQL"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary/10 text-secondary-foreground border border-secondary/20 rounded-lg font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <BiCodeBlock className="text-primary" size={28} />
                <h3 className="text-2xl font-semibold">Mockup Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "Tailwind CSS"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary/10 text-secondary-foreground border border-secondary/20 rounded-lg font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Frameworks */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="text-primary" size={28} />
                <h3 className="text-2xl font-semibold">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Git", "GitHub", "VS Code", "Figma", "MySql"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary/10 text-secondary-foreground border border-secondary/20 rounded-lg font-medium">
                    {skill}
                  </span>
                ))} 
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <SiFramework className="text-primary" size={28} />
                <h3 className="text-2xl font-semibold">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["React", "Vite", "Node.js","Vue.js","Next.js" ].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary/10 text-secondary-foreground border border-secondary/20 rounded-lg font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* =========================================
            Projects Section
            ========================================= */}
        <section id="projects" className="py-20 container mx-auto px-4 max-w-6xl border-b border-border" >
          <h2 className="text-3xl font-bold mb-10 text-foreground flex items-center gap-3">
            <span className="w-10 h-1.5 bg-primary rounded-full"></span>
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.project.map((proj) => {
              const imagePath = proj.cover 
                ? (proj.cover.startsWith('/') ? proj.cover : `/${proj.cover.replace('my-portfolio/', '')}`)
                : '/placeholder.jpg';

              return (
                <ProjectCard 
                  key={proj.id}
                  id={proj.id}
                  title={proj.name}
                  description={proj.description}
                  tags={proj.tag}
                  demoUrl={proj.link}
                  repoUrl={proj.github}
                  image={imagePath}
                />
              );
            })}
          </div>
        </section>

        <section id="projects" className="py-20 container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-foreground flex items-center gap-3">
            <span className="w-10 h-1.5 bg-primary rounded-full"></span>
            Mini Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.miniproject.map((miniProj) => {
              const imagePath = miniProj.cover 
                ? (miniProj.cover.startsWith('/') ? miniProj.cover : `/${miniProj.cover.replace('my-portfolio/', '')}`)
                : '/placeholder.jpg';

              return (
                <ProjectCard 
                  key={miniProj.id}
                  id={miniProj.id}
                  title={miniProj.name}
                  description={miniProj.description}
                  tags={miniProj.tag}
                  demoUrl={miniProj.link}
                  repoUrl={miniProj.github}
                  image={imagePath}
                />
              );
            })}
          </div>
        </section>

        {/* =========================================
            About Me Section 
            ========================================= */}
        <section id="about" className="py-20 bg-secondary/5 border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-10 text-foreground flex items-center gap-3">
              <span className="w-10 h-1.5 bg-primary rounded-full"></span>
              About Me
            </h2>

            <div className="grid md:grid-cols-3 gap-12 items-start">
              {/* Profile Image */}
              <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-border">
                <Image 
                  src="/data/image/proflie/profile1.webp"
                  alt="Narongrit Sornjai"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Personal Details */}
              <div className="md:col-span-2 space-y-8 bg-card p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="text-2xl font-semibold text-foreground border-b border-border pb-4">
                  Narongrit Sornjai (ณรงค์ฤทธิ์ สอนใจ)
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Education</p>
                      <p className="font-medium text-foreground text-lg">Department of Geology, Faculty of Science, Chulalongkorn University</p>
                      <p className="text-primary font-medium mt-1">2nd Class Honors</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a href="mailto:sonjainarongrit15@gmail.com" className="font-medium text-foreground text-lg hover:text-primary transition-colors">
                        sonjainarongrit15@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Smartphone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <a href="tel:0968187630" className="font-medium text-foreground text-lg hover:text-primary transition-colors">
                        (+66) 096-818-7630
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                    <a 
                      href="https://www.facebook.com/nar.ngrit.s.njai.cr" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-foreground hover:bg-[#1877F2] hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/narongrit-sornjai-53289b179" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-foreground hover:bg-[#0a66c2] hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com/Bonchon2023" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-foreground hover:bg-[#333333] hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                </div>
                <div className="pt-6 border-t border-border">
                  <Button className="gap-2 bg-primary text-white hover:bg-primary/90" asChild>
                    <a href="/data/Resume_Narongrit_Sornjai.pdf" target="_blank" rel="noopener noreferrer" download="Resume_Narongrit_Sornjai.pdf">
                      <FileText size={18} /> Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
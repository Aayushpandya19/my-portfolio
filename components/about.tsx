'use client';

import { User } from 'lucide-react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              <Image
                src="/profile.png"
                alt="Profile picture"
                fill
                className="rounded-2xl object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6"> 
              <User className='inline-block mr-2 h-9 w-9 font-bold' />
              About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                🎓 I have recently completed my Bachelor's degree in Computer Science Engineering from Government Engineering College, Patan.
              </p>

              <p>
                💼 I have 6 months of onsite internship experience as a Full-Stack Developer, where I worked with modern technologies like TypeScript, Next JS, Nest JS, Type ORM and PostgreSQL, and gained practical knowledge of building scalable web applications.
              </p>

              <p>
                💻 I’m passionate about Software Development and Web Development, with a strong foundation in HTML, CSS, JavaScript, Node JS, React Js PostgreSQL, Mongo and MySQL. I enjoy designing and developing user-centric, robust full-stack solutions and have worked on real-world projects such as restaurant finders, project management tools, and a Spotify clone.
              </p>

              <p>
                🚀 I’m a self-driven learner constantly exploring new tools and frameworks to level up my development skills. I’m now looking forward to new opportunities where I can contribute, grow, and create impactful digital solutions.
              </p>
            </div>
            
            {/* <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import type { Course, Testimonial } from './types';
import { GraduationCapIcon, BriefcaseIcon, VideoIcon, StarIcon } from './components/Icons';

// --- MOCK DATA ---
const courses: Course[] = [
  {
    icon: <BriefcaseIcon className="w-10 h-10 text-brand-gold-400 mb-4" />,
    title: 'Elite Internships',
    description: 'Gain unparalleled experience with our exclusive internships at top-tier companies. A career launchpad like no other.',
  },
  {
    icon: <GraduationCapIcon className="w-10 h-10 text-brand-gold-400 mb-4" />,
    title: 'Advanced Training',
    description: 'Master in-demand skills with our intensive training programs, designed and led by industry veterans.',
  },
  {
    icon: <VideoIcon className="w-10 h-10 text-brand-gold-400 mb-4" />,
    title: 'Executive Webinars',
    description: 'Access insights from global leaders and innovators through our series of live, interactive executive webinars.',
  },
];

const testimonials: Testimonial[] = [
  {
    quote: "The internship program was a game-changer. I landed my dream job at a FAANG company just weeks after completion.",
    author: 'Sarah Johnson',
    title: 'Software Engineer, Google',
    avatar: 'https://picsum.photos/id/237/100/100'
  },
  {
    quote: "Elysian's advanced training sharpened my skills beyond my university education. The mentors are world-class.",
    author: 'Michael Chen',
    title: 'Data Scientist, Amazon',
    avatar: 'https://picsum.photos/id/238/100/100'
  },
  {
    quote: "I never thought I'd have direct access to VPs from Fortune 500 companies. The webinars are pure gold.",
    author: 'Emily Rodriguez',
    title: 'Product Manager, Microsoft',
    avatar: 'https://picsum.photos/id/239/100/100'
  },
];


// --- UI COMPONENTS (Defined outside App to prevent re-creation on render) ---

const Header: React.FC = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/50 backdrop-blur-lg border-b border-slate-800">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-white">
        Elysian<span className="text-brand-gold-500">.</span>
      </div>
      <nav className="hidden md:flex space-x-8">
        <a href="#programs" className="text-slate-300 hover:text-brand-gold-400 transition-colors duration-300">Programs</a>
        <a href="#testimonials" className="text-slate-300 hover:text-brand-gold-400 transition-colors duration-300">Testimonials</a>
        <a href="#contact" className="text-slate-300 hover:text-brand-gold-400 transition-colors duration-300">Contact</a>
      </nav>
      <button className="hidden md:block bg-slate-800 text-white py-2 px-5 rounded-lg border border-slate-700 hover:bg-brand-gold-500 hover:text-brand-dark hover:border-brand-gold-500 transition-all duration-300 font-semibold">
        Sign In
      </button>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/edtech/1920/1080')" }}></div>
    <div className="absolute inset-0 bg-brand-dark opacity-80"></div>
    <div className="relative z-10 px-6">
      <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
        Forge Your Legacy in the Digital Age
      </h1>
      <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
        Elite training and premier internships for the next generation of tech leaders. Your journey to excellence starts here.
      </p>
      <button className="bg-brand-gold-500 text-brand-dark text-lg font-bold py-4 px-10 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg shadow-brand-gold-500/20">
        Explore Programs
      </button>
    </div>
  </section>
);

const ProgramCard: React.FC<{ course: Course }> = ({ course }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 transform hover:-translate-y-2 transition-transform duration-300 group">
        {course.icon}
        <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
        <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{course.description}</p>
    </div>
);

const Programs: React.FC = () => (
    <section id="programs" className="py-24 bg-brand-dark">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">An Unrivaled Curriculum</h2>
                <p className="text-slate-400 mt-2 max-w-2xl mx-auto">We offer a curated selection of programs designed to propel you to the forefront of the industry.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {courses.map((course, index) => <ProgramCard key={index} course={course} />)}
            </div>
        </div>
    </section>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full flex flex-col">
        <div className="flex mb-4">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-brand-gold-400" />)}
        </div>
        <p className="text-slate-300 flex-grow mb-6">"{testimonial.quote}"</p>
        <div className="flex items-center">
            <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4 border-2 border-brand-gold-600" />
            <div>
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-slate-400 text-sm">{testimonial.title}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => (
    <section id="testimonials" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">Success Stories</h2>
                <p className="text-slate-400 mt-2">Hear from our alumni who are now shaping the future of technology.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => <TestimonialCard key={index} testimonial={testimonial} />)}
            </div>
        </div>
    </section>
);

const CTA: React.FC = () => (
    <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-6 text-center">
             <div className="bg-gradient-to-r from-brand-gold-600 to-brand-gold-800 rounded-2xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Elevate Your Career?</h2>
                <p className="text-brand-gold-100 max-w-2xl mx-auto mb-8">Join a community of ambitious individuals and gain access to opportunities that will define your future. Register now to begin your journey.</p>
                <button className="bg-white text-brand-dark text-lg font-bold py-4 px-10 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg">
                    Register Now
                </button>
             </div>
        </div>
    </section>
);

const Footer: React.FC = () => (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Elysian EdTech. All Rights Reserved.</p>
            <p className="mt-2 text-sm">Crafting the Future of Technology Leadership.</p>
        </div>
    </footer>
);


export default function App() {
  return (
    <div className="bg-brand-dark min-h-screen">
      <Header />
      <main>
        <Hero />
        <Programs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

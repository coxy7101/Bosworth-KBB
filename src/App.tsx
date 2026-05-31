import { useState, useEffect } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b-2 border-accent/40 shadow-sm">
        {/* Top Utility Bar */}
        <div className="bg-accent text-cream-50/90 text-xs px-6 py-2 border-b border-accent-dark/30 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center font-medium tracking-wide">
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 bg-accent-light rounded-full mr-2 animate-pulse"></span>
              Bespoke Kitchen, Bedroom & Bathroom Installation
            </span>
            <span className="flex items-center space-x-6">
              <a href="tel:07980886335" className="hover:text-cream-200 transition-colors flex items-center">
                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07980 886335
              </a>
              <span>•</span>
              <a href="mailto:bosworthkbb@gmail.com" className="hover:text-cream-200 transition-colors flex items-center">
                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                bosworthkbb@gmail.com
              </a>
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => scrollToSection('hero')} className="flex items-center">
              <span className="font-serif font-bold text-3xl md:text-4xl text-black tracking-tight">
                Bosworth <span className="text-accent">KBB</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {['Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-charcoal-muted hover:text-accent transition-colors text-sm font-medium tracking-wide"
                >
                  {item}
                </button>
              ))}
              <a
                href="tel:07980886335"
                className="border border-accent text-accent hover:bg-accent hover:text-cream-50 px-6 py-2.5 text-sm font-medium tracking-wide transition-all"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-charcoal p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream-50 border-t border-cream-300">
            <div className="px-6 py-6 space-y-4">
              {['Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-charcoal hover:text-accent py-2 text-base font-medium tracking-wide transition-colors"
                >
                  {item}
                </button>
              ))}
              <a
                href="tel:07980886335"
                className="block w-full border border-accent text-accent hover:bg-accent hover:text-cream-50 px-6 py-3 text-center font-medium tracking-wide transition-all mt-4"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-cream-100 pt-28 md:pt-36 overflow-hidden">
        {/* Blueprint background grid */}
        <div className="absolute inset-0 blueprint-dot pointer-events-none" />

        {/* Decorative architectural layout marks */}
        <div className="absolute top-36 left-8 text-[10px] font-mono text-accent/40 tracking-widest hidden md:block select-none">
          COORD_52.6285_1.4026 // MARKET BOSWORTH
        </div>
        <div className="absolute bottom-12 right-8 text-[10px] font-mono text-accent/40 tracking-widest hidden md:block select-none">
          SCALE: 1:25 // HAND-DRAWN SPEC
        </div>
        <div className="absolute left-12 bottom-1/4 w-px h-24 bg-gradient-to-b from-accent/20 to-transparent hidden lg:block" />
        <div className="absolute bottom-12 left-12 w-24 h-px bg-gradient-to-r from-accent/20 to-transparent hidden lg:block" />
        <div className="absolute right-12 top-1/3 w-px h-24 bg-gradient-to-t from-accent/20 to-transparent hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-stone font-medium tracking-wider text-sm uppercase mb-6 scroll-animate delay-100">
              Independent Fitting Services
            </p>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight mb-8 scroll-animate delay-200">
              Your Home,{' '}
              <span className="text-accent">My Craft</span>
            </h1>

            <p className="text-lg md:text-xl text-charcoal-light leading-relaxed mb-12 max-w-2xl mx-auto scroll-animate delay-300">
              Over <span className="text-charcoal font-medium">37 years</span> of expert kitchen, bedroom,
              and bathroom fitting across Warwickshire. Personal quotes, hand-drawn plans,
              and the attention your home deserves.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 scroll-animate delay-400">
              <a
                href="tel:07980886335"
                className="bg-accent hover:bg-accent-dark text-cream-50 px-10 py-4 text-base font-medium tracking-wide transition-all flex items-center shadow-lg shadow-accent/15"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 07980 886335
              </a>
              <button
                onClick={() => scrollToSection('services')}
                className="border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream-50 px-10 py-4 text-base font-medium tracking-wide transition-all flex items-center"
              >
                View Services
                <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-12 md:gap-20 max-w-2xl mx-auto pt-12 border-t border-cream-300 scroll-animate delay-500">
              <div className="text-center">
                <div className="font-serif font-bold text-3xl md:text-4xl text-charcoal mb-2">37+</div>
                <div className="text-sm text-stone tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-serif font-bold text-3xl md:text-4xl text-charcoal mb-2">100%</div>
                <div className="text-sm text-stone tracking-wide">Personal Service</div>
              </div>
              <div className="text-center">
                <div className="font-serif font-bold text-3xl md:text-4xl text-charcoal mb-2">Local</div>
                <div className="text-sm text-stone tracking-wide">Warwickshire Based</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-warmgray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-20 scroll-animate">
            <p className="text-accent font-medium tracking-wider text-sm uppercase mb-4">
              What I Offer
            </p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
              Quality Home Improvements
            </h2>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Every project receives the same level of care and attention—whether it's a full kitchen renovation
              or a quick repair. No job is too small, no detail overlooked.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: 'Kitchen Fitting',
                description: 'Complete kitchen installations and renovations. From design consultation to final touches, I create spaces where memories are made.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                title: 'Bedroom Fitting',
                description: 'Custom fitted wardrobes, bedroom furniture, and storage solutions designed around your needs and space.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
              },
              {
                title: 'Bathroom Fitting',
                description: 'Full bathroom installations, wet rooms, and shower enclosures. Quality fixtures and waterproof finishes built to last.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                ),
              },
              {
                title: 'Plumbing',
                description: 'Expert plumbing services from installations to repairs. Leaks, pipework, and fixtures handled with professional care.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l4 4c.78.78.78 2.05 0 2.83a2 2 0 01-2.83 0l-4-4A2 2 0 008 13.172V5L7 4zm0 0L5.5 6.5" />
                  </svg>
                ),
              },
              {
                title: 'Handyman Work',
                description: 'General repairs, maintenance, and small jobs. The finishing touches that make your home complete.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: 'Free Consultations',
                description: 'Every job starts with a personal visit. I discuss your vision, offer advice, and provide honest, transparent quotes.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.939-2.879C3.37 15.639 3 13.874 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-cream-100 p-10 border border-cream-300/80 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group scroll-animate delay-${((index % 3) + 1) * 100}`}
              >
                <div className="text-accent mb-6">
                  {service.icon}
                </div>
                <h3 className="font-serif font-semibold text-xl text-charcoal mb-4">{service.title}</h3>
                <p className="text-charcoal-light leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Fitting Process Section */}
      <section id="process" className="py-24 md:py-32 bg-cream-100 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-dot pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-20 scroll-animate">
            <p className="text-accent font-medium tracking-wider text-sm uppercase mb-4">
              Step-By-Step
            </p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
              My Fitting Process
            </h2>
            <p className="text-lg text-charcoal-light leading-relaxed">
              From the initial measurement to the final dust-down, here is how I bring your vision to life with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-accent/20 -z-10" />

            {[
              {
                step: '01',
                title: 'Home Consultation',
                desc: 'I visit your home to take precise measurements and understand your vision, storage needs, and lifestyle requirements.',
              },
              {
                step: '02',
                title: 'Hand-Drawn Plans',
                desc: 'Instead of sterile computer models, I create custom hand-drawn plans showing your layout from multiple angles, ensuring every detail is considered.',
              },
              {
                step: '03',
                title: 'Expert Installation',
                desc: 'With over 37 years of experience, I handle all assembly, fitting, plumbing, and carpentry myself to guarantee zero compromise on quality.',
              },
              {
                step: '04',
                title: 'The Final Handover',
                desc: 'A thorough walkthrough together. I make sure everything is completely immaculate, fully functional, and ready for you to enjoy.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`scroll-animate delay-${(index + 1) * 100} flex flex-col items-center text-center`}
              >
                <div className="w-20 h-20 rounded-full bg-accent text-cream-50 flex items-center justify-center font-serif font-bold text-2xl border-4 border-cream-200 shadow-md mb-6 hover:scale-105 transition-transform">
                  {item.step}
                </div>
                <h3 className="font-serif font-semibold text-xl text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal-muted text-sm leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-warmgray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="scroll-animate delay-100">
              <p className="text-accent font-medium tracking-wider text-sm uppercase mb-4">
                About Bosworth KBB
              </p>
              <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-8">
                Three Decades of Craftsmanship
              </h2>
              <div className="space-y-6 text-lg text-charcoal-light leading-relaxed">
                <p>
                  For over 37 years, I've been helping homeowners across Warwickshire transform their living spaces.
                  What started as a young tradesman's passion has grown into a reputation built on trust, quality,
                  and personal service.
                </p>
                <p>
                  Unlike large chains, when you work with Bosworth KBB, you're working directly with me—from the first
                  home visit to the final quality check. Every quote includes hand-drawn plans showing exactly how your
                  space will look, not impersonal computer renderings.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12">
                {[
                  { label: 'Years Experience', value: '37+' },
                  { label: 'Independent', value: '100%' },
                  { label: 'Location', value: 'Market Bosworth' },
                  { label: 'Service Area', value: 'Warwickshire' },
                ].map((stat, index) => (
                  <div key={index} className="bg-cream-50 p-6 border border-cream-300">
                    <div className="font-serif font-bold text-2xl text-charcoal mb-1">{stat.value}</div>
                    <div className="text-sm text-stone">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent text-cream-50 p-12 lg:p-16 relative overflow-hidden shadow-2xl scroll-animate delay-300">
              {/* Blueprint coordinate line */}
              <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-cream-50/15" />
              <div className="text-center relative z-10">
                <div className="inline-block border-2 border-cream-50 px-8 py-6 mb-8">
                  <span className="font-serif font-bold text-3xl text-cream-50">
                    Bosworth <span className="text-cream-300">KBB</span>
                  </span>
                </div>
                <p className="text-cream-100 leading-relaxed mb-8">
                  Kitchens. Bedrooms. Bathrooms.
                </p>
                <div className="w-16 h-px bg-cream-300 mx-auto mb-8" />
                <p className="text-cream-200 italic leading-relaxed">
                  "Every home deserves the personal touch of a dedicated craftsman—that's what I bring to every job."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 md:py-32 bg-cream-100 relative overflow-hidden">
        {/* Blueprint background grid */}
        <div className="absolute inset-0 blueprint-dot pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-20 scroll-animate">
            <p className="text-accent font-medium tracking-wider text-sm uppercase mb-4">
              Why Choose Bosworth KBB
            </p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight">
              The Big Chains Can't Match This
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
            {[
              {
                title: 'Direct Communication',
                description: 'Speak directly to the person doing the work—no middlemen, no call centres, no confusion.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.939-2.879C3.37 15.639 3 13.874 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
              },
              {
                title: 'Hand-Drawn Plans',
                description: "Your quote includes personalized hand-drawn plans—not generic computer renderings.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ),
              },
              {
                title: 'No Subcontractors',
                description: 'Every job, large or small, is handled personally—from start to finish.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.039 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Decades of Experience',
                description: "37 years of expertise means problems are solved before they happen—and you get the best.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div key={index} className={`text-center scroll-animate delay-${((index % 4) + 1) * 100}`}>
                <div className="text-accent mb-5 flex justify-center">
                  <div className="p-4 bg-accent/5 rounded-full border border-accent/15 hover:bg-accent/10 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-serif font-semibold text-lg text-charcoal mb-3">{feature.title}</h3>
                <p className="text-charcoal-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-cream-50 border-2 border-accent/20 shadow-xl p-12 md:p-16 scroll-animate delay-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-accent" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-accent" />
            <div className="text-center relative z-10">
              <svg className="w-10 h-10 text-accent mx-auto mb-8 opacity-75" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.339v3.986c-3.373.57-5.511 2.87-5.511 6.335v4.009h5.511v4.005h-8.52zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.339v3.986c-3.386.57-5.546 2.87-5.546 6.335v4.009h5.574v4.005h-9.028z" />
              </svg>
              <p className="font-serif font-semibold text-xl md:text-2xl text-charcoal leading-relaxed mb-8">
                "When you hire a big chain, you're just another number. When you work with me,
                you're getting 37 years of expertise, my personal commitment, and a home I'm proud to put my name on."
              </p>
              <div className="text-stone font-medium tracking-wide text-sm">
                — Bosworth Kitchen Bedrooms and Bathrooms
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-warmgray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-20 scroll-animate">
            <p className="text-accent font-medium tracking-wider text-sm uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Ready to start your home transformation? Call for a free consultation or send an inquiry.
              I personally respond to every message.
            </p>
          </div>

          <div className="max-w-4xl mx-auto scroll-animate delay-100">
            <div className="bg-cream-50 border border-cream-300 shadow-xl">
              <div className="grid md:grid-cols-2">
                {/* Contact Info */}
                <div className="bg-accent p-12 md:p-16 relative overflow-hidden">
                  <div className="absolute inset-0 blueprint-dot opacity-5 pointer-events-none" />
                  <h3 className="font-serif font-bold text-2xl text-cream-50 mb-10 relative z-10">
                    Contact Information
                  </h3>

                  <div className="space-y-8 relative z-10">
                    <a
                      href="tel:07980886335"
                      className="flex items-start group"
                    >
                      <div className="w-12 h-12 border border-cream-50/20 flex items-center justify-center mr-5 shrink-0 group-hover:border-cream-300 transition-colors">
                        <svg className="w-5 h-5 text-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-cream-200/70 text-sm mb-1">Phone</div>
                        <div className="text-cream-50 text-lg font-medium group-hover:text-cream-300 transition-colors">
                          07980 886335
                        </div>
                      </div>
                    </a>

                    <a
                      href="mailto:bosworthkbb@gmail.com"
                      className="flex items-start group"
                    >
                      <div className="w-12 h-12 border border-cream-50/20 flex items-center justify-center mr-5 shrink-0 group-hover:border-cream-300 transition-colors">
                        <svg className="w-5 h-5 text-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-cream-200/70 text-sm mb-1">Email</div>
                        <div className="text-cream-50 text-lg font-medium group-hover:text-cream-300 transition-colors">
                          bosworthkbb@gmail.com
                        </div>
                      </div>
                    </a>

                    <div className="flex items-start">
                      <div className="w-12 h-12 border border-cream-50/20 flex items-center justify-center mr-5 shrink-0">
                        <svg className="w-5 h-5 text-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-cream-200/70 text-sm mb-1">Location</div>
                        <div className="text-cream-50 text-lg font-medium">
                          Market Bosworth
                        </div>
                        <div className="text-cream-200/70 text-sm">
                          Warwickshire & surrounding areas
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-10 border-t border-cream-50/10 relative z-10">
                    <p className="text-cream-200/80 text-sm leading-relaxed">
                      Available for projects across Warwickshire and the surrounding region.
                      Call today for a free, no-obligation consultation.
                    </p>
                  </div>
                </div>

                {/* Quick Contact Form */}
                <div className="p-12 md:p-16">
                  <h3 className="font-serif font-semibold text-xl text-charcoal mb-8">
                    Send a Quick Inquiry
                  </h3>
                  <form action="mailto:bosworthkbb@gmail.com" method="post" encType="text/plain" className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal-light mb-3">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-5 py-3.5 bg-cream-100 border border-cream-300 focus:border-accent focus:outline-none text-charcoal transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal-light mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-5 py-3.5 bg-cream-100 border border-cream-300 focus:border-accent focus:outline-none text-charcoal transition-colors"
                        placeholder="07XXX XXXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-charcoal-light mb-3">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-5 py-3.5 bg-cream-100 border border-cream-300 focus:border-terracotta focus:outline-none text-charcoal transition-colors appearance-none"
                      >
                        <option value="">Select a service...</option>
                        <option value="Kitchen Fitting">Kitchen Fitting</option>
                        <option value="Bedroom Fitting">Bedroom Fitting</option>
                        <option value="Bathroom Fitting">Bathroom Fitting</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Handyman Work">Handyman Work</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal-light mb-3">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-5 py-3.5 bg-cream-100 border border-cream-300 focus:border-terracotta focus:outline-none text-charcoal transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-dark text-cream-50 font-medium py-4 tracking-wide transition-all"
                    >
                      Send Inquiry
                    </button>
                    <p className="text-sm text-charcoal-muted text-center">
                      Or call directly: <a href="tel:07980886335" className="text-accent font-medium hover:text-accent-dark transition-colors">07980 886335</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent-dark py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-8 md:mb-0">
              <span className="font-serif font-bold text-3xl md:text-4xl text-cream-50">
                Bosworth <span className="text-cream-300">KBB</span>
              </span>
              <p className="text-cream-200/70 text-sm mt-2">
                Market Bosworth, Warwickshire
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-10">
              <a href="tel:07980886335" className="text-cream-50 hover:text-cream-200 transition-colors flex items-center text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07980 886335
              </a>
              <a href="mailto:bosworthkbb@gmail.com" className="text-cream-50 hover:text-cream-200 transition-colors flex items-center text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                bosworthkbb@gmail.com
              </a>
            </div>
          </div>

          <div className="pt-10 border-t border-cream-50/10 text-center">
            <p className="text-cream-200/60 text-sm mb-4">
              Over 37 years of trusted craftsmanship across Warwickshire.{' '}
              <span className="text-cream-50">Independent. Personal. Professional.</span>
            </p>
            <p className="text-cream-200/40 text-xs">
              &copy; {new Date().getFullYear()} Bosworth Kitchen Bedrooms and Bathrooms. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

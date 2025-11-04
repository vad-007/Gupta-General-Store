import React from 'react';

const Hero: React.FC = () => {
    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section id="home" className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white text-center">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img
        src="https://picsum.photos/1600/900?image=1078"
        alt="A well-organized general store aisle with various products"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
          Gupta General Store
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-light drop-shadow-md">
          Your One-Stop Shop for Everyday Essentials
        </p>
        <a
          href="#contact"
          onClick={scrollToContact}
          className="bg-brand-blue text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;

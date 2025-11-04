import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-light-gray">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
        <div className="w-24 h-1 bg-brand-blue mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          At Gupta General Store, our mission is to provide our community with a comprehensive range of high-quality, everyday essentials at affordable prices. We pride ourselves on exceptional service and a clean, welcoming environment. We also aim to be a reliable partner for local retailers, offering a streamlined supply of diverse products to help their businesses thrive and better serve their own customers.
        </p>
      </div>
    </section>
  );
};

export default About;

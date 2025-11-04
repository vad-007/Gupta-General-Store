import React from 'react';

const TestimonialCard: React.FC<{ quote: string; author: string; role: string }> = ({ quote, author, role }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
    <p className="text-gray-600 italic mb-6">"{quote}"</p>
    <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-brand-light-blue flex items-center justify-center mr-4">
            <span className="text-brand-blue font-bold text-lg">{author.charAt(0)}</span>
        </div>
        <div>
            <p className="font-bold text-brand-dark">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
        </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'Gupta General Store is my go-to for all household needs. They have everything, and the quality is always top-notch!',
      author: 'Sunita Sharma',
      role: 'Local Customer',
    },
    {
      quote: 'Partnering with Gupta General Store has been a game-changer for my small shop. Their reliable supply chain helps me keep my shelves stocked.',
      author: 'Rajesh Kumar',
      role: 'Nearby Retailer',
    },
    {
      quote: 'The staff is incredibly friendly and helpful. It feels like more than just a store; it feels like a part of the community.',
      author: 'Priya Singh',
      role: 'Regular Shopper',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-brand-light-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Partners Say</h2>
        <div className="w-24 h-1 bg-brand-blue mx-auto mb-12"></div>
        <div className="flex flex-col md:flex-row gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

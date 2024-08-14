import React, { useState } from 'react';
import './Blog.css';

const blogPosts = [
  {
    title: 'Top 10 Tips for First-Time Home Buyers',
    excerpt: 'Buying your first home can be overwhelming. Here are the top 10 tips to help you navigate the process smoothly.',
    date: 'August 10, 2024',
    content: 'Detailed content about buying your first home, including tips on budgeting, choosing the right property, and navigating the mortgage process.',
    image: 'https://media.licdn.com/dms/image/D5612AQGhuyPcYQRBWg/article-cover_image-shrink_600_2000/0/1711607296776?e=2147483647&v=beta&t=iOvMIdUOpu6zZ7GKWvrlgTy4sjd-XoDhFvDX03cBJFE'
  },
  {
    title: 'How to Increase Your Property Value',
    excerpt: 'Learn effective strategies to boost the value of your property, from simple renovations to major upgrades.',
    date: 'July 25, 2024',
    content: 'In-depth information on increasing property value through renovations, landscaping, and other improvements. Includes case studies and expert advice.',
    image: 'https://roofandfloor.thehindu.com/raf/real-estate-blog/wp-content/uploads/sites/14/2024/07/How-add-value-to-your-property.jpg'
  },
  {
    title: 'The Future of Real Estate: Trends to Watch',
    excerpt: 'Stay ahead of the curve with these emerging trends in the real estate market that could impact your investment decisions.',
    date: 'June 15, 2024',
    content: 'Explore upcoming trends in real estate such as smart homes, eco-friendly building practices, and changes in market dynamics.',
    image: ''
  },
  // Add more blog posts here
];

const Blog = () => {
  const [expandedPostIndex, setExpandedPostIndex] = useState(null);

  const handleReadMore = (index) => {
    setExpandedPostIndex(expandedPostIndex === index ? null : index);
  };

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-date">{post.date}</p>
              <p className="blog-excerpt">
                {expandedPostIndex === index ? post.content : post.excerpt}
              </p>
              <button 
                onClick={() => handleReadMore(index)}
                className="read-more"
              >
                {expandedPostIndex === index ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

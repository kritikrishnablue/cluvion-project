import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Alex Rivera. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Crafted with <Heart className="h-4 w-4 text-[#ff6b6b] fill-[#ff6b6b]" /> by Alex Rivera
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
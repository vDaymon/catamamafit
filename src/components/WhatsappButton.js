import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = ({ phone = '5491112345678' }) => (
  <a
    href={`https://wa.me/${phone}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-2xl p-3 flex items-center justify-center transition-all duration-300"
    style={{ boxShadow: '0 8px 32px 0 #ff81e355, 0 2px 8px 0 rgba(0,0,0,0.10)', width: 80, height: 80 }}
    aria-label="WhatsApp"
  >
    <FaWhatsapp className="w-16 h-16" />
  </a>
);

export default WhatsappButton;

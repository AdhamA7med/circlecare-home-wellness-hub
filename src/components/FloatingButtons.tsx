
import React from 'react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/201221401076"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-gentle"
        title="تواصل عبر الواتساب"
      >
        <i className="fab fa-whatsapp text-white text-2xl"></i>
      </a>

      {/* Phone Button */}
      <a
        href="tel:01221401076"
        className="w-14 h-14 bg-medical-blue hover:bg-medical-teal rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-gentle"
        title="اتصل بنا الآن"
        style={{ animationDelay: '0.5s' }}
      >
        <i className="fas fa-phone text-white text-xl"></i>
      </a>

      {/* Emergency Button */}
      <a
        href="tel:01221401076"
        className="w-14 h-14 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-gentle"
        title="طوارئ - اتصال سريع"
        style={{ animationDelay: '1s' }}
      >
        <i className="fas fa-ambulance text-white text-xl"></i>
      </a>
    </div>
  );
};

export default FloatingButtons;


import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-medical-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-medical-teal rounded-full flex items-center justify-center">
                <i className="fas fa-heart-pulse text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold">مركز الرحمة</h3>
                <p className="text-medical-mint">الخدمات الطبية والتمريضية</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              في مركز الرحمة، نوفر لك ولأحبائك خدمات طبية وتمريضية متخصصة في راحة منزلك. 
              رعاية احترافية على مدار الساعة بأيدي فريق متخصص ومؤهل.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a 
                href="https://wa.me/201221401076" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a 
                href="tel:01221401076"
                className="w-10 h-10 bg-medical-blue rounded-full flex items-center justify-center hover:bg-medical-teal transition-colors"
              >
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-medical-mint transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-medical-mint transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-medical-mint transition-colors">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-medical-mint transition-colors">
                  آراء العملاء
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-medical-mint transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <i className="fas fa-phone text-medical-mint"></i>
                <span className="text-gray-300">01221401076</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <i className="fab fa-whatsapp text-medical-mint"></i>
                <span className="text-gray-300">01221401076</span>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <i className="fas fa-map-marker-alt text-medical-mint mt-1"></i>
                <div className="text-gray-300">
                  <p>٦ أكتوبر - الشيخ زايد</p>
                  <p>حدائق أكتوبر - حدائق الأهرام</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <i className="fas fa-clock text-medical-mint"></i>
                <span className="text-gray-300">متاح 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-center md:text-right mb-4 md:mb-0">
              © 2025 مركز الرحمة. جميع الحقوق محفوظة
            </p>
            <p className="text-gray-300 text-center md:text-left">
              تم تطوير الموقع بواسطة{' '}
              <a 
                href="https://wa.me/201153903786" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-medical-mint hover:text-white font-bold transition-colors"
              >
                أدهم أحمد
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

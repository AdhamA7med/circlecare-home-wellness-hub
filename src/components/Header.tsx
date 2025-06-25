
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-medical-teal rounded-full flex items-center justify-center">
              <i className="fas fa-heart-pulse text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-medical-navy">مركز يحي</h1>
              <p className="text-sm text-medical-blue">الخدمات الطبية والتمريضية</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              من نحن
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              آراء العملاء
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              تواصل معنا
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-medical-blue to-medical-teal text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              احجز الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-medical-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium text-right py-2"
              >
                الرئيسية
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium text-right py-2"
              >
                من نحن
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium text-right py-2"
              >
                خدماتنا
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium text-right py-2"
              >
                آراء العملاء
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium text-right py-2"
              >
                تواصل معنا
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-medical-blue to-medical-teal text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 w-full mt-4"
              >
                احجز الآن
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-medical-mint via-white to-medical-lightGreen min-h-screen flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-medical-teal/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-medical-blue/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-medical-green/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-medical-coral/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right animate-fade-in">
            <div className="mb-6">
              <span className="inline-block bg-medical-blue/10 text-medical-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
                <i className="fas fa-star ml-2"></i>
                رعاية طبية متميزة
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-navy mb-6 leading-tight">
              <span className="text-medical-blue">CircleCare</span>
              <br />
              الرعاية الطبية
              <br />
              <span className="text-medical-teal">في منزلك</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              في CircleCare، الرعاية الطبية ليست مجرد خدمة، بل هي أمان واهتمام. 
              نوفر لك ولأحبائك خدمات طبية وتمريضية متخصصة في راحة منزلك
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-medical-blue to-medical-teal text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 text-lg font-medium"
              >
                <i className="fas fa-calendar-check ml-2"></i>
                احجز استشارة مجانية
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white px-8 py-4 rounded-full transition-all duration-300 text-lg font-medium"
              >
                <i className="fas fa-phone ml-2"></i>
                اتصل بنا الآن
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-blue mb-2">500+</div>
                <div className="text-gray-600 text-sm">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-teal mb-2">24/7</div>
                <div className="text-gray-600 text-sm">خدمة متاحة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-green mb-2">5+</div>
                <div className="text-gray-600 text-sm">سنوات خبرة</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main image container */}
              <div className="bg-gradient-to-br from-medical-blue/5 to-medical-teal/5 rounded-3xl p-8 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="ممرضة تقدم الرعاية الطبية"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                
                {/* Floating cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-float">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center">
                      <i className="fas fa-user-nurse text-white text-sm"></i>
                    </div>
                    <div>
                      <div className="text-sm font-bold">تمريض منزلي</div>
                      <div className="text-xs text-gray-500">متخصص ومؤهل</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-medical-teal rounded-full flex items-center justify-center">
                      <i className="fas fa-stethoscope text-white text-sm"></i>
                    </div>
                    <div>
                      <div className="text-sm font-bold">رعاية طبية</div>
                      <div className="text-xs text-gray-500">على مدار الساعة</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-gradient-to-br from-medical-blue/10 to-medical-teal/10 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

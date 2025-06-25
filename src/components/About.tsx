
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-medical-mint to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-medical-navy mb-4">من نحن</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            في مركز يحي، الرعاية الطبية ليست مجرد خدمة، بل هي أمان واهتمام نوفره لك ولأحبائك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="فريق التمريض المتخصص"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-user-md text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-medical-navy mb-2">فريق متخصص</h3>
                <p className="text-gray-600">طاقم تمريض عالي الكفاءة وتحت إشراف نخبة من الاستشاريين</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="w-12 h-12 bg-medical-teal rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-home text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-medical-navy mb-2">خدمة منزلية</h3>
                <p className="text-gray-600">نوفر لك الراحة والأمان بتقديم جميع الخدمات في منزلك</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="w-12 h-12 bg-medical-green rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-clock text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-medical-navy mb-2">متاح 24/7</h3>
                <p className="text-gray-600">خدماتنا متاحة على مدار الساعة لضمان راحتك الدائمة</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-medical-mint">
              <blockquote className="text-medical-navy font-medium text-lg italic">
                "نحن لا نقدم مجرد خدمات طبية، بل نقدم الأمان والاطمئنان لك ولعائلتك"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React from 'react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: 'fa-phone',
      title: 'اتصل بنا',
      details: ['01129245339', '01129245339'],
      color: 'medical-blue'
    },
    {
      icon: 'fa-whatsapp',
      title: 'واتساب',
      details: ['01129245339'],
      color: 'medical-green'
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'المناطق المخدومة',
      details: ['٦ أكتوبر', 'الشيخ زايد', 'حدائق أكتوبر', 'حدائق الأهرام'],
      color: 'medical-teal'
    },
    {
      icon: 'fa-clock',
      title: 'ساعات العمل',
      details: ['متاح 24/7', 'خدمة على مدار الساعة'],
      color: 'medical-coral'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-medical-navy mb-4">تواصل معنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن هنا لخدمتك في أي وقت. تواصل معنا الآن واحجز استشارتك المجانية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-to-br from-white to-medical-mint rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <i className={`fas ${info.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-medical-navy mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-700 font-medium">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-medical-blue to-medical-teal p-8 rounded-2xl text-white text-center">
            <h3 className="text-3xl font-bold mb-4">احجز استشارتك المجانية الآن</h3>
            <p className="text-xl mb-8 opacity-90">
              فريقنا الطبي المتخصص جاهز لتقديم أفضل رعاية طبية لك ولأسرتك
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-medical-blue hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold"
                onClick={() => window.open('tel:01129245339')}
              >
                <i className="fas fa-phone ml-2"></i>
                اتصل الآن: 01129245339
              </Button>
              
              <Button 
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold"
                onClick={() => window.open('https://wa.me/201129245339')}
              >
                <i className="fab fa-whatsapp ml-2"></i>
                واتساب: 01129245339
              </Button>
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-xl">
              <h4 className="text-xl font-bold mb-3">مركز يحي - بنهتم... عشان ترتاح</h4>
              <p className="opacity-90">
                رعاية طبية متخصصة وموثوقة في راحة منزلك
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

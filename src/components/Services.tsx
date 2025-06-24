
import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fa-syringe',
      title: 'التمريض المنزلي',
      description: 'حقن وريدي، عضلي، تحت الجلد وتغيير الجروح ومتابعة ما بعد العمليات',
      features: ['حقن وريدي وعضلي', 'تغيير الجروح', 'تركيب المحاليل', 'قياس العلامات الحيوية']
    },
    {
      icon: 'fa-wheelchair',
      title: 'رعاية كبار السن',
      description: 'اهتمام ومتابعة وصبر من فريق متخصص يفهم احتياجاتهم الجسدية والنفسية',
      features: ['رعاية شخصية', 'مساعدة في الحركة', 'متابعة الأدوية', 'رفقة ودعم نفسي']
    },
    {
      icon: 'fa-dumbbell',
      title: 'العلاج الطبيعي',
      description: 'جلسات علاجية مصممة حسب الحالة بواسطة أخصائيين مؤهلين',
      features: ['علاج طبيعي منزلي', 'تأهيل ما بعد الإصابات', 'تمارين علاجية', 'متابعة طبية دقيقة']
    },
    {
      icon: 'fa-heartbeat',
      title: 'المتابعة الطبية',
      description: 'قياس الضغط والسكر والعلامات الحيوية مع تقارير دورية',
      features: ['قياس الضغط والسكر', 'متابعة العلامات الحيوية', 'تقارير طبية', 'استشارات متخصصة']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-medical-navy mb-4">خدماتنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الطبية والتمريضية المتخصصة في منزلك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-medical-mint p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-medical-mint/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-medical-blue to-medical-teal rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className={`fas ${service.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-medical-navy mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-center leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <i className="fas fa-check text-medical-green ml-2 flex-shrink-0"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-medical-blue/10 to-medical-teal/10 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-medical-navy mb-4">المناطق المخدومة</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['٦ أكتوبر', 'الشيخ زايد', 'حدائق أكتوبر', 'حدائق الأهرام'].map((area, index) => (
                <span 
                  key={index}
                  className="bg-white px-4 py-2 rounded-full shadow-md text-medical-navy font-medium"
                >
                  <i className="fas fa-map-marker-alt text-medical-blue ml-2"></i>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'أحمد محمد',
      rating: 5,
      comment: 'خدمة ممتازة وفريق محترف جداً. والدي كان محتاج رعاية مستمرة وكانوا متواجدين بكل احترافية',
      service: 'رعاية كبار السن'
    },
    {
      name: 'فاطمة أحمد',
      rating: 5,
      comment: 'بعد العملية كنت محتاجة متابعة وتغيير الجرح. الفريق كان رائع والخدمة كانت في البيت براحة تامة',
      service: 'التمريض المنزلي'
    },
    {
      name: 'محمد علي',
      rating: 5,
      comment: 'العلاج الطبيعي في البيت وفر عليا وقت ومجهود كبير. النتايج كانت أكتر من ممتازة',
      service: 'العلاج الطبيعي'
    },
    {
      name: 'مريم حسن',
      rating: 5,
      comment: 'متابعة الضغط والسكر بانتظام مع تقارير دقيقة. حاسة بأمان كبير مع الفريق ده',
      service: 'المتابعة الطبية'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-medical-lightGreen to-medical-mint">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-medical-navy mb-4">آراء عملائنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نفتخر بثقة عملائنا وتقديرهم لخدماتنا المتميزة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-medical-blue to-medical-teal rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-user text-white text-xl"></i>
                </div>
                <h4 className="font-bold text-medical-navy">{testimonial.name}</h4>
                <span className="text-sm text-medical-blue bg-medical-blue/10 px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>

              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <i key={starIndex} className="fas fa-star text-yellow-400"></i>
                ))}
              </div>

              <blockquote className="text-gray-700 text-center italic leading-relaxed">
                "{testimonial.comment}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-8 space-x-reverse">
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-blue mb-2">500+</div>
                <div className="text-gray-600">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-teal mb-2">98%</div>
                <div className="text-gray-600">نسبة الرضا</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-green mb-2">5★</div>
                <div className="text-gray-600">متوسط التقييم</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

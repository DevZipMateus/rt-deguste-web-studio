
import React from 'react';
import { Leaf, Award, Users, Heart } from 'lucide-react';
import ProductCarousel from './ProductCarousel';

const AboutSection = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Produtos Naturais',
      description: 'Selecionamos apenas as melhores frutas secas, sem conservantes artificiais.'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Rigoroso controle de qualidade em todos os processos de seleção e embalagem.'
    },
    {
      icon: Users,
      title: 'Atendimento Especializado',
      description: 'Equipe experiente para atender suas necessidades específicas.'
    },
    {
      icon: Heart,
      title: 'Compromisso',
      description: 'Dedicação total à satisfação dos nossos clientes e parceiros.'
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre a <span className="text-orange">RT-Deguste</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Especialistas em frutas secas de qualidade premium, atendendo o mercado atacadista 
            com excelência e tradição há anos.
          </p>
        </div>

        {/* Product Carousel */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossos <span className="text-green">Produtos</span>
          </h3>
          <ProductCarousel />
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nossa História
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A RT-Deguste nasceu da paixão por oferecer produtos naturais de qualidade excepcional. 
              Trabalhamos com frutas secas cuidadosamente selecionadas, incluindo uva passa, ameixa, 
              amêndoas e muito mais.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nossa missão é fornecer produtos premium para o mercado atacadista, garantindo 
              qualidade constante e atendimento personalizado para cada cliente.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange to-green rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Qualidade Garantida</h4>
                <p className="text-gray-600">Produtos com certificação de qualidade</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-orange to-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange/10 to-green/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pronto para conhecer nossos produtos?
          </h3>
          <p className="text-gray-600 mb-8">
            Entre em contato conosco e descubra a qualidade dos nossos produtos premium.
          </p>
          <button className="btn-hero">
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

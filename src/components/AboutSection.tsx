
import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Selecionamos apenas as melhores frutas secas, garantindo sabor e qualidade excepcionais.'
    },
    {
      icon: Users,
      title: 'Atendimento Especializado',
      description: 'Nossa equipe oferece suporte completo, desde a escolha até a entrega dos produtos.'
    },
    {
      icon: Clock,
      title: 'Entrega Pontual',
      description: 'Compromisso com prazos e pontualidade nas entregas para empresas e distribuidores.'
    },
    {
      icon: Target,
      title: 'Foco no Cliente',
      description: 'Soluções personalizadas para atender às necessidades específicas de cada cliente.'
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
            Somos especialistas em frutas secas premium, oferecendo produtos de alta qualidade 
            para empresas que buscam excelência e sabor diferenciado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Nossa <span className="text-green">Especialidade</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Trabalhamos com uma seleção cuidadosa de frutas secas, incluindo uva passa, 
              ameixa, amêndoa e outras variedades premium. Nossa experiência no mercado 
              nos permite oferecer produtos de qualidade superior com preços competitivos.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Focamos especialmente no atendimento a empresas (CNPJ), oferecendo condições 
              especiais para compras no atacado e um serviço diferenciado com promotor 
              de vendas dedicado.
            </p>
            <div className="flex items-center space-x-4 text-orange font-semibold">
              <span className="text-3xl font-bold">10+</span>
              <span>Anos de experiência no mercado</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-orange mb-2">100%</div>
              <div className="text-gray-600">Qualidade Garantida</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-green mb-2">24h</div>
              <div className="text-gray-600">Suporte Dedicado</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-orange mb-2">500+</div>
              <div className="text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-green mb-2">15+</div>
              <div className="text-gray-600">Variedades Disponíveis</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="service-card text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange to-green rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

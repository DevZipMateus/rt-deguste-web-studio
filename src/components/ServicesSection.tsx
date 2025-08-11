
import React from 'react';
import { Package, Truck, UserCheck, Phone, MapPin, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: 'Vendas no Atacado',
      description: 'Especializada em vendas para empresas (CNPJ) com condições especiais e preços competitivos.',
      features: ['Preços especiais para CNPJ', 'Variedade completa', 'Qualidade garantida']
    },
    {
      icon: Truck,
      title: 'Entrega Direta',
      description: 'Sistema de entrega direta para empresas, garantindo agilidade e pontualidade.',
      features: ['Entrega programada', 'Logística própria', 'Rastreamento disponível']
    },
    {
      icon: UserCheck,
      title: 'Promotor de Vendas',
      description: 'Atendimento personalizado com promotor de vendas dedicado para cada cliente.',
      features: ['Atendimento exclusivo', 'Consultoria especializada', 'Suporte contínuo']
    }
  ];

  const additionalServices = [
    {
      icon: Phone,
      title: 'Consultoria Personalizada',
      description: 'Orientação especializada para escolha dos melhores produtos conforme suas necessidades.'
    },
    {
      icon: MapPin,
      title: 'Cobertura Regional',
      description: 'Atendemos toda a região com eficiência e pontualidade nas entregas.'
    },
    {
      icon: Shield,
      title: 'Garantia de Qualidade',
      description: 'Todos os produtos passam por rigoroso controle de qualidade antes da entrega.'
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-orange">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em frutas secas, desde a venda no atacado 
            até o suporte pós-venda especializado.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange to-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-orange rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-orange/5 to-green/5 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Serviços <span className="text-green">Complementares</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <service.icon className="w-6 h-6 text-orange" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pronto para conhecer nossos serviços?
          </h3>
          <p className="text-gray-600 mb-8">
            Entre em contato conosco e descubra como podemos ajudar sua empresa.
          </p>
          <button className="btn-hero">
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

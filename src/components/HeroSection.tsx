
import React from 'react';
import { ArrowDown, Star, Truck, Shield } from 'lucide-react';

const HeroSection = () => {
  const handleScrollToServices = () => {
    const element = document.querySelector('#servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/d69e24b7-06e4-49e9-9663-7c5712de785a.png)'
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-bounce-gentle" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white rounded-full animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Frutas Secas
            <span className="block hero-text-gradient">Premium</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Trabalhamos com as melhores frutas secas como uva passa, ameixa, amêndoa e muito mais. 
            Qualidade premium para atacado e varejo.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 text-white/90">
              <Star className="w-5 h-5 text-yellow-300" fill="currentColor" />
              <span className="font-medium">Qualidade Premium</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Truck className="w-5 h-5" />
              <span className="font-medium">Entrega Direta</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Promotor de Vendas</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleScrollToContact}
              className="btn-hero animate-scale-in"
            >
              Entre em Contato
            </button>
            <button 
              onClick={handleScrollToServices}
              className="btn-secondary animate-scale-in"
              style={{animationDelay: '0.2s'}}
            >
              Nossos Serviços
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

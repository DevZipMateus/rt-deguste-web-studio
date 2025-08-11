
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <img 
              src="/lovable-uploads/cb97c182-3093-44b9-b2c3-17627ce4c7e8.png" 
              alt="RT-Deguste Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4 leading-relaxed">
              Especialistas em frutas secas premium para empresas que buscam qualidade e sabor diferenciado.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange" />
                <span className="text-sm text-gray-300">(71) 99352-4067</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green" />
                <span className="text-sm text-gray-300">rtcomercioltda02@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('#inicio')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#sobre')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#servicos')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#planos')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Planos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#contato')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Vendas no Atacado</li>
              <li>Entrega Direta</li>
              <li>Promotor de Vendas</li>
              <li>Consultoria Especializada</li>
              <li>Suporte Técnico</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-green mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Rua Anita de Oliveira<br />
                  Quadra 10, Lote 185<br />
                  Salvador - BA
                </span>
              </div>
              
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-orange mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="mt-6">
              <a
                href="https://wa.me/5571993524067"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green text-white px-4 py-2 rounded-lg font-semibold hover:bg-green/90 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} RT-Deguste. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Desenvolvido com ❤️ para oferecer a melhor experiência
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

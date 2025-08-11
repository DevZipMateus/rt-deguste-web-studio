
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em <span className="text-orange">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender sua empresa. Entre em contato conosco e 
            descubra como podemos ajudar seu negócio a crescer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Informações de <span className="text-green">Contato</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Telefone</h4>
                    <p className="text-gray-600">(71) 99352-4067</p>
                    <p className="text-sm text-gray-500">WhatsApp disponível</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">rtcomercioltda02@gmail.com</p>
                    <p className="text-sm text-gray-500">Resposta em até 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Rua Anita de Oliveira<br />
                      Quadra 10, Lote 185<br />
                      Salvador - BA
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="bg-gradient-to-r from-orange/5 to-green/5 rounded-lg p-8">
              <h4 className="font-bold text-gray-900 mb-6 text-center text-2xl">
                Solicite um <span className="text-orange">Orçamento</span>
              </h4>
              <p className="text-gray-600 mb-6 text-center">
                Entre em contato conosco através dos canais abaixo para solicitar seu orçamento personalizado.
              </p>
              <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
                <a
                  href="https://wa.me/5571993524067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-green text-white py-3 rounded-lg font-semibold hover:bg-green/90 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
                <a
                  href="mailto:rtcomercioltda02@gmail.com"
                  className="flex items-center justify-center w-full bg-orange text-white py-3 rounded-lg font-semibold hover:bg-orange/90 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

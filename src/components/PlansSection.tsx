
import React from 'react';
import { Check, Star, Truck, UserCheck, Package } from 'lucide-react';

const PlansSection = () => {
  const plans = [
    {
      name: 'Plano Básico',
      subtitle: 'Para empresas iniciantes',
      price: 'Consulte',
      description: 'Ideal para empresas que estão começando no mercado de frutas secas.',
      features: [
        'Variedade básica de produtos',
        'Entrega programada',
        'Suporte por email',
        'Pagamento facilitado',
        'Qualidade garantida'
      ],
      icon: Package,
      popular: false
    },
    {
      name: 'Plano Empresarial',
      subtitle: 'Mais vendido para CNPJ',
      price: 'Especial',
      description: 'Solução completa para empresas que buscam qualidade e atendimento diferenciado.',
      features: [
        'Variedade completa de produtos',
        'Promotor de vendas dedicado',
        'Entrega direta programada',
        'Suporte prioritário',
        'Condições especiais de pagamento',
        'Consultoria especializada',
        'Rastreamento de pedidos'
      ],
      icon: Star,
      popular: true
    },
    {
      name: 'Plano Premium',
      subtitle: 'Para grandes volumes',
      price: 'Negociável',
      description: 'Para empresas com grandes volumes e necessidades específicas.',
      features: [
        'Produtos premium exclusivos',
        'Gerente de contas dedicado',
        'Logística personalizada',
        'Suporte 24/7',
        'Condições VIP',
        'Produtos customizados',
        'Relatórios detalhados',
        'Visitas técnicas'
      ],
      icon: UserCheck,
      popular: false
    }
  ];

  const handleContactClick = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planos" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Planos <span className="text-orange">Atacado</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Condições especiais para empresas (CNPJ) com diferentes volumes e necessidades. 
            Escolha o plano ideal para seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`plan-card relative ${plan.popular ? 'plan-card-featured' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Vendido
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange to-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-orange font-medium mb-4">{plan.subtitle}</p>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={handleContactClick}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-orange text-white hover:bg-orange/90 shadow-lg hover:shadow-xl' 
                    : 'border-2 border-orange text-orange hover:bg-orange hover:text-white'
                }`}
              >
                Solicitar Orçamento
              </button>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Benefícios <span className="text-green">Exclusivos</span> para CNPJ
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Truck className="w-12 h-12 text-orange mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Frete Grátis</h4>
              <p className="text-sm text-gray-600">Para pedidos acima do volume mínimo</p>
            </div>
            
            <div className="text-center">
              <Package className="w-12 h-12 text-green mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Produtos Premium</h4>
              <p className="text-sm text-gray-600">Seleção especial de frutas secas</p>
            </div>
            
            <div className="text-center">
              <UserCheck className="w-12 h-12 text-orange mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Suporte Dedicado</h4>
              <p className="text-sm text-gray-600">Promotor de vendas exclusivo</p>
            </div>
            
            <div className="text-center">
              <Star className="w-12 h-12 text-green mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Condições VIP</h4>
              <p className="text-sm text-gray-600">Prazos e condições especiais</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Tem dúvidas sobre qual plano escolher? Fale conosco!
          </p>
          <button 
            onClick={handleContactClick}
            className="btn-secondary"
          >
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;

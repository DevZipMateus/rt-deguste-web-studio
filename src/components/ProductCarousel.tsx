
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const ProductCarousel = () => {
  const products = [
    {
      image: '/lovable-uploads/4713e8e2-dc85-4bea-aa44-d7740e39e48b.png',
      name: 'Uva Passa',
      description: 'Uva passa de qualidade premium'
    },
    {
      image: '/lovable-uploads/3e2970e5-1ab3-4e70-84b8-00824965ae0e.png',
      name: 'Uva Passa Dourada',
      description: 'Uva passa dourada selecionada'
    },
    {
      image: '/lovable-uploads/5682a6ad-9544-4f73-a081-a39a6a129f95.png',
      name: 'Damasco Seco',
      description: 'Damasco seco de primeira qualidade'
    },
    {
      image: '/lovable-uploads/369b77e3-4bbb-4833-b8f6-4f72323ff0a7.png',
      name: 'Ameixa Seca',
      description: 'Ameixa seca premium'
    },
    {
      image: '/lovable-uploads/60d47a6f-b1cb-4ce9-84e3-0d8583896aa4.png',
      name: 'Tâmara',
      description: 'Tâmaras frescas e doces'
    },
    {
      image: '/lovable-uploads/1ca3876e-bf1a-41ba-b6d0-57b16d4db08a.png',
      name: 'Nozes',
      description: 'Nozes crocantes e saborosas'
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="max-w-4xl mx-auto">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.description}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;

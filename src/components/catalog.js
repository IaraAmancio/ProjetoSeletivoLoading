import React from 'react';
import '../App.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  superLargeDesktop: {
    // The naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const bottons = 
   [
    { id: 1, name: 'Botton HTML', image: require('../assets/products/botton_01.png'), valor: 'RS 3,50' },
    { id: 2, name: 'Botton CSS', image: require('../assets/products/botton_02.png'), valor: 'R$ 3,50' },
    { id: 3, name: 'Botton Python', image: require('../assets/products/botton_03.png'), valor: 'RS 3,50' },
    { id: 4, name: 'Botton React', image: require('../assets/products/botton_04.png'), valor: 'R$ 3,50' },
    { id: 5, name: 'Botton chaves', image: require('../assets/products/botton_05.png'), valor: 'RS 3,50' },
    { id: 6, name: 'Botton Java', image: require('../assets/products/botton_06.png'), valor: 'R$ 3,50' },
    { id: 7, name: 'Botton MySQL', image: require('../assets/products/botton_07.png'), valor: 'RS 3,50' },
    { id: 8, name: 'Botton Gatinho', image: require('../assets/products/botton_08.png'), valor: 'R$ 3,50' },
  ];
  
  const blusas = [
    { id: 1, name: 'Camiseta Programador', image: require('../assets/products/modelo_blusa01.png'), valor: 'R$ 40,00' },
    { id: 2, name: 'Camiseta Programador', image: require('../assets/products/modelo_blusa02.png'), valor: 'R$ 40,00' },
    { id: 3, name: 'Camiseta Programador', image: require('../assets/products/modelo_blusa03.png'), valor: 'R$ 40,00' },
    { id: 4, name: 'Camiseta Programador', image: require('../assets/products/modelo_blusa04.png'), valor: 'R$ 40,00' },
    { id: 5, name: 'Camiseta Programador', image: require('../assets/products/modelo_blusa01.png'), valor: 'R$ 40,00' },
    { id: 6, name: 'Camiseta Programador', image: require('../assets/products/modelo_blusa02.png'), valor: 'R$ 40,00' },
   
  ];


function Catalog() {
  return (   
    <div className="carousel-container">
       <div className='titulo'>Bottons</div>
      <Carousel 
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={2000}
          itemClass="carousel-container "
          >
           
            {bottons.map((product) => (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.valor}</p>
                <p>Entrega Presencial</p>
                <button>Comprar</button>
              </div>
            ))}
      </Carousel>

      <div className='titulo'>Camisas</div>
      <Carousel 
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={2000}
          itemClass="carousel-container "
          >
           
            {blusas.map((product) => (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.valor}</p>
                <p>Entrega Presencial</p>
                <button>Comprar</button>
              </div>
            ))}
      </Carousel>
    </div>
  );
}

export default Catalog;

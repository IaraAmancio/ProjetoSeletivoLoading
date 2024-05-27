import React from "react";

import Catalog from '../components/catalog';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function Loja(){
    return (
    <div className="portal_denuncia">
      <p className="text-align">
      As receitas geradas com essas vendas são integralmente reinvestidas na universidade, financiando a compra de equipamentos, a realização de eventos acadêmicos e culturais, e outras iniciativas que beneficiam a comunidade estudantil.

        <br></br><br></br>No momento, dispomos apenas da opção de retirada dos produtos na Sala do CAEC, localizada no segundo andar da Universidade Federal do Ceará ( R. Cel. Estanislau Frota, 563 - Centro, Sobra), disponível assim que o pedido for confirmado por email ou WhatsApp cadastrados durante a compra.

      </p>
  
      <section id='products'>
        <Catalog/>
      </section>
    </div>
    );
  };

  export default Loja;
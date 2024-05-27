import React from "react";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Link } from 'react-router-dom';

import portal_denuncia from '../assets/portal_denuncias.png';
import fotos_secs from '../assets/fotos_secs.png';
import campus_ufc from '../assets/campus_ufc.png';
import acesse_lojinha from '../assets/acesse_lojinha.png'

import card_diagrama from '../assets/card/diagrama.png';
import card_servicos from '../assets/card/servicos.png';
import card_manual from '../assets/card/servicos.png';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

import background from '../assets/background.png'


function Home(){
    return (
    <div>
      <div className="carousel-container-home">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
              <div>
                <img src={campus_ufc} style={{filter: 'brightness(50%)'}} alt="Campus UFC" />
                <p className="carousel-text-container">Centro Acadêmico de Engenharia de Computação</p>
            
              </div>
              <div>
                <img src={portal_denuncia} style={{filter: 'brightness(70%)'}} alt="Portal de Dununcias" />
                <div className="carousel-button-container">
                    <Link to="/denuncia">
                      <button className="carousel-button">ACESSAR</button>
                    </Link>
                </div>            
              </div>
              <div>
                <img src={acesse_lojinha} alt="Acesse nossa lojinha" />
                <p className="carousel-text-container">CONHEÇA NOSSA LOJINHA</p>
                <div className="carousel-button-container">
                    <Link to="/loja">
                      <button className="carousel-button">ACESSAR</button>
                    </Link>
                </div>
              </div>
              <div>
                <img src={fotos_secs} alt="Image 3" />
                <div className="carousel-button-container">
                    <a href="https://drive.google.com/drive/folders/1c4XshMPa8F4JApQhgn3hNtA2LAzEYKWy?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        <button className="carousel-button">VER FOTOS</button>
                    </a>
                </div>
              </div>
        </Carousel>
      </div> 
      
      <div className="container mt-5" style={{ backgroundImage: `url(${background})`}}>
      <CardGroup>
        <Card style={{ width: '18rem' }} className="m-3">
          <Card.Img variant="top" src={card_manual} />
          <Card.Body>
            <Card.Title>Manual de Sobrevivência para Calouros</Card.Title>
            <Card.Text>
              Tudo que um calouro precisa saber, segundo os veteranos.
            </Card.Text>
            <a href="https://drive.google.com/file/d/1CsDc-PBksHCyYneYCpuDRfPPXHJSXNET/view">
              <Button>Ver mais</Button>
            </a>
            
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="m-3">
          <Card.Img variant="top" src={card_servicos} />
          <Card.Body>
            <Card.Title>Serviços da UFC</Card.Title>
            <Card.Text>
              Conheça os principais serviços ofertados pela UFC como Biblioteca, Restaurante universitário, Atendimento psicológico entre outros.
            </Card.Text>
            <a href="https://drive.google.com/file/d/1yKZ4SuMJrou2mQIehJhT4-LguQTJrqDs/view?usp=sharing">
<             Button>Ver mais</Button>
            </a>
            
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="m-3">
          <Card.Img variant="top" src={card_diagrama} />
          <Card.Body>
            <Card.Title>Diagrama Disciplinas do Curso</Card.Title>
            <Card.Text>
              Conteúdos curriculares do Curso de Engenharia de Computação (2006-2024).
            </Card.Text>
            <a href="https://diagrama-curso-pet.vercel.app/">
              <Button>Ver mais</Button>
            </a>
            
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
      <div className="container-mapa">
        <div className="titulo">Conhecendo o Campus da UFC em Sobral </div>
        <div className="video-responsive">
          <iframe
            width="800"
            height="400"
            src={`https://www.youtube.com/embed/SAFvql9F56U`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
      </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15926.12351742729!2d-40.37294536828996!3d-3.6935713912488706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sufc%20sobral!5e0!3m2!1spt-BR!2sbr!4v1716775351718!5m2!1spt-BR!2sbr" width="800" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      
    </div>
    );
  };

  export default Home;
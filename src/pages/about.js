import React from "react";

import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

import logo02 from '../assets/logo_azul.png'

import 'react-multi-carousel/lib/styles.css';


import CardGroup from 'react-bootstrap/CardGroup';


const teamData = [
    { name: 'Iara Amancio', role: 'Diretora Geral', imgSrc: require('../assets/members/Iara.jpg') },
    { name: 'Yasmin Emilly', role: 'Vice Diretora', imgSrc: require('../assets/members/Yasmin.jpg') },
    { name: 'Artur Jardel', role: 'Secretário', imgSrc: require('../assets/members/Artur.jpeg') },
    { name: 'Alan Pires', role: 'Diretor da Comunicação', imgSrc: require('../assets/members/alan.jpg') },
    { name: 'Artur Jardel', role: 'Diretor Financeiro', imgSrc: require('../assets/members/Artur.jpeg') },
    { name: 'Yasmin Emily', role: 'Assessor Cultural', imgSrc: require('../assets/members/Yasmin.jpg') },
    { name: 'Alan Pires', role: 'Assessor Asssitência Estudantil ', imgSrc: require('../assets/members/alan.jpg') },
    { name: 'Iara Amancio', role: 'Diretor Assistência Estudantil', imgSrc: require('../assets/members/Iara.jpg') },
  ];

const Card = ({ name, role, imgSrc }) => {
    return (
      <div className="card">
        <img src={imgSrc} alt={name} className="card-img" />
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    );
};

function About(){
    return(
    <div>
        <section id='about' className='info-section'>
                
                <div className='text'>
                    <h2>Quem somos?</h2>
                    <p>
                    <b>Somos o Centro Acadêmico de Engenharia de Computação da Universidade Federal do Ceará campus Sobral, uma associação sem fins lucrativos dedicada a apoiar e representar os estudantes da nossa universidade.</b> <br></br>Nosso objetivo é promover um ambiente acadêmico enriquecedor e acolhedor para todos os alunos.
                    <br></br><br></br>Nosso compromisso é fortalecer a união e o engajamento dos estudantes, proporcionando oportunidades para o desenvolvimento acadêmico, social e profissional. Acreditamos que, juntos, podemos construir um futuro melhor e mais promissor para todos. 
                    Apoie o Centro Acadêmico da Universidade Federal do Ceará e faça parte desta jornada de crescimento e transformação!</p>
                </div>
                <div>
                    <img src={logo02} alt="Logo" className="logo_about"/>
                    <div className='icons-sociais'>                     
                        <nav>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/ca.ec.sobral?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                <BsInstagram/>
                                </a>
                            </li>
                            <li>
                                <a href=" https://wa.me/5588981555211">
                                <BsWhatsapp/>
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com/@ca-ecsobral5958?si=NA6_rBdWeTxQ0OaZ">
                                <BsYoutube/>
                                </a>
                            </li>                         
                        </ul>
                        </nav>
                    </div>
                    
                </div>  
        </section>  
        <div>
        <div className="titulo">Diretoria 2024 </div>
        <div className="grid-container">
            {teamData.map((person, index) => (
            <Card 
                key={index}
                name={person.name}
                role={person.role}
                imgSrc={person.imgSrc}
            />
            ))}
      </div>
        </div>
    </div>
    
    );  
}
export default About;
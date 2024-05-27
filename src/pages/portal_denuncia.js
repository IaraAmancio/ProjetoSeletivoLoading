import React from "react";

const Denuncia = () => (
    <div className="portal_denuncia">
        <h1>Portal de Denúncia CAEC</h1>
        <p className="text-align">Diante do grande número de denúncias informais que têm chegado à diretoria de acolhimento a minorias, 
            nós decidimos criar uma maneira mais formal de fazê-las. Este canal tem como objetivo centralizar as
             denúncias de preconceitos e abusos que chegam ao conhecimento do CAOC, sofridos por pessoas que 
             frequentam a UFC (sejam alunos da Engenharia de Computação ou não). O portal não possui caráter de ouvidoria, 
             logo, trata-se de mais um meio de denúncia não-institucional, a fim de preservar e proteger as 
             vítimas, caso essas se sintam confortáveis em procurar o Centro Acadêmico para receber acolhimento
              e por meio dele, cobrar medidas resolutivas e reparadoras da faculdade.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfo8797siJQg0OzB_Y9gn57pkJ4turESTFTd8sueZZ33rT7TA/viewform?usp=sf_link">
            <button className="button-style">Denunciar</button>
        </a>
        
    </div>
);

export default Denuncia;
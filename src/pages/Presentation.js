import React from 'react';
import githubImg from '../imagens/github.png'
import linkedinImg from '../imagens/linkedin.png'
import whatsappImg from '../imagens/whatsapp.png'
import curriculo from '../jeancarloscristovao.pdf'

const Home = () =>{
  return (
    <div className="divPagina">
      <h3>Olá, sou Jean Carlos Cristóvão</h3>
      <p>
        Sou um Desenvolvedor Full-Stack com conhecimentos em 
        HTML5, CSS3, JavaScript, PHP e MySQL. <br/>
        No momento estou estudando Java, através de um programa do SENAC-SC, e aprendendo noções de Node e React. <br/>
        Atualmente não tenho experiências profissionais na área,
        mas sou formado em Análise e Desenvolvimento de Sistemas,
        estou cursando Ciência de Dados, estou em um projeto chamado
        Jovem Programador onde aprendo Java como linguagem back-end
        e tenhos alguns projetos pessoais que publiquei
        nesse portfolio e outros que estão em andamento.
      </p>
      <a id="downloadcv" href={curriculo} download>DOWNLOAD CV</a>
      <br />
      <div id="redesSociais">
          <a href="https://github.com/jeanccdev"><img src={githubImg} alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/jean-carlos-cristovao/"><img src={linkedinImg} alt="linkedin" /></a>
          <a href="https://wa.me/5548998465757"><img src={whatsappImg} alt="WhatsApp" /></a>
      </div>
    </div>
  );
}

export default Home;
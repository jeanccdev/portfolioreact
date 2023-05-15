import React from 'react';
import shayanePreview from '../imagens/shayanepreview.png'
import jaquelinePreview from '../imagens/jaquelinePreview2.png'

const Projects = () =>{
  return (
    <div className="divPagina">
      <h3>Projetos</h3>
      <section>
          <div className="projetos">
              <a href="https://shayanebeauty.000webhostapp.com/">
                  <h4>Shayane Zonta Beauty</h4>
                  <img src={shayanePreview} alt="Shayane Zonta Beauty" />
                  <h4>JavaScript, PHP e MySQL</h4>
              </a>
          </div>
          <div className="projetos">
              <a href="http://18.228.45.141/">
                  <h4>Jaqueline Cristóvão</h4>
                  <img src={jaquelinePreview} alt="Jaqueline Cristóvão" />
                  <h4>JavaScript, PHP e MySQL</h4>
              </a>
          </div>
      </section>
    </div>
  );
}

export default Projects;
import React from "react";
import resume from './../../../public/curriculo_danilo.pdf'
import './about.css'

const About = () => {
    return ( 
        <section className="about" id="about">
            <div className="info">
                <div className="abou_text column_info">
                    <h1>ABOUT</h1>
                    <p>Olá, meu nome é <span className="highlight_purple">D</span>anilo dos Santos <span className="highlight_blue">M</span>arques, nascido em SP - São Bernardo do Campo em 2 de outubro de 2006, atualmente morando em SP - Praia Grande. Gostaria de conseguir sorrisos <span className="highlight_blue">criando sites </span>com criatividade e <span className="highlight_purple">histórias</span> onde possam tocar corações.
                    </p>
                </div>
                <div className="formacao column_info">
                    <h1>FORMAÇÃO</h1>
                    <div className="card">
                        <h2>ETEC Extensão Balneário Maracanã</h2>
                        <h3>SP - Praia Grande</h3>
                        <p>Formado em 21/12/2024 em Informática para Internet</p>
                    </div>
                </div>
            </div>
            <div className="buttonPDF">
                <a href={resume} download="curriculo_danilo.pdf">
                    <p>Download CV</p>
                </a>
            </div>
        </section>
    )
}

export default About;
import React, { useState } from 'react';
import './gpProjects.css';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';


const GpProjects = () => {
  const MAX_VISIBILITY = 3;

  // Array de objetos contendo informações dos projetos
  const projects = [
    {
      title: "Carol Atelier System",
      description: "Desenvolvi um sistema desktop abrangente para gerenciamento de clientes, ativos, contratos, locações e geração de relatórios detalhados, além de diversos módulos essenciais para automatizar e aprimorar o fluxo de trabalho. Implementei uma abordagem completa de DevOps para compreender plenamente as necessidades do projeto. Elaborei um manual detalhado e forneci treinamento, além de oferecer suporte para garantir uma transição suave e eficiente.",
      technologies: ["Java", "JasperReports", "PostgreSQL", "JavaFX"],
      externalLinks: [
        { externalName: "Instagram", externalLink: "https://www.instagram.com/atelierdasfestas_carol/" }
      ],
      category: "Projeto"
    },
    {
      title: "Elaine Software",
      description: "O Elaine Software é uma ferramenta de gestão de despesas projetada para simplificar e organizar o processo de registro de saídas. Com recursos como cadastro de despesas, pagamentos e relatórios comparativos, este software foi desenvolvido para trazer maior organização e eficiência ao controle financeiro pessoal. Automatizando tarefas que anteriormente eram realizadas manualmente, o Elaine Software aumenta significativamente a produtividade, ao mesmo tempo que oferece a possibilidade de redução de custos.",
      technologies: ["Java", "JasperReports", "H2 Database", "JavaFX", "Figma"],
      externalLinks: [
        { externalName: "Instagram", externalLink: "https://www.instagram.com/prixacademia/" },
        { externalName: "Manual - ERS", externalLink: "https://docs.google.com/document/d/1TjphPEAlf5vJP4N1S1gmpxQHOW1N9nJJbN_rovhXY68/edit?usp=sharing" } 
      ],
      category: "Projeto"
    },
    {
      title: "myWebsite",
      description: "myWebsite é o projeto do meu portfólio. Construído com React, HTML, e CSS, e hospedado no GitHub, o myWebsite é uma oportunidade para aprender front-end e praticar a criação de componentes com CSS. Ele está disponível no GitHub para aqueles que desejam aprender a criar seu próprio portfólio.",
      technologies: ["React", "HTML", "CSS", "GitHub Pages"],
      externalLinks: [
        { externalName: "GitHub", externalLink: "https://github.com/matchur/myWebsite" }
      ],
      category: "Projeto"
    },
    {
        title: "DoeJá",
        description: "Participei como desenvolvedor Back-End em um projeto de incubação na UTFPR. Durante o projeto, foi desenvolvido um site que permite doações a entidades, tanto públicas quanto privadas, associadas ao programa. Além disso, proporcionamos a oportunidade de doações diretas a indivíduos em situação de emergência que se cadastraram na plataforma. O projeto foi aprovado e recebeu apoio financeiro da universidade para sua realização.",
    technologies: ["TypeScript","Insomnia" ,"TypeORM", "React", "Docker", "MongoDB", "MySQL", "Figma"],
        externalLinks: [
            { externalName: "GitHub", externalLink: "https://github.com/Hauagge/DoeJa" },
            { externalName: "Site", externalLink: "https://doeja.app/" }
        ],
        category: "Projeto"
    },

    {
        title: "1º Lugar: Carrinho Segue linha",
        description: "Ganhei em primeiro lugar a 3º competição de carrinho segue linha da empreendeWeek",
        technologies: ["Arduino","C++"],
        category: "Atividade"
    },
    {
        title: "Masterpiece Manufacturing",
        description: "Como bolsista de desenvolvimento pelo programa de extensão lúdico da UTFPR Campus Cornélio Procópio, tive a oportunidade de criar um jogo educacional, cooperativo e online. O objetivo do projeto é proporcionar uma experiência envolvente e divertida, ensinando de maneira interativa os processos de usinagem de peças.",
        technologies: ["JavaScript", "HTML", "Phaser 3"],
        externalLinks: [
            { externalName: "GitHub", externalLink: "https://github.com/matchur/MasterpieceManufacturing" }
        ],
        category: "Projeto"
    },
    {
        title: "Perfil News",
        description: "Social Media e Publicidade do Site de Notícias Perfil News. Contribuí para a entrega de conteúdo atualizado e relevante, aplicando tecnicas de Publicidade e Marketing Digital. Utilizei de meus conhecimentos em programação para automatizar processos referente a edição de imagens em lotes.",
        technologies: ["Adobe Photoshop", "Sony Vegas Pro 13", "Meta Business", "Wordpress"],
        externalLinks: [
            { externalName: "Site", externalLink: "https://www.perfilnews.com.br/" },
            { externalName: "Instagram", externalLink: "https://www.instagram.com/perfilnews/" }
        ],
        category: "Emprego"
    },
    {
        title: "Agroflux",
        description: "Desenvolvedor Júnior - Contribui ativamente no desenvolvimento de plataformas internas, aplicando habilidades técnicas e trabalho em equipe. Além do comprometimento em entregar resultados de alta qualidade e aprendizagem contínua.",
        technologies: ["React", "Docker", "Next.JS", "MySQL", "JavaScript", "Postman","Gitlab"],
        externalLinks: [
            { externalName: "Site", externalLink: "https://www.agroflux.com.br/" },
        ],
        category: "Emprego"
    }
  ];
  
  const Letter = ({ project }) => (
    <div className='letter'>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p><b>Tecnologias utilizadas:</b> {project.technologies.join(', ')}.</p>
      <p><b>{project.externalLinks?'Links Externos:':""}</b></p>
      <ul>
        {project.externalLinks?.map((link, index) => (
          <li key={index}><a href={link.externalLink}>{link.externalName}</a></li>
        ))}
      </ul>
    </div>
  );
  const Carousel = ({ children }) => {
    const [active, setActive] = useState(0); // Inicie o primeiro projeto como ativo
    const count = children.length;

    return (
      <div className='carousel'>
        {active > 0 && <button className='nav left' onClick={() => setActive(active - 1)}><TiChevronLeftOutline /></button>}
        {children.map((child, i) => (
          <div className='letter-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }} key={i}>
            {child}
          </div>
        ))}
        {active < count - 1 && <button className='nav right' onClick={() => setActive(active + 1)}><TiChevronRightOutline /></button>}
      </div>
    );
  };

  return (
    <div className='Group-componente'>
      <div className='componente'>
        <Carousel>
          {projects.map((project, i) => (
            <Letter key={i} project={project} />
          ))}
        </Carousel>
      </div>

    </div>
  );
};

export default GpProjects;
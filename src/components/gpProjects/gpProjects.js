import React, { useEffect, useState } from 'react';
import './gpProjects.css';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import ImgVisualizer from '../imgVisualizer/imgVisualizer'



const GpProjects = () => {
  const MAX_VISIBILITY = 3;
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Array de objetos contendo informações dos projetos
const projects = [
    {
      title: "Agroflux",
      description: "Desenvolvedor Júnior - Contribui ativamente no desenvolvimento de plataformas internas, aplicando habilidades técnicas e trabalho em equipe. Além do comprometimento em entregar resultados de alta qualidade e aprendizagem contínua.",
      technologies: ["React", "Docker", "Next.JS", "MySQL", "JavaScript", "Postman","Gitlab"],
      externalLinks: [
          { externalName: "Site", externalLink: "https://www.agroflux.com.br/" },
      ],
      category: "Experiências"
  },{
      title: "Perfil News",
      description: "Social Media e Publicidade do Site de Notícias Perfil News. Contribuí para a entrega de conteúdo atualizado e relevante, aplicando tecnicas de Publicidade e Marketing Digital. Utilizei de meus conhecimentos em programação para automatizar processos referente a edição de imagens em lotes.",
      technologies: ["Adobe Photoshop", "Sony Vegas Pro 13", "Meta Business", "Wordpress"],
      externalLinks: [
          { externalName: "Site", externalLink: "https://www.perfilnews.com.br/" },
          { externalName: "Instagram", externalLink: "https://www.instagram.com/perfilnews/" }
      ],
      category: "Experiências"
  },
{
      title: "Carol Atelier System",
      description: "Desenvolvi um sistema desktop para gerenciamento de clientes, ativos, contratos, locações e geração de relatórios detalhados, além de diversos módulos essenciais para automatizar e aprimorar o fluxo de trabalho. Implementei uma abordagem completa de DevOps para compreender plenamente as necessidades do projeto. Elaborei um manual detalhado e forneci treinamento.",
      technologies: ["Java", "JasperReports", "PostgreSQL", "JavaFX"],
      externalLinks: [
        { externalName: "Instagram", externalLink: "https://www.instagram.com/atelierdasfestas_carol/" }
      ],
      category: "Projetos"
    },
    {
      title: "Elaine Software",
      description: "O Elaine Software é uma ferramenta de gestão de despesas projetada para simplificar e organizar o processo de registro de saídas. Com recursos como cadastro de despesas, pagamentos e relatórios comparativos, este software foi desenvolvido para trazer maior organização e eficiência ao controle financeiro pessoal. Automatizando tarefas que anteriormente eram realizadas manualmente, o Elaine Software aumenta significativamente a produtividade, ao mesmo tempo que oferece a possibilidade de redução de custos.",
      technologies: ["Java", "JasperReports", "H2 Database", "JavaFX", "Figma"],
      externalLinks: [
        { externalName: "Instagram", externalLink: "https://www.instagram.com/prixacademia/" },
        { externalName: "Manual - ERS", externalLink: "https://docs.google.com/document/d/1TjphPEAlf5vJP4N1S1gmpxQHOW1N9nJJbN_rovhXY68/edit?usp=sharing" } 
      ],
      category: "Projetos"
    },
    {
      title: "myWebsite",
      description: "myWebsite é o projeto do meu portfólio. Construído com React, HTML, e CSS, e hospedado no GitHub Pages. Ele está disponível no GitHub para aqueles que desejam aprender a criar seu próprio portfólio.",
      technologies: ["React", "HTML", "CSS", "GitHub Pages"],
      externalLinks: [
        { externalName: "GitHub", externalLink: "https://github.com/matchur/myWebsite" }
      ],
      category: "Projetos"
    },
    {
        title: "DoeJá",
        description: "Participei como desenvolvedor Back-End em um projeto de incubação na UTFPR. Durante o projeto, foi desenvolvido um site que permite doações a entidades, tanto públicas quanto privadas, associadas ao programa. Além disso, proporcionamos a oportunidade de doações diretas a indivíduos em situação de emergência que se cadastraram na plataforma. O projeto foi aprovado e recebeu apoio financeiro da universidade para sua realização.",
    technologies: ["TypeScript","Insomnia" ,"TypeORM", "React", "Docker", "MongoDB", "MySQL", "Figma"],
        externalLinks: [
            { externalName: "GitHub", externalLink: "https://github.com/Hauagge/DoeJa" },
            { externalName: "Site", externalLink: "https://doeja.app/" }
        ],
        category: "Projetos"
    },

    {
        title: "1º Lugar: Carrinho Segue Linha",
        description: "Ganhei em primeiro lugar a 3º competição de carrinho segue linha do evento EmpreendeWeek",
        technologies: ["Arduino","C++"],
        category: "Atividades"
    },
    {
      title: "Ministrante: Curso de Programação de Jogos",
      description: "Conduzi um mini curso de 12 horas focado em desenvolvimento básico de jogos utilizando GameMaker Studio.",
      technologies: ["GameMaker Language (GML)"],
      category: "Atividades"
    },
    {
      title: "Ministrante: Curso de Kali Linux",
      description: "Ministrei um mini curso de 12 horas demonstrando o uso das ferramentas do Kali Linux e técnicas de verificação de segurança.",
      technologies: ["Kali Linux"],
      category: "Atividades"
  },
    {
        title: "Masterpiece Manufacturing",
        description: "Como bolsista pelo programa de extensão Lúdico da UTFPR Campus Cornélio Procópio, tive a oportunidade de criar um jogo educacional, cooperativo e online. O objetivo do jogo é proporcionar uma experiência dinâmica entre os alunos, ensinando de maneira interativa os processos de usinagem de peças.",
        technologies: ["JavaScript", "HTML", "Phaser 3"],
        externalLinks: [
            { externalName: "GitHub", externalLink: "https://github.com/matchur/MasterpieceManufacturing" }
        ],
        category: "Projetos"
    },

  ];
  
  const categories = [...new Set(projects.map(project => project.category))];

  const handleButtonClick = (index) => {
    window.scrollTo({
      top: 1820,
      behavior: 'smooth',
    });
    setActiveProjectIndex(index);
  };

  const Letter = ({ project }) => (
    <div className='letter'>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p><b>Tecnologias utilizadas:</b> {project.technologies.join(', ')}.</p>
      <p><b>{project.externalLinks ? 'Links Externos:' : ""}</b></p>
      <ul>
        {project.externalLinks?.map((link, index) => (
          <li key={index}><a href={link.externalLink}>{link.externalName}</a></li>
        ))}
      </ul>
      <ImgVisualizer />

    </div>
  );
  
  const Carousel = ({ children }) => {
    const [active, setActive] = useState(0); // Inicie o primeiro projeto como ativo
    const count = children.length;

    useEffect(() => {
      setActive(activeProjectIndex);
      
    }, []);

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
      <h1 className='Text-projetos'>Portfólio</h1>
      <div className='componente'>
        <Carousel>
          {projects.map((project, i) => (
            <Letter key={i} project={project} />
          ))}
        </Carousel>
      </div>
  
      <div className='Group-projectsNavigator'>
        {categories.map((category, index) => (
          <div className='Group-projectsButtons' key={index}>
            <h2>{category}</h2>
            <div className='Group-projectsInner'>
                {projects.map((project,index) => {
                if (category === project.category) {
                  return (
                    <button key={project.title} onClick={() => handleButtonClick(index)}>• {project.title}</button>
                  );
                }
                else return undefined
              })}
            </div>
          </div>
        ))}
      </div>      
    </div>
  );
};

export default GpProjects;
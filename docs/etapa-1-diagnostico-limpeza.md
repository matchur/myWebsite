# Etapa 1 — Diagnóstico e limpeza da base atual

## 1.1 Mapeamento da estrutura atual

### Páginas
- `src/pages/App.js`: ponto de orquestração das seções principais da aplicação.

### Componentes por seção
- **Header**: `src/components/gpHeader/gpHeader.js`, `src/components/btHeader/btHeader.js`, `src/components/cpToggle/cpToggle.js`.
- **About**: `src/components/gpAboutMe/gpAboutMe.js`, `src/components/photoViewer/photoViewer.js`.
- **Skills (Habilidades)**: `src/components/gpHabilities/gpHabilities.js`, `src/components/cpProgramLang/cpProgramLang.js`, `src/components/cpDevText/cpDevText.js`.
- **Projects (Portfólio)**: `src/components/gpProjects/gpProjects.js`, `src/components/imgVisualizer/imgVisualizer.js`.
- **Contact**: `src/components/GpContact/gpContact.js`, `src/components/btContact/btContact.js`.
- **Footer**: `src/components/gpFooter/gpFooter.js`.
- **Separadores visuais**: `src/components/cpSpliter/cpSpliter.js`.

### Arquivos de estilo
- Estilos por componente em `src/components/**/**.css`.
- Estilos globais em `src/index.css` e `src/pages/App.css`.

### Componentes com responsabilidades misturadas
- `gpHabilities.js`: mistura UI, relógio em tempo real, estado de “liga/desliga” e lógica de menu iniciar.
- `gpProjects.js`: mistura dados (lista de projetos), renderização de cards, carrossel e navegação auxiliar.

## 1.2 Problemas técnicos levantados (antes da limpeza)

- Uso de manipulação direta de DOM com `document.getElementById` em `gpHabilities.js`.
- Mudanças manuais via `element.style` em `gpHabilities.js`.
- `setInterval` sem cleanup em `gpHabilities.js`.
- Uso incorreto de `class` em JSX (`btHeader.js`, `btContact.js`, `photoViewer.js`, `gpHabilities.js`).
- Uso de tag semântica incorreta `<body>` dentro de componente React (`App.js`).

## 1.3 Navegação atual e decisão de limpeza

### Situação observada
- Navegação do header baseada em valores fixos de scroll (`viewY`) com números hardcoded.
- Navegação de projetos também usava `window.scrollTo` com posição fixa.

### Decisão aplicada nesta etapa
- Trocar navegação por posições fixas para navegação por âncoras/sections (`#about`, `#skills`, `#projects`, `#contact`) e `scrollIntoView` quando necessário.
- Isso reduz acoplamento com altura fixa de layout e facilita próxima etapa de “modelo de janelas”.

## 1.4 Limpeza aplicada

- Remoção de tag `<body>` de `App.js` e adoção de `<main>` + `<section>` semânticas.
- Ajuste de import incorreto de contato para o caminho com case correto.
- Refatoração de `gpHabilities.js` para React state (sem DOM imperativo), incluindo cleanup de `setInterval`.
- Substituição de `class` por `className` nos componentes afetados.
- Remoção de trecho comentado antigo em `btContact.js`.
- Ajuste da rolagem em `gpProjects.js` para `scrollIntoView` com `ref`.

## Observação para próxima etapa

- `gpProjects.js` e `gpHabilities.js` ainda são relativamente grandes; recomendável quebrar em componentes menores (toolbar, badges, card de projeto, navegação por categoria) na próxima etapa para melhorar testabilidade e manutenção.

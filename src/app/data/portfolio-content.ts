export interface ExternalLink {
  label: string;
  url: string;
}

export interface ResearchProject {
  year: string;
  title: string;
  summary: string;
  tags: string[];
  source: string;
}

export interface Repository {
  name: string;
  title: string;
  summary: string;
  tags: string[];
  url: string;
}

export interface Resource {
  eyebrow: string;
  title: string;
  summary: string;
  links: ExternalLink[];
}

export const researchProjects: ResearchProject[] = [
  {
    year: '2024',
    title: 'Aumento de dados para redes neurais convolucionais',
    summary: 'Investigação do impacto de técnicas de aumento de dados no treinamento de CNNs e na precisão da classificação de imagens.',
    tags: ['Visão computacional', 'CNN', 'Data augmentation'],
    source: 'https://www.fct.unesp.br/Home/Pesquisa/congriniciacaocientifica/cronograma-de-apresentacoes.pdf',
  },
  {
    year: '2023',
    title: 'Pré-processamento de imagens e classificação',
    summary: 'Estudo de como o pré-processamento de imagens influencia os resultados de classificação obtidos com redes neurais convolucionais.',
    tags: ['Processamento de imagens', 'Aprendizado de máquina'],
    source: 'https://www.fct.unesp.br/Home/Pesquisa/congriniciacaocientifica/eventos.fct.unesp.br_organizador_trabalhocientifico__impressaoapresentacaodetrabalhos_.pdf',
  },
];

export const repositories: Repository[] = [
  {
    name: 'modelos-de-trabalho-latex', title: 'Modelos de trabalho em LaTeX',
    summary: 'Modelos acadêmicos em LaTeX, incluindo um modelo de TCC para a FCT Unesp conforme as normas ABNT.',
    tags: ['LaTeX', 'Educação', 'Open source'],
    url: 'https://github.com/willshobwish/modelos-de-trabalho-latex',
  },
  {
    name: 'cacic-fct/event-manager', title: 'Gerenciador de eventos',
    summary: 'Aplicativo de eventos desenvolvido no contexto do centro acadêmico de Ciência da Computação da FCT Unesp.',
    tags: ['TypeScript', 'Comunidade', 'Web'],
    url: 'https://github.com/cacic-fct/event-manager',
  },
  {
    name: 'course-secompp-latex', title: 'Minicurso de LaTeX',
    summary: 'Repositório com o conteúdo do minicurso de introdução ao LaTeX oferecido na SECOMPP.',
    tags: ['LaTeX', 'Minicurso', 'Material aberto'],
    url: 'https://github.com/willshobwish/course-secompp-latex',
  },
];

export const resources: Resource[] = [
  {
    eyebrow: 'Minicurso · SECOMPP', title: 'Introdução ao LaTeX',
    summary: 'Primeiros passos com LaTeX e biblatex para a escrita acadêmica em Ciência da Computação.',
    links: [
      { label: 'Ver repositório', url: 'https://github.com/willshobwish/course-secompp-latex' },
      { label: 'Acessar materiais', url: 'https://drive.google.com/drive/folders/1seCvk9jt43KGnZhxuGWHIp3B_tUcECnh' },
    ],
  },
  {
    eyebrow: 'Minicurso · SECOMPP', title: 'Introdução à impressão 3D',
    summary: 'Um percurso prático da obtenção do modelo tridimensional ao fatiamento e à impressão.',
    links: [{ label: 'Acessar materiais', url: 'https://drive.google.com/drive/folders/1d9eahrz5r2wKdBADLyAwNc5qTz3RlKKT' }],
  },
  {
    eyebrow: 'Material aberto', title: 'Modelos acadêmicos em LaTeX',
    summary: 'Templates para trabalhos acadêmicos, incluindo o modelo de TCC da FCT Unesp.',
    links: [{ label: 'Explorar modelos', url: 'https://github.com/willshobwish/modelos-de-trabalho-latex' }],
  },
];

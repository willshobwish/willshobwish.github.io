# Portfólio — Willian Murayama

Portfólio pessoal em Angular e Tailwind CSS. Reúne iniciação científica, repositórios em destaque, minicursos e materiais acadêmicos. O conteúdo é estático para manter a página rápida e independente da API do GitHub durante a visita. As seções abaixo da abertura usam `@defer` para carregar o código em partes após o navegador ficar ocioso ou quando entram na tela.

## Desenvolvimento

```bash
npm install
npm start
```

Acesse `http://localhost:4200/`.

## Conteúdo

Os textos e links ficam em `src/app/data/portfolio-content.ts`. O `App` compõe as seções em `src/app/app.html`; os componentes reutilizáveis ficam em `src/app/components/`, e o estilo global em `src/styles.css`.

Os destaques foram selecionados a partir do perfil público do GitHub e dos registros oficiais do Congresso de Iniciação Científica da FCT Unesp. Revise os links e a seleção quando quiser atualizar o portfólio.

## Verificação

```bash
npm run build
npm test -- --watch=false
```

O build de produção é gerado em `dist/willshobwish.github.io/browser/`.



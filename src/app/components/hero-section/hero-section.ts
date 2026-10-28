import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  template: `
    <section id="inicio" class="shell hero">
      <p class="eyebrow">Portfólio / Willian Murayama</p>
      <div class="hero-layout">
        <h1 class="hero-title">Willian <br />Murayama<span class="text-accent">.</span></h1>
        <div class="hero-intro">
          <p class="text-xl leading-relaxed text-ink md:text-2xl">Ciência da Computação na FCT Unesp, com interesse em visão computacional, desenvolvimento de software e ensino.</p>
          <p class="mt-5 leading-7 text-muted">Aqui estão minhas pesquisas de iniciação científica, projetos de código aberto e materiais de minicursos.</p>
          <div class="hero-links mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <a class="text-link" href="#pesquisa">Ver trabalhos <span aria-hidden="true">↗</span></a>
            <a class="text-link" href="https://github.com/willshobwish" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <div class="hero-meta"><span>Presidente Prudente, SP</span><span>Pesquisa · software · educação</span></div>
    </section>
  `,
})
export class HeroSection {}

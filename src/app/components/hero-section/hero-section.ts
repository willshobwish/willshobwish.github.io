import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  template: `
    <section id="inicio" class="hero shell grid items-center gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
      <div>
        <p class="eyebrow"><span class="eyebrow-line"></span> Pesquisa · código · ensino</p>
        <h1 class="hero-title mt-7">Olá, sou <em>Willian</em> Murayama<span class="text-accent">.</span></h1>
        <p class="mt-7 max-w-xl text-lg leading-relaxed text-muted">Estudo Ciência da Computação na FCT Unesp. Exploro visão computacional e aprendizado de máquina, transformo ideias em projetos e compartilho o que aprendo.</p>
        <div class="mt-9 flex flex-wrap gap-3">
          <a class="button-primary" href="#pesquisa">Conheça meu trabalho <span aria-hidden="true">↗</span></a>
          <a class="button-secondary" href="https://github.com/willshobwish" target="_blank" rel="noopener noreferrer">Ver GitHub <span aria-hidden="true">↗</span></a>
        </div>
        <div class="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6 text-sm text-muted">
          <span>FCT Unesp · Presidente Prudente</span><span>Ciência da Computação</span>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="art-grid"></div><div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div>
        <div class="art-core"><span>W<span class="text-accent">.</span></span></div>
        <div class="art-caption art-caption-top">01 / VISÃO COMPUTACIONAL</div>
        <div class="art-caption art-caption-bottom">PESQUISAR → CONSTRUIR → COMPARTILHAR</div>
        <div class="art-spark spark-one"></div><div class="art-spark spark-two"></div>
      </div>
    </section>
  `,
})
export class HeroSection {}

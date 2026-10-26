import { afterNextRender, ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutSection } from './components/about-section/about-section';
import { ContactSection } from './components/contact-section/contact-section';
import { HeroSection } from './components/hero-section/hero-section';
import { RepositoriesSection } from './components/repositories-section/repositories-section';
import { ResearchSection } from './components/research-section/research-section';
import { ResourcesSection } from './components/resources-section/resources-section';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SiteHeader,
    HeroSection,
    AboutSection,
    ResearchSection,
    RepositoriesSection,
    ResourcesSection,
    ContactSection,
    SiteFooter,
  ],
  templateUrl: './app.html',
})
export class App {
  constructor() {
    afterNextRender(() => {
      const main = document.getElementById('conteudo');
      if (!main) return;
      const mainElement = main;

      const deferredSections = [
        '#pesquisa app-research-section',
        '#projetos app-repositories-section',
        '#materiais app-resources-section',
      ];
      const anchorIds = new Set(['pesquisa', 'projetos', 'materiais', 'contato']);

      function restoreAnchorWhenReady() {
        if (!deferredSections.every((selector) => mainElement.querySelector(selector))) return;
        observer.disconnect();

        const targetId = window.location.hash.slice(1);
        if (anchorIds.has(targetId)) {
          requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView({ block: 'start', behavior: 'instant' }));
        }
      }

      const observer = new MutationObserver(restoreAnchorWhenReady);
      observer.observe(mainElement, { childList: true, subtree: true });
      restoreAnchorWhenReady();
    });
  }
}

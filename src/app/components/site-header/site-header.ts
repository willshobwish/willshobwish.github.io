import { Component } from '@angular/core';

@Component({
  selector: 'app-site-header',
  template: `
    <header class="site-header">
      <div class="shell flex items-center justify-between gap-5 py-4">
        <a class="brand" href="#inicio" aria-label="Willian Murayama, início">
          <span class="brand-mark">wm<span class="brand-dot">.</span></span>
          <span class="hidden text-sm font-semibold tracking-tight sm:inline">Willian Murayama</span>
        </a>
        <nav class="hidden items-center gap-7 text-sm font-medium md:flex" aria-label="Navegação principal">
          @for (link of links; track link.href) { <a [href]="link.href">{{ link.label }}</a> }
        </nav>
        <a class="header-contact" href="mailto:contato.willian.murayama@gmail.com">Vamos conversar <span aria-hidden="true">↗</span></a>
      </div>
      <nav class="mobile-nav shell md:hidden" aria-label="Navegação principal em telas pequenas">
        @for (link of links; track link.href) { <a [href]="link.href">{{ link.label }}</a> }
      </nav>
    </header>
  `,
})
export class SiteHeader {
  readonly links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Pesquisa', href: '#pesquisa' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Materiais', href: '#materiais' },
  ];
}

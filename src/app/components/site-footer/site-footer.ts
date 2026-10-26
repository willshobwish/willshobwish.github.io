import { Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  template: `
    <footer class="shell flex flex-col justify-between gap-5 py-8 text-sm text-muted sm:flex-row sm:items-center">
      <p>© {{ year }} Willian Murayama</p>
      <div class="flex flex-wrap gap-x-6 gap-y-2">
        <a href="https://github.com/willshobwish" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a href="https://orcid.org/0009-0001-4683-2342" target="_blank" rel="noopener noreferrer">ORCID ↗</a>
        <a href="http://lattes.cnpq.br/9842591217218865" target="_blank" rel="noopener noreferrer">Lattes ↗</a>
      </div>
    </footer>
  `,
})
export class SiteFooter {
  readonly year = new Date().getFullYear();
}

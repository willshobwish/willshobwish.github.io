import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  template: `
    <section id="contato" class="contact-section">
      <div class="shell grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-20">
        <div>
          <p class="section-kicker">Contato</p>
          <h2 class="section-title mt-4">Entre em contato</h2>
          <p class="mt-5 max-w-xl leading-7 text-muted">Para conversar sobre pesquisa, software ou materiais de ensino.</p>
        </div>
        <a class="text-link" href="mailto:contato.willian.murayama@gmail.com">contato.willian.murayama@gmail.com <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  `,
})
export class ContactSection {}

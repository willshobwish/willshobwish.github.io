import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  template: `
    <section id="contato" class="contact-section">
      <div class="shell grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-20">
        <div>
          <p class="section-kicker !text-emerald-200">05 / Contato</p>
          <h2 class="mt-4 max-w-2xl font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">Tem uma ideia ou quer conversar sobre pesquisa?</h2>
          <p class="mt-5 max-w-xl leading-7 text-emerald-100/80">Estou aberto a trocar experiências sobre tecnologia, ciência e educação.</p>
        </div>
        <a class="contact-button" href="mailto:contato.willian.murayama@gmail.com">Entre em contato <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  `,
})
export class ContactSection {}

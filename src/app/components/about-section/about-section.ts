import { Component } from '@angular/core';
import { TagList } from '../tag-list/tag-list';

@Component({
  selector: 'app-about-section',
  imports: [TagList],
  template: `
    <section id="sobre" class="border-y border-line bg-white/65">
      <div class="shell grid gap-8 py-16 md:grid-cols-[0.75fr_1.25fr] md:gap-20 md:py-20">
        <div><p class="section-kicker">01 / Sobre</p><h2 class="section-title mt-4">Entre a pesquisa e a prática.</h2></div>
        <div class="text-base leading-8 text-muted">
          <p>Minha trajetória reúne investigação em classificação de imagens com redes neurais convolucionais, desenvolvimento de software e produção de materiais para a comunidade acadêmica.</p>
          <p class="mt-5">Tenho interesse em modelos de segmentação semântica, Vision Transformers e aprendizado autossupervisionado. Gosto de tornar temas técnicos mais acessíveis por meio de projetos e ensino.</p>
          <app-tag-list class="mt-7 block" [tags]="topics" variant="topic" />
        </div>
      </div>
    </section>
  `,
})
export class AboutSection {
  readonly topics = ['Visão computacional', 'Aprendizado de máquina', 'Desenvolvimento web', 'Educação aberta'];
}

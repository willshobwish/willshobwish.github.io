import { Component } from '@angular/core';
import { TagList } from '../tag-list/tag-list';

@Component({
  selector: 'app-about-section',
  imports: [TagList],
  template: `
    <section id="sobre" class="border-b border-line">
      <div class="shell about-layout section-space">
        <div><p class="section-kicker">Sobre</p><h2 class="section-title mt-4">Áreas de interesse</h2></div>
        <div class="text-base leading-8 text-muted">
          <p>Meus trabalhos de iniciação científica estudam classificação de imagens com redes neurais convolucionais, com foco em pré-processamento e aumento de dados.</p>
          <p class="mt-5">Também desenvolvo software e publico materiais para apoiar atividades acadêmicas. Tenho interesse em segmentação semântica, Vision Transformers e aprendizado autossupervisionado.</p>
          <app-tag-list class="mt-7 block" [tags]="topics" variant="topic" />
        </div>
      </div>
    </section>
  `,
})
export class AboutSection {
  readonly topics = ['Visão computacional', 'Aprendizado de máquina', 'Desenvolvimento web', 'Educação aberta'];
}

import { Component } from '@angular/core';
import { researchProjects } from '../../data/portfolio-content';
import { ResearchCard } from '../research-card/research-card';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-research-section',
  imports: [ResearchCard, SectionHeading],
  template: `
    <section class="shell section-space">
      <app-section-heading
        eyebrow="Pesquisa"
        title="Iniciação científica"
        description="Trabalhos apresentados no Congresso de Iniciação Científica da FCT Unesp, orientados por Danilo Medeiros Eler."
      />
      <div class="mt-11 divide-y divide-line border-y border-line">
        @for (project of projects; track project.year) {
          <app-research-card [project]="project" />
        }
      </div>
    </section>
  `,
})
export class ResearchSection {
  readonly projects = researchProjects;
}

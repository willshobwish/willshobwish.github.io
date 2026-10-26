import { Component } from '@angular/core';
import { resources } from '../../data/portfolio-content';
import { ResourceCard } from '../resource-card/resource-card';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-resources-section',
  imports: [ResourceCard, SectionHeading],
  template: `
    <section class="shell section-space">
      <app-section-heading
        eyebrow="04 / Compartilhar conhecimento"
        title="Minicursos e materiais."
        description="Recursos para aprender, ensinar e criar. Os materiais estão disponíveis nos links de cada tema."
      />
      <div class="mt-11 grid gap-4 md:grid-cols-3">
        @for (resource of items; track resource.title) {
          <app-resource-card [resource]="resource" />
        }
      </div>
    </section>
  `,
})
export class ResourcesSection {
  readonly items = resources;
}

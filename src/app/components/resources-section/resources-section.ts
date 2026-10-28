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
        eyebrow="Ensino"
        title="Minicursos e materiais"
        description="Aulas e recursos abertos que preparei para a comunidade acadêmica."
      />
      <div class="mt-11 border-t border-line">
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

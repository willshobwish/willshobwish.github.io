import { Component } from '@angular/core';
import { repositories } from '../../data/portfolio-content';
import { RepositoryCard } from '../repository-card/repository-card';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-repositories-section',
  imports: [RepositoryCard, SectionHeading],
  template: `
    <section class="project-section section-space">
      <div class="shell">
        <app-section-heading
          eyebrow="Projetos"
          title="Código aberto"
          description="Repositórios selecionados pelo uso, colaboração e relevância entre os projetos que mantenho."
          linkLabel="Todos os repositórios"
          linkUrl="https://github.com/willshobwish?tab=repositories"
        />
        <div class="mt-11 border-t border-line">
          @for (repository of items; track repository.name) {
            <app-repository-card [repository]="repository" />
          }
        </div>
      </div>
    </section>
  `,
})
export class RepositoriesSection {
  readonly items = repositories;
}

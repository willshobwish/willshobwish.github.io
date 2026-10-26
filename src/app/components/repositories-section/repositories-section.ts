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
          eyebrow="03 / Código aberto"
          title="Repositórios em destaque."
          description="Uma seleção pelo alcance no GitHub e pela contribuição para projetos e materiais que compartilho."
          linkLabel="Todos os repositórios"
          linkUrl="https://github.com/willshobwish?tab=repositories"
        />
        <div class="mt-11 grid gap-4 lg:grid-cols-3">
          @for (repository of items; track repository.name) {
            <app-repository-card [repository]="repository" [total]="total" />
          }
        </div>
      </div>
    </section>
  `,
})
export class RepositoriesSection {
  readonly items = repositories;
  readonly total = String(repositories.length).padStart(2, '0');
}

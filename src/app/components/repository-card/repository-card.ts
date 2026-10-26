import { Component, input } from '@angular/core';
import { Repository } from '../../data/portfolio-content';
import { TagList } from '../tag-list/tag-list';

@Component({
  selector: 'app-repository-card',
  imports: [TagList],
  styles: ':host { display: block; height: 100%; } .project-card { height: 100%; }',
  template: `
    <article class="project-card">
      <div class="flex items-center justify-between gap-4">
        <span class="project-number">{{ repository().number }} / {{ total() }}</span>
        <span class="project-arrow" aria-hidden="true">↗</span>
      </div>
      <p class="mt-12 text-xs font-semibold uppercase tracking-[0.15em] text-accent">{{ repository().note }}</p>
      <h3 class="mt-3 text-2xl font-semibold tracking-tight text-ink">{{ repository().title }}</h3>
      <p class="mt-4 min-h-24 leading-7 text-muted">{{ repository().summary }}</p>
      <app-tag-list class="mt-7 block" [tags]="repository().tags" />
      <a class="project-link mt-8" [href]="repository().url" target="_blank" rel="noopener noreferrer"
         [attr.aria-label]="'Abrir repositório ' + repository().name">
        <span>{{ repository().name }}</span><span aria-hidden="true">↗</span>
      </a>
    </article>
  `,
})
export class RepositoryCard {
  readonly repository = input.required<Repository>();
  readonly total = input.required<string>();
}

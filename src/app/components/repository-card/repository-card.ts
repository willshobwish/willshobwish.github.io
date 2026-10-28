import { Component, input } from '@angular/core';
import { Repository } from '../../data/portfolio-content';
import { TagList } from '../tag-list/tag-list';

@Component({
  selector: 'app-repository-card',
  imports: [TagList],
  styles: ':host { display: block; }',
  template: `
    <article class="list-row">
      <div>
        <h3 class="text-xl font-semibold tracking-tight text-ink md:text-2xl">{{ repository().title }}</h3>
        <p class="mt-2 text-sm text-muted">{{ repository().name }}</p>
      </div>
      <div>
        <p class="leading-7 text-muted">{{ repository().summary }}</p>
        <app-tag-list class="mt-4 block" [tags]="repository().tags" />
      </div>
      <a class="text-link self-start" [href]="repository().url" target="_blank" rel="noopener noreferrer"
         [attr.aria-label]="'Abrir repositório ' + repository().name">
        Repositório <span aria-hidden="true">↗</span>
      </a>
    </article>
  `,
})
export class RepositoryCard {
  readonly repository = input.required<Repository>();
}

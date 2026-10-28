import { Component, input } from '@angular/core';
import { ResearchProject } from '../../data/portfolio-content';
import { TagList } from '../tag-list/tag-list';

@Component({
  selector: 'app-research-card',
  imports: [TagList],
  styles: ':host { display: block; }',
  template: `
    <article class="list-row research-row">
      <span class="research-year">{{ project().year }}</span>
      <div>
        <h3 class="text-xl font-semibold tracking-tight text-ink md:text-2xl">{{ project().title }}</h3>
        <p class="mt-3 max-w-2xl leading-7 text-muted">{{ project().summary }}</p>
        <app-tag-list class="mt-5 block" [tags]="project().tags" />
      </div>
      <a class="text-link self-start" [href]="project().source" target="_blank" rel="noopener noreferrer"
         [attr.aria-label]="'Ver registro da pesquisa: ' + project().title">Ver registro <span aria-hidden="true">↗</span></a>
    </article>
  `,
})
export class ResearchCard {
  readonly project = input.required<ResearchProject>();
}

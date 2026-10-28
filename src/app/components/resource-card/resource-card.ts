import { Component, input } from '@angular/core';
import { Resource } from '../../data/portfolio-content';

@Component({
  selector: 'app-resource-card',
  styles: ':host { display: block; }',
  template: `
    <article class="list-row">
      <div>
        <p class="list-label">{{ resource().eyebrow }}</p>
        <h3 class="mt-2 text-xl font-semibold tracking-tight text-ink md:text-2xl">{{ resource().title }}</h3>
      </div>
      <p class="leading-7 text-muted">{{ resource().summary }}</p>
      <div class="flex flex-col items-start gap-3">
        @for (link of resource().links; track link.url) {
          <a class="text-link" [href]="link.url" target="_blank" rel="noopener noreferrer">
            {{ link.label }} <span aria-hidden="true">↗</span>
          </a>
        }
      </div>
    </article>
  `,
})
export class ResourceCard {
  readonly resource = input.required<Resource>();
}

import { Component, input } from '@angular/core';
import { Resource } from '../../data/portfolio-content';

@Component({
  selector: 'app-resource-card',
  styles: ':host { display: block; height: 100%; } .resource-card { height: 100%; }',
  template: `
    <article class="resource-card">
      <p class="section-kicker">{{ resource().eyebrow }}</p>
      <h3 class="mt-6 text-xl font-semibold tracking-tight text-ink">{{ resource().title }}</h3>
      <p class="mt-3 flex-1 leading-7 text-muted">{{ resource().summary }}</p>
      <div class="mt-7 flex flex-col items-start gap-3">
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

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    <div class="section-heading">
      <div>
        <p class="section-kicker">{{ eyebrow() }}</p>
        <h2 class="section-title mt-4">{{ title() }}</h2>
      </div>
      <div class="section-intro">
        <p>{{ description() }}</p>
        @if (linkUrl()) {
          <a class="text-link mt-4 inline-flex" [href]="linkUrl()" target="_blank" rel="noopener noreferrer">
            {{ linkLabel() }} <span aria-hidden="true">↗</span>
          </a>
        }
      </div>
    </div>
  `,
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly linkLabel = input<string>();
  readonly linkUrl = input<string>();
}

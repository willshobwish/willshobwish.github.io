import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  template: `
    <div class="flex flex-wrap gap-2">
      @for (tag of tags(); track tag) {
        <span [class.topic-pill]="variant() === 'topic'" [class.small-pill]="variant() === 'small'">{{ tag }}</span>
      }
    </div>
  `,
})
export class TagList {
  readonly tags = input.required<string[]>();
  readonly variant = input<'topic' | 'small'>('small');
}

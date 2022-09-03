import { Component, OnInit } from '@angular/core';
import { contents } from 'src/app/component/posts/contents';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
})
export class PostsComponent implements OnInit {
  constructor() {}
  contents = contents;
  today: number = Date.now();
  ngOnInit(): void {}
}

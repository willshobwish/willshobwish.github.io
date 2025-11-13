import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { CommonModule } from '@angular/common';

interface Repo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

@Component({
  selector: 'app-repo-item',
  imports: [],
  templateUrl: './repo-item.html',
  styleUrl: './repo-item.scss',
})
export class RepoItem implements OnInit {
  ngOnInit(): void {}
}

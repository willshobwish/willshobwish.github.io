import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
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
  selector: 'app-templates',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './templates.html',
  styleUrl: './templates.scss',
})
export class Templates implements OnInit {
  repos: Repo[] = [];
  username = 'willshobwish'; // replace with your username

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchRepos();
  }

  fetchRepos() {
    const url = `https://api.github.com/users/${this.username}/repos?sort=updated`;
    this.http.get<Repo[]>(url).subscribe({
      next: (data) => (this.repos = data),
      error: (err) => console.error('Error fetching repos', err),
    });
  }
}

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css',
})
export class BlogCardComponent {
  blog = input.required<any>();
}

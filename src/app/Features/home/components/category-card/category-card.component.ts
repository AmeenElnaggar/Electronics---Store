import { Component, input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
})
export class CategoryCardComponent {
  categoryData = input.required<{
    image: { url: string; alt: string };
    title: string;
    description: string;
  }>();
}

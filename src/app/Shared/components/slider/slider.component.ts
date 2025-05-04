import { Component, input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { BlogCardComponent } from '../../../Features/home/components/blog-card/blog-card.component';
import { CategoryCardComponent } from '../../../Features/home/components/category-card/category-card.component';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-slider',
  imports: [
    CarouselModule,
    BlogCardComponent,
    CategoryCardComponent,
    ProductCardComponent,
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  sliderMainData = input.required<any[]>();

  sliderMetaData = input.required<{
    visibleNumber: number;
    autoPlay: boolean;
  }>();
  cardType = input.required<string>();
}

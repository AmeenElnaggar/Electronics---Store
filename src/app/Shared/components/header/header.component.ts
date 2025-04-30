import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, HeaderSearchComponent, NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  headerBurger = viewChild<ElementRef<HTMLButtonElement>>('headerHamburger');

  onClick() {
    this.headerBurger()?.nativeElement.classList.toggle('active');
  }
}

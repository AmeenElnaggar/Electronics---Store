import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Shared/components/header/header.component';
import { NavbarComponent } from './Shared/components/header/navbar/navbar.component';
import { FooterComponent } from './Shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '9-Electronics-Store';
}

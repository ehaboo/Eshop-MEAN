import { Component } from '@angular/core';
import { HeaderLogoComponent } from "../../header-area/header-logo/header-logo.component";
import { HeaderSearchComponent } from "../../header-area/header-search/header-search.component";
import { HeaderNavComponent } from "../../header-area/header-nav/header-nav.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderLogoComponent, HeaderSearchComponent, HeaderNavComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}

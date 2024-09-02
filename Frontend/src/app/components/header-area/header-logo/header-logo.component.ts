import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header-logo',
  standalone: true,
  imports: [RouterLink,MatIconModule],
  templateUrl: './header-logo.component.html',
  styleUrl: './header-logo.component.css'
})
export class HeaderLogoComponent {

  public constructor(){}
}

import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}

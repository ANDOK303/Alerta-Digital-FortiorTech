import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer'; // Apunta al archivo footer.ts

@Component({
  selector: 'app-home-publica',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './home-publica.html',
  styleUrls: ['./home-publica.css']
})
export class HomePublica {
  constructor() {}
} 

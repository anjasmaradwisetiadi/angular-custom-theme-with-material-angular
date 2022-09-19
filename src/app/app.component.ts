import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentTheme = 'dark_theme'
  constructor() {
  }

  ngOnInit() {
  }

  title = 'custom-theming-angular';
}

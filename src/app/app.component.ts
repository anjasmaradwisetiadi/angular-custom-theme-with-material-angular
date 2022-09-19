import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentTheme = 'pink-theme'
  constructor() {
  }

  ngOnInit() {
  }

  title = 'custom-theming-angular';
}

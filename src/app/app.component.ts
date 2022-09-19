import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentTheme = 'murasaki-theme'
  constructor() {
  }

  ngOnInit() {
    console.log('currentTheme = ', this.currentTheme)
  }
  title = 'custom-theming-angular';

  acceptTheme(params: string){
    this.currentTheme = params;
    console.log('params')
    console.log(params)
  }
}

import { Component, OnInit } from '@angular/core';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public web: string;

  constructor(){
    this.title = 'Seily Herrera';
    this.subtitle = 'Desarrollador Web y Formador';
    this.web= 'seilymarissaherreraU@gmail.com'
  }

  ngOnInit(){

  }
}

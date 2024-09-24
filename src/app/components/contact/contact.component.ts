import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

//Declaracion de Jquery y el sigo '$' por que si no nos da error
declare var JQuery: any;
declare var $ : any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  public widthSlider: number;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;
  @ViewChild('textos', {static: true}) textos?: ElementRef;

  constructor(){
    this.widthSlider=0;
    this.anchuraToSlider = false;
    this.captions= true;
    
  }

  ngOnInit(): void {
    var opcion_clasica = document.querySelector('#texto')?.innerHTML;

    /*if(this.textos){
      alert(this.textos.nativeElement.innerText);
    }*/
    
  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = false;
  }

  getAuthor(event:any){
    this.autor = event; 
  }

}

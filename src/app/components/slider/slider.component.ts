import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var JQuery: any;
declare var $ : any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit{

  @Input() anchura: any;
  @Input('etiquetas') captions: boolean;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;


  constructor(){
    this.anchura = false;
    this.captions = false;
    this.autor ={
      nombre: 'Seily Herrera',
      correo: 'seilymarissaherreraU@gmail.com',
      instagram: 'herrera.sm',
    }
  }

  ngOnInit(): void {
    $(".logo").click(function(e:any){
      e.preventDefault();//Con esto el link del logo no nos da error y nos direcciona al home 
        $("header").css("background", "green")
                   .css("height","50px");
      });

      $('.galeria').bxSlider({
        mode: 'fade',
        captions: this.captions,
        slideWidth: this.anchura
      });

      //LAnzar el evento directamente
      this.conseguirAutor.emit(this.autor);
  }

  lanzar(event:any){
    this.conseguirAutor.emit(this.autor);
  }
  

}

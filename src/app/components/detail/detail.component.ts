import { Component, OnInit} from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/projects.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  providers: [ProjectService]
})
export class DetailComponent implements OnInit{
  
  public url: String;
  public project: Project;
  public confirm: boolean;

  constructor(
   private _projectService:ProjectService,
   private _router: Router,
   private _route: ActivatedRoute,
  ){

    
    this.url= Global.url;
    this.project= new Project('', '', '', '', 2024, '', '');
    this.confirm = false;
   

  }

  ngOnInit(): void {
      this._route.params.subscribe(params =>{
        let id= params['id'];

        this.getProject(id);
      })
  }

  getProject(id:any){
    this._projectService.getProject(id).subscribe(
      Response=>{
        this.project = Response.project;
      },
      error=>{
        console.log(<any>error)
      }
      
    )
  }

  setConfirm(confirm: any){
    this.confirm = confirm;
  }

  deleteProject(id:any){
    this._projectService.deleteProject(id).subscribe(
      Response =>{
        if(Response.project){
          this._router.navigate(['/proyectos']);
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/projects.service';
import { Global } from '../../services/global';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit{
 public projects: Project[];
 public url: string;

  constructor(
    private _projectService: ProjectService
  ) {
    this.projects = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
      this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      Response =>{
        if(Response.projects){
          this.projects = Response.projects;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}

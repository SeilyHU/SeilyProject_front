import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/projects.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrl: './edit.component.css',
  providers: [ProjectService, UploadService],
})
export class EditComponent implements OnInit{

  public response: Response;
  public title: string;
  public project: Project;
  public save_project;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
   private _route: ActivatedRoute,
  ){
    
    this.response = new Response();
    this.title = 'Editar Proyecto';
    this.project = new Project('','','','',2024,'','');
    this.status = "";
    this.filesToUpload =[];
    this.save_project = '';
    this.url = Global.url;
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

  onSubmit(form: any) {
    console.log(this.project);

    // Guardar los datos básicos del proyecto
    this._projectService.updateProject(this.project).subscribe(
        (response: any) => {
            if (response.project) {
                // Subir la imagen del proyecto
               
                  this._uploadService.makeFileRequest(Global.url + "upload-imagen/" + response.project._id, [], this.filesToUpload, 'image')
                  .then((result: any) => {
                      console.log(result);
                      this.save_project = result.project;
                      this.status = 'success';
                  })
                  .catch((error: any) => {
                      console.error('Error al subir la imagen:', error);
                      this.status = 'failed';
                  });
                
                
            } else {
                this.status = 'failed';
            }

            console.log(response);
        },
        (error: any) => {
            console.error('Error al guardar el proyecto:', error);
            this.status = 'failed';
        }
    );
}
  


  fileChangeEvent(fileInput: any){
        
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
  
}

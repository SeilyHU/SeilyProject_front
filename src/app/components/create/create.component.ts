import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/projects.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

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
    ){
      this.response = new Response();
      this.title = 'Crear Proyecto';
      this.project = new Project('','','','',2024,'','');
      this.status = "";
      this.filesToUpload =[];
      this.save_project = '';
      this.url = Global.url;
      
    }

    ngOnInit(): void {
        
    }

    onSubmit(form: any) {
      console.log(this.project);
  
      // Guardar los datos básicos del proyecto
      this._projectService.saveProject(this.project).subscribe(
          (response: any) => {
              if (response) {
                  // Subir la imagen del proyecto
                  this._uploadService.makeFileRequest(Global.url + "upload-imagen/" + response.project._id, [], this.filesToUpload, 'image')
                      .then((result: any) => {
                          console.log(result);
                          this.save_project = result.project;
                          this.status = 'success';
                          form.reset();
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
    


    //Imagen
    fileChangeEvent(fileInput: any){
      
      // Obtener los archivos o la imagen seleccionada por el usaurio
      this.filesToUpload = <Array<File>>fileInput.target.files;
    }

    
}

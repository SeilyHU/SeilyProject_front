import { Injectable } from "@angular/core";
import { Global } from "./global";

@Injectable()
export class UploadService{
    public url: string;

    constructor(){
        this.url=Global.url;
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string) {
        return new Promise(function(resolve, reject) {
            var formData = new FormData(); // Utiliza 'new FormData()' para crear un objeto FormData
    
            // Agrega cada archivo al objeto FormData
            /*files.forEach(file => {
                formData.append(name, file, file.name);
            });*/

            for(var i=0; i <files.length; i++){
                formData.append(name, files[i], files[i].name);   
            }
    
            var xhr = new XMLHttpRequest();
    
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };
    
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }
}
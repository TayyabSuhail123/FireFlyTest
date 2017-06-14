import {Component,ViewChild} from '@angular/core';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';


@Component({
  selector: 'app',
  template:`
  <div class="file-upload">
    <button id="custom-input"  (click)="fileChangeListener()">Beginnn </button>
</div>
<img-cropper #cropper [image]="data" [settings]="cropperSettings"></img-cropper>
<br>
<span class="result rounded" *ngIf="data.image" >
    <img [src]="data.image" [width]="cropperSettings.croppedWidth" [height]="cropperSettings.croppedHeight">
</span>

<router-outlet></router-outlet>
  `
})
export class AppComponent {

@ViewChild('cropper', undefined)
cropper:ImageCropperComponent;
  data: any;
    cropperSettings: CropperSettings;

    constructor() {


       debugger;
        
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth =300;
        this.cropperSettings.croppedHeight = 300;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.cropperDrawSettings.strokeWidth=3;
        this.cropperSettings.cropperDrawSettings.strokeColor="black";
        this.cropperSettings.canvasHeight = 300;
        this.cropperSettings.noFileInput = true;
        this.data = {};
    }



    fileChangeListener() {
      debugger;
    var image:any = new Image();
    //var file:File = $event.target.files[0];
    //var myReader:FileReader = new FileReader();
    var that = this;
    //myReader.onloadend = function (loadEvent:any) {
        image.src ="assets/flower.jpg"
        that.cropper.setImage(image);

   // };

    //myReader.readAsDataURL(file);
}
}

import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  MAX_IMG_SELECTION,
  MAX_IMG_SELECTION_ERR,
  MAX_VIDEO_SIZE,
  VIDEO_FORMAT,
} from 'src/app/constants/messages';
import { ToastService } from '../toast-notification/toast.service';
import { blobURL, toBase64 } from 'src/app/constants/helper';
import imageCompression from 'browser-image-compression';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

const MODULES = [
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatTooltipModule,
];
@Component({
  selector: 'app-upload-img',
  standalone: true,
  imports: [CommonModule, ...MODULES],
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss'],
})
export class UploadImgComponent implements OnInit, OnChanges {
  @Input()
  showButtonHandler!: boolean;
  @Input() selectedImageFile: any;
  @Input()
  width!: number;
  @Input()
  height!: number;
  @Input()
  imageWidth!: number;
  @Input()
  imageHeight!: number;
  @Input() componentImageStyle: any;
  @Input() disabled = false;
  @Input() imageFormatPngOnly = false;
  @Input() imageValue = '';
  @Input() videoValue = '';
  @Input() isMultiSelection = true;
  @Input()
  textInfo = `You can select upto ${MAX_IMG_SELECTION} images, Max 2 MB size and supported JPEG, PNG, JPG only`;
  @Output() sendFiles = new EventEmitter();
  @Input() isVideoAllowed = false;
  realFile: any;
  private _canvas;
  thumbnailFile!: Blob;
  videoInvalid: any;
  videoDuration!: number;
  constructor(
    private _toast: ToastService,
    renderer: Renderer2
    // @Inject(DOCUMENT) private document: Document
  ) {
    this._canvas = renderer.createElement('canvas');
  }

  ngOnInit() {}

  ngOnChanges() {}

  getCurrentIndex(event: any) {
    this.showButtonHandler = true;
  }

  async onMoreFileUpload(event: {
    target: { files: string | any[] };
    currentTarget: { files: any[] };
  }) {
    const inputVideo = event.target.files[0];
    const video = document.createElement('video');
    video.src = window.URL.createObjectURL(inputVideo);
    video.preload = 'metadata';
    video.onloadedmetadata = () => {
      this.videoDuration = parseInt(video.duration.toFixed(0));
    };
    this.realFile = event.currentTarget.files[0];
    let filesAmount = event.target.files.length;
    for (let findFile = 0; findFile < filesAmount; findFile++) {
      if (event.target.files[findFile].size > 5000000) {
        this.showMssg('Size should not exceed 5 MB');
        return;
      }
    }

    this.handleVideoFile(this.realFile);
  }

  ratioCheckFunction(width: number, height: number) {
    for (let num = height; num > 1; num--) {
      if (width % num == 0 && height % num == 0) {
        width = width / num;
        height = height / num;
      }
    }

    return width + ':' + height;
  }

  checkAspectRatioOfVideo(file: File): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const $video = document.createElement('video');
      $video.src = url;
      const that = this;
      $video.addEventListener('loadedmetadata', function () {
        // const requiredAspectRadio = Math.round(
        //   this.videoWidth / this.videoHeight
        // );
        const requiredAspectRadio = that.ratioCheckFunction(
          this.videoWidth,
          this.videoHeight
        );
        if (requiredAspectRadio != that.width + ':' + that.height) {
          return resolve(false);
        } else {
          return resolve(true);
        }
      });
    });
  }

  async videoValidate(file: any, maxSize: any, format: any, callback?: any) {
    try {
      const fileName = file.name.split('.');
      // const isValidRatio = await this.checkAspectRatioOfVideo(this.realFile);
      // if (!isValidRatio) {
      //   this.showMssg(
      //     `Please upload video in ${this.width}:${this.height} ratio`
      //   );
      //   return;
      // }
      if (format && format.split(',').indexOf(file.type) >= 0) {
        if (file.size / 1024 / 1024 < maxSize) {
          const data = { url: blobURL(file), file: file, type: file.type };
          callback({ status: 200, ...data });
        } else {
          callback({
            status: 100,
            message: `Video cannot be bigger than ${maxSize} MB`,
          });
        }
      } else {
        callback({ status: 101, message: 'Invalid file format' });
      }
    } catch (error) {
      callback({ status: 0, message: 'UNKNOWN file' });
    }
  }

  handleVideoFile(file: any) {
    this.videoValidate(file, MAX_VIDEO_SIZE, VIDEO_FORMAT, (res: any) => {
      if (res.status == 200) {
        const fileData = {
          file: file,
          url: res.url,
          type: res.type,
        };

        this.checkVideoDuration(fileData);
      } else {
        this._toast.error('The file is not in proper format or size');
        return;
        // this.error = INPUT_FILES_COMPONENT.MAX_SIZE(MAX_VIDEO_SIZE);
      }
    });
  }

  checkVideoDuration(data: {
    file: any;
    url: any;
    type?: any;
    thumbnail?: any;
    duration?: any;
  }) {
    try {
      let duration: any;
      const inputVideo = data.file;
      const vid = document.createElement('video');
      vid.src = window.URL.createObjectURL(inputVideo);
      vid.preload = 'metadata';
      vid.onloadedmetadata = () => {
        duration = vid.duration;
      };
      let video = document.createElement('video');
      video.preload = 'metadata';
      video.setAttribute('id', 'vid');
      video.onloadedmetadata = () => {
        data.file.url = data.url;
        data.file.thumbnail = data.thumbnail;
        data.file.duration = data.duration;
      };
      video.src = data.url;
      // this.createThumbnail(video, data);
      this.handleFileUpload(data);
    } catch (err) {
      console.log(err);
    }
  }

  handleFileUpload = async (e: any) => {
    const thumbnail = await this.generateVideoThumbnail(e);
    this.sendFiles.emit({
      realFile: e.file,
      thumbnailFile: thumbnail,
      duration: this.videoDuration,
    });
  };

  generateVideoThumbnail = (file: any) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const video = document.createElement('video');

      // this is important
      video.autoplay = true;
      video.muted = true;
      video.src = file['url'];

      video.onloadeddata = () => {
        let ctx = canvas.getContext('2d');

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        ctx?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        video.pause();
        return resolve(canvas.toDataURL('image/png'));
      };
    });
  };

  createThumbnail(video: any, data: any, name: string = 'thumbnail.png') {
    try {
      return new Promise((resolve, reject) => {
        const canvas: HTMLCanvasElement = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        context?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        this._canvas.toBlob((blob: any) => {
          if (blob) {
            this.thumbnailFile = new Blob([blob], { type: 'image/png' });
            this.thumbnailFile['name'] = name;
            this.thumbnailFile['lastModified'] = new Date().getTime();
            this.sendFiles.emit({
              realFile: data.file,
              thumbnailFile: this.thumbnailFile,
            });
          }
        });
      });
    } catch (err) {}
  }

  async fileChangeEvent(event: any) {
    if (event.target.files.length <= 0) {
      return;
    }

    let filesAmount = event.target.files.length;
    if (filesAmount > MAX_IMG_SELECTION) {
      this.showMssg(MAX_IMG_SELECTION_ERR());
      return;
    }
    if (this.width && this.height) {
      let image = event.target.files[0];
      const isValidRatio = await this.checkRatio(image);
      if (!isValidRatio) {
        return;
      }
    }

    for (let findFile = 0; findFile < filesAmount; findFile++) {
      // if (event.target.files[findFile].size < 5000) {
      //   this.showMssg('Please select more than 5 KB image');
      //   return;
      // }

      if (event.target.files[findFile].size > 5000000) {
        this.showMssg('Size should not exceed 5 MB');
        return;
      }

      let typesOfImages = [];
      if (event.target.files[findFile].type !== '') {
        typesOfImages = event.target.files[findFile].type.split('/');
      }
      if (this.imageFormatPngOnly) {
        if (
          typesOfImages.length <= 0 ||
          (typesOfImages[1].toLowerCase() !== 'png' &&
            typesOfImages[1].toLowerCase() !== 'jpg' &&
            typesOfImages[1].toLowerCase() !== 'jpeg')
        ) {
          this.showMssg('You can upload only .jpg, .png, .jpeg format');
          return;
        }
      } else {
        if (
          (!this.imageFormatPngOnly && typesOfImages.length <= 0) ||
          typesOfImages[1].toLowerCase() !== 'png'
        ) {
          this.showMssg('Format allowed png only');
          return;
        }
      }
    }
    this.realFile = event.target.files[0];

    this.selectedFile(event);
  }

  async checkRatio(image: File) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(image);
      fileReader.onload = (events: any) => {
        const img = new Image();
        img.src = fileReader.result as string;
        img.onload = () => {
          const height = img.naturalHeight;
          const width = img.naturalWidth;
          if (
            this.imageWidth &&
            this.imageHeight &&
            height < this.imageHeight &&
            width < this.imageWidth
          ) {
            this.showMssg(
              `Please upload image in  ${this.imageWidth} * ${this.imageHeight} `
            );
            resolve(false);
          }
          if (width && height) {
            const requiredAspectRadio = this.ratioCheckFunction(width, height);
            if (this.width + ':' + this.height != requiredAspectRadio) {
              this.showMssg(
                `Please upload image in ${this.width}:${this.height} ratio`
              );
              resolve(false);
            } else {
              resolve(true);
            }
          }
        };
      };
    });
  }

  onCancel() {
    this.sendFiles.emit('');
  }

  async selectedFile(event: { target: { files: string | any[] } }) {
    let base64UrlOfSelectedFiles: any[] = [];
    for (let i = 0; i < event.target.files.length; i++) {
      let reader = new FileReader();
      reader.onload = (events: any) => {
        base64UrlOfSelectedFiles.push(events.target.result);
      };
      reader.readAsDataURL(event.target.files[i]);
    }
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      let compressedFile;
      if (this.realFile.type != 'image/gif') {
        compressedFile = await imageCompression(this.realFile, options);
      } else {
        compressedFile = this.realFile;
      }
      this.sendFiles.emit({
        realFile: compressedFile,
        base64Url: base64UrlOfSelectedFiles[0],
      });
    } catch (error) {}
  }

  showMssg(mssg: string) {
    this._toast.error(mssg);
  }
}

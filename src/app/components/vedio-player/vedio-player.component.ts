import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-vedio-player',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, MatIconModule, MatButtonModule],
  templateUrl: './vedio-player.component.html',
  styleUrls: ['./vedio-player.component.scss'],
})
export class VedioPlayerComponent {
  @ViewChild('videoPlayer')
  videoPlayer!: ElementRef;
  vedioClass = 'overlay';
  constructor(
    private dialogRef: MatDialogRef<VedioPlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  playVideo() {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    video.play();
    this.vedioClass = 'hide';
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}

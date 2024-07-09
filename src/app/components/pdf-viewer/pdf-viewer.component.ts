import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataLoaderComponent } from '../data-loader/data-loader.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [
    CommonModule,
    NgxDocViewerModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    PdfViewerModule,
    DataLoaderComponent,
  ],
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
})
export class PdfViewerComponent implements OnInit {
  url: any;
  height = 400;
  width = 800;
  isApiCallInProgress: boolean = true;
  currentZoom = 1;
  totalPages = 1;
  currentPage = 1;
  constructor(
    private _dialogRef: MatDialogRef<PdfViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    this.url = this.data.pdf.changingThisBreaksApplicationSecurity;
  }

  contentLoaded() {}
  close() {
    this._dialogRef.close(false);
  }
  increaseZoom() {
    this.currentZoom = this.currentZoom + 0.5;
  }

  decreseZoom() {
    this.currentZoom = this.currentZoom - 0.5;
  }
  pageRendered(e: CustomEvent) {
    console.log(e);
    this.isApiCallInProgress = false;
  }
}

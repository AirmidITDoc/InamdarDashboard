import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-sucess',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.scss']
})
export class SucessComponent {

}

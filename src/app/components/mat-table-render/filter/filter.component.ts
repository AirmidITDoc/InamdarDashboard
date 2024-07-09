import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { ChangeDetectionStrategy } from "@angular/core";
@Component({
  selector: "app-filter",
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit {
  @Output() apply: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  applyForm(info: boolean) {
    const send = {
      apply: info
    }
    this.apply.emit(send);
  }
}

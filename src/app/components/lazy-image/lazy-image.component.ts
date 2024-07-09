import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LazyDirective } from "src/app/directives/lazy/lazy.directive";

@Component({
  selector: "app-lazy-image",
  standalone: true,
  imports: [CommonModule, LazyDirective],
  templateUrl: "./lazy-image.component.html",
  styleUrls: ["./lazy-image.component.scss"],
})
export class LazyImageComponent implements OnInit {
  /**
   * @SETTER_GETTER using Input & Output
   */
  _img: any;
  get img(): any {
    return this._img;
  }
  @Input() set img(value: any) {
    this._img = value;
  }

  constructor() {}

  ngOnInit() {}
}

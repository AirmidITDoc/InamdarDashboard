import { Component, Input, OnChanges } from '@angular/core';
import { NavItem } from './nav-item';
import { Router } from '@angular/router';
import { NavService } from 'src/app/services/navService/nav.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/components/material/material.module';
import { IconsModule } from 'src/app/components/icon/icon.module';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  templateUrl: './nav-item.component.html',
  imports: [
    CommonModule,
    MaterialModule,
    IconsModule
  ]
})
export class AppNavItemComponent implements OnChanges {
  @Input() item: NavItem | any;
  @Input() depth: any;

  constructor(public navService: NavService, public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnChanges() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
      }
    });
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }

    // scroll
    document.querySelector('.page-wrapper')?.scroll({
      top: 0,
      left: 0,
    });
  }
}

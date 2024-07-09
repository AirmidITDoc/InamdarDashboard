import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { AbsoluteRoutePipe } from 'src/app/pipes/absolute-route/absolute-route.pipe';
import { navItems } from './sidebar-data';
import { NavService } from 'src/app/services/navService/nav.service';
import { BrandingComponent } from "./branding.component";
import { AppNavItemComponent } from "./nav-item/nav-item.component";
import { MaterialModule } from 'src/app/components/material/material.module';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    imports: [
        CommonModule,
        RouterModule,
        AbsoluteRoutePipe,
        MaterialModule,
        AppNavItemComponent,
        BrandingComponent,
    ]
})
export class SidebarComponent {
  navItems = navItems;

  constructor(public navService: NavService) {}

  ngOnInit(): void {}

}

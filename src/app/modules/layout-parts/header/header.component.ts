import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from 'src/app/components/confirmation-modal/confirmation-modal.component';
import { TITLE_CONFIRMATION, MSSG_CONFIRMATION } from 'src/app/constants/messages';
import { LazyImageComponent } from 'src/app/components/lazy-image/lazy-image.component';
import { AbsoluteRoutePipe } from 'src/app/pipes/absolute-route/absolute-route.pipe';
import { StorageService } from 'src/app/services/storage/storage.service';
import { MaterialModule } from 'src/app/components/material/material.module';
import { IconsModule } from 'src/app/components/icon/icon.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    LazyImageComponent,
    AbsoluteRoutePipe,
    IconsModule
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  flag = true;
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;
  constructor(
    private _dialog: MatDialog,
    public storage: StorageService,
    // private _account: AccountService,
    private renderer: Renderer2
  ) {}
  logoutHandler() {
    const dialog = this._dialog.open(ConfirmationModalComponent, {
      panelClass: 'account-popup',
      width: '480px',
      data: {
        title: TITLE_CONFIRMATION('Logout'),
        message: MSSG_CONFIRMATION('logout'),
      },
    });
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.confirmLogout();
      }
    });
  }

  confirmLogout() {
    // this._account.logOut().subscribe((res) => {
    //   this.storage.logout();
    // });
  }
  sidebarCollaped() {
    if (this.flag === true) {
      this.renderer.addClass(document.body, 'collapsed');
      this.renderer.addClass(
        document.body,
        'showing-icons-on-collapse'
      ); /* For showing icons on sidebar collapsed*/
      this.flag = !this.flag;
    } else {
      this.renderer.removeClass(document.body, 'collapsed');
      this.renderer.removeClass(
        document.body,
        'showing-icons-on-collapse'
      ); /* For showing icons on sidebar collapsed*/
      this.flag = !this.flag;
    }
  }
}

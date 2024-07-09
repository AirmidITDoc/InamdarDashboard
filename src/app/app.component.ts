import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToastNotificationComponent } from './components/toast-notification/toast-notification.component';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LoaderComponent,
    ToastNotificationComponent,
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Airmid - Dashboard';
}

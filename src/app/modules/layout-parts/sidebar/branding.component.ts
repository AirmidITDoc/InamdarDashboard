import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  standalone: true,
  template: `
    <div class="branding">
      <a href="/">
        <img
          src="./assets/images/logos/Airmid_NewLogo.jpeg"
          class="align-middle m-2"
          alt="logo"
          style="width:50px;"
        />
      </a>
      <span style="font-size: 32px;vertical-align: super;">AirMid</span>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}

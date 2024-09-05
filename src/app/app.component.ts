import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreBase } from '@infor-up/m3-odin';
import { M3OdinModule } from '@infor-up/m3-odin-angular';
import { BaseGroupComponent } from './base-group/base-group.component';
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // BrowserModule,
    M3OdinModule,
    BaseGroupComponent,
    SearchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent extends CoreBase {
  title = 'ng-odin-mashup';

  constructor() {
    super('AppComponent');
  }
}

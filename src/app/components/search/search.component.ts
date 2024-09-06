import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CoreBase } from '@infor-up/m3-odin';
import { CounterService } from '../../store/CounterService';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent extends CoreBase {
  private counterService = inject(CounterService);
  store$ = this.counterService.useStore();

  constructor() {
    super('SearchComponent');
  }
}

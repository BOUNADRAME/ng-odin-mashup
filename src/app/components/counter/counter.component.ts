import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CoreBase } from '@infor-up/m3-odin';
import { CounterService } from '../../store/CounterService';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent extends CoreBase {
  private counterService = inject(CounterService);
  store$ = this.counterService.useStore();

  constructor() {
    super('CounterComponent');
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { CoreBase, IUserContext } from '@infor-up/m3-odin';
import { CounterComponent } from '../components/counter/counter.component';
import { SearchComponent } from '../components/search/search.component';
import { M3ApiService } from '../services/m3-api.service';

@Component({
  selector: 'app-base-group',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatDividerModule,
    SearchComponent,
    CounterComponent,
  ],
  providers: [M3ApiService],
  templateUrl: './base-group.component.html',
  styleUrl: './base-group.component.css',
})
export class BaseGroupComponent extends CoreBase implements OnInit {
  userContext!: IUserContext;
  warehouseList: any;

  constructor(private _m3ApiService: M3ApiService) {
    super('BaseGroupComponent');
  }

  ngOnInit(): void {
    this._m3ApiService.findAuthContext().subscribe((userAuth) => {
      this.userContext = userAuth;
    });

    this.loadWareHouses();
  }

  loadWareHouses() {
    this._m3ApiService.findWarehouses().subscribe((warehouses) => {
      console.log(warehouses);
      this.warehouseList = warehouses;
    });
  }

  openM3Screen() {
    this._m3ApiService.callM3Program('CRS610', 'LstWhsGroups', {}).subscribe(
      (response) => {
        console.log('M3 Screen opened:', response);
      },
      (error) => {
        console.error('Error opening M3 screen:', error);
      }
    );
  }
}

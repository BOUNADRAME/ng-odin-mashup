import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CoreBase, IUserContext } from '@infor-up/m3-odin';
import { SearchComponent } from '../components/search/search.component';
import { M3ApiService } from '../services/m3-api.service';

@Component({
  selector: 'app-base-group',
  standalone: true,
  imports: [CommonModule, MatGridListModule, SearchComponent],
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

  // loadWarehouseGroups() {
  //   const rcd = new MIRecord();

  //   // rcd['CONO'] = this.userContext.company;

  //   const request: IMIRequest = {
  //     program: 'CMS100MI',
  //     transaction: 'LstWhsGroups',
  //     record: rcd,
  //   };

  //   this._m3Service.execute(request).subscribe(
  //     (response: IMIResponse) => {
  //       // Handle the response which is of type IMIResponse
  //       console.log(response);
  //     },
  //     (error: any) => {
  //       // Handle any errors
  //       console.error(error);
  //     }
  //   );
  // }
}

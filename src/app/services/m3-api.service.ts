import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CoreBase,
  IMIRequest,
  IMIResponse,
  IUserContext,
  MIRecord,
} from '@infor-up/m3-odin';
import { MIService, UserService } from '@infor-up/m3-odin-angular';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class M3ApiService extends CoreBase {
  private baseUrl = '/m3api-rest'; // Matches the proxy entry in odin.json

  constructor(
    private _miService: MIService,
    private _userService: UserService,
    private http: HttpClient
  ) {
    super('M3ApiService');
  }

  execute(request: IMIRequest): Observable<IMIResponse> {
    if (request) {
      console.log('Executing : ' + JSON.stringify(request));
      return this._miService
        .execute(request)
        .pipe(catchError((error) => of(error)));
    } else {
      console.error('Request is null');
      return of();
    }
  }

  findAuthContext(): Observable<IUserContext> {
    return this._userService.getUserContext().pipe(
      catchError((error) => {
        console.error('Error getting user context', error);
        return of(); // Return a default value or handle the error as needed
      })
    );
  }

  findWarehouses(): Observable<any> {
    const rcd = new MIRecord();
    // rcd['CONO'] = this.userContext.company;
    const request: IMIRequest = {
      program: 'CMS100MI',
      transaction: 'LstWhsGroups',
      record: rcd.setString('CONO', '100'),
    };
    return this._miService.execute(request).pipe(
      catchError((error) => {
        console.error('Failed to get warehouses', error);
        return of();
      })
    );
  }

  // Example method to call an M3 screen
  // Example to call an M3 program (CRS610)
  callM3Program(
    program: string,
    transaction: string,
    params: any
  ): Observable<any> {
    const url = `${this.baseUrl}/execute/${program}/${transaction}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, params, { headers });
  }
}

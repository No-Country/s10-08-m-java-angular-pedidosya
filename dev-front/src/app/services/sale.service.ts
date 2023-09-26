import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/environment/environment';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';
import { SaleResponseDto, SaleStatusDto } from '@models/sales.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  apiUrl: string = env.apiURL;
  private readonly keyToken = 'jwt';

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {

  }

  getListOfSales(): Observable<SaleResponseDto[]> {
    let auth_token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${auth_token}`
    });

    return this.httpClient.get<SaleResponseDto[]>(`${this.apiUrl}/sales/sales-user`, { headers })
  }

  getToken() {
    console.log(localStorage.getItem(this.keyToken))
    return localStorage.getItem(this.keyToken);
  }

}
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/environment/environment';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';
import { AddressDTO } from '@models/addressDto';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  apiUrl: string = env.apiURL;
  private readonly keyToken = 'jwt';
  idClient: number = 0;

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {

  }

  getListOfAddresses(): Observable<AddressDTO[]> {
    let auth_token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${auth_token}`
    });

    //const idClient = this.userService.getUser(); // Llama a getUser como una función para obtener el valor

    return this.httpClient.get<any[]>(`${this.apiUrl}/addresses-client/list`, { headers }).pipe(
      map((data: any[]) => {
        // Aquí realizo la conversión de los datos a la estructura AddressDTO
        return data.map(item => ({
          idClient: item.idClient,
          address: {
            idAddress: item.address.idAddress,
            description: item.address.description,
            latitude: item.address.latitude,
            longitude: item.address.longitude,
            idCity: item.address.idCity
          },
          set: item.set
        }));
      })
    );
  }

  setAddress(addressDto: AddressDTO): Observable<any>{
    let auth_token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${auth_token}`
    });
    addressDto.set=!addressDto.set;
    return this.httpClient.put(`${this.apiUrl}/addresses-client/set`, addressDto, { headers })
  } 

  getToken() {
    console.log(localStorage.getItem(this.keyToken))
    return localStorage.getItem(this.keyToken);
  }

}
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AddressDTO, AddressPostDTO } from '@models/addressDto';
import { AddressService } from '@services/address.service';
import { UserService } from '@services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-adress',
  templateUrl: './add-adress.component.html',
  styleUrls: ['./add-adress.component.scss', '../profile-root.scss']
})
export class AddAdressComponent implements OnInit {

  address: AddressPostDTO = {
    idClient: 0,
    address: {
        description: "Dirección o punto de referencia",
        latitude: 1,
        longitude: 1,
        idCity: 1
    },
    set: true
  };

  constructor(private addressService: AddressService, private cdr: ChangeDetectorRef,private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (data) => {
        // Manejar la respuesta exitosa
        console.log('Respuesta exitosa:', data);
        this.address.idClient = data.idClient
      },
      (error) => {
        // Manejar errores
        console.error('Error en la solicitud:', error);
      }
    );
    console.log(this.address);
    
  }

  AddAddress(): any {
    this.addressService.postAddress(this.address).subscribe(
      (response) => {
        console.log("La solicitud PosT se completó con éxito", response);
        return response;
      },
      // (error) => {
      //   console.error("Error al realizar la solicitud PUT", error);
      //   return error;
      // }
    );

  }

  getAddresses(): Observable<AddressDTO[]> {
    return this.addressService.getListOfAddresses();
  }

}

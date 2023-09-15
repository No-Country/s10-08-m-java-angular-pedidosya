import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AddressDTO, AddressGet } from '@models/addressDto';
import { AddressService } from '@services/address.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modaladdresses',
  templateUrl: './modaladdresses.component.html',
  styleUrls: ['./modaladdresses.component.scss']
})
export class ModaladdressesComponent implements OnInit {
  mostrarMenu: boolean = true;
  addresses: AddressDTO[] = [];

  constructor(private addressService: AddressService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getAddresses().subscribe((data) => {
      this.addresses = data;
      console.log(this.addresses);
    });
  }

  getAddresses(): Observable<AddressDTO[]> {
    return this.addressService.getListOfAddresses();
  }

  setAddress(addressDto:AddressDTO){
    this.addressService.setAddress(addressDto).subscribe(
      (response) => {
        console.log("La solicitud PUT se completó con éxito", response);
        this.getAddresses().subscribe((data) => {
          this.addresses = data;
          console.log(this.addresses);
          this.cdr.detectChanges();
        });
      },
      (error) => {
        console.error("Error al realizar la solicitud PUT", error);
      }
    );
    this.toggleDireccionMenu();

  }

  toggleDireccionMenu() {
    this.mostrarMenu = !this.mostrarMenu;
  }
}


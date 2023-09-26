import { ChangeDetectorRef, Component } from '@angular/core';
import { AddressDTO } from '@models/addressDto';
import { AddressService } from '@services/address.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-addresses',
  templateUrl: './my-addresses.component.html',
  styleUrls: ['./my-addresses.component.scss', '../profile-root.scss']
})
export class MyAddressesComponent {
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

  }

}

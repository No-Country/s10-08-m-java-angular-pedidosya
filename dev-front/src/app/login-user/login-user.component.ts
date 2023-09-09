import { Component } from '@angular/core';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent {
  selectedButton: string | undefined;

  selectButton(buttonName: string): void {
    if (this.selectedButton === buttonName) {
      this.selectedButton = undefined;
    } else {
      this.selectedButton = buttonName;
    }
  }
}

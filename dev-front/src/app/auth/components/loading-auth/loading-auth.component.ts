import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-loading-auth',
  templateUrl: './loading-auth.component.html',
  styleUrls: ['../shared-auth-styles.scss']
})
export class LoadingAuthComponent implements OnInit {
  constructor(private router: Router) {
  }


  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/auth/login']);
    }, 2000);
  }


}

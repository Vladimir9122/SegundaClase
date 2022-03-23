import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  salir(){
    this._authService.logout()
    this.removeLocalStorage()
    this.router.navigate(['home']);
  }

  removeLocalStorage() {
    localStorage.removeItem('User');
  }

}

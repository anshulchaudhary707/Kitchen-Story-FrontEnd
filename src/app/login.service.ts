import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  adminLoggedIn: boolean = false;
  userLoggedIn: boolean = false;

  cameFromCart: boolean = false;

  add2CartMessage: string = "";

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  adminLoggedIn: boolean = false;
  userLoggedIn: boolean = false;

}

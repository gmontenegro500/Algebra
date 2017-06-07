import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    constructor (
        private http: Http
    ) { }

    login (user: any) {
       let headers = new Headers();
       headers.append('Content-Type', 'application/json');
       return this.http.post('http://localhost/3002/user/login', user, { headers: headers})
            .map(res => res.json());
    }

    logout (token: string) {

    }

    isAuthenticated () {
      return tokenNotExpired();
    }
}

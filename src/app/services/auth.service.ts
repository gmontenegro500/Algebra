import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService {

    status: boolean;

    constructor (
        private http: Http
    ) { this.status = true; }

    login (user: any) {
       let headers = new Headers();
       headers.append('Content-Type', 'application/json');
       return this.http.post('http://localhost:3002/user/login', user, { headers: headers})
            .map(res => res.json());
    }

    logout () {
        return this.http.get('http://localhost:3002/user/logout')
            .map(res => res.json());
    }

    isAuthenticated () {
        return this.http.get('http://localhost:3002/user/status')
            .take(1)
            .map(res => res.json());
    }
}

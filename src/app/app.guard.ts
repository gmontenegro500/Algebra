import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor (
        private auth: AuthService,
        private router: Router 
    ) { }

    canActivate (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.auth.isAuthenticated().map(res => {
            if (!res.status) {
                console.log('BLOCKED BY AUTH GUARD');
                this.router.navigate(['/']);
            }
            return res.status;
        });
    }
}
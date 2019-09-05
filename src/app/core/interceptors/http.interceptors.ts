import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()

export class HttpTokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const headersConfig = {
            'Accept': 'application/json'
        };
        const idToken = localStorage.getItem("token");

        if (idToken) {
            headersConfig['Authorization'] = idToken;
            let request = req.clone({
                setHeaders: headersConfig
            });
            return next.handle(request);
        }
        else {
            return next.handle(req)
        }
        // // authorization with jwt token
        // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // if (currentUser && currentUser.token) {
        //     let request = req.clone({
        //         setHeaders: {
        //             Authorization: `Bearer ${currentUser.token}`
        //         }
        //     });
        // }

        // return next.handle(req);
    }
}
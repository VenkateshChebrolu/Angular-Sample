import {Injectable} from '@angular/core';
import { IProduct } from './Iproduct';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {tap,catchError} from 'rxjs/operators'


@Injectable({
    //angular 6 feature to register service
    providedIn : 'root'    
})

export class productservice{
    private producturl = 'src/app/products/products.json'

    constructor(private http : HttpClient){
    }

    getproducts() : Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.producturl).pipe(
            tap(data => console.log('All:'+ JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse)
    {
        let errormessage = '';
        if(err.error instanceof ErrorEvent){
            errormessage = `${err.error.message}`;
        }else{
            errormessage = `${err.status}, ${err.message}`
        }
        console.error(errormessage);
        return throwError(errormessage);  
    }
}
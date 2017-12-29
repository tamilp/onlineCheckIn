import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable'

@Injectable()

export class OnlineCheckInService{

    constructor(private _http: Http){}

    private extractData(res:Response){
        let body = res.json();
        return body.fields || { }
    }

    private handleError(error:any){
        return Observable.throw(error.statusText)
    }

    getCheckInContentAPI(): Observable<any>{
        //console.log('http://demo9003779.mockable.io/checkInContentAPI');
        return this._http.get('https://testapi.io/api/tamilp/checkInContentAPI')
            .map((response:Response)=>response.json())
            .catch(this.handleError);
        
    }

    getCheckIntAPI(): Observable<any>{
        //console.log('http://demo9003779.mockable.io/checkInContentAPI');
        return this._http.get('https://testapi.io/api/tamilp/checkInAPI')
            .map((response:Response)=>response.json())
            .catch(this.handleError);
        
    }
}
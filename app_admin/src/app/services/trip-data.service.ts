import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { getBootstrapListener } from '@angular/router/src/router_module';

import { Trip } from '../models/trip';

@Injectable()
export class TripDataService {

    constructor(private http: Http) { }

    private apiBaseUrl = 'http://localhost:3000/api/';

    public getTrips(): Promise<Trip[]> {
      console.log('Inside TripDataService#getTrips');
      return this.http
        .get(`${this.apiBaseUrl}trips`)
        .toPromise()
        .then(response => response.json() as Trip[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('Something has gone wrong', error);
      return Promise.reject(error.message || error);
    }

}

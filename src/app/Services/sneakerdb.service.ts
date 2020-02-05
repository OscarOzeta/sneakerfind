import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SneakerModel} from '../models/sneaker.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SneakerdbService {
  private URL = 'api.thesneakerdatabase.com/v1/sneakers';

  constructor(private http: HttpClient) {
  }


  getSneakersByTitle(title: string): Observable<any> {
    const params = new HttpParams();
    params.append('limit', '100');
    params.append('title', 'beluga');


    return this.http.get('http://api.thesneakerdatabase.com/v1/sneakers', {params});
  }
}

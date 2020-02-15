import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SneakerModel} from '../models/sneaker.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SneakerdbService {
  private URL = 'http://localhost:8080/api/v1/sneaker';
  loadedPosts: SneakerModel[] = [];

  constructor(private http: HttpClient) {
  }

  getSneakersByTitle(): Observable<SneakerModel[]>[] {
    this.http.get<{ [key: string]: SneakerModel }>(this.URL)
      .pipe(map(responseData => {
          const postsArray: SneakerModel[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key});
            }
          }
          return postsArray;
        })
      )
      .subscribe(posts => {
        this.loadedPosts = posts;
      });
    return this.loadedPosts;
  }
}

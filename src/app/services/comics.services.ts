import {Injectable} from '@angular/core'
import { HttpClient } from "@angular/common/http";
import {Observable, delay} from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class ComicsServices {
    constructor(private http: HttpClient){
    }

    _apiUrl: string = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey: string = 'apikey=968cc165f2be2b2088231fc0759e2132';
    _offset: number = 350

    getAllComics(offset: number = this._offset): Observable<any> {
        return this.http.get(`${this._apiUrl}comics?orderBy=issueNumber&limit=8&offset=${offset}&${this._apiKey}`)
    }
}

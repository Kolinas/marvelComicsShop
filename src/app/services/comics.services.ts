import {Injectable} from '@angular/core'
import { HttpClient } from "@angular/common/http";
import {Observable, delay, BehaviorSubject, map} from 'rxjs'
import { environment } from 'src/environments/environment';
import { IComics } from '../components/interface/IComics';

@Injectable({
    providedIn: 'root'
})

export class ComicsServices {

    private readonly selectedComics = new BehaviorSubject<IComics | null>(null)

    constructor(private http: HttpClient){
    }


    _apiUrl: string = environment.apiUrl;
    _apiKey: string = environment.apiKey;
    _offset: number = 350

    public get selectedComics$(): Observable<IComics | null>{
        return this.selectedComics
    }

    public getAllComics(offset: number = this._offset): Observable<any> {
        return this.http.get(`${this._apiUrl}comics?orderBy=issueNumber&limit=8&offset=${offset}&${this._apiKey}`)
    }

    public getComic(id: number): Observable<any> {
        return this.http.get(`${this._apiUrl}comics/${id}?${this._apiKey}`).pipe(map((response: any) => {
            return this.transformComicData(response.data.results[0])
        }))
    }

    public transformComicData({description, prices, id, title, thumbnail}: any) {
        const rendomPrice = (max: number, min: number) => Math.floor(min + Math.random() * (max + 1 - min))
        return {
            description: description ? description : 'Sorry, No Description Yet',
            id,
            title,
            thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
            prices: !prices[0].price ? rendomPrice(1, 15) : prices[0].price
        }
    }

    public setSelectedComics(comics: IComics) {
        this.selectedComics.next(comics)
    }

    public clearSelectedComics(){
        this.selectedComics.next(null)
    }
}

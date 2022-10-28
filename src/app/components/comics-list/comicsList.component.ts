import { Component, OnInit, Input} from '@angular/core';
import {ComicsServices} from '../../services/comics.services'
import { IComics } from '../interface/IComics';

@Component({
  selector: 'app-comiscList',
  templateUrl: './comicsList.component.html'
})

export class ComiscListComponent implements OnInit{
    constructor(private comicsServices: ComicsServices){
    }
    @Input() some!: string

    comicsList: IComics[] = [];
    loading: boolean = false;
    offset: number = 350;
    page: number = 1;
    
    public ngOnInit(): void {
        this.onRequest()
    }

    public handleOnClick(comics: IComics){
        this.comicsServices.setSelectedComics(comics)
    }

    public onRequest(offset?: number){
        this.loading = true
        this.comicsServices.getAllComics(offset).subscribe(comics => {
            const rendomPrice = (max: number, min: number) => Math.floor(min+Math.random() * (max+1-min))
            this.comicsList = comics.data.results.map(({description, prices, id, title, thumbnail}: any) : IComics => {
                return {
                    description: description ? description : 'Sorry, No Description Yet',
                    id,
                    title,
                    thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
                    prices: !prices[0].price ? rendomPrice(1, 15) : prices[0].price
                }
            })
            this.loading = false
        })
    }

    public data(item: IComics | null){
        console.log(item);
    }

    public nextPage(){
        this.offset +=8
        this.page++
        this.onRequest(this.offset)
    }

    public prevPage(){
        if (this.page > 1) {
            this.offset -=8
            this.page--
            this.onRequest(this.offset)
        }
    }
}
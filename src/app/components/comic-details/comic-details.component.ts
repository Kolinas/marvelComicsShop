import { Component, OnInit, Input, OnDestroy, AfterViewInit} from '@angular/core';
import {ComicsServices} from '../../services/comics.services'
import { IComics } from '../interface/IComics';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of, switchMap, tap, map } from 'rxjs';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html'
})

export class ComicDetailsComponent implements OnInit, OnDestroy{
    constructor(
        private route: ActivatedRoute, 
        private location: Location, 
        private comicsServices: ComicsServices
        ) {}

    comicId = Number(this.route.snapshot.paramMap.get('id'))
    comic$: Observable<IComics | null> = of(null)


    public ngOnInit(): void {
        this.comic$ = this.comicsServices.selectedComics$.pipe(
            switchMap(comics => !!comics ? of(comics) : this.comicsServices.getComic(this.comicId)),
        )
    }

    public ngOnDestroy(): void{
        this.comicsServices.clearSelectedComics()
    }

    // public getComics(): void {
    //     this.comicsServices.selectedComics$.subscribe(comics => {
    //         this.comic = comics
    //     })
    // }

    public goBack(): void {
        this.location.back();
      }
}
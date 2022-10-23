import {Injectable} from '@angular/core';
import { OrderList } from './../components/interface/OrderList';
import {Subject} from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class OrderServices {

    orderList: OrderList[] = []

    public addToCart(order: OrderList): void {

        const findComics = this.orderList.find(comics => comics.id === order.id)
         findComics?.count ? findComics.count++  : this.orderList.push({...order, count: 1})

    }

//     public orderList$ = new Subject<any>();

//     public addToCart(comics: {}) {
//         this.orderList$.next(comics); 
//    }
}

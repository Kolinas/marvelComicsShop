import {Injectable} from '@angular/core';
import { OrderList } from './../components/interface/OrderList';
import { IComics } from './../components/interface/IComics';
import {Subject} from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class OrderServices {

    orderList: OrderList[] = []

    public get getCartItems() {
        return this.orderList
    }

    public addToCart(order: IComics): void {
        const findComics = this.orderList.find(comics => comics.id === order.id)
        findComics ? this.orderList.map(item => item.id === order.id ? {...item, count: item.count++} : item )  : this.orderList.push({...order, count: 1})
    }

//     public orderList$ = new Subject<any>();

//     public addToCart(comics: {}) {
//         this.orderList$.next(comics); 
//    }
}

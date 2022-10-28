import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderServices } from '../../services/order.service'
import { IComics } from '../interface/IComics';
import { OrderList } from '../interface/OrderList';


@Component({
    selector: 'app-comics',
    templateUrl: './comics.component.html'
})

export class ComicsComponent {
    @Input() comics: IComics | null = null;
    @Output() itemClicked = new EventEmitter<void>()

    constructor(private OrderServices: OrderServices) {
    }

    showImg: boolean = true;

    public handleOnClick(){
        this.itemClicked.emit()
    }

    add() {
        if (this.comics) {
            const { id, title, prices } = this.comics
            this.OrderServices.addToCart({ id, title, prices })
        }
    }
}

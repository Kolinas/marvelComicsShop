import { Component, OnInit, Input} from '@angular/core';
import {ComicsServices} from '../../services/comics.services'
import { IComics } from '../interface/IComics';
import { OrderServices } from '../../services/order.service'
import { OrderList } from './../interface/OrderList';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class CartComponent {
  constructor(private OrderServices: OrderServices) {}

  cartList = this.OrderServices.getCartItems

  log(){
    console.log(this.cartList);
  }
}

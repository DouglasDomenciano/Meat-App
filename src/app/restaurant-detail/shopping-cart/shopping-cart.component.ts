import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
     return this.shoppingCartService.items
  }

  clear(): void {
    this.shoppingCartService.clear()
  }

  removeItem(item: any): void {
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: any): void {
    this.shoppingCartService.addItem(item)
  }

  total(): number {
      return this.shoppingCartService.total()
  }

}

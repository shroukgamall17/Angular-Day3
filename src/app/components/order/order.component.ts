import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule,CommonModule,ProductComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  categories:Icategory[];
  selectedCatId:number=0;
  productsBought: Iproduct[] = [];
  constructor(){
    this.categories=[
      {id:1, name:"Mobiles"},
      {id:2,name:"Laptops"},
      {id:3,name:"TVs"}
    ];
  }

sendProduct(product: Iproduct) {
  const existingProduct = this.productsBought.find(TheSelectedProduct => TheSelectedProduct.id === product.id);
  

  if (existingProduct) {
    existingProduct.quantity++;
    existingProduct.price = product.price * existingProduct.quantity;
    
  } else {
    this.productsBought.push({ ...product, quantity: 1 }); 
  }
  
}



  removeProduct(product: Iproduct) {
    const index = this.productsBought.indexOf(product);
    if (index !== -1) {
      this.productsBought.splice(index, 1); 
    }
  }
}

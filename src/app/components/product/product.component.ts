import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
//import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HoverCardDirective } from '../../directives/hover-card.directive';
import { PipeTransformPipe } from '../../pipes/pipe-transform.pipe';
import { CreditPipePipe } from '../../pipes/credit-pipe.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,HoverCardDirective,PipeTransformPipe,CreditPipePipe],

templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges {
  products:Iproduct[];
  filteredProducts: Iproduct[];
@Input() received:number=0;
  egyptianNationalId:string='29510110101241';
  creditCardId:string='1717222217172222';
  //define event
  @Output() onProductBought: EventEmitter<Iproduct> 
  constructor(){
    this.products=[
      {id:1,name:"Mobile1",img:"https://daliaassets.s3.amazonaws.com/Yuno/yuno_icon_500x500.png",price:50000,quantity:3,categoryID:1},
      {id:2,name:"Mobile2",img:"https://daliaassets.s3.amazonaws.com/Yuno/yuno_icon_500x500.png",price:40000,quantity:1,categoryID:1},
      {id:3,name:"Mobile3",img:"https://daliaassets.s3.amazonaws.com/Yuno/yuno_icon_500x500.png",price:10000,quantity:2,categoryID:1},
      {id:4,name:"laptop1",img:"https://daliaassets.s3.amazonaws.com/Yuno/yuno_icon_500x500.png",price:45000,quantity:3,categoryID:2},
      {id:5,name:"laptop2",img:"https://daliaassets.s3.amazonaws.com/Yuno/yuno_icon_500x500.png",price:60000,quantity:1,categoryID:2},
      {id:6,name:"laptop3",img:"https://daliaassets.s3.amazonaws.com/Yuno/yuno_icon_500x500.png",price:65000,quantity:0,categoryID:2},
      {id:7,name:"TV1",img:"https://daliaassets.s3.amazonaws.com/Yuno/yuno_icon_500x500.png",price:30000,quantity:2,categoryID:3},
      {id:8,name:"TV2",img:"https://daliaassets.s3.amazonaws.com/Yuno/yuno_icon_500x500.png",price:35000,quantity:0,categoryID:3},
      {id:9,name:"TV3",img:"https://daliaassets.s3.amazonaws.com/Yuno/yuno_icon_500x500.png",price:3200,quantity:4,categoryID:3},
       ];
   this.onProductBought=new EventEmitter<Iproduct>();
    this.filteredProducts=this.products;
  }
  ngOnChanges(){
    this.filterProducts()
  }
  buyProduct(product: Iproduct) {
    if (product.quantity > 0) {
      product.quantity--;
    }
    //fire event
    this.onProductBought.emit(product);
  }
  
  filterProducts(){
    if(this.received==0){
      this.filteredProducts=this.products;
    }else{
      this.filteredProducts=this.products.filter((item)=>item.categoryID==this.received);
    }
  }
}




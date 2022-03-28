import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products!: Product[];

  constructor() {
    this.products = [
      {
        id: '1',
        productPhotoUrl: '../assets/images/PngItem_4791208 1 (2).png',
        productName: 'CosmicByte GS430 Wireless Headset',
        rating: '4.4',
        mockPrice: '$159.00',
        price: '$99.00',
      },
      {
        id: '2',
        productPhotoUrl: '../assets/images/PngItem_5118753 1 (3).png',
        productName: 'HP H200GS Gaming(Black, On the Ear)',
        rating: '4.4',
        mockPrice: '$109.00',
        price: '$79.00',
      },
      {
        id: '3',
        productPhotoUrl: '../assets/images/PngItem_4791208 1 (2).png',
        productName: 'CosmicByte GS430 Wireless Headset',
        rating: '4.4',
        mockPrice: '$159.00',
        price: '$99.00',
      },
      {
        id: '4',
        productPhotoUrl: '../assets/images/PngItem_5118753 1 (3).png',
        productName: 'HP H200GS Gaming(Black, On the Ear)',
        rating: '4.4',
        mockPrice: '$109.00',
        price: '$79.00',
      },
      {
        id:"5",
        productPhotoUrl:'../assets/images/c-d-x-PDX_a_82obo-unsplash 1 (1) (1).png',
        productName:'CosmicByte GS430 Wireless Headset',
        rating:'4.4',
        mockPrice:'$159.00',
        price:'$99.00'
      },
    ];
  }

  findAll(): Observable<Product[]> {
    return of(this.products);
  }


  find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }
}

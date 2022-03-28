import { Component } from '@angular/core';
import { fade, fadeEnter, fadeInDown, fadeOut } from './animations/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[fadeOut,fadeEnter,fadeInDown,fade]
})
export class AppComponent {
  productDetails:any=[
    {
      productPhotoUrl:'../assets/images/PngItem_4791208 1 (2).png',
      productName:'CosmicByte GS430 Wireless Headset',
      rating:'4.4',
      mockPrice:'$159.00',
      price:'$99.00'
    },
    {
      productPhotoUrl:'../assets/images/PngItem_5118753 1 (3).png',
      productName:'HP H200GS Gaming(Black, On the Ear)',
      rating:'4.4',
      mockPrice:'$109.00',
      price:'$79.00'
    },
    {
      productPhotoUrl:'../assets/images/PngItem_4791208 1 (2).png',
      productName:'CosmicByte GS430 Wireless Headset',
      rating:'4.4',
      mockPrice:'$159.00',
      price:'$99.00'
    },
    {
      productPhotoUrl:'../assets/images/PngItem_5118753 1 (3).png',
      productName:'HP H200GS Gaming(Black, On the Ear)',
      rating:'4.4',
      mockPrice:'$109.00',
      price:'$79.00'
    },
    // {
    //   productPhotoUrl:'../assets/images/c-d-x-PDX_a_82obo-unsplash 1 (1) (1).png',
    //   productName:'CosmicByte GS430 Wireless Headset',
    //   rating:'4.4',
    //   mockPrice:'$159.00',
    //   price:'$99.00'
    // },

  ];

  removeData(index:number){
    this.productDetails.splice(index,1)
  }
}

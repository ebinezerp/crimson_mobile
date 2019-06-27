import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { imageURL } from 'src/app/home/utility';
import { UserService } from 'src/app/home/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {

  products: Product[];
  imageUrl: string;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router
    ) {
    this.imageUrl = imageURL;
    console.log('main page const');
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.productService.setProducts(data);
        this.products = data;
      }
    );
  }

  ngOnDestory() {
  }

}

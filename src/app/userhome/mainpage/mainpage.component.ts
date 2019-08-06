import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';
import { imageURL, catImageURL } from 'src/app/utility/utility';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Cartitem } from 'src/app/model/cartitem';
import { CartItemService } from 'src/app/services/cart-item.service';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {

  products: Product[];
  categories: Category[][] = [];
  catImageURL: string;

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.75,
    spaceBetween: 15,
  };

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
    private cartService: CartService,
    private cartItemService: CartItemService,
    private categoryService: CategoryService
    ) {
      this.catImageURL = catImageURL;
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      (categories) => {
        for (let row = 0; row < categories.length;) {
          let categoryArray = [];
          for (let col = 1; col < 4 && row < categories.length; col++) {
            categoryArray.push(categories[row++]);
          }
          this.categories.push(categoryArray);
        }
        localStorage.setItem('categories', JSON.stringify(categories));
      }
    );
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

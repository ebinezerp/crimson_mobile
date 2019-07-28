import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Cartitem } from 'src/app/model/cartitem';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss'],
})
export class CategoryProductComponent implements OnInit {


  products: Product[];

  constructor(
    private categoryService: CategoryService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const categoryId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    this.categoryService.getCategoryProducts(categoryId).subscribe(
      (products) => {
        this.products = products;
      }
    );
  }

}

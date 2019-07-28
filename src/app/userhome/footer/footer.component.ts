import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(
    private router: Router,
    private loaction: Location,
    private activatedRoute: ActivatedRoute
    ) {

   }

  ngOnInit() {
  }

  backPage(): void {
     this.loaction.back();
  }
}

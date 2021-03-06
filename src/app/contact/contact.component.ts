import { Component, OnInit } from '@angular/core';
import { RoutingService, ProductSearchService } from '@spartacus/core';
import { filter, pluck, take } from 'rxjs/operators'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private routingService: RoutingService, private productSearchService: ProductSearchService) { }

  ngOnInit(): void {
  }

  goToRandomProduct() {
    this.productSearchService.search('cam');
    this.productSearchService.getResults().
      pipe(
        filter(res => res.hasOwnProperty('products')),
        pluck('products'),
        take(1)
      )
      .subscribe((products: any[]) => {
        console.log(products);
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        console.log(randomProduct);
        this.routingService.go({
          cxRoute: 'product',
          params: { code: randomProduct.code, nameForUrl: randomProduct.nameForUrl }
        });
      });
  }


}

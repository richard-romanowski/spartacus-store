import { Component, OnInit } from '@angular/core';
import { RoutingService, ProductSearchService } from '@spartacus/core';
import { filter } from 'rxjs/operators'
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
        filter(res => res.hasOwnProperty('products'))
      ).
      subscribe(console.log);
    // this.routingService.go({
    //   cxRoute: 'product',
    //   params: { code: '1981414', nameForUrl: 'pl60-pink' }
    //  });
  }


}

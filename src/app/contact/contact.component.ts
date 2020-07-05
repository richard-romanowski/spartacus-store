import { Component, OnInit } from '@angular/core';
import { RoutingService } from '@spartacus/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private routingService: RoutingService) { }

  ngOnInit(): void {
  }

  goToRandomProduct() {
    this.routingService.go({
      cxRoute: 'product',
      params: { code: '1981414', nameForUrl: 'pl60-pink' }
     });
  }


}

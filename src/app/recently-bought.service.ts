import { Injectable } from '@angular/core';
import { UserOrderService, Product, AuthService, UserOrderConnector, OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs/internal/Observable';
import { mergeAll, take, mergeMap, map, filter, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecentlyBoughtService {

  constructor(private userOrderService: UserOrderService, private orderConnector: UserOrderConnector,
              private authService: AuthService) { }

  getUserId() {
    return this.authService
      .getOccUserId()
      .pipe(
        take(1));
  }

  getOrder(code: string) {
    return this.getUserId()
      .pipe(
        mergeMap(userId => this.orderConnector.get(userId, code))
      );
  }

  getRecentlyBought(): Observable<Product[]> {
    return this.userOrderService.getOrderHistoryList(10)
      .pipe(
        map(oh => oh.orders),
        filter(orders => orders.length > 0),
        take(1),
        mergeAll(),
        mergeMap(order => this.getOrder(order.code)),
        mergeMap(order => order.entries),
        map((order: OrderEntry) => order.product),
        toArray()
      );
  }
}

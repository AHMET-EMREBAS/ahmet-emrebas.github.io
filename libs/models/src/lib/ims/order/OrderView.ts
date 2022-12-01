import { DataSource } from 'typeorm';
import { Order } from './Order';

import { ViewEntity, ViewColumn } from '@ae/core';

import { Product } from '../product/Product';

import { Cart } from '../cart/Cart';

import { Customer } from '../customer/Customer';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('order.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY order.id)`, 'index')

      .addSelect('order.quantity', 'quantity')

      .addSelect('product.barcode', 'barcode')

      .addSelect('cart.id', 'cartId')

      .addSelect('customer.username', 'customer')

      .from(Order, 'order')

      .leftJoin(Product, 'product', 'product.id = order.productId')

      .leftJoin(Cart, 'cart', 'cart.id = order.cartId')

      .leftJoin(Customer, 'customer', 'customer.id = order.customerId');
  },
})
export class OrderView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  quantity: number;

  @ViewColumn()
  barcode: string;

  @ViewColumn()
  cartId: number;

  @ViewColumn()
  customer: string;
}

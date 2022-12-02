import { Args } from '@nestjs/graphql';
import {
  GAdd,
  GCount,
  GOptions,
  GRead,
  GReadById,
  GRemove,
  GSet,
  GUnset,
  GUpdate,
  GDelete,
  GWrite,
  ArgId,
  ArgRid,
  QueryDto,
  Resolver,
} from '@ae/core';
import { Cart } from '@ae/models/ims/cart/Cart';
import { CartView } from '@ae/models/ims/cart/CartView';
import { CartOptionView } from '@ae/models/ims/cart/CartOptionView';
import { CreateCartDto } from '@ae/models/ims/cart/dto/CreateCartDto';
import { UpdateCartDto } from '@ae/models/ims/cart/dto/UpdateCartDto';

import { CartService } from './CartService';
import { CartViewService } from './CartViewService';
import { CartOptionViewService } from './CartOptionViewService';

@Resolver(Cart)
export class CartResolver {
  constructor(
    private readonly service: CartService,
    private readonly viewService: CartViewService,
    private readonly optionViewService: CartOptionViewService
  ) {}

  @GRead(Cart)
  findCart(@Args('query') query: QueryDto<Cart & CartView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @GReadById(Cart)
  findByCartId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GWrite(Cart)
  saveCart(@Args('cart') body: CreateCartDto) {
    return this.service.save(body);
  }

  @GUpdate()
  updateCart(@ArgId() id: number, @Args('cart') body: UpdateCartDto) {
    return this.service.update(id, body);
  }

  @GDelete()
  deleteCart(@ArgId() id: number) {
    return this.service.delete(id);
  }

  @GCount()
  countCart() {
    return this.service.count();
  }

  @GOptions()
  optionsCart(@Args('query') query: QueryDto<Cart & CartView>) {
    return this.optionViewService.find(query);
  }
}

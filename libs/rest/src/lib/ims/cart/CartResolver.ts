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
  GWriteMany,
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
import { ReadCartDto } from '@ae/models/ims/cart/dto/ReadCartDto';

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

  @GRead(ReadCartDto)
  findCarts(@Args('query', { nullable: true }) query: QueryDto<Cart>) {
    return this.service.find(query);
  }

  @GRead(CartView)
  viewCarts(@Args('query', { nullable: true }) query: QueryDto<CartView>) {
    return this.viewService.find(query);
  }

  @GReadById(ReadCartDto)
  findByCartId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GReadById(CartView)
  viewByCartId(@ArgId() id: number) {
    return this.viewService.findOneBy({ id });
  }

  @GWrite(ReadCartDto)
  saveCart(@Args('cart') body: CreateCartDto) {
    return this.service.save(body);
  }

  @GWriteMany(ReadCartDto)
  saveCarts(
    @Args('carts', { type: () => [CreateCartDto] })
    body: CreateCartDto[]
  ) {
    return this.service.saveMany(body);
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
  optionsCart(@Args('query') query: QueryDto<CartOptionView>) {
    return this.optionViewService.find(query);
  }
}

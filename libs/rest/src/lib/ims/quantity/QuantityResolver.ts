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
import { Quantity } from '@ae/models/ims/quantity/Quantity';
import { QuantityView } from '@ae/models/ims/quantity/QuantityView';
import { QuantityOptionView } from '@ae/models/ims/quantity/QuantityOptionView';
import { CreateQuantityDto } from '@ae/models/ims/quantity/dto/CreateQuantityDto';
import { UpdateQuantityDto } from '@ae/models/ims/quantity/dto/UpdateQuantityDto';
import { ReadQuantityDto } from '@ae/models/ims/quantity/dto/ReadQuantityDto';

import { QuantityService } from './QuantityService';
import { QuantityViewService } from './QuantityViewService';
import { QuantityOptionViewService } from './QuantityOptionViewService';

@Resolver(Quantity)
export class QuantityResolver {
  constructor(
    private readonly service: QuantityService,
    private readonly viewService: QuantityViewService,
    private readonly optionViewService: QuantityOptionViewService
  ) {}

  @GRead(ReadQuantityDto)
  findQuantitys(@Args('query', { nullable: true }) query: QueryDto<Quantity>) {
    return this.service.find(query);
  }

  @GRead(QuantityView)
  viewQuantitys(
    @Args('query', { nullable: true }) query: QueryDto<QuantityView>
  ) {
    return this.viewService.find(query);
  }

  @GReadById(ReadQuantityDto)
  findByQuantityId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GReadById(QuantityView)
  viewByQuantityId(@ArgId() id: number) {
    return this.viewService.findOneBy({ id });
  }

  @GWrite(ReadQuantityDto)
  saveQuantity(@Args('quantity') body: CreateQuantityDto) {
    return this.service.save(body);
  }

  @GWriteMany(ReadQuantityDto)
  saveQuantitys(
    @Args('quantitys', { type: () => [CreateQuantityDto] })
    body: CreateQuantityDto[]
  ) {
    return this.service.saveMany(body);
  }

  @GUpdate()
  updateQuantity(
    @ArgId() id: number,
    @Args('quantity') body: UpdateQuantityDto
  ) {
    return this.service.update(id, body);
  }

  @GDelete()
  deleteQuantity(@ArgId() id: number) {
    return this.service.delete(id);
  }

  @GSet('product')
  setQuantityProduct(@ArgId() id: number, @ArgRid() productId: number) {
    return this.service.set(id, productId, 'product');
  }

  @GUnset('product')
  unsetQuantityProduct(@ArgId() id: number) {
    return this.service.unset(id, 'product');
  }

  @GSet('store')
  setQuantityStore(@ArgId() id: number, @ArgRid() storeId: number) {
    return this.service.set(id, storeId, 'store');
  }

  @GUnset('store')
  unsetQuantityStore(@ArgId() id: number) {
    return this.service.unset(id, 'store');
  }

  @GCount()
  countQuantity() {
    return this.service.count();
  }

  @GOptions()
  optionsQuantity(@Args('query') query: QueryDto<QuantityOptionView>) {
    return this.optionViewService.find(query);
  }
}

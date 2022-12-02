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
import { Price } from '@ae/models/ims/price/Price';
import { PriceView } from '@ae/models/ims/price/PriceView';
import { PriceOptionView } from '@ae/models/ims/price/PriceOptionView';
import { CreatePriceDto } from '@ae/models/ims/price/dto/CreatePriceDto';
import { UpdatePriceDto } from '@ae/models/ims/price/dto/UpdatePriceDto';

import { PriceService } from './PriceService';
import { PriceViewService } from './PriceViewService';
import { PriceOptionViewService } from './PriceOptionViewService';

@Resolver(Price)
export class PriceResolver {
  constructor(
    private readonly service: PriceService,
    private readonly viewService: PriceViewService,
    private readonly optionViewService: PriceOptionViewService
  ) {}

  @GRead(Price)
  findPrice(@Args('query') query: QueryDto<Price & PriceView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @GReadById(Price)
  findByPriceId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GWrite(Price)
  savePrice(@Args('price') body: CreatePriceDto) {
    return this.service.save(body);
  }

  @GUpdate()
  updatePrice(@ArgId() id: number, @Args('price') body: UpdatePriceDto) {
    return this.service.update(id, body);
  }

  @GDelete()
  deletePrice(@ArgId() id: number) {
    return this.service.delete(id);
  }

  @GSet('pricelevel')
  setPricePricelevel(@ArgId() id: number, @ArgRid() pricelevelId: number) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @GUnset('pricelevel')
  unsetPricePricelevel(@ArgId() id: number) {
    return this.service.unset(id, 'pricelevel');
  }

  @GSet('product')
  setPriceProduct(@ArgId() id: number, @ArgRid() productId: number) {
    return this.service.set(id, productId, 'product');
  }

  @GUnset('product')
  unsetPriceProduct(@ArgId() id: number) {
    return this.service.unset(id, 'product');
  }

  @GCount()
  countPrice() {
    return this.service.count();
  }

  @GOptions()
  optionsPrice(@Args('query') query: QueryDto<Price & PriceView>) {
    return this.optionViewService.find(query);
  }
}

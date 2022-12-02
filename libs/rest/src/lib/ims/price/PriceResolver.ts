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
import { Price } from '@ae/models/ims/price/Price';
import { PriceView } from '@ae/models/ims/price/PriceView';
import { PriceOptionView } from '@ae/models/ims/price/PriceOptionView';
import { CreatePriceDto } from '@ae/models/ims/price/dto/CreatePriceDto';
import { UpdatePriceDto } from '@ae/models/ims/price/dto/UpdatePriceDto';
import { ReadPriceDto } from '@ae/models/ims/price/dto/ReadPriceDto';
import { QueryPriceDto } from '@ae/models/ims/price/dto/QueryPriceDto';

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

  @GRead(ReadPriceDto)
  findPrices(
    @Args('query', { nullable: true }) query: QueryDto<Price>,
    @Args('where', { nullable: true }) where: QueryPriceDto
  ) {
    return this.service.find({ ...query, where });
  }

  @GRead(PriceView)
  viewPrices(
    @Args('query', { nullable: true }) query: QueryDto<PriceView>,
    @Args('where', { nullable: true }) where: QueryPriceDto
  ) {
    return this.viewService.find({ ...query, where });
  }

  @GReadById(ReadPriceDto)
  findByPriceId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GReadById(PriceView)
  viewByPriceId(@ArgId() id: number) {
    return this.viewService.findOneBy({ id });
  }

  @GWrite(ReadPriceDto)
  savePrice(@Args('price') body: CreatePriceDto) {
    return this.service.save(body);
  }

  @GWriteMany(ReadPriceDto)
  savePrices(
    @Args('prices', { type: () => [CreatePriceDto] })
    body: CreatePriceDto[]
  ) {
    return this.service.saveMany(body);
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
  optionsPrice(@Args('query') query: QueryDto<PriceOptionView>) {
    return this.optionViewService.find(query);
  }
}

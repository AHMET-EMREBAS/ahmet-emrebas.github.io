import { TypeOrmModule } from '@nestjs/typeorm';

export function Mockdb(name: string) {
  return TypeOrmModule.forRoot({
    type: 'sqlite',
    database: `tmp/test/${name}.sqlite`,

    autoLoadEntities: true,
    synchronize: true,
    dropSchema: true,
  });
}

export function MockDbWithEntities(name: string, entities: any[]) {
  return [Mockdb(name), TypeOrmModule.forFeature(entities)];
}

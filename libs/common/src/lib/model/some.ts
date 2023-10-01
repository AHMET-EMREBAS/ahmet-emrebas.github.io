import { Entity, Column, Relation} from '@techbir/core';
@Entity()
export class Product {
@Column({"type":"string","name":"name"})
name?:string;}
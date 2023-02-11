import {
  Field,
  PrimaryKey,
  TigrisCollection,
  TigrisDataTypes,
} from "@tigrisdata/core";

@TigrisCollection("test")
export class Test {
  @PrimaryKey(TigrisDataTypes.INT32, { order: 1 })
  id!: number;

  @Field()
  text!: string;
}

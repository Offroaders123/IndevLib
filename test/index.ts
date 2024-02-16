import type { ByteArrayTag, ByteTag, FloatTag, IntTag, LongTag, ShortTag, StringTag } from "nbtify";

// Level

export interface Level {
  Environment: Environment;
  Map: Map;
  TileEntities: BlockEntity[];
  About: About;
  Entities: Entity[];
}

export interface Environment {
  SurroundingGroundHeight: ShortTag;
  TimeOfDay: ShortTag;
  CloudHeight: ShortTag;
  CloudColor: IntTag;
  SkyBrightness: ByteTag;
  SkyColor: IntTag;
  FogColor: IntTag;
  SurroundingWaterHeight: ShortTag;
  SurroundingGroundType: ByteTag;
  SurroundingWaterType: ByteTag;
}

export interface Map {
  Blocks: ByteArrayTag;
  Length: ShortTag;
  Height: ShortTag;
  Data: ByteArrayTag;
  Width: ShortTag;
  Spawn: [ShortTag, ShortTag, ShortTag];
}

export interface About {
  Author: StringTag;
  CreatedOn: LongTag;
  Name: StringTag;
}

// Block Entity (Tile Entity)

export interface BlockEntity {}

// Entity

export type Entity<K extends keyof EntityNameMap = keyof EntityNameMap> = EntityNameMap[K];

export interface EntityNameMap {
  Arrow: Arrow;
  Creeper: Creeper;
  Giant: Giant;
  Item: ItemEntity;
  LocalPlayer: LocalPlayer;
  Painting: Painting;
  Pig: Pig;
  Skeleton: Skeleton;
  Spider: Spider;
  Zombie: Zombie;
}

export interface Arrow extends EntityLike<EntityResource.Arrow> {}

export interface Creeper extends EntityLike<EntityResource.Creeper> {}

export interface Giant extends EntityLike<EntityResource.Giant> {}

export interface ItemEntity extends EntityLike<EntityResource.Item> {}

export interface LocalPlayer extends EntityLike<EntityResource.LocalPlayer> {
  Score: IntTag;
  Inventory: Item[];
}

export interface Painting extends EntityLike<EntityResource.Painting> {}

export interface Pig extends EntityLike<EntityResource.Pig> {}

export interface Skeleton extends EntityLike<EntityResource.Skeleton> {}

export interface Spider extends EntityLike<EntityResource.Spider> {}

export interface Zombie extends EntityLike<EntityResource.Zombie> {}

export interface EntityLike<EntityID extends EntityResource> {
  Motion: [FloatTag, FloatTag, FloatTag];
  FallDistance: FloatTag;
  Pos: [FloatTag, FloatTag, FloatTag];
  Health: ShortTag;
  DeathTime: ShortTag;
  Fire: ShortTag;
  id: `${EntityID}`;
  Air: ShortTag;
  HurtTime: ShortTag;
  Rotation: [FloatTag, FloatTag];
  AttackTime: ShortTag;
}

export enum EntityResource {
  Arrow = "Arrow",
  Creeper = "Creeper",
  Giant = "Giant",
  Item = "Item",
  LocalPlayer = "LocalPlayer",
  Painting = "Painting",
  Pig = "Pig",
  Skeleton = "Skeleton",
  Spider = "Spider",
  Zombie = "Zombie",
}

// Item

export interface Item {
  Slot: ByteTag;
  id: ShortTag; // ItemResource
  Count: ByteTag;
  Damage: ShortTag;
}
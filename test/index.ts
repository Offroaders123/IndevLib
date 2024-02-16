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

// Block

export enum BlockResource {
  air = 0,
  stone,
  grass_block,
  dirt,
  cobblestone,
  planks,
  sapling,
  bedrock,
  flowing_water,
  water,
  flowing_lava,
  lava,
  sand,
  gravel,
  gold_ore,
  iron_ore,
  coal_ore,
  wood,
  leaves,
  sponge,
  glass,
  red_cloth,
  orange_cloth,
  yellow_cloth,
  chartreuse_cloth,
  green_cloth,
  spring_green_cloth,
  cyan_cloth,
  capri_cloth,
  ultramarine_cloth,
  violet_cloth,
  purple_cloth,
  magenta_cloth,
  rose_cloth,
  dark_gray_cloth,
  light_gray_cloth,
  white_cloth,
  dandelion,
  rose,
  brown_mushroom,
  red_mushroom,
  block_of_gold,
  block_of_iron,
  double_slab,
  slab,
  bricks,
  tnt,
  bookshelf,
  mossy_cobblestone,
  obsidian,
  torch,
  fire,
  water_spawner,
  lava_spawner,
  chest,
  gear,
  diamond_ore,
  block_of_diamond,
  crafting_table,
  crops,
  farmland,
  furnace,
  lit_furnace
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
  id: ShortTag<ItemResource>;
  Count: ByteTag;
  Damage: ShortTag;
}

export enum ItemResource {
  iron_shovel = 256,
  iron_pickaxe,
  iron_axe,
  flint_and_steel,
  apple,
  bow,
  arrow,
  coal,
  diamond,
  iron_ingot,
  gold_ingot,
  iron_sword,
  wooden_sword,
  wooden_shovel,
  wooden_pickaxe,
  wooden_axe,
  stone_sword,
  stone_shovel,
  stone_pickaxe,
  stone_axe,
  diamond_sword,
  diamond_shovel,
  diamond_pickaxe,
  diamond_axe,
  stick,
  bowl,
  mushroom_stew,
  golden_sword,
  golden_shovel,
  golden_pickaxe,
  golden_axe,
  string,
  feather,
  gunpowder,
  wooden_hoe,
  stone_hoe,
  iron_hoe,
  diamond_hoe,
  golden_hoe,
  seeds,
  wheat,
  bread,
  leather_cap,
  leather_tunic,
  leather_pants,
  leather_boots,
  chain_helmet,
  chain_chestplate,
  chain_leggings,
  chain_boots,
  iron_helmet,
  iron_chestplate,
  iron_leggings,
  iron_boots,
  diamond_helmet,
  diamond_chestplate,
  diamond_leggings,
  diamond_boots,
  golden_helmet,
  golden_chestplate,
  golden_leggings,
  golden_boots,
  flint,
  raw_porkchop,
  cooked_porkchop,
  painting
}
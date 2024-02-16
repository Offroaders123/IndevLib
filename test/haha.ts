import { Int16, Int8, read, write } from "nbtify";
import { readFile, writeFile } from "node:fs/promises";

import { Arrow, BlockResource, Painting, type Level, type LocalPlayer } from "./index.js";

const path = new URL("./world/painting.mclevel",import.meta.url);
const world = await read<Level>(await readFile(path));

const player = world.data.Entities.find((entity): entity is LocalPlayer => entity.id === "LocalPlayer");
console.log(player);

// if (player) player.Health = new Int16(500);

// Painting

// player?.Inventory.push({
//   Slot: new Int8(16),
//   id: new Int16(321),
//   Count: new Int8(127),
//   Damage: new Int16(0)
// });

// player?.Inventory.push({
//   Slot: new Int8(17),
//   id: new Int16(BlockResource.gear),
//   Count: new Int8(63),
//   Damage: new Int16(0)
// });

// player?.Inventory.push({
//   Slot: new Int8(18),
//   id: new Int16(BlockResource.tnt),
//   Count: new Int8(63),
//   Damage: new Int16(0)
// });

// player?.Inventory.push({
//   Slot: new Int8(19),
//   id: new Int16(BlockResource.furnace),
//   Count: new Int8(63),
//   Damage: new Int16(0)
// });

// player?.Inventory.push({
//   Slot: new Int8(20),
//   id: new Int16(BlockResource.lit_furnace),
//   Count: new Int8(63),
//   Damage: new Int16(0)
// });

// player?.Inventory.push({
//   Slot: new Int8(21),
//   id: new Int16(BlockResource.lava_spawner),
//   Count: new Int8(63),
//   Damage: new Int16(0)
// });

// console.log(world.data.Entities.filter(entity => entity.id === "Arrow").map(entity => Object.entries((entity as Arrow)).sort()).flat());
// console.log(new Set(world.data.Entities.filter((entity): entity is Painting => entity.id === "Painting").map(painting => painting.Dir.valueOf())));
// console.log([...new Set(world.data.Entities.filter((entity): entity is Painting => entity.id === "Painting").map(painting => painting.Motive))].sort().map(id => `"${id}"`).join(" | "));

// console.log(new Set(world.data.Entities.map(entity => entity.id)));
// console.log(Object.entries(world.data.Entities.find(entity => entity.id === "PrimedTnt")!).sort());

// console.log(new Set(world.data.Entities.filter(entity => "Air" in entity).map(entity => entity.id).sort()));
// console.log(new Set(world.data.Entities.filter(entity => "Air" in entity && "Health" in entity).map(entity => entity.id).sort()));

// await writeFile(path,await write(world));
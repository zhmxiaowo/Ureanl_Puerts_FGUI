"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
const puerts_2 = require("puerts");
console.log("自建,无敌!");
// let gameInstance = (argv.getByName("GameInstance") as UE.GameInstance);
let world = puerts_2.argv.getByName("GameInstance").GetWorld();
if (world == undefined) {
    console.log("wocao!");
}
let refactors = puerts_1.$ref(undefined);
UE.GameplayStatics.GetAllActorsOfClass(world, UE.StaticMeshActor.StaticClass(), refactors);
var actors = puerts_1.$unref(refactors);
let num = actors.Num();
let cube;
if (num > 0) {
    for (let i = 0; i < num; i++) {
        console.log(actors.Get(i).GetName());
        if (actors.Get(i).GetName().startsWith("Cube")) {
            cube = actors.Get(i);
            cube.K2_SetActorLocationAndRotation(new UE.Vector(0, 0, 90), new UE.Rotator(0, 90, 0), false, puerts_1.$ref(new UE.HitResult()), false);
            console.log("成功啦!");
            break;
        }
    }
}
//# sourceMappingURL=test.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
console.log("start init ui!");
let world = puerts_1.argv.getByName("GameInstance").GetWorld();
let controller = UE.GameplayStatics.GetPlayerController(world, 0);
console.log("controller is :" + ((controller == undefined) ? "empty!" : "exist!"));
if (controller != undefined) {
    console.log("1");
    controller.SetShowMouseCursor(true);
}
else {
    console.log("2");
}
//# sourceMappingURL=UIStart.js.map
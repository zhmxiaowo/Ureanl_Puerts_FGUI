"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
const puerts_2 = require("puerts");
const UIInfo_1 = require("./UI/UIInfo");
const myList_1 = require("./UI/myList");
function init() {
    console.log("UIStart! start init");
    let world = puerts_2.argv.getByName("GameInstance").GetWorld();
    let controller = UE.GameplayStatics.GetPlayerController(world, 0);
    controller.SetShowMouseCursor(true);
    myList_1.default();
    //UObject Create
    let cls = puerts_1.makeUClass(UIInfo_1.default);
    // let ui = UE.NewObject(UIInfo.StaticClass(),world,"UIInfo");
}
init();
// // commonjs 模块  记得export
// import * as xx from 'xx'
// // 标准 es6 模块
// import xx from 'xx'
// // commonjs 模块，类型声明为 export = xx
// import xx = require('xx')
// // 没有类型声明，默认导入 any 类型
// const xx = require('xx')
//# sourceMappingURL=UIStart.js.map
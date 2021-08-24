"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
const puerts_2 = require("puerts");
let world = puerts_2.argv.getByName("GameInstance").GetWorld();
let controller = UE.GameplayStatics.GetPlayerController(world, 0);
controller.SetShowMouseCursor(true);
//找到UE内的包
let assets = UE.UIPackageAsset.Load("/Game/Example/UI/myList.myList");
//添加包
UE.UIPackage.AddPackage(assets, world);
//创建UI
let main = UE.UIPackage.CreateObjectFromURL("ui://myList/Main", world, UE.GComponent.StaticClass());
//显示到root上
let gRoot = UE.GRoot.Get(world);
main.SetParent(gRoot);
let list = main.GetChild("list", UE.GList.StaticClass());
let func = (index, obj) => {
    console.log(">>>>>>>>>>>>>>>>>>" + index);
    let a = index;
    let gComponent = obj;
    //绑定按钮事件
    gComponent.GetChild("btn").OnClick.Add(() => { console.log("hit! : " + a); });
    //更改item名字
    gComponent.GetChild("info").SetText(a.toString());
};
//刷新item的时候
list.SetItemRenderer(puerts_1.toManualReleaseDelegate(func));
list.SetNumItems(10);
//添加一个额外的按钮进glist
let addItem = list.AddItemFromPool("ui://myList/item");
addItem.GetChild("info").SetText("我是额外加进来的");
addItem.GetChild("btn").OnClick.Add(() => { console.log("hit : 额外加进来的"); });
//# sourceMappingURL=myList.js.map
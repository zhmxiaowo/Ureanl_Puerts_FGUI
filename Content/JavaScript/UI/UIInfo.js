"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
class UIInfo extends UE.FairyGUIObject {
    Constructor() {
        //初始化
        console.log(this.GetClass().GetName() + "初始化开始");
        let world = puerts_1.argv.getByName("GameInstance").GetWorld();
        if (world == undefined) {
            console.log("world from ue4 is empty");
            world = this.GetWorld();
        }
        //找到UE内的包
        let assets = UE.UIPackageAsset.Load("/Game/Example/UI/Windows.Windows");
        //添加包
        UE.UIPackage.AddPackage(assets, world);
        //第一种方式创建window
        let myInfoWindow = UE.GWindow.CreateWindow("Windows", "UIInfo", world);
        //第二种方式创建window
        // let myInfoWindow = UE.NewObject(UE.GWindow.StaticClass(),world) as UE.GWindow;
        // let panel = UE.UIPackage.CreateObjectFromURL("ui://Windows/UIInfo",world) as UE.GComponent;
        // myInfoWindow.SetContentPane(panel);
        // myInfoWindow.ContentPane.GetChildByPath("frame.comfirm").OnClick.Add(()=>
        myInfoWindow.ContentPane.GetChildByPath("frame").GetChild("comfirm").OnClick.Add(() => {
            console.log("提交确定!");
            myInfoWindow.Hide();
        });
        // (myInfoWindow.ContentPane.GetChildByPath("frame.info") as UE.GRichTextField).SetText("1. puerts添加的info \n 2.换行测试 \n 3.富文本不会用,后面用用");
        myInfoWindow.ContentPane.GetChild("frame").GetChild("info").SetText("1. puerts添加的info \n 2.换行测试 \n 3.富文本<a href='http://192.168.0.97:3000/img/logo.png'>link text</a>");
        //打开window
        myInfoWindow.Center();
        myInfoWindow.Show();
        //重要,保存引用!
        this.ui = myInfoWindow;
        UE.FairyGUIObject.GetAllPages().Add(this);
        this.OnStart();
    }
    OnStart() {
        console.log("调用了重写的 onstart");
        console.log((this.ui) == undefined);
        console.log(UIInfo.GetAllPages().Num());
    }
}
exports.default = UIInfo;
//# sourceMappingURL=UIInfo.js.map
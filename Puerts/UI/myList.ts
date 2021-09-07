import * as UE from 'ue'
import {$Delegate} from "ue"
import {$ref,$unref, toManualReleaseDelegate} from 'puerts'
import {argv} from 'puerts'

function invoke():void
{
    let world = (argv.getByName("GameInstance") as UE.GameInstance).GetWorld() as UE.World;
    let controller = UE.GameplayStatics.GetPlayerController(world,0);
    controller.SetShowMouseCursor(true);
    //找到UE内的包
    let assets = UE.UIPackageAsset.Load("/Game/Example/UI/myList.myList");
    //添加包
    UE.UIPackage.AddPackage(assets,world);
    //创建UI
    let main = UE.UIPackage.CreateObjectFromURL("ui://myList/Main",world,UE.GComponent.StaticClass());
    //显示到root上
    let gRoot = UE.GRoot.Get(world);
    main.SetParent(gRoot);
    
    let list = (main as UE.GComponent).GetChild("list",UE.GList.StaticClass()) as UE.GList;
    
    let func = (index:number,obj:UE.GObject) => 
    {
        console.log(">>>>>>>>>>>>>>>>>>"+index);
        let a = index;
        let gComponent = (obj as UE.GComponent);
        //绑定按钮事件
        gComponent.GetChild("btn").OnClick.Add(()=>{console.log("hit! : "+a);});
        //更改item名字
        gComponent.GetChild("info").SetText(a.toString());
    }
    //刷新item的时候
    list.SetItemRenderer(toManualReleaseDelegate(func));
    list.SetNumItems(10);
    
    //添加一个额外的按钮进glist
    let addItem = list.AddItemFromPool("ui://myList/item") as UE.GComponent;
    addItem.GetChild("info").SetText("我是额外加进来的");
    addItem.GetChild("btn").OnClick.Add(()=>{console.log("hit : 额外加进来的");});
}

export default invoke;
import * as UE from 'ue'
import {$ref,$unref, makeUClass} from 'puerts'
import {argv} from 'puerts'
import UIInfo from './UI/UIInfo';
import invoke from './UI/myList';

function init():void
{
    console.log("UIStart! start init");
    let world = (argv.getByName("GameInstance") as UE.GameInstance).GetWorld() as UE.World;
    let controller = UE.GameplayStatics.GetPlayerController(world,0);
    controller.SetShowMouseCursor(true);

    invoke();
    //UObject Create
    let cls = makeUClass(UIInfo);
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
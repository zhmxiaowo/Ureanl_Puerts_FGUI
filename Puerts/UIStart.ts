import * as UE from 'ue'
import {$ref,$unref} from 'puerts'
import {argv} from 'puerts'

console.log("start init ui!");
let world = (argv.getByName("GameInstance") as UE.GameInstance).GetWorld() as UE.World;
let controller = UE.GameplayStatics.GetPlayerController(world,0);
console.log("controller is :" + ((controller == undefined)?"empty!":"exist!"));
if(controller != undefined)
{
    console.log("1");
    controller.SetShowMouseCursor(true);
}else
{
    console.log("2");
}
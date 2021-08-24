import * as UE from 'ue'
import {$ref,$unref} from 'puerts'
import {argv} from 'puerts'

console.log("自建,无敌!");
// let gameInstance = (argv.getByName("GameInstance") as UE.GameInstance);
let world = (argv.getByName("GameInstance") as UE.GameInstance).GetWorld() as UE.World;
if(world == undefined)
{
    console.log("wocao!");

}
let refactors = $ref<UE.TArray<UE.Actor>>(undefined);
UE.GameplayStatics.GetAllActorsOfClass(world,UE.StaticMeshActor.StaticClass(),refactors);
var actors = $unref(refactors);
let num :number = actors.Num();

let cube : UE.Actor;

if(num > 0)
{
    for(let i = 0 ; i < num ; i++ )
    {
        console.log(actors.Get(i).GetName());
        if(actors.Get(i).GetName().startsWith("Cube"))
        {
            cube = actors.Get(i)
            cube.K2_SetActorLocationAndRotation(new UE.Vector(0, 0, 90),new UE.Rotator(0,90,0), false, $ref<UE.HitResult>(new UE.HitResult()), false);
            console.log("成功啦!");
            break;
        }

    }
}

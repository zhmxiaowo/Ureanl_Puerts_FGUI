#include "CoreMinimal.h"
#include "Binding.hpp"
#include "UEDataBinding.hpp"


UsingUClass(UGameInstance)
UsingUStruct(FWorldContext)
UsingUClass(UWorld)
UsingUClass(APlayerController)
struct BindingForUE
{
    BindingForUE()
    {
        //puerts::DefineClass<FWorldContext>()
        //.Constructor()
        //.Method("World",MakeFunction(&FWorldContext::World))
        //.Register();
        
        puerts::DefineClass<APlayerController>()
        .Method("SetShowMouseCursor",MakeFunction(&APlayerController::SetShowMouseCursor))
        .Register();
        
        puerts::DefineClass<UGameInstance>()
        .Method("GetWorldContext",MakeFunction(&UGameInstance::GetWorldContext))
        .Register();
    }
};

BindingForUE _BindingForUE__;
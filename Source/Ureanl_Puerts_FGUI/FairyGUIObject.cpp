// Fill out your copyright notice in the Description page of Project Settings.


#include "FairyGUIObject.h"

void UFairyGUIObject::OnStart_Implementation()
{

}

void UFairyGUIObject::OnEnd_Implementation()
{

}

void UFairyGUIObject::OnTick_Implementation()
{

}

UWorld* UFairyGUIObject::GetWorld() const {
    if (!HasAnyFlags(RF_ClassDefaultObject | RF_ArchetypeObject))
        return GetOuter()->GetWorld();
    else
        return nullptr;
}
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

TArray<UFairyGUIObject*> UFairyGUIObject::pages;

TArray<UFairyGUIObject*>& UFairyGUIObject::GetAllPages()
{
    return pages;
}

UGObject* UFairyGUIObject::GetUIByID(FString id)
{
    UGRoot* root =  UGRoot::Get(GWorld);
    for (int i = 0 ; i < root->NumChildren();i++)
    {
        UGObject* obj = root->GetChildAt(i);
        if (root->GetChildAt(i)->ID == id)
        {
            return obj;
        }
    }
    return nullptr;
}
UGObject* UFairyGUIObject::GetUIByName(FString name)
{
    UGRoot* root = UGRoot::Get(GWorld);
    for (int i = 0; i < root->NumChildren(); i++)
    {
        UGObject* obj = root->GetChildAt(i);
        if (root->GetChildAt(i)->Name == name)
        {
            return obj;
        }
    }
    return nullptr;
}

// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "UObject/NoExportTypes.h"
#include "FairyGUI.h"
#include "FairyGUIObject.generated.h"

/**
 * 
 */
UCLASS(Blueprintable)
class UREANL_PUERTS_FGUI_API UFairyGUIObject : public UObject
{
	GENERATED_BODY()
public:
    UFairyGUIObject()
    {
        UFairyGUIObject::pages.Add(this);
    }

    UFUNCTION(BlueprintCallable, BlueprintNativeEvent)
    void OnStart();

    UFUNCTION(BlueprintCallable, BlueprintNativeEvent)
    void OnEnd();

    UFUNCTION(BlueprintCallable, BlueprintNativeEvent)
    void OnTick();

    virtual class UWorld* GetWorld() const override;


public:
    UPROPERTY(BlueprintReadWrite)
    UGObject* ui;
public:
    UFUNCTION(BlueprintPure)
    static TArray<UFairyGUIObject*>& GetAllPages();

    UFUNCTION(BlueprintCallable)
    static UGObject* GetUIByID(FString id);

    UFUNCTION(BlueprintCallable)
    static UGObject* GetUIByName(FString name);

private:
    static TArray<UFairyGUIObject*> pages;


    ~UFairyGUIObject()
    {
            pages.Remove(this);
    }
};

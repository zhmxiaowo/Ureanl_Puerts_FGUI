// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "JsEnv.h"

#include "CoreMinimal.h"
#include "Subsystems/GameInstanceSubsystem.h"
#include "JSSubsystem.generated.h"

/**
 * 
 */
UCLASS()
class UREANL_PUERTS_FGUI_API UJSSubsystem : public UGameInstanceSubsystem
{
	GENERATED_BODY()
public:
	virtual bool ShouldCreateSubsystem(UObject* Outer) const override { return true; }

	virtual void Initialize(FSubsystemCollectionBase& Collection)override;

	virtual void Deinitialize()override;

public:
	UFUNCTION(BlueprintCallable , Category = "JS")
	virtual void Start(FString tsFile);
	UFUNCTION(BlueprintCallable, Category = "JS")
	virtual bool Tick(float deltaTime);
	UFUNCTION(BlueprintCallable, Category = "JS")
	virtual void Stop();

	//JsEnv!
	TSharedPtr<puerts::FJsEnv> GameScript;


public:
};

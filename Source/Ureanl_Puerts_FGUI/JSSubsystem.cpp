// Fill out your copyright notice in the Description page of Project Settings.


#include "JSSubsystem.h"

void UJSSubsystem::Initialize(FSubsystemCollectionBase& Collection)
{
	Super::Initialize(Collection);
}

void UJSSubsystem::Deinitialize()
{
	Super::Deinitialize();
}

void UJSSubsystem::Start(FString tsFile)
{
	GameScript = MakeShared<puerts::FJsEnv>();
	TArray<TPair<FString, UObject*>> Arguments;
	Arguments.Add(TPair<FString, UObject*>(TEXT("GameInstance"),this->GetGameInstance()));
	GameScript->Start(tsFile,Arguments);
}

bool UJSSubsystem::Tick(float deltaTime)
{
	return true;
}

void UJSSubsystem::Stop()
{
	GameScript.Reset();
}

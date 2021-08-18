// Copyright Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;
using System.Collections.Generic;

public class Ureanl_Puerts_FGUITarget : TargetRules
{
	public Ureanl_Puerts_FGUITarget( TargetInfo Target) : base(Target)
	{
		Type = TargetType.Game;
		DefaultBuildSettings = BuildSettingsVersion.V2;
		ExtraModuleNames.AddRange( new string[] { "Ureanl_Puerts_FGUI" } );
	}
}

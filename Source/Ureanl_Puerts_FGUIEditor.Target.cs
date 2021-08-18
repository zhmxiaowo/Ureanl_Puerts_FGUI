// Copyright Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;
using System.Collections.Generic;

public class Ureanl_Puerts_FGUIEditorTarget : TargetRules
{
	public Ureanl_Puerts_FGUIEditorTarget( TargetInfo Target) : base(Target)
	{
		Type = TargetType.Editor;
		DefaultBuildSettings = BuildSettingsVersion.V2;
		ExtraModuleNames.AddRange( new string[] { "Ureanl_Puerts_FGUI" } );
	}
}

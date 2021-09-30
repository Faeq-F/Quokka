if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Start-Process PowerShell -Verb RunAs "-NoProfile -windowstyle hidden -ExecutionPolicy Bypass -Command `"cd '$pwd'; & '$PSCommandPath';`"";
    exit;
}

# PowerShell function to list Start Menu Shortcuts
Function Get-StartMenu{
Begin{
Clear-Host
$Path = "$Env:ProgramData\Microsoft\Windows\Start Menu\Programs"
$x=0
      } # End of Begin
Process {
$StartMenu = Get-ChildItem $Path -Recurse -Include *.lnk
ForEach($ShortCut in $StartMenu) {
$Shell = New-Object -ComObject WScript.Shell
$Properties = @{
ShortcutName = $Shortcut.Name
LinkTarget = $Shell.CreateShortcut($Shortcut).targetpath
}
New-Object PSObject -Property $Properties

$x ++
        } #End of ForEach
[Runtime.InteropServices.Marshal]::ReleaseComObject($Shell) | Out-Null
    } # End of Process
End{
     }
}


#gets apps from shell:AppsFolder (UWP apps)
$PkgMgr = [Windows.Management.Deployment.PackageManager,Windows.Web,ContentType=WindowsRuntime]::new()




$StartMenuItems = Get-StartMenu | ConvertTo-Json
$AppPackages = $PkgMgr.FindPackages() | Select-Object DisplayName | ConvertTo-Json
$ControlPanelItems = Get-ControlPanelItem | Select Name | ConvertTo-Json

$ALL = [System.Collections.ArrayList]::new();
$StartMenuItems = $StartMenuItems | ConvertFrom-Json;

$AppPackages = $AppPackages | ConvertFrom-Json;

$ControlPanelItems = $ControlPanelItems | ConvertFrom-Json;

$null = $ALL.Add($StartMenuItems)
$null = $ALL.Add($AppPackages)
$null = $ALL.Add($ControlPanelItems)
$result = @{ ALL = $ALL};
echo $result | ConvertTo-Json;

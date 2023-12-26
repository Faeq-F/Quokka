#This script is used with vs code (or any other editor that is not vs) to build the solution without the need for Microsoft's version of vs code (e.g., VScodium) and their extensions that can only run on those versions of vs code.

#▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

#Builds the entire solution using Release config - not wanted
#MsBuild.exe .\Quokka.sln /t:Build /p:Configuration=Release

#▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

#Build the Quokka project using the Quokka config
msbuild .\Quokka\Quokka.csproj /p:Configuration=Quokka

#Build all plugin projects using the Plugin config
$directoryPath = "./"
$startsWith = "Plugin_"

# Get all folders in the directory that start with the specified word
$folders = Get-ChildItem -Path $directoryPath -Directory | Where-Object { $_.Name -like "$startsWith*" }

# Loop through the filtered folders
foreach ($folder in $folders) {
  # build the plugin
  $command = "msbuild .\" + $folder.name + "\" + $folder.name + ".csproj /p:Configuration=Plugin"
  Invoke-Expression $command
}
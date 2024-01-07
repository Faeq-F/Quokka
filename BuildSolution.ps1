# This script is used with vs code (or any other editor that is not vs) to build the solution without the need for Microsoft's version of vs code (e.g., VScodium) and their extensions that can only run on those versions of vs code.

msbuild Quokka.sln /p:Configuration=Quokka
# This should be the equivalent of building the Quokka project with the Quokka config, and the rest of the projects with the Plugin config
# Except Tests which has the Debug config
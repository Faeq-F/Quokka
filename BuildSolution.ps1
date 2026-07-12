# This should be the equivalent of building the Quokka project with the Quokka config, and the rest of the projects with the Plugin config
# Except Tests which has the Debug config

dotnet build Quokka.sln -c Quokka


# This should start the app up

dotnet run --project Quokka/Quokka.csproj -c Quokka
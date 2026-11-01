param(
    [Alias("i")]
    [switch]$NoIncremental
)
# The No Incremental flag builds the solution from scratch.

# Also check raw $args for Unix-style double-dash flags
if ($args -contains "--no-incremental" -or $args -contains "-i") {
    $NoIncremental = $true
}

$buildArgs = @("Quokka.sln", "/p:EnforceCodeStyleInBuild=true", "-c", "Quokka")
if ($NoIncremental) {
    $buildArgs += "--no-incremental"
}

# This should be the equivalent of building the Quokka project with the Quokka config, and the rest of the projects with the Plugin config
# Except Tests which has the Debug config

dotnet build @buildArgs

# This should start the app up

dotnet run --project Quokka/Quokka.csproj -c Quokka
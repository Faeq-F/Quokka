param(
    [Alias("a")]
    [switch]$All
)

# Also check raw $args for Unix-style double-dash flags
if ($args -contains "--all" -or $args -contains "--a") {
    $All = $true
}



if ($All) {
    # This should be the equivalent of building all Solution Tests (Plugins included) with the Debug config and running them
    dotnet test Quokka.sln
}
else {
    # This should be the equivalent of building Quokka Tests with the Debug config and running them
    dotnet test Tests/Tests.csproj
}
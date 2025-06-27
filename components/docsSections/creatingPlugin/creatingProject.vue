<template>
  <div>
    To start:
    <ol>
      <li>Open Visual Studio & clone Quokka</li>
      <li>
        In the solution, create a project of type WPF class library,
        naming it
        "Plugin_YourPluginNameHere" (make sure that it is a part of
        the
        Quokka
        solution and that it is not its own)
      </li>
      <li>Rename the cs file to "Plugin_YourPluginNameHere"</li>
      <li>
        Edit the project file to look like the following and set the
        build
        configuration to 'Plugin':
        <br />
        <textarea readonly data-lenis-prevent>

                <Project Sdk="Microsoft.NET.Sdk">

                  <PropertyGroup>
                    <TargetFramework>net6.0-windows</TargetFramework>
                    <Nullable>enable</Nullable>
                    <UseWPF>true</UseWPF>
                    <PublishSingleFile>true</PublishSingleFile>
                    <SelfContained>true</SelfContained>
                    <DebugType>embedded</DebugType>
                    <AppendTargetFrameworkToOutputPath>false
                    </AppendTargetFrameworkToOutputPath>
                    <AppendRuntimeIdentifierToOutputPath>false
                    </AppendRuntimeIdentifierToOutputPath>

                    <Product>Plugin_ShowTypedText</Product>
                    <BaseOutputPath>
                      G:\Quokka\Quokka\PlugBoard\Plugin_ShowTypedText
                    </BaseOutputPath>
                    <Configurations>Debug;Release;Plugin</Configurations>
                  </PropertyGroup>

                  <PropertyGroup>
                    <GenerateDocumentationFile>true</GenerateDocumentationFile>
                    <PlatformTarget>AnyCPU</PlatformTarget>
                  </PropertyGroup>

                  <ItemGroup>
                    <ProjectReference Include="..\Quokka\Quokka.csproj" />
                  </ItemGroup>

                </Project>
              </textarea>
        <blockquote>
          This is a part of the
          <a
            href="https://github.com/Faeq-F/TypedText-Plugins">ShowTypedText</a>&nbsp;
          plugin (a demo plugin; not made for use)
        </blockquote>
      </li>
    </ol>
  </div>
</template>
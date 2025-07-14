<template>
  <MazCardSpotlight class="m-2" style="width: calc(100% - 0.5rem);">
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
        <Code lang="markup">
          &lt;Project Sdk=&quot;Microsoft.NET.Sdk&quot;&gt;

            &lt;PropertyGroup&gt;
              &lt;TargetFramework&gt;net6.0-windows&lt;/TargetFramework&gt;
              &lt;Nullable&gt;enable&lt;/Nullable&gt;
              &lt;UseWPF&gt;true&lt;/UseWPF&gt;
              &lt;PublishSingleFile&gt;true&lt;/PublishSingleFile&gt;
              &lt;SelfContained&gt;true&lt;/SelfContained&gt;
              &lt;DebugType&gt;embedded&lt;/DebugType&gt;
              &lt;AppendTargetFrameworkToOutputPath&gt;false
              &lt;/AppendTargetFrameworkToOutputPath&gt;
              &lt;AppendRuntimeIdentifierToOutputPath&gt;false
              &lt;/AppendRuntimeIdentifierToOutputPath&gt;

              &lt;Product&gt;Plugin_ShowTypedText&lt;/Product&gt;
              &lt;BaseOutputPath&gt;
                G:\Quokka\Quokka\PlugBoard\Plugin_ShowTypedText
              &lt;/BaseOutputPath&gt;
              &lt;Configurations&gt;Debug;Release;Plugin&lt;/Configurations&gt;
            &lt;/PropertyGroup&gt;

            &lt;PropertyGroup&gt;
              &lt;GenerateDocumentationFile&gt;true&lt;/GenerateDocumentationFile&gt;
              &lt;PlatformTarget&gt;AnyCPU&lt;/PlatformTarget&gt;
            &lt;/PropertyGroup&gt;

            &lt;ItemGroup&gt;
              &lt;ProjectReference Include=&quot;..\Quokka\Quokka.csproj&quot; /&gt;
            &lt;/ItemGroup&gt;

          &lt;/Project&gt;
        </Code>
        <blockquote>
          This is a part of the
          <a
            href="https://github.com/Faeq-F/TypedText-Plugins">ShowTypedText</a>&nbsp;
          plugin (a demo plugin; not made for use)
        </blockquote>
      </li>
    </ol>
  </MazCardSpotlight>
</template>
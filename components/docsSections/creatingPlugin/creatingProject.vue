<script setup lang="ts">
import ExternalLink from '~/components/link.vue'
import DocNotice from '~/components/docNotice.vue'
</script>
<template>
  <MazCardSpotlight class="m-2" style="width: calc(100% - 0.5rem);">
    To start:
    <ol>
      <li>
        Open
        <ExternalLink url='https://visualstudio.microsoft.com/#vs-section'
          target="_blank">
          Visual Studio
        </ExternalLink>
        &nbsp;& clone
        <ExternalLink url='https://github.com/faeq-f/quokka/' target="_blank">
          Quokka
        </ExternalLink>
      </li>
      <li>
        <span class="flex gap-1">
          In the solution, create a project of type
          <Code inline> WPF class library </Code>
          , naming it
          <Code inline> Plugin_YourPluginNameHere </Code>
        </span>
        (make sure that it is a part of the Quokka solution
        and that it is not its own)
      </li>
      <li>Rename the cs file to "Plugin_YourPluginNameHere"</li>
      <li>
        Edit the project file to look like the following and set the
        build configuration to 'Plugin':
        <br />
        <Code lang="markup">
          &lt;Project Sdk=&quot;Microsoft.NET.Sdk&quot;&gt;

            &lt;PropertyGroup&gt;
              &lt;TargetFramework&gt;net4.8-windows&lt;/TargetFramework&gt;
              &lt;Nullable&gt;enable&lt;/Nullable&gt;
              &lt;LangVersion&gt;10.0&lt;/LangVersion&gt;
              &lt;UseWPF&gt;true&lt;/UseWPF&gt;
              &lt;PublishSingleFile&gt;true&lt;/PublishSingleFile&gt;
              &lt;SelfContained&gt;true&lt;/SelfContained&gt;
              &lt;DebugType&gt;embedded&lt;/DebugType&gt;
              &lt;AppendTargetFrameworkToOutputPath&gt;false&lt;/AppendTargetFrameworkToOutputPath&gt;
              &lt;AppendRuntimeIdentifierToOutputPath&gt;false&lt;/AppendRuntimeIdentifierToOutputPath&gt;

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
          <ExternalLink url="https://github.com/Faeq-F/TypedText-Plugins"
            target="_blank">
            ShowTypedText
          </ExternalLink>
          &nbsp;plugin (a demo plugin not made for use)
        </blockquote>
      </li>
    </ol>
  </MazCardSpotlight>
  <DocNotice type="tip" class="m-2" style="width: calc(100% - 0.5rem);">
    To add extra files in the plugin's folder, for e.g., a settings file
    for the plugin, you can add the following to the project file;
    <Code lang="markup">
            &lt;ItemGroup&gt;
              &lt;ContentWithTargetPath Include=&quot;settings.json&quot;&gt;
                &lt;CopyToOutputDirectory&gt;Always&lt;/CopyToOutputDirectory&gt;
                &lt;TargetPath&gt;settings.json&lt;/TargetPath&gt;
              &lt;/ContentWithTargetPath&gt;
            &lt;/ItemGroup&gt;
          </Code>
  </DocNotice>
</template>
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
      <li>
        <span class="flex gap-1">
          Rename the
          <Code inline> .cs </Code>
          file to
          <Code inline> Plugin_YourPluginNameHere.cs </Code>
        </span>
      </li>
      <li>
        Edit the project file to look like the following and set the
        build configuration to 'Plugin':
        <br />
        <Code lang="markup">
          &lt;Project Sdk=&quot;Microsoft.NET.Sdk&quot;&gt;

          &nbsp;&nbsp;&lt;PropertyGroup&gt;
          &nbsp;&nbsp; &nbsp;&lt;TargetFramework&gt;net4.8-windows&lt;/TargetFramework&gt;
          &nbsp;&nbsp; &nbsp;&lt;RuntimeIdentifier&gt;win-x64&lt;/RuntimeIdentifier&gt;
          &nbsp;&nbsp; &nbsp;&lt;PublishReadyToRun&gt;true&lt;/PublishReadyToRun&gt;
          &nbsp;&nbsp; &nbsp;&lt;Nullable&gt;enable&lt;/Nullable&gt;
          &nbsp;&nbsp; &nbsp;&lt;LangVersion&gt;10.0&lt;/LangVersion&gt;
          &nbsp;&nbsp; &nbsp;&lt;UseWPF&gt;true&lt;/UseWPF&gt;
          &nbsp;&nbsp; &nbsp;&lt;ImplicitUsings&gt;enable&lt;/ImplicitUsings&gt;
          &nbsp;&nbsp; &nbsp;&lt;SelfContained&gt;true&lt;/SelfContained&gt;
          &nbsp;&nbsp; &nbsp;&lt;DebugType&gt;embedded&lt;/DebugType&gt;
          &nbsp;&nbsp; &nbsp;&lt;AppendTargetFrameworkToOutputPath&gt;false&lt;/AppendTargetFrameworkToOutputPath&gt;
          &nbsp;&nbsp; &nbsp;&lt;AppendRuntimeIdentifierToOutputPath&gt;false&lt;/AppendRuntimeIdentifierToOutputPath&gt;

          &nbsp;&nbsp; &nbsp;&lt;Product&gt;PluginTypedText&lt;/Product&gt;
          &nbsp;&nbsp; &nbsp;&lt;BaseOutputPath&gt;G:\Quokka\Quokka\PlugBoard\PluginTypedText&lt;/BaseOutputPath&gt;
          &nbsp;&nbsp; &nbsp;&lt;Configurations&gt;Plugin&lt;/Configurations&gt;

          &nbsp;&nbsp; &nbsp;&lt;CopyLocalLockFileAssemblies&gt;true&lt;/CopyLocalLockFileAssemblies&gt;
          &nbsp;&nbsp; &nbsp;&lt;PlatformTarget&gt;AnyCPU&lt;/PlatformTarget&gt;
          &nbsp;&nbsp; &nbsp;&lt;Optimize&gt;True&lt;/Optimize&gt;
          &nbsp;&nbsp; &nbsp;&lt;EnforceCodeStyleInBuild&gt;True&lt;/EnforceCodeStyleInBuild&gt;
          &nbsp;&nbsp; &nbsp;&lt;EnableNETAnalyzers&gt;True&lt;/EnableNETAnalyzers&gt;
          &nbsp;&nbsp; &nbsp;&lt;AnalysisLevel&gt;latest-all&lt;/AnalysisLevel&gt;
          &nbsp;&nbsp;&lt;/PropertyGroup&gt;

          &nbsp;&nbsp;&lt;ItemGroup&gt;
          &nbsp;&nbsp; &nbsp;&lt;ProjectReference Include=&quot;..\Quokka\Quokka.csproj&quot;&gt;&lt;/ProjectReference&gt;
          &nbsp;&nbsp;&lt;/ItemGroup&gt;

          ...

          &lt;/Project&gt;
        </Code>
        <blockquote>
          This is a part of the
          <ExternalLink url="https://github.com/Faeq-F/Quokka-TypedText-Plugin"
            target="_blank">
            TypedText plugin
          </ExternalLink>
          &nbsp;(a demo plugin not made for use)
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
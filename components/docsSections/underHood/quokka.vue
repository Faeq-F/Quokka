<template>
  <div class="p-10">
    The Quokka project file; defines project metadata, target
    frameworks, and NuGet dependencies used by the MSBuild system
    to compile the application.
    <DocNotice type="info" class="mt-4" style="width: calc(100% - 1.5rem)">
      Quokka targets .NET 4.8 for portability. This version comes
      <ExternalLink
        url='https://learn.microsoft.com/en-us/dotnet/framework/install/versions-and-dependencies#net-framework-48'
        blank>
        pre-installed on Windows 10 and 11
      </ExternalLink>, allowing users to run the
      application without installing additional frameworks.<br />
      <div style="width: calc(100% - 2.5rem);">
        <Code lang="markup">
          &lt;TargetFramework&gt;net4.8-windows&lt;/TargetFramework&gt;
        </Code>
      </div>
    </DocNotice>
    <DocNotice type="info" class="mt-4" style="width: calc(100% - 1.5rem)">
      Files in the <Code inline>&nbsp;Config&nbsp;</Code>
      directory are copied to the output folder. This ensures they
      are available to the application at runtime while remaining
      easily accessible for user customization.
      <div style="width: calc(100% - 2.5rem);">
        <Code lang="markup">
          &lt;ContentWithTargetPath Include=&quot;..\Config\Resources\QuokkaTray.ico&quot;&gt;<br />
            &lt;CopyToOutputDirectory&gt;Always&lt;/CopyToOutputDirectory&gt;<br />
            &lt;TargetPath&gt;Config\Resources\QuokkaTray.ico&lt;/TargetPath&gt;<br />
          &lt;/ContentWithTargetPath&gt;
          ...
        </Code>
      </div>
    </DocNotice>
  </div>
</template>

<script setup lang="ts">
import Code from '~/components/code.vue'
import DocNotice from '~/components/docNotice.vue'
import ExternalLink from '~/components/link.vue'
</script>
<script setup lang="ts">
import ExternalLink from '~/components/link.vue'
</script>
<template>
  <div>
    <div class="flex flex-col mt-22 mb-16 items-center">
      <div class="flex items-center Varela text-3xl">
        <UIcon name="i-lucide-circle-help" class="mr-2" /> FAQ by Developers
      </div>
      <div class="text-md outfit">Answers to frequently asked questions</div>
    </div>
    <MazAccordion class="w-full m-2">
      <template #title-1>
        <p>
          How do I use a 3rd party library in my plugin?
        </p>
      </template>
      <template #content-1>
        You must install the package (likely through <ExternalLink
          url="https://www.nuget.org/">NuGet</ExternalLink>&nbsp;) for your
        plugin's project. Unfortunately this is not enough since Quokka will
        need the package reference of the library. You will have to use
        <ExternalLink
          url="https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/reflection">
          reflection
        </ExternalLink>&nbsp;
        to load the library at runtime and use the classes it provides.
        You can use
        <ExternalLink url="https://github.com/NdubuisiJr/TypeExtender">
          TypeExtender</ExternalLink> too (Quokka has a reference to this).
        You can have a look at the following plugins as examples as to how
        to do this:<br /><br />
        <ul>
          <li>
            <ExternalLink url="">
              Plugin_Calculator
            </ExternalLink>
          </li>
          <li>
            <ExternalLink url="">
              Plugin_EnglishDictionary
            </ExternalLink>
          </li>
          <li>
            <ExternalLink url="">
              Plugin_Everything
            </ExternalLink>
          </li>
        </ul><br />
      </template>
    </MazAccordion>
    <MazAccordion class="w-full m-2">
      <template #title-1>
        <p>
          Q2
        </p>
      </template>
      <template #content-1>
        Q2 ans
      </template>
    </MazAccordion>
    <MazAccordion class="w-full m-2">
      <template #title-1>
        <p>
          Q3
        </p>
      </template>
      <template #content-1>
        Q3 ans
      </template>
    </MazAccordion>
    <MazAccordion class="w-full m-2">
      <template #title-1>
        <p>
          Q4
        </p>
      </template>
      <template #content-1>
        Q4 ans
      </template>
    </MazAccordion>
  </div>
</template>
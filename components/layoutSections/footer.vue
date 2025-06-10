<script setup lang="ts">
const links = [
  {
    title: "Quokka",
    links: [
      {
        text: "Releases",
        url: ""
      },
      {
        text: "Plugins",
        url: ""
      },
      {
        text: "",
        url: ""
      },
      {
        text: "Program source",
        url: ""
      },
      {
        text: "Website source",
        url: ""
      },
    ]
  },
  {
    title: "Get started",
    links: [
      {
        text: "Installation",
        url: ""
      },
      {
        text: "How to use",
        url: ""
      },
      {
        text: "App Settings",
        url: ""
      },
      {
        text: "",
        url: ""
      },
      {
        text: "Build the app",
        url: ""
      },
      {
        text: "Create a plugin",
        url: ""
      },
      {
        text: "Documentation",
        url: ""
      },
    ]
  },
  {
    title: "Get Help",
    links: [
      {
        text: "FAQ",
        url: ""
      },
      {
        text: "Discussions",
        url: ""
      },
      {
        text: "Feedback",
        url: ""
      },
      {
        text: "Report a Vulnerability",
        url: ""
      },
    ]
  }
]

import MazAnimatedElement from 'maz-ui/components/MazAnimatedElement'
import MazAnimatedText from 'maz-ui/components/MazAnimatedText'
</script>

<template>
  <div class="px-78">
    <MazCardSpotlight class="w-full mb-4 mt-62 outfit !shadow-none"
      color="secondary">
      <MazAnimatedElement direction="up" :duration="2000" class="inline">
        <div class=" dark:bg-blue-950 ">

          <div class="flex justify-around pb-16">
            <div class="flex items-center">
              <div>
                <img src="~/assets/media/QuokkaLogo.svg"
                  class="w-10 h-10 dark:invert-100 opacity-70" />
              </div>
              <div class="pl-2 text-gray-500 dark:text-gray-500">
                Made with ❤️ by <a href="https://faeq-f.github.io/"
                  target="_blank">Faeq</a>
                <div>
                  <a href="">
                    Support this project, Become a sponsor
                  </a>
                </div>
              </div>
            </div>
            <div>
              <ul>
                <li class="opacity-55 hover:opacity-75">
                  <a href="">
                    Changelog
                  </a>
                </li>
                <li class="opacity-55 hover:opacity-75">
                  <a href="">
                    Licence
                  </a>
                </li>
                <li class="opacity-55 hover:opacity-75">
                  <a href="">
                    Security Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex">
            <div class="px-[10%]" v-for="(section, i) in links" :key="i">
              <div class="varela font-extrabold">
                {{ section.title }}
              </div>
              <ul>
                <li class="opacity-55 hover:opacity-75"
                  v-for="(link, i) in section.links" :key="i">
                  <div v-if="link.text == ''" class="h-8">
                  </div>
                  <a :href="link.url" v-else>
                    {{ link.text }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MazAnimatedElement>
    </MazCardSpotlight>
  </div>
</template>
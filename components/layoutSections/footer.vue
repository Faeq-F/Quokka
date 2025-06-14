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
                <MazAnimatedElement direction="up" :delay="600" :duration="700">
                  <img src="~/assets/media/QuokkaLogo.svg"
                    class="w-10 h-10 dark:invert-100 opacity-70" />
                </MazAnimatedElement>
              </div>
              <div class="pl-2 text-gray-500 dark:text-gray-500">
                <MazAnimatedElement direction="up" :delay="800" :duration="700"
                  class="inline">
                  Made
                </MazAnimatedElement>
                <MazAnimatedElement direction="up" :delay="850" :duration="700"
                  class="inline">
                  with
                </MazAnimatedElement>
                <MazAnimatedElement direction="up" :delay="900" :duration="700"
                  class="inline">
                  ❤️
                </MazAnimatedElement>
                <MazAnimatedElement direction="up" :delay="950" :duration="700"
                  class="inline">
                  by
                </MazAnimatedElement>
                <MazAnimatedElement direction="up" :delay="1000" :duration="700"
                  class="inline">
                  <a href="https://faeq-f.github.io/" target="_blank">Faeq</a>
                </MazAnimatedElement>
                <div>
                  <a href="">
                    <MazAnimatedElement direction="up" :delay="1100"
                      :duration="700" class="inline">
                      Support
                    </MazAnimatedElement>
                    <MazAnimatedElement direction="up" :delay="1150"
                      :duration="700" class="inline">
                      this
                    </MazAnimatedElement>
                    <MazAnimatedElement direction="up" :delay="1200"
                      :duration="700" class="inline">
                      project,
                    </MazAnimatedElement>
                    <MazAnimatedElement direction="up" :delay="1250"
                      :duration="700" class="inline">
                      Become
                    </MazAnimatedElement>
                    <MazAnimatedElement direction="up" :delay="1300"
                      :duration="700" class="inline">
                      a
                    </MazAnimatedElement>
                    <MazAnimatedElement direction="up" :delay="1350"
                      :duration="700" class="inline">
                      sponsor
                    </MazAnimatedElement>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <ul>
                <li class="opacity-55 hover:opacity-75">
                  <a href="">
                    <MazAnimatedElement direction="left" :delay="1550"
                      :duration="700" class="inline">
                      Changelog
                    </MazAnimatedElement>
                  </a>
                </li>
                <li class="opacity-55 hover:opacity-75">
                  <a href="">
                    <MazAnimatedElement direction="left" :delay="1600"
                      :duration="700" class="inline">
                      Licence
                    </MazAnimatedElement>
                  </a>
                </li>
                <li class="opacity-55 hover:opacity-75">
                  <a href="">
                    <MazAnimatedElement direction="left" :delay="1650"
                      :duration="700" class="inline">
                      Security Policy
                    </MazAnimatedElement>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex">
            <div class="px-[10%]" v-for="(section, i) in links" :key="i">
              <div class="varela font-extrabold">
                <MazAnimatedElement direction="left" :delay="1750"
                  :duration="700" class="inline">
                  {{ section.title }}
                </MazAnimatedElement>
              </div>
              <ul>
                <li class="opacity-55 hover:opacity-75"
                  v-for="(link, i) in section.links" :key="i">
                  <div v-if="link.text == ''" class="h-8">
                  </div>
                  <a :href="link.url" v-else>
                    <MazAnimatedElement direction="left"
                      :delay="1750 + (i * 200)" :duration="700" class="inline">
                      {{ link.text }}
                    </MazAnimatedElement>
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
<script setup lang="ts">
const links = [
  {
    title: "Quokka",
    links: [
      {
        text: "License",
        url: "/Quokka/license"
      },
      {
        text: "Security Policy",
        url: "/Quokka/security"
      },
      {
        text: "Changelog",
        url: "/Quokka/changelog"
      },
      {
        text: "Releases",
        url: "https://github.com/Faeq-F/Quokka/releases"
      },
      {
        text: "Plugins",
        url: "/Quokka/plugin"
      },
      {
        text: "",
        url: ""
      },
      {
        text: "Program source",
        url: "https://github.com/Faeq-F/Quokka/tree/main"
      },
      {
        text: "Website source",
        url: "https://github.com/Faeq-F/Quokka/tree/site"
      },
    ]
  },
  {
    title: "Get started",
    links: [
      {
        text: "Installation",
        url: "/Quokka/documentation?section=installation"
      },
      {
        text: "How to use",
        url: "/Quokka/documentation?section=general-usage"
      },
      {
        text: "App Settings",
        url: "/Quokka/documentation?section=settings"
      },
      {
        text: "",
        url: ""
      },
      {
        text: "Build the app",
        url: "/Quokka/documentation?section=build-app"
      },
      {
        text: "Create a plugin",
        url: "/Quokka/documentation?section=creating-plugin"
      },
      {
        text: "Contribute",
        url: "/Quokka/contributing"
      },
      {
        text: "Kanban",
        url: "/Quokka/kanban"
      },
      {
        text: "Documentation",
        url: "/Quokka/documentation"
      },
    ]
  },
  {
    title: "Get Help",
    links: [
      {
        text: "FAQ",
        url: "/Quokka/#faq"
      },
      {
        text: "Report an Issue",
        url: "/Quokka/contributing"
      },
      {
        text: "Code of Conduct",
        url: "/Quokka/conduct"
      },
      {
        text: "Discussions & Feedback",
        url: "https://github.com/Faeq-F/Quokka/discussions"
      },
    ]
  }
]

import MazAnimatedElement from 'maz-ui/components/MazAnimatedElement'
import Link from '~/components/link.vue'
</script>

<template>
  <div class="sm:px-78 min-h-[95vh]">
    <div class="w-full mt-62 outfit rounded-lg !shadow-none p-4 pb-0"
      id="footerCard">
      <MazAnimatedElement direction="up" :duration="2000" class="inline">
        <div class="flex-col gap-10 flex">
          <MazAnimatedElement direction="up" :delay="800" :duration="700">
            <img src="/media/QuokkaTextLogoFooter.png"
              class="dark:invert-100 opacity-70 mask-t-from-60% mask-t-to-100% w-[70%] object-center mx-auto mb-24" />
          </MazAnimatedElement>
          <div
            class="flex flex-col sm:flex-row justify-between pb-12 gap-4 sm:gap-unset">
            <div class="flex items-center">
              <div>
                <a href="https://faeq-f.github.io/" target="_blank">
                  <MazAnimatedText tag="h1" text="Made with ❤️ by Faeq"
                    :delay="1000" :duration="1500" direction="up"
                    :column-gap="0.3" :row-gap="0.3"
                    class="outfit text-gray-500 dark:text-gray-400 " />
                </a>
                <div>
                  <a href="https://github.com/sponsors/Faeq-F" target="_blank">
                    <div class="inline-block">
                      <MazAnimatedText tag="h1"
                        text="Support this project, become a sponsor"
                        :delay="1200" :duration="1500" direction="up"
                        :column-gap="0.3" :row-gap="0.3"
                        class="outfit text-gray-500 dark:text-gray-400 inline-block" />
                    </div>
                    <MazAnimatedElement direction="up" :delay="2400"
                      :duration="700"
                      class="inline-block text-gray-500 dark:text-gray-400">
                      <UIcon name="i-lucide-arrow-up-right" class="-ml-1" />
                    </MazAnimatedElement>
                  </a>
                </div>
              </div>
            </div>
            <div class="max-w-40 w-40">
              <a href="https://cryptpad.fr/form/#/2/form/view/6rs9qL-abLVwLcWpptEL7vworI+n8OBxElh5svu5yD0/embed/"
                target="_blank">
                <div class="inline-block">
                  <MazAnimatedText tag="h1" text="Contact the" :delay="1100"
                    :duration="1500" direction="up" :column-gap="0.3"
                    :row-gap="0.3"
                    class="outfit text-gray-500 dark:text-gray-400 inline-block" />
                  <MazAnimatedText tag="h1" text="Quokka team" :delay="2100"
                    :duration="1500" direction="up" :column-gap="0.3"
                    :row-gap="0.3"
                    class="outfit text-gray-500 dark:text-gray-400 inline-block" />
                </div>
                <MazAnimatedElement direction="up" :delay="3100" :duration="700"
                  class="inline-block text-gray-500 dark:text-gray-400">
                  <UIcon name="i-lucide-arrow-up-right" class="-ml-1" />
                </MazAnimatedElement>
              </a>
            </div>
          </div>

          <div
            class="flex flex-col sm:flex-row justify-between mt-16 mb-24 gap-4 sm:gap-unset">
            <div v-for="(section, i) in links" :key="i">

              <MazAnimatedElement direction="left" :delay="1700" :duration="700"
                class="inline">
                <div
                  class="varela font-extrabold border-b-1 border-gray-200 dark:border-gray-700 max-w-44 w-44 text-sm">
                  {{ section.title }}
                </div>
              </MazAnimatedElement>
              <ul>
                <li
                  class="opacity-55 hover:opacity-75 ml-3 max-w-44 w-44 text-sm"
                  v-for="(link, i) in section.links" :key="i">
                  <MazAnimatedElement direction="left" :delay="1700 + (i * 200)"
                    :duration="700" v-if="link.text == ''"
                    class="h-3 border-b-1 border-gray-200 dark:border-gray-700">
                  </MazAnimatedElement>
                  <MazAnimatedElement direction="left" :delay="1700 + (i * 200)"
                    :duration="700" class="inline" v-else>
                    <Link :url="link.url">{{ link.text }}</Link>
                  </MazAnimatedElement>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MazAnimatedElement>
    </div>
  </div>
</template>
<style lang="css" scoped>
#footerCard {
  background: radial-gradient(circle, #fff 0%, rgba(237, 83, 83, 0) 90%);
}

.dark #footerCard {
  background: radial-gradient(circle, #20212c 0%, rgba(237, 83, 83, 0) 90%);
}
</style>
<script setup lang="ts">
import MazAnimatedElement from 'maz-ui/components/MazAnimatedElement'
import MazAccordion from 'maz-ui/components/MazAccordion'
import MazAnimatedText from 'maz-ui/components/MazAnimatedText'
import ExternalLink from '~/components/link.vue'
</script>

<template>
  <div class=" w-full sm:px-78 pt-62 outfit px-4" id="faq">
    <MazAnimatedElement direction="up" :delay="600" :duration="700">
      <div class="font-bold sm:text-6xl text-3xl varela text-center">
        Completely Free, Libre and Open Source
      </div>
    </MazAnimatedElement>

    <div class="outfit text-center pt-3 text-gray-500 dark:text-gray-400">
      <MazAnimatedText tag="h1"
        text="No premium tiers or paywalls - everything's included, with no ads or tracking"
        :delay="800" :duration="1500" direction="up" :column-gap="0.3"
        :row-gap="0.3" />
    </div>

    <MazAnimatedElement direction="down" :delay="1600" :duration="700"
      class="flex items-center justify-center varela text-sm pl-4 pt-4 gap-4">
      <nuxt-link to="/changelog">
        <div class="flex items-center justify-center">
          <UIcon name="i-lucide-file-cog" class="size-4 mx-1 mb-1" />
          Changelog
        </div>
      </nuxt-link>
      <UIcon name="i-lucide-dot" class="size-4" />
      <nuxt-link to="/kanban">
        <div class="flex items-center">
          <UIcon name="i-lucide-square-kanban" class="size-4 mx-1 mb-1" />
          Kanban
        </div>
      </nuxt-link>
    </MazAnimatedElement>

    <MazAnimatedElement direction="down" :delay="1600" :duration="700"
      class="inline">
      <div class="varela text-2xl pl-4 pt-4">FAQ</div>
      <div class="m-4">
        <MazAccordion class="w-full">
          <template #title-1>
            <MazAnimatedElement direction="right" :delay="1900"
              :duration="2000">
              <p>How do you monetize the application?</p>
            </MazAnimatedElement>
          </template>
          <template #content-1>
            <MazAnimatedElement direction="right" :delay="400" :duration="700">
              <p>
                I don't, though I may in future. I will only generate revenue
                from this software in a way that doesn't compromise user
                privacy.
              </p>
            </MazAnimatedElement>
          </template>
        </MazAccordion>
      </div>

      <div class="m-4">
        <MazAccordion class="w-full">
          <template #title-1>
            <MazAnimatedElement direction="right" :delay="2100"
              :duration="2000">
              <p>How do I set the app to run at startup?</p>
            </MazAnimatedElement>
          </template>
          <template #content-1>
            <MazAnimatedElement direction="right" :delay="400" :duration="700">
              <p>
                Quokka is a
                <ExternalLink blank
                  url='https://portableapps.com/about/what_is_a_portable_app#definition'>
                  portable program
                </ExternalLink>
                by design. If this is a question you have, it is likely you do
                not wish to use the program in a portable manner - have a look
                at
                <ExternalLink url="/Quokka/documentation?section=installation">
                  installation documentation.
                </ExternalLink>
              </p>
            </MazAnimatedElement>
          </template>
        </MazAccordion>
      </div>

      <div class="m-4">
        <MazAccordion class="w-full">
          <template #title-1>
            <MazAnimatedElement direction="right" :delay="2300"
              :duration="2000">
              <p>How do I change the app font?</p>
            </MazAnimatedElement>
          </template>
          <template #content-1>
            <MazAnimatedElement direction="right" :delay="400" :duration="700">
              <p>
                Place your font file in
                <Code inline>&nbsp;/Config/Resources/&nbsp;</Code> and
                change the
                <ExternalLink url="/Quokka/documentation?section=settings">
                  <Code inline>&nbsp;AppFont&nbsp;</Code>
                </ExternalLink>
                setting to the friendly name of the font.
              </p>
            </MazAnimatedElement>
          </template>
        </MazAccordion>
      </div>

      <div class="m-4">
        <MazAccordion class="w-full">
          <template #title-1>
            <MazAnimatedElement direction="right" :delay="2500"
              :duration="2000">
              <p>How do I change app icons?</p>
            </MazAnimatedElement>
          </template>
          <template #content-1>
            <MazAnimatedElement direction="right" :delay="400" :duration="700">
              <p>
                Change any icon by replacing the corresponding file in
                the <Code inline>&nbsp;/Config/Resources/&nbsp;</Code>
                directory. Ensure they have the same name and are in the same
                format as what you are replacing. You may want to do this with
                icons in plugin folders too.
                <br /><br />
                To change the Quokka executable file's icon, use a tool like
                <ExternalLink blank
                  url="https://www.angusj.com/resourcehacker/">
                  Resource Hacker
                </ExternalLink>
                <ExternalLink blank
                  url="https://web.archive.org/web/20250726113558/https://www.techgainer.com/change-exe-executable-file-icon/">
                  (guide)
                </ExternalLink>
                .
              </p>
            </MazAnimatedElement>
          </template>
        </MazAccordion>
      </div>
    </MazAnimatedElement>
  </div>
</template>
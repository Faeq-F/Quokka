<script setup lang="ts">
import Code from '~/components/code.vue'

const loading = ref(true)
const license = ref('')

onMounted(async () => {
  try {
    license.value = await $fetch('https://raw.githubusercontent.com/Faeq-F/Quokka/refs/heads/main/LICENCE')
    license.value = license.value.trimStart()
  } catch (err) {
    console.log('Error fetching license data:', err.toString())
  } finally {
    loading.value = false
  }
})

</script>
<template>
  <div>
    <div class="text-center mt-42 varela">
      <MazAnimatedElement direction="up" :delay="200" :duration="700">
        <span class="text-6xl">License</span>
      </MazAnimatedElement>
      <p class="text-gray-500 dark:text-gray-400 mt-4">
        <MazAnimatedElement direction="up" :delay="400" :duration="700"
          class="inline">Legal
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="450" :duration="700"
          class="inline">information
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="500" :duration="700"
          class="inline">and
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="550" :duration="700"
          class="inline">terms
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="600" :duration="700"
          class="inline">of
        </MazAnimatedElement>
        <MazAnimatedElement direction="up" :delay="650" :duration="700"
          class="inline">use
        </MazAnimatedElement>
      </p>
    </div>
    <div class="w-full px-78 mb-4 mt-16 outfit">
      <MazAnimatedElement direction="up" :delay="850" :duration="700">
        <MazCardSpotlight class="w-full">
          <div class="">
            <div class="">
              <div class="">
                <div class="flex gap-4">
                  <UIcon name="i-lucide-scale" class="!size-10" />
                  <div class="">
                    <div class="">
                      Quokka is licensed under the
                    </div>
                    <h3 class="font-bold">GNU General Public License v3.0</h3>
                  </div>
                </div>
                <USeparator class="my-3"
                  :ui="{ border: 'dark:border-gray-600' }" />
              </div>
              <div class="flex justify-end">
                <div class="flex-1/3 pr-6">
                  Permissions of this strong copyleft license are conditioned on
                  making available complete source code of licensed works and
                  modifications, which include larger works using a licensed
                  work, under the same license. Copyright and license notices
                  must be preserved. Contributors provide an express grant of
                  patent rights.
                </div>
                <div class="flex-1">
                  <h5 class="font-bold">Permissions</h5>
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-check" />
                    Commercial use
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-check" />
                    Modification
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-check" />
                    Distribution
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-check" />
                    Patent use
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-check" />
                    Private use
                  </div>
                </div>
                <div class="flex-1">
                  <h5 class="font-bold">Limitations</h5>
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-x" />
                    Liability
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-x" />
                    Warranty
                  </div>
                </div>
                <div class="flex-1">
                  <h5 class="font-bold">Conditions</h5>
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-info" />
                    License & copyright notice
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-info" />
                    State changes
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-info" />
                    Disclose source
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-info" />
                    Same license
                  </div>
                </div>
              </div>
            </div>
            <USeparator class="my-3" :ui="{ border: 'dark:border-gray-600' }" />
            <div class="">
              This is not legal advice.
            </div>
          </div>
        </MazCardSpotlight>
      </MazAnimatedElement>
      <MazAnimatedElement direction="up" :delay="1050" :duration="700">
        <MazCardSpotlight class="min-h-[40vh] w-full mt-4">
          <nuxt-link to="https://github.com/Faeq-F/Quokka/blob/main/License"
            class="!no-underline flex items-center !not-italic">
            <UIcon name="i-lucide-book-open" class="mr-1.5 !size-4" />
            <code>License</code>
            <UIcon name="i-lucide-arrow-up-right" class="!size-2 mb-1" />
          </nuxt-link>
          <USeparator class="my-3" :ui="{ border: 'dark:border-gray-600' }" />
          <div v-if="!loading" class="whitespace-pre-line text-center">
            {{ license }}
          </div>
        </MazCardSpotlight>
      </MazAnimatedElement>
    </div>
  </div>
</template>
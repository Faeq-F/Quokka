<script setup>

import { useMiddleNavbarItems } from '~/stores/navbar.ts'
const middleItems = useMiddleNavbarItems()
</script>

<template>
  <div class="px-88 w-full text-center">
    <div class="text-3xl mb-2 mt-22">
      Welcome to the Quokka documentation!
    </div>
    <div>
      This is a place where you can find all the information you need to get
      started with Quokka
    </div>
    <div>
      If you have any questions or feedback, feel free to reach out
    </div>
    <div class="flex w-full mt-12">
      <MazCardSpotlight class="w-1/3 m-3 h-36 clickable"
        v-for="(item, i) in middleItems.items[0][1].children.slice(0, 3)"
        :key="i" @click="$emit('switchSection', item.to)">
        <div class="flex flex-col justify-center items-center h-full">
          <UIcon :name="item.icon" />
          <div>
            {{ item.label }}
          </div>
          <div class="text-sm text-gray-400">
            {{ item.description }}
          </div>
        </div>
      </MazCardSpotlight>
    </div>
    <div class="flex w-full">
      <MazCardSpotlight class="w-1/3 m-3 h-36 clickable"
        v-for="(item, i) in middleItems.items[0][1].children.slice(3, 6)"
        :key="i" @click="$emit('switchSection', item.to)">
        <div class="flex flex-col justify-center items-center h-full">
          <UIcon :name="item.icon" />
          <div>
            {{ item.label }}
          </div>
          <div class="text-sm  text-gray-400">
            {{ item.description }}
          </div>
        </div>
      </MazCardSpotlight>
    </div>
    <div class="pr-6">
      <MazCardSpotlight class="w-full m-3 h-36 clickable" @click=" $emit('switchSection',
        middleItems.items[0][1].children[6].to)">
        <div class="flex flex-col justify-center items-center h-full">
          <UIcon :name="middleItems.items[0][1].children[6].icon" />
          <div>
            {{ middleItems.items[0][1].children[6].label }}
          </div>
          <div class="text-sm  text-gray-400">
            {{ middleItems.items[0][1].children[6].description }}
          </div>
        </div>
      </MazCardSpotlight>
    </div>
  </div>
</template>
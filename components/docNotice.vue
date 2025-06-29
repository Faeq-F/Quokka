<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({ type: String })
const icon = ref('i-lucide-info');
const iconColor = ref("#5fc1d0")
const outlineColor = ref("info")
if (props.type == 'warning') {
  icon.value = "i-lucide-triangle-alert"
  iconColor.value = "#f0b100"
  outlineColor.value = 'warning'
} else if (props.type == 'danger') {
  icon.value = "i-lucide-octagon-alert"
  iconColor.value = "#fb2c36"
  outlineColor.value = 'danger'
} else if (props.type == 'tip') {
  icon.value = "i-lucide-lightbulb"
  iconColor.value = "#d2afff"
  outlineColor.value = 'secondary'
} else if (props.type == 'success') {
  icon.value = "i-lucide-check-check"
  iconColor.value = "hsl(130, 51%, 65%)"
  outlineColor.value = 'success'
}
</script>
<template>
  <MazCardSpotlight class="m-2" :color="outlineColor">
    <div class="flex items-center">
      <UIcon :name="icon" :class="`text-[${iconColor}] !size-5 min-w-5`" />
      <USeparator orientation="vertical" class="h-5 mx-3"
        :ui="{ border: 'dark:border-gray-600 h-full' }" />
      <div>
        <slot />
      </div>
    </div>
  </MazCardSpotlight>
</template>
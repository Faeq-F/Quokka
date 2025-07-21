<script lang="ts" setup>
//applying the right theme to the doc in the iframe and showing the frame
function applyThemeToAPIFrame() {
  APIframe.value.contentDocument.getElementsByTagName(
    "html"
  )[0].dataset.bsTheme = themeHandler.selectedTheme.value;
}

//used to detect iframe url change - run callback before iframe loads new doc
function iframeURLChange(iframe, callback) {
  var unloadHandler = function () {
    // Timeout needed because the URL changes immediately after
    // the `unload` event is dispatched.
    setTimeout(function () {
      callback(iframe, iframe.contentWindow.location.href);
    }, 0);
  };
  function attachUnload() {
    // Remove the unloadHandler in case it was already attached.
    // Otherwise, the change will be dispatched twice.
    iframe.contentWindow.removeEventListener("unload", unloadHandler);
    iframe.contentWindow.addEventListener("unload", unloadHandler);
  }
  iframe.addEventListener("load", attachUnload);
  attachUnload();
}

import { watch, onMounted, ref } from 'vue'
import { useThemeHandler } from 'maz-ui'
const themeHandler = useThemeHandler({
  watchChanges: true,
})
const APIframe = ref(null)
onMounted(() => {
  //when the iframe has loaded the doc, apply theme and show it
  APIframe.value.addEventListener("load", applyThemeToAPIFrame);
  //when user switches page theme, change theme of doc in iframe as well
  watch(themeHandler.selectedTheme, async (_newTheme, _oldTheme) => applyThemeToAPIFrame())
  //hide the iframe when the url changes since the theme needs to be applied (prevents flashing of white bg when in dark mode)
  iframeURLChange(APIframe.value, function (iframe, url) {
    applyThemeToAPIFrame();
  });

})
</script>
<template>
  <div class="w-full h-full !border-0">
    <iframe ref="APIframe" src="/Quokka/APIdocs/api/Quokka.html"
      class="w-full h-full"></iframe>
  </div>
</template>
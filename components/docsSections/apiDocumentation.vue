<script lang="ts" setup>
//applying the right theme to the doc in the iframe and showing the frame
function applyThemeToAPIFrame() {
  APIframe.value.contentDocument.getElementsByTagName(
    "html"
  )[0].dataset.bsTheme = themeHandler.selectedTheme.value;
  //cursor styles
  let content = `
    a:-webkit-any-link{
      cursor: url(https://faeq-f.github.io/Quokka/cursors/${themeHandler.selectedTheme.value}-Click.cur),auto;
    }
  `
  let style = APIframe.value.contentDocument.createElement("style");
  style.type = "text/css";
  style.appendChild(APIframe.value.contentDocument.createTextNode(content));
  APIframe.value.contentDocument.body.appendChild(style);
  APIframe.value.contentDocument.body.style.cursor =
    "url(https://faeq-f.github.io/Quokka/cursors/" + themeHandler.selectedTheme.value + "-Point.cur),auto";
  for (var a of APIframe.value.contentDocument.body.getElementsByTagName(
    "a"
  )) {
    a.style.cursor = "url(https://faeq-f.github.io/Quokka/cursors/" + themeHandler.selectedTheme.value + "-Click.cur),auto";
  }
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
  <h1>
    <UIcon name="i-lucide-code" /> API documentation
  </h1>
  <div>
    <div class="w-full h-[70vh] !border-0">
      <iframe ref="APIframe" src="../APIdocs/api/Quokka.html"
        class="w-full h-full"></iframe>
    </div>
  </div>
</template>
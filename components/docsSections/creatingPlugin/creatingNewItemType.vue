<script setup lang="ts">
import ExternalLink from '~/components/link.vue'
import DocNotice from '~/components/docNotice.vue'
</script>
<template>
  <MazCardSpotlight class="m-2" style="width: calc(100% - 0.5rem);">
    Most plugins will want to show results to the user in the form of
    an item on the results list in the search window.<br />
    To do so, first create an item type to define how your
    results are displayed;
    <br /><br />
    <ol>
      <li>
        <span class="flex gap-1">
          In the
          <Code inline> .cs </Code>
          file add
        </span>
        <Code lang="cs">
          using Quokka;
          using Quokka.PluginArch;
          using Quokka.ListItems;
        </Code>
      </li>
      <li>
        <span class="flex gap-1">
          Create a
          <Code inline> ListItem </Code>
          class for your item type
        </span>
        <Code lang="cs">
          class TypedTextItem : ListItem
          &nbsp;&nbsp;{

          &nbsp;&nbsp; &nbsp;readonly string query;

          &nbsp;&nbsp; &nbsp;public TypedTextItem(string query)
          &nbsp;&nbsp; &nbsp;{
          &nbsp;&nbsp; &nbsp; &nbsp;Name = $&quot;You typed `{query}`&quot;;
          &nbsp;&nbsp; &nbsp; &nbsp;Description = &quot;Hit the enter key to copy the text&quot;;
          &nbsp;&nbsp; &nbsp; &nbsp;UiDispatcher.BeginInvoke(() =&gt;
          &nbsp;&nbsp; &nbsp; &nbsp;{
          &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;Icon = new BitmapImage(new Uri(
          &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Environment.CurrentDirectory + &quot;\\PlugBoard\\PluginTypedText\\Plugin\\text.png&quot;));
          &nbsp;&nbsp; &nbsp; &nbsp;});
          &nbsp;&nbsp; &nbsp; &nbsp;this.query = query;
          &nbsp;&nbsp; &nbsp;}

          &nbsp;&nbsp; &nbsp;public override void Execute()
          &nbsp;&nbsp; &nbsp;{
          &nbsp;&nbsp; &nbsp; &nbsp;System.Windows.Clipboard.SetText(query);
          &nbsp;&nbsp; &nbsp; &nbsp;App.Current.MainWindow.Close();
          &nbsp;&nbsp; &nbsp;}
          &nbsp;&nbsp;}
        </Code>
        <blockquote>
          This is a part of the
          <ExternalLink url="https://github.com/Faeq-F/Quokka-TypedText-Plugin"
            target="_blank">
            TypedText plugin
          </ExternalLink>
          &nbsp;(a demo plugin not made for use)
        </blockquote>
      </li>
    </ol>
  </MazCardSpotlight>
  <DocNotice type="warning" class="m-2" style="width: calc(100% - 0.5rem);">
    <span class="flex gap-1">
      A <Code inline> ListItem </Code>
      must have the following:
    </span>
    <ul>
      <li>
        <span class="flex gap-1">an <Code inline> Icon </Code></span>
      </li>
      <li>
        <span class="flex gap-1">a <Code inline> Name </Code></span>
      </li>
      <li>
        <span class="flex gap-1">a <Code inline> Description </Code></span>
      </li>
      <li>
        <span class="flex gap-1">
          an <Code inline> Execute </Code>
          method to define what should happen when the
          <Code inline> ListItem </Code> is run
        </span>
        (i.e., what happens when the user hits the <kbd>↵</kbd> key with
        that item selected)
      </li>
    </ul>
    <br />
    <img src="/media/Docs/ListItems.png"></img>
  </DocNotice>
</template>
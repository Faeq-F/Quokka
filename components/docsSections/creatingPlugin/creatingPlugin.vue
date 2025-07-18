<script setup lang="ts">
import ExternalLink from '~/components/link.vue'
import DocNotice from '~/components/docNotice.vue'
</script>
<template>
  <MazCardSpotlight class="m-2" style="width: calc(100% - 0.5rem);">
    <span class="flex gap-1">
      To create the plugin itself, create a class that inherits from
      <Code inline> Plugin </Code>
    </span>
    (You do not need to implement all methods)
    <DocNotice type="info" class="m-2" style="width: calc(100% - 1rem);">
      <span class="flex gap-1">
        <Code inline> OnQueryChange </Code> is the method that is called by
        the
        <Code inline> SearchWindow </Code> when a user types in a query.
      </span>
      In this method, you should create your list item objects, filter them
      (if needed), and return them in a list.
      <br /><br />
      When returning items for a special command, you will need to sort the
      list yourself.
      <span class="flex gap-1">
        Normal results (those returned in
        <Code inline> OnQueryChange </Code> ) do not need to be sorted as
        Quokka
        will sort them
      </span>
      once it has results from all of the plugins the
      program is using during runtime.
    </DocNotice>
    <DocNotice type="tip" class="m-2" style="width: calc(100% - 1rem);">
      <span class="flex gap-1">See
        <ExternalLink
          url="https://github.com/Faeq-F/Quokka/blob/main/Quokka/PluginArch/Plugin.cs"
          target="_blank" class="flex">
          <span>the&nbsp;&nbsp;</span>
          <Code inline class="!border-0">Plugin</Code>
          <span>&nbsp;&nbsp;class</span>
        </ExternalLink>
        for more information
      </span>
    </DocNotice>
  </MazCardSpotlight>
  <MazAccordion class="m-2"
    style="width: calc(100% - 0.5rem); --maz-color-primary-alpha-20: var(--maz-color-secondary-alpha-20);--maz-color-primary-alpha: var(--maz-color-secondary-alpha);">
    <template #title-1>
      <div class="flex items-center">
        <UIcon name="i-lucide-lightbulb" class="!size-5 min-w-5"
          style="color: #d2afff" />
        <USeparator orientation="vertical" class="h-7 mx-3"
          :ui="{ border: 'dark:border-gray-600 h-full' }" />
        <div>
          See an example from the
          <ExternalLink url="https://github.com/Faeq-F/TypedText-Plugins"
            target="_blank">
            ShowTypedText plugin
          </ExternalLink>
          &nbsp;(a demo plugin not made for use)
        </div>
      </div>
    </template>
    <template #content-1>
      <Code lang="cs">
        /// &lt;summary&gt;
        /// The TypedText Plugin
        /// &lt;/summary&gt;
        public partial class TypedText : Plugin {

          private static PluginSettings pluginSettings = new();
          internal static PluginSettings PluginSettings {
            get =&gt; pluginSettings; set =&gt; pluginSettings = value;
          }

          /// &lt;summary&gt;
          /// Loads plugin settings
          /// &lt;/summary&gt;
          public TypedText() {
            string fileName = Environment.CurrentDirectory +
              &quot;\\PlugBoard\\Plugin_TypedText\\Plugin\\settings.json&quot;;
            PluginSettings = JsonConvert.DeserializeObject&lt;PluginSettings&gt;(File.ReadAllText(fileName))!;
          }

          /// &lt;summary&gt;
          /// &lt;inheritdoc/&gt;
          /// &lt;/summary&gt;
          public override string PluggerName { get; set; } = &quot;TypedText&quot;;

          private List&lt;ListItem&gt; ProduceItems(string query, int number) {
            bool differentDesc = false;
            if (query.Contains(PluginSettings.ShowDifferentDescriptionFlag)) {
              query = query.Replace(PluginSettings.ShowDifferentDescriptionFlag, &quot;&quot;);
              differentDesc = true;
            }

            List&lt;ListItem&gt; items = new();
            for (int i = 0; i &lt; number; i++) {
              items.Add(new TypedTextItem(query, differentDesc));
            }

            if (
                  &quot;otherTypedTextItem&quot;.Contains(query, StringComparison.OrdinalIgnoreCase)
                  || ( FuzzySearch.LD(&quot;otherTypedTextItem&quot;, query) &lt; PluginSettings.FuzzySearchThreshold )
            ) {
              items.Add(new OtherTypedTextItem(query));
            }
            return items;
          }

          /// &lt;summary&gt;
          /// &lt;inheritdoc/&gt;
          /// &lt;/summary&gt;
          /// &lt;param name=&quot;query&quot;&gt;&lt;inheritdoc/&gt;&lt;/param&gt;
          /// &lt;returns&gt;
          /// A single TypedText item that shows you the query you typed in
          /// &lt;/returns&gt;
          public override List&lt;ListItem&gt; OnQueryChange(string query) {
            return ProduceItems(query, 1);
          }

          /// &lt;summary&gt;
          /// &lt;inheritdoc/&gt;&lt;br /&gt;
          /// Displays a message-box to the user, telling them that Quokka is about to shutdown
          /// &lt;/summary&gt;
          public override void OnAppShutdown() {
            System.Windows.MessageBox.Show(
              &quot;Quokka is about to shutdown&quot;,
              &quot;Message from the TypedText plugin&quot;,
              MessageBoxButton.OK,
              MessageBoxImage.Information
            );
          }

          /// &lt;summary&gt;
          /// &lt;inheritdoc/&gt;&lt;br /&gt;
          /// Displays a message-box to the user, telling them that Quokka is initializing
          /// &lt;/summary&gt;
          public override void OnAppStartup() {
            System.Windows.MessageBox.Show(
              &quot;Quokka is Initializing&quot;,
              &quot;Message from the TypedText plugin&quot;,
              MessageBoxButton.OK,
              MessageBoxImage.Information
            );
          }

          /// &lt;summary&gt;
          /// &lt;inheritdoc/&gt;&lt;br /&gt;
          /// Displays a message-box to the user, telling them that they have launched the Search Window
          /// &lt;/summary&gt;
          public override void OnSearchWindowStartup() {
            System.Windows.MessageBox.Show(
              &quot;The Search Window has been launched&quot;,
              &quot;Message from the TypedText plugin&quot;,
              MessageBoxButton.OK,
              MessageBoxImage.Information
            );
          }

          /// &lt;summary&gt;
          /// Provides the correct number of TypedTextItems for the SpecialCommand given
          /// &lt;/summary&gt;
          /// &lt;param name=&quot;command&quot;&gt;&lt;inheritdoc/&gt;&lt;/param&gt;
          /// &lt;returns&gt;The respective amount of TypedTextItems&lt;/returns&gt;
          public override List&lt;ListItem&gt; OnSpecialCommand(string command) {
            switch (command) {
              case var value when value == PluginSettings.Show2ItemsSpecialCommand: {
                return ProduceItems(command, 2);
              }
              case var value when value == PluginSettings.Show3ItemsSpecialCommand: {
                return ProduceItems(command, 3);
              }
              default: {
                return ProduceItems(command, 4);
              }
            }
          }

          /// &lt;summary&gt;
          /// &lt;inheritdoc/&gt;
          /// &lt;/summary&gt;
          /// &lt;returns&gt;All of the SpecialCommands in the plugin settings&lt;/returns&gt;
          public override List&lt;string&gt; SpecialCommands() {
            return new List&lt;string&gt;() {
              PluginSettings.Show2ItemsSpecialCommand,
              PluginSettings.Show3ItemsSpecialCommand,
              PluginSettings.Show4ItemsSpecialCommand
            };
          }

          /// &lt;summary&gt;
          /// &lt;inheritdoc/&gt;&lt;br /&gt;
          /// Provides a single TypedTextItem, like OnQueryChange&lt;br /&gt;
          /// The signifier is only used to remove items from other plugins from the results list
          /// &lt;/summary&gt;
          /// &lt;param name=&quot;command&quot;&gt;&lt;inheritdoc/&gt;&lt;/param&gt;
          /// &lt;returns&gt;A single TypedTextItem, like OnQueryChange&lt;/returns&gt;
          public override List&lt;ListItem&gt; OnSignifier(string command) {
            return ProduceItems(command.Substring(PluginSettings.ItemSignifier.Length), 1);
          }

          /// &lt;summary&gt;
          /// &lt;inheritdoc/&gt;
          /// &lt;/summary&gt;
          /// &lt;returns&gt;ItemSignifier in the plugin settings&lt;/returns&gt;
          public override List&lt;string&gt; CommandSignifiers() {
            return new List&lt;string&gt;() { PluginSettings.ItemSignifier };
          }
        }
    </Code>
      <blockquote>
        This is a part of the
        <ExternalLink url="https://github.com/Faeq-F/TypedText-Plugins"
          target="_blank">
          ShowTypedText plugin
        </ExternalLink>
        &nbsp;(a demo plugin not made for use)
      </blockquote>
    </template>
  </MazAccordion>
</template>
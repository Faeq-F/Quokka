<script setup lang="ts">
import ExternalLink from '~/components/link.vue'
import DocNotice from '~/components/docNotice.vue'
import refreshLenis from '~/assets/scripts/lenis';
</script>
<template>
  <DocNotice type="info" class="m-2" style="width: calc(100% - 0.5rem);">
    <span class="flex gap-1">
      A context pane is displayed when the user hits the
      <Code inline> ContextPaneKey </Code>
      , replacing the item list.
    </span>
    <span class="flex gap-1">
      If the selected item does not have a context pane defined,
      nothing happens when the
      <Code inline> ContextPaneKey </Code>
      is hit.
    </span>
  </DocNotice>
  <MazCardSpotlight class="m-2" style="width: calc(100% - 0.5rem);">
    To define the context pane for an item type:
    <ol>
      <li>
        <span class="flex gap-1">
          In the project, add a
          <Code inline> WPF Page </Code>
          called <Code inline> ContextPane </Code>
        </span>
      </li>
      <li>
        <span class="flex gap-1">
          Ensure <Code inline lang="cs"> ContextPane : ItemContextPane </Code>
        </span>
        <span class="flex gap-1">
          (inherits <Code inline lang="cs"> ItemContextPane </Code>
          from <Code inline lang="cs"> Quokka.ListItems </Code>)
        </span>
      </li>
      <li>
        Ensure the plugin's project file has:
        <Code lang="markup">
          &lt;ItemGroup&gt;
            &lt;Compile Update=&quot;ContextPane.xaml.cs&quot;&gt;
              &lt;SubType&gt;Code&lt;/SubType&gt;
            &lt;/Compile&gt;
          &lt;/ItemGroup&gt;

          &lt;ItemGroup&gt;
            &lt;Page Update=&quot;ContextPane.xaml&quot;&gt;
              &lt;SubType&gt;Designer&lt;/SubType&gt;
            &lt;/Page&gt;
          &lt;/ItemGroup&gt;
        </Code>
      </li>
    </ol>
  </MazCardSpotlight>
  <MazAccordion class="m-2" @update:model-value="() => refreshLenis()"
    style="width: calc(100% - 0.5rem); --maz-color-primary-alpha-20: var(--maz-color-secondary-alpha-20);--maz-color-primary-alpha: var(--maz-color-secondary-alpha);">
    <template #title-1>
      <div class="flex items-center">
        <UIcon name="i-lucide-lightbulb" class="!size-5 min-w-5"
          style="color: #d2afff" />
        <USeparator orientation="vertical" class="h-7 mx-3"
          :ui="{ border: 'dark:border-gray-600 h-full' }" />
        <div>
          A context pane tends to have extra information or actions.<br />
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
      <Code lang="markup">
        &lt;src:ItemContextPane x:Class=&quot;Plugin_ShowTypedText.ContextPane&quot;
          xmlns:src=&quot;clr-namespace:Quokka.ListItems;assembly=Quokka&quot;
          d:DesignHeight=&quot;300&quot; d:DesignWidth=&quot;800&quot; ... Title=&quot;ContextPane&quot;
          KeyDown=&quot;Page_KeyDown&quot;&gt;

          &lt;Border ...&gt;

            &lt;Grid Margin=&quot;10&quot; VerticalAlignment=&quot;Center&quot; HorizontalAlignment=&quot;Center&quot;&gt;

              ...

              &lt;Grid Grid.Column=&quot;0&quot;&gt;

                ...

                &lt;Image Grid.Row=&quot;0&quot; x:Name=&quot;DetailsImage&quot; /&gt;
                &lt;TextBlock TextWrapping=&quot;Wrap&quot;
                  Text=&quot;You typed the text after 'Typed:'&quot; Grid.Row=&quot;1&quot;
                  Padding=&quot;10&quot; /&gt;
                &lt;TextBlock TextWrapping=&quot;Wrap&quot; Text=&quot;&quot; Grid.Row=&quot;2&quot; x:Name=&quot;text&quot;
                  Padding=&quot;10&quot; /&gt;
              &lt;/Grid&gt;

              &lt;Grid Grid.Column=&quot;1&quot;&gt;

                &lt;ListView ScrollViewer.HorizontalScrollBarVisibility=&quot;Disabled&quot;
                  HorizontalContentAlignment=&quot;Center&quot; x:Name=&quot;ButtonsListView&quot;&gt;
                  &lt;ui:Button Content=&quot;Copy the text&quot; Padding=&quot;10&quot; Click=&quot;CopyText&quot; /&gt;
                  &lt;ui:Button Content=&quot;Another 'Copy the text' button&quot; Padding=&quot;10&quot;
                    Click=&quot;CopyText&quot; /&gt;
                  &lt;ui:Button Content=&quot;Another 'Copy the text' button&quot; Padding=&quot;10&quot;
                    Click=&quot;CopyText&quot; /&gt;
                &lt;/ListView&gt;

              &lt;/Grid&gt;
            &lt;/Grid&gt;
          &lt;/Border&gt;
        &lt;/src:ItemContextPane&gt;
      </Code>
      <Code lang="cs">
        using Quokka;
        ...

        namespace Plugin_ShowTypedText {

          public partial class ContextPane : ItemContextPane {

            private Quokka.ListItem Item;

            public ContextPane() {
              InitializeComponent();
              this.Item = (Application.Current.MainWindow as
                SearchWindow).SelectedItem;
              DetailsImage.Source = this.Item.icon;
              text.Text = Item.name;
            }

            ...

            protected override void Page_KeyDown(object sender, KeyEventArgs e) {
              ButtonsListView.Focus();
              switch (e.Key) {
                case Key.Enter:

                  if ((ButtonsListView.SelectedIndex == -1))
                    ButtonsListView.SelectedIndex = 0;

                  Wpf.Ui.Controls.Button currentButton =
                    (ButtonsListView.SelectedItem as Wpf.Ui.Controls.Button);

                  currentButton.RaiseEvent(new
                    RoutedEventArgs(Wpf.Ui.Controls.Button.ClickEvent));
                  break;

                case Key.Down:

                  if ((ButtonsListView.SelectedIndex == -1)) {
                    ButtonsListView.SelectedIndex = 1;
                  } else if (ButtonsListView.SelectedIndex == ButtonsListView.Items.Count - 1) {
                    ButtonsListView.SelectedIndex = 0;
                  } else {
                    ButtonsListView.SelectedIndex++;
                  }

                  ButtonsListView.ScrollIntoView(ButtonsListView.SelectedItem);
                  break;

                case Key.Up:

                  if ((ButtonsListView.SelectedIndex == -1) ||
                    (ButtonsListView.SelectedIndex == 0)) {
                    ButtonsListView.SelectedIndex = ButtonsListView.Items.Count - 1;
                  } else {
                    ButtonsListView.SelectedIndex--;
                  }

                  ButtonsListView.ScrollIntoView(ButtonsListView.SelectedItem);
                  break;

                case Key.Apps: //This is the menu key

                  (Application.Current.MainWindow as SearchWindow).contextPane.Visibility =
                     Visibility.Collapsed;
                  (Application.Current.MainWindow as SearchWindow).searchBox.Focus();

                  //makes showing a new pane more reliable
                  (Application.Current.MainWindow as SearchWindow).contextPane.Source = null;
                  break;

                default:
                  return;
              }
              e.Handled = true;
            }
          }
        }
      </Code>
    </template>
  </MazAccordion>
</template>
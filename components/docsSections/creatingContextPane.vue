<template>

  <h1>
    <UIcon name="i-lucide-panels-top-left" /> Creating a context pane
  </h1>
  <div>

    All plugins need their own context panes. It is up to you whether
    or
    not
    they
    are visible to the user or if they do anything at all; but one
    must
    be
    defined.<br /><br />To define the context pane for the item type:
    <ol>
      <li>In the project, add a WPF Page called 'ContextPane'</li>
      <li>
        Ensure ContextPane : ItemContextPane (inherits ItemContextPane
        from
        Quokka.ListItems)
      </li>
      <li>
        Ensure the plugin's project file has:
        <textarea readonly style="height: 20vh">

                <ItemGroup>
                  <Compile Update="ContextPane.xaml.cs">
                    <SubType>Code</SubType>
                  </Compile>
                </ItemGroup>

                <ItemGroup>
                  <Page Update="ContextPane.xaml">
                    <SubType>Designer</SubType>
                  </Page>
                </ItemGroup>
              </textarea>
      </li>
    </ol>
  </div>

  <div>
    To not have a context pane visible to the user, you can use the
    following
    code;<br />
    <textarea readonly style="height: 20vh">

            public partial class ContextPane : ItemContextPane {
            public ContextPane() {
            InitializeComponent();
            base.ReturnToSearch();
            }
            }
          </textarea>
    <textarea readonly style="
      height: 20vh;
      width: 90%;
      font-family: cascadia code;
      border-radius: 10px;
      border: 1px solid #bbb;
    ">

            <src:ItemContextPane x:Class="Plugin_ShowTypedText.ContextPane"
              xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
              xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
              xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
              xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
              xmlns:src="clr-namespace:Quokka.ListItems;assembly=Quokka"
              Title="ContextPane" d:DesignHeight="300" d:DesignWidth="800">

              <Grid />

            </src:ItemContextPane>

          </textarea>
  </div>

  <div>
    If your context pane is visible, you may want to add extra
    information
    or
    actions like the following does:
    <textarea readonly style="height: 20vh">
            <src:ItemContextPane x:Class="Plugin_ShowTypedText.ContextPane"
              xmlns:src="clr-namespace:Quokka.ListItems;assembly=Quokka"
              d:DesignHeight="300" d:DesignWidth="800" ... Title="ContextPane"
              KeyDown="Page_KeyDown">

              <Border ...>

                <Grid Margin="10" VerticalAlignment="Center"
                  HorizontalAlignment="Center">

                  ...

                  <Grid Grid.Column="0">

                    ...

                    <Image Grid.Row="0" x:Name="DetailsImage" />
                    <TextBlock TextWrapping="Wrap"
                      Text="You typed the text after 'Typed:'" Grid.Row="1"
                      Padding="10" />
                    <TextBlock TextWrapping="Wrap" Text="" Grid.Row="2"
                      x:Name="text" Padding="10" />
                  </Grid>

                  <Grid Grid.Column="1">

                    <ListView
                      ScrollViewer.HorizontalScrollBarVisibility="Disabled"
                      HorizontalContentAlignment="Center"
                      x:Name="ButtonsListView">

                      <ui:Button Content="Copy the text" Padding="10"
                        Click="CopyText" />
                      <ui:Button Content="Another 'Copy the text' button"
                        Padding="10" Click="CopyText" />
                      <ui:Button Content="Another 'Copy the text' button"
                        Padding="10" Click="CopyText" />
                    </ListView>

                  </Grid>
                </Grid>
              </Border>
            </src:ItemContextPane>
          </textarea>
    <textarea readonly>
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

            protected override void Page_KeyDown(object sender, KeyEventArgs e)
            {
            ButtonsListView.Focus();
            switch (e.Key){
            case Key.Enter:

            if ((ButtonsListView.SelectedIndex == -1))
            ButtonsListView.SelectedIndex
            =
            0;

            Wpf.Ui.Controls.Button currentButton =
            (ButtonsListView.SelectedItem as Wpf.Ui.Controls.Button);
            currentButton.RaiseEvent(new
            RoutedEventArgs(Wpf.Ui.Controls.Button.ClickEvent));
            break;
            case Key.Down:
            if ((ButtonsListView.SelectedIndex == -1)) {
            ButtonsListView.SelectedIndex = 1;
            } else if (ButtonsListView.SelectedIndex ==
            ButtonsListView.Items.Count
            -
            1) {
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
            (Application.Current.MainWindow as
            SearchWindow).contextPane.Visibility
            = Visibility.Collapsed;
            (Application.Current.MainWindow as SearchWindow).searchBox.Focus();

            //makes showing a new pane more reliable
            (Application.Current.MainWindow as SearchWindow).contextPane.Source
            =
            null;
            break;
            default:
            return;
            }
            e.Handled = true;
            }
            }
            }
          </textarea>
    <blockquote>
      This is a part of the
      <a
        href="https://github.com/Faeq-F/TypedText-Plugins">ShowTypedText</a>&nbsp;
      plugin (a demo plugin; not made for use)
    </blockquote>
  </div>
</template>
<template>
  <div>
    <h1>
      <UIcon name="i-lucide-list" /> Creating a new item type
    </h1>
    <div>
      Most plugins will want to show results to the user in the form of
      an
      item
      on
      the results list in the search window. To do so, first create an
      item
      type
      to
      define how your results are displayed;
      <br /><br />
      <ol>
        <li>
          In the .cs file add
          <br />
          <textarea readonly style="height: 5vh;" data-lenis-prevent>
                using Quokka.PluginArch;
                using Quokka.ListItems;
              </textarea>
        </li>
        <li>
          Create a ListItem class for your item type
          <br />
          <textarea readonly data-lenis-prevent>
                class TypedTextItem : ListItem {
                public string query;

                public TypedTextItem(string query) {
                this.Name = "Typed:" + query;
                this.query = query;
                this.Description = "The search field contains the above text";
                this.Icon = new BitmapImage(new Uri(
                Environment.CurrentDirectory +
                "\\Config\\Resources\\information.png"));
                }

                //When item is selected, copy text
                public override void Execute() {
                Clipboard.SetText(query);
                App.Current.MainWindow.Close();
                }
                }
              </textarea>
          <blockquote>
            This is a part of the
            <a
              href="https://github.com/Faeq-F/TypedText-Plugins">ShowTypedText</a>&nbsp;
            plugin (a demo plugin; not made for use)
          </blockquote>
        </li>
      </ol>
    </div>
    <div>
      ListItems must have the following:
      <ul>
        <li>a Name</li>
        <li>a Description</li>
        <li>an Icon</li>
        <li>
          an Execute method to define what should happen when a list
          item
          is
          run
          (i.e., the user hits the enter key when that item is selected)
        </li>
        <li>a context pane</li>
      </ul>
      <img src="/media/AppScreenshots/AllApps.png"></img>
    </div>
    <div>
      The ToString method of ListItems return the item's Name.
    </div>
  </div>
</template>
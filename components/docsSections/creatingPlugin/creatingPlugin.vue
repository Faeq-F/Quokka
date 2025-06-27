<template>
  <div>
    In the same .cs file, create a class that inherits from
    IPlugger;<br />
    <textarea readonly data-lenis-prevent>
    public partial class ShowTypedText : IPlugger {

    public ShowTypedText() {}

    public string PluggerName { get; set; } = "ShowTypedText";

    /// <summary>
      /// This will get called when user types a query into the search
      field
      /// </summary>
    public List<ListItem> OnQueryChange(string query) {
      List<ListItem> ItemList = new List<ListItem>();
          ItemList.Add(new ShowTypedTextItem(query));
          return ItemList;
          }

          public List<String> SpecialCommands() {
            return new List<String>();
              }

              public List<ListItem> OnSpecialCommand(string command) {
                return new List<ListItem>();
                  }

                  public void OnAppStartup() { }

                  public void OnAppShutdown() { }

                  public void OnSearchWindowStartup() { }

                  }
  </textarea>
    <blockquote>
      This is a part of the
      <a
        href="https://github.com/Faeq-F/TypedText-Plugins">ShowTypedText</a>&nbsp;
      plugin (a demo plugin; not made for use)
    </blockquote>
  </div>

  <div>
    OnQueryChange is the method that is called by the SearchWindow
    when
    a
    user
    types in a query In this method, you should create your list item
    objects,
    filter them (if needed), and return them in a list.
    <br /><br />
    If your plugin has a special command, then you will need to sort
    the
    list
    for
    that command yourself. Normal results (those returned in
    OnQueryChange) do
    not
    need to be sorted as Quokka will sort them once it has results
    from
    all of
    the
    plugins the program is using during runtime.
  </div>
</template>
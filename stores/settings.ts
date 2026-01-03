import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settingsStore", {
  state: () => ({
    general: [
      {
        name: "AboutCommand",
        defaultValue: "AboutQuokka",
        notes: [
          "A special command to view the 'About Quokka' item",
          "The 'About Quokka' item lets you copy various links, check for updates and display licenses for works used in Quokka"
        ],
      },
      {
        name: "CheckForUpdates",
        defaultValue: "true",
        notes: [
          "Whether or not Quokka should check for available updates on startup",
          "You can check for updates using the respective item in the context pane for the 'About Quokka' item"
        ],
      },
      {
        name: "WindowHotKey",
        defaultValue: "Space",
        notes: [
          {
            prevText: "The full list of keys that can be used in the setting can be found",
            link: {
              url: "https://learn.microsoft.com/en-us/dotnet/api/system.windows.forms.keys?view=netframework-4.8",
              text: "here"
            },
            afterText: "(use the first column)",
          }
        ],
      },
      {
        name: "WindowHotKeyModifier",
        defaultValue: "Alt",
        notes: [
          {
            prevText: "The full list of keys that can be used in the setting can be found highlighted",
            link: {
              url: "https://github.com/Faeq-F/Quokka/blob/main/Quokka/KeyboardHook.cs#L130-L151",
              text: "here"
            },
          }
        ],
      },
      {
        name: "ContextPaneKey",
        defaultValue: "Apps",
        notes: [
          {
            prevText: "The full list of keys that can be used in the setting can be found",
            link: {
              url: "https://learn.microsoft.com/en-us/dotnet/api/system.windows.input.key?view=netframework-4.8",
              text: "here"
            },
            afterText: "(use the first column)",
          }
        ],
      },
      {
        name: "Scorer",
        defaultValue: "partialRatio",
        notes: [
          "The strategy for sorting list items.",
          {
            prevText: "The full list of different scorers available can be found",
            link: {
              url: "https://github.com/JakeBayer/FuzzySharp/tree/master?tab=readme-ov-file#using-different-scorers",
              text: "here"
            },
            afterText: "(use the word after 'var')",
          }
        ],
      },
      {
        name: "Debounce",
        defaultValue: "300",
        notes: [
          "The delay between the user typing the first character, and Quokka starting to load list items",
          {
            prevText: "(read more",
            link: {
              url: "https://developer.mozilla.org/en-US/docs/Glossary/Debounce",
              text: "here"
            },
            afterText: ")",
          }
        ],
      },
      {
        name: "MaxResults",
        defaultValue: "10",
        notes: ["The maximum number of items shown in the item list"],
      },
      {
        name: "IgnoreMaxResultsFlag",
        defaultValue: "-ShowAll",
        notes: ["Text you can type after your query to make the item list show all results for your query"],
      },
      {
        name: "LoadingItemName",
        defaultValue: "Loading...",
        notes: ["Refer to the relevant image below"],
      },
      {
        name: "LoadingItemDesc",
        defaultValue: "Please wait",
        notes: ["Refer to the relevant image below"],
      },
      {
        name: "NoResultsItemName",
        defaultValue: "No results found",
        notes: ["Refer to the relevant image below"],
      },
      {
        name: "NoResultsItemDesc",
        defaultValue: "Try reformatting / rewording your query",
        notes: ["Refer to the relevant image below"],
      },
      {
        name: "FileManager",
        defaultValue: "explorer.exe",
        notes: [
          "This is the program that will open the plugboard",
          "Plugins may use this setting to open other folders, for e.g., a file location"
        ],
      },
      {
        name: "TextEditor",
        defaultValue: "notepad.exe",
        notes: [
          "This is the program that will open the settings file",
          "Plugins may use this setting to open other files, for e.g., their own settings file"
        ],
      },
    ],
    style: [
      {
        type: "Animation",
        notes: [
          "The animation to be used for the items in the results list",
          {
            prevText: "Values accepted: ",
            values: [
              "FadeIn",
              "Unblur",
              "ScaleFromLeft",
              "ScaleFromTop",
              "ScaleFromRight",
              "ScaleFromBottom",
              "ScaleHorizontally",
              "ScaleVertically",
              "SlideFromLeft",
              "SlideFromTop",
              "SlideFromRight",
              "SlideFromBottom"
            ]
          },
          {
            prevText: "",
            link: {
              url: "https://github.com/XamlFlair/XamlFlair/blob/master/XamlFlair.WPF/DefaultAnimations.xaml",
              text: "Reference"
            },
            afterText: ""
          },
          {
            usedBy: [
              "Animation"
            ]
          }
        ],
      },
      {
        type: "Corner Radius",
        notes: [
          "Rounding corners of elements",
          "Value should be formatted as 'TopLeft,TopRight,BottomRight,BottomLeft' or 'AllCorners'",
          {
            prevText: "E.g. ",
            values: [
              '2,2,2,2', '2', '5,0,0,5'
            ]
          },
          {
            prevText: "",
            link: {
              url: "https://learn.microsoft.com/en-us/dotnet/api/system.windows.cornerradius?view=windowsdesktop-10.0",
              text: "Reference"
            },
            afterText: ""
          },
          {
            usedBy: [
              "WindowRounding", "TrayTaskContextMenuRounding",
              "TrayTaskContextMenuItemRounding", "SearchBarRounding",
              "ListContainerRounding", "ScrollBarBgRounding",
              "ScrollThumbBgRounding", "ScrollThumbRounding", "ListItemRounding",
              "ContextPaneCornerRounding", "ContextPaneListItemRounding"
            ]
          }
        ],
      },
      {
        type: "Double",
        notes: [
          "A decimal number",
          {
            prevText: "E.g. ",
            values: ['2.0', '2', '5.88']
          },
          {
            prevText: "",
            link: {
              url: "https://learn.microsoft.com/en-us/dotnet/api/system.double?view=net-10.0",
              text: "Reference"
            },
            afterText: ""
          },
          {
            usedBy: [
              "AnimationDuration", "AnimationBlurRadius", "ListItemIconColumnWidth",
              "DropShadowOpacity", "TrayTaskContextMenuDropShadowOpacity",
              "DropShadowDirection", "TrayTaskContextMenuDropShadowDirection",
              "TrayTaskContextMenuDropShadowBlurRadius", "DropShadowBlurRadius",
              "DropShadowShadowDepth", "TrayTaskContextMenuDropShadowShadowDepth",
              "TrayTaskContextMenuItemIconSize", "SearchFieldTxtSize",
              "SearchFieldPlaceholderSize", "ListItemIconSize", "ListItemNameSize",
              "ListItemDescSize", "ContextPaneImageSize", "NameTextSize",
              "DescTextSize", "ExtraDetailsTextSize", "ContextPaneListItemIconSize",
              "ContextPaneListItemSize", "SearchBarHeight", "SearchFieldHeight",
              "ListContainerMinHeight", "ContextPaneMinHeight", "WindowWidth",
              "SearchIconWidth", "SearchFieldWidth", "ScrollBarWidth",
              "HorizontalScrollIncrementingWidth", "ScrollBarBgWidth",
              "ScrollThumbBgWidth", "ScrollThumbWidth", "ListItemIconColumnWidth",
              "MaxDetailsWidth"
            ]
          }
        ],
      },
      {
        type: "Font Family",
        notes: [
          "The name of the font used",
          "When you wish to change the app font, you will overwrite 'AppFont.ttf' in the resources folder. The name of the font in this file should be this setting's value",
          {
            usedBy: [
              "AppFont",
            ]
          }
        ],
      },
      {
        type: "Horizontal Alignment",
        notes: [
          "Where an element should be displayed on the horizontal axis (relative to outer element)",
          {
            prevText: "Values accepted: ",
            values: [
              "Left",
              "Center",
              "Right",
              "Stretch",
            ]
          },
          {
            prevText: "",
            link: {
              url: "https://learn.microsoft.com/en-us/dotnet/api/system.windows.horizontalalignment?view=windowsdesktop-10.0",
              text: "Reference"
            },
            afterText: ""
          },
          {
            usedBy: [
              "ContextPaneContentHorizontalAlignment",
              "ContextPaneListHorizontalAlignment",
              "ContextPaneListContentHorizontalAlignment"
            ]
          }
        ],
      },
      {
        type: "Integer",
        notes: [
          "A whole number",
          {
            prevText: "E.g. ",
            values: ['2', '-2', '0']
          },
          {
            prevText: "",
            link: {
              url: "https://learn.microsoft.com/en-us/dotnet/api/system.int32?view=net-10.0",
              text: "Reference"
            },
            afterText: ""
          },
          {
            usedBy: [
              "AnimationOffset",
            ]
          }
        ],
      },
      {
        type: "Rendering Bias",
        notes: [
          "Indicates whether the element renders with emphasis on speed or quality",
          {
            prevText: "Values accepted: ",
            values: [
              "Performance",
              "Quality",
            ]
          },
          {
            prevText: "",
            link: {
              url: "https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.effects.renderingbias?view=windowsdesktop-10.0",
              text: "Reference"
            },
            afterText: ""
          },
          {
            usedBy: [
              "DropShadowRenderingBias",
              "TrayTaskContextMenuDropShadowRenderingBias",
            ]
          }
        ],
      },
      {
        type: "Screen Dimensions",
        notes: [
          "Values that can have 'ScreenHeight' and 'ScreenWidth' values in them",
          {
            prevText: "E.g. ",
            values: [
              "PrimaryScreenHeight", "PrimaryScreenWidth", "PrimaryScreenHeight/3", "PrimaryScreenHeight*4", "PrimaryScreenHeight-56", "PrimaryScreenHeight+20"]
          },
          {
            usedBy: [
              "WindowTopMargin", "WindowWidth", "ListContainerMaxHeight"
            ]
          }
        ],
      },
      {
        type: "Solid Color Brush",
        notes: [
          "A solid color",
          {
            prevText: "",
            link: {
              url: "https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.brushes?view=windowsdesktop-10.0",
              text: "Predefined colors"
            },
            afterText: ""
          },
          "Value should be formatted as 'PredefinedColor', '#rgb', '#rrggbb', '#argb' or '#aarrggbb'",
          {
            prevText: "E.g. ",
            values: ['Red', 'Cyan', '#000', '#a97ef4', '#5444', '#eea97ef4']
          },
          {
            prevText: "",
            link: {
              url: "https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.solidcolorbrush?view=windowsdesktop-10.0",
              text: "Reference"
            },
            afterText: ""
          },
          {
            usedBy: [
              "WindowColor", "WindowBorderColor", "TrayTaskContextMenuColor",
              "TrayTaskContextMenuBorderColor", "TrayTaskContextMenuSeparatorColor",
              "TrayTaskContextMenuItemTxtColor", "TrayTaskContextMenuItemColor",
              "TrayTaskContextMenuItemBorderColor",
              "TrayTaskContextMenuItemHoverColor",
              "TrayTaskContextMenuItemHoverBorderColor", "SearchBarColor",
              "SearchBarBorderColor", "SearchFieldTxtColor",
              "SearchFieldTxtSelColor", "SearchFieldPlaceholderColor",
              "ListContainerBorderColor", "ListContainerColor", "ScrollBarBgColor",
              "ScrollBarBgBorderColor", "ScrollThumbBgColor",
              "ScrollThumbBgBorderColor", "ScrollThumbColor",
              "ScrollThumbBorderColor", "ListItemHoverBorderColor",
              "ListItemHoverBgColor", "ListItemSelectedBorderColor",
              "ListItemSelectedBgColor", "ListItemNameColor", "ListItemDescColor",
              "ContextPaneBorderColor", "ContextPaneBgColor", "NameTextColor",
              "DescTextColor", "ExtraDetailsTextColor",
              "ContextPaneListItemHoverBorderColor",
              "ContextPaneListItemHoverBgColor",
              "ContextPaneListItemSelectedBorderColor",
              "ContextPaneListItemSelectedBgColor", "ContextPaneListItemColor"
            ]
          }
        ],
      },
      {
        type: "Thickness",
        notes: [
          "The thickness of a frame around an element",
          "Value should be formatted as 'left', 'left,top', or 'left,top,right,bottom'",
          {
            prevText: "E.g. ",
            values: ['10,20,15,5', '22', '20,13']
          },
          {
            prevText: "",
            link: {
              url: "https://learn.microsoft.com/en-us/dotnet/api/system.windows.thickness?view=windowsdesktop-10.0",
              text: "Reference"
            },
            afterText: ""
          },
          {
            usedBy: [
              "WindowPadding", "ContextPaneListItemTextPadding",
              "WindowBorderThickness", "TrayTaskContextMenuBorderThickness",
              "TrayTaskContextMenuItemBorderThickness", "SearchBarBorderThickness",
              "ListContainerBorderThickness", "ScrollBarBgBorderThickness",
              "ScrollThumbBgBorderThickness", "ScrollThumbBorderThickness",
              "ListItemBorderThickness", "ContextPaneBorderThickness",
              "ContextPaneListItemBorderThickness", "TrayTaskContextMenuItemMargin",
              "TrayTaskContextMenuItemIconMargin", "SearchIconMargin",
              "SearchFieldMargin", "SearchFieldPlaceholderMargin",
              "ListContainerMargin", "ListMargin", "ScrollBarBgMargin",
              "ScrollThumbBgMargin", "ScrollThumbMargin", "ListItemMargin",
              "ListItemTextMargin", "ContextPaneContentMargin",
              "ContextPaneImageMargin", "NameTextMargin", "DescTextMargin",
              "ExtraDetailsTextMargin", "ContextPaneListMargin",
              "ContextPaneListItemMargin", "ContextPaneListItemIconMargin",
              "ContextPaneListItemContentMargin"
            ]
          }
        ],
      },
      {
        type: "Vertical Alignment",
        notes: [
          "How an element is vertically positioned (within the outer element)",
          {
            prevText: "Values accepted: ",
            values: [
              "Top",
              "Center",
              "Bottom",
              "Stretch",
            ]
          },
          {
            prevText: "",
            link: {
              url: "https://learn.microsoft.com/en-us/dotnet/api/system.windows.verticalalignment?view=windowsdesktop-10.0",
              text: "Reference"
            },
            afterText: ""
          },
          {
            usedBy: [
              "ContextPaneContentVerticalAlignment",
            ]
          }
        ],
      },
      {
        type: "Visibility",
        notes: [
          "Whether to display an element and reserve space for it in the layout",
          {
            prevText: "Values accepted: ",
            values: [
              "Visible",
              "Hidden",
              "Collapsed",
            ]
          },
          {
            prevText: "",
            link: {
              url: "https://learn.microsoft.com/en-us/dotnet/api/system.windows.visibility?view=windowsdesktop-10.0",
              text: "Reference"
            },
            afterText: ""
          },
          {
            usedBy: [
              "ScrollBarBgVisibility", "ScrollThumbBgVisibility",
              "ScrollThumbVisibility"
            ]
          }
        ],
      },
    ]
  }),
  actions: {},
});

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quokka.Settings
{
    public class AppWindow
    {
        public string WindowTopMargin { get; set; }
        public string WindowWidth { get; set; }
        public string WindowColor { get; set; }
        public string WindowBorderColor { get; set; }
        public string WindowBorderThickness { get; set; }
        public string WindowRounding { get; set; }
        public string WindowPadding { get; set; }
    }

    public class Container
    {
        public string ListContainerMargin { get; set; }
        public string ListContainerBorderColor { get; set; }
        public string ListContainerBorderThickness { get; set; }
        public string ListContainerRounding { get; set; }
        public string ListContainerColor { get; set; }
        public string ListContainerMinHeight { get; set; }
        public string ListContainerMaxHeight { get; set; }
    }

    public class ContextPane
    {
        public string BorderColor { get; set; }
        public string BorderThickness { get; set; }
        public string CornerRounding { get; set; }
        public string Background { get; set; }
        public string MinHeight { get; set; }
        public Details Details { get; set; }
        public List List { get; set; }
    }

    public class Details
    {
        public string ContentMargin { get; set; }
        public string ContentVerticalAlignment { get; set; }
        public string ContentHorizontalAlignment { get; set; }
        public string ImageMargin { get; set; }
        public string TextColor { get; set; }
        public string TextSize { get; set; }
        public string FontFamily { get; set; }
        public string TextLineMargin { get; set; }
    }

    public class EntryField
    {
        public string SearchFieldTxtColor { get; set; }
        public string SearchFieldTxtSelColor { get; set; }
        public string SearchFieldHeight { get; set; }
        public string SearchFieldWidth { get; set; }
        public string SearchFieldMargin { get; set; }
        public string SearchFieldFont { get; set; }
        public string SearchFieldTxtSize { get; set; }
        public string SearchFieldPlaceholder { get; set; }
        public string SearchFieldPlaceholderMargin { get; set; }
        public string SearchFieldPlaceholderColor { get; set; }
        public string SearchFieldPlaceholderSize { get; set; }
        public string SearchFieldPlaceholderFont { get; set; }
    }

    public class GeneralSettings
    {
        public string WindowHotKey { get; set; }
        public string MaxResults { get; set; }
        public string IgnoreMaxResultsFlag { get; set; }
    }

    public class List
    {
        public string ListMargin { get; set; }
        public string ContentHorizontalAlignment { get; set; }
        public string ButtonContentMargin { get; set; }
        public ListItems ListItems { get; set; }
    }

    public class ListItems
    {
        public string ListItemBorderThickness { get; set; }
        public string ListItemHoverBorderColor { get; set; }
        public string ListItemHoverBgColor { get; set; }
        public string ListItemSelectedBorderColor { get; set; }
        public string ListItemSelectedBgColor { get; set; }
        public string ListItemRounding { get; set; }
        public string ListItemMargin { get; set; }
        public string ListItemIconSize { get; set; }
        public string ListItemTextMargin { get; set; }
        public string ListItemNameFont { get; set; }
        public string ListItemNameSize { get; set; }
        public string ListItemNameColor { get; set; }
        public string ListItemDescFont { get; set; }
        public string ListItemDescSize { get; set; }
        public string ListItemDescColor { get; set; }
        public ContextPane ContextPane { get; set; }
        public string ListItemIconMargin { get; set; }
        public string ListItemTextPadding { get; set; }
        public string ListItemFont { get; set; }
        public string ListItemSize { get; set; }
        public string ListItemColor { get; set; }
    }

    public class ResultsList
    {
        public Container Container { get; set; }
        public List List { get; set; }
        public ListItems ListItems { get; set; }
    }

    public class Settings
    {
        public GeneralSettings GeneralSettings { get; set; }
        public StyleSettings StyleSettings { get; set; }
    }

    public class SearchBar
    {
        public string SearchBarColor { get; set; }
        public string SearchBarRounding { get; set; }
        public string SearchBarBorderColor { get; set; }
        public string SearchBarBorderSize { get; set; }
        public string SearchBarHeight { get; set; }
        public string SearchIconWidth { get; set; }
        public string SearchIcon { get; set; }
        public EntryField EntryField { get; set; }
    }

    public class StyleSettings
    {
        public AppWindow AppWindow { get; set; }
        public SearchBar SearchBar { get; set; }
        public ResultsList ResultsList { get; set; }
    }


}
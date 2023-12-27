/*function addEvent(obj, evType, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(evType, fn, false);
    return true;
  } else if (obj.attachEvent) {
    var r = obj.attachEvent("on" + evType, fn);
    return r;
  } else {

  }
}

addEvent($('*[data-ngy2action="close"]'), "click", function () {
  alert("Somehow attached handler!? (not expected)");
});



jQuery(document).ready(function () {

  jQuery("#CertificationsGallery").nanogallery2({

    // ### gallery settings ###


    itemsBaseURL: '../Resources/PortfolioCertifications/',
    galleryFilterTags: true,
    galleryFilterTagsMode: 'multiple',
    imageTransition: 'slideAppear',
    viewerGallery: 'bottomOverMedia',
    viewerTheme: 'light',
    colorSchemeViewer: 'light',

    // GALLERY AND THUMBNAIL LAYOUT
    galleryDisplayMode: 'pagination',
    gallerySorting: 'titleDesc',
    thumbnailWidth: 'auto XS80 SM120',
    thumbnailHeight: '200 XS80 SM120',

    viewerToolbar: {
      display: true,
      standard: 'previousButton, label, nextButton',
      minimized: 'previousButton, label, nextButton'
    },
    viewerTools: {
      topLeft: 'fullscreenButton, zoomButton, rotateLeft, rotateRight',
      topRight: 'closeButton'
    },



    // THUMBNAIL TOOLS & LABEL
    thumbnailLabel: { display: true, position: 'onBottomOverImage', hideIcons: true, titleFontSize: '0.7em', align: 'center', titleMultiLine: true, displayDescription: false },
    thumbnailToolbarImage: null,
    thumbnailToolbarAlbum: null,

    // THUMBNAIL HOVER ANIMATION
    thumbnailHoverEffect2: 'label_font-size_0.7em_1em|title_backgroundColor_rgba(0, 0, 0, 0.425)_rgba(255, 255, 255, 0.425)|title_color_#fff_#000|image_scale_1.00_1.10_5000|image_rotateZ_0deg_4deg_5000',
    touchAnimation: true,
    touchAutoOpenDelay: 800,

    // GALLERY THEME
    galleryTheme: {
      thumbnail: { titleShadow: 'none', titleColor: '#fff', borderColor: '#fff', borderRadius: '15px' },
      navigationBreadcrumb: { background: '#ffffff' },
      navigationFilter: { background: '#ffffff', backgroundSelected: '#a97ef4', color: '#fff' }
    },

    // ### gallery content ###
    items: [
      { src: 'FaeqFaisal-mimo-certificates-make_a_website.png', srct: 'FaeqFaisal-mimo-certificates-make_a_website.png', title: 'Mimo - Make a website' },
      { src: 'FaeqFaisal-mimo-certificates-web_development.png', srct: 'FaeqFaisal-mimo-certificates-web_development.png', title: 'Mimo - Web Development' },
      { src: 'FaeqFaisal-mimo-certificates-become_a_hacker.png', srct: 'FaeqFaisal-mimo-certificates-become_a_hacker.png', title: 'Mimo - become a hacker' },
      { src: 'FaeqFaisal-Cisco-Work_Experience.png', srct: 'FaeqFaisal-Cisco-Work_Experience.png', title: 'Cisco Work Experience' },
      { src: 'FaeqFaisal-RI-Masterclasses.png', srct: 'FaeqFaisal-RI-Masterclasses.png', title: 'Royal Institution Masterclasses' },
      { src: 'FaeqFaisal-Siemens-work_experience.png', srct: 'FaeqFaisal-Siemens-work_experience.png', title: 'Siemens Work Experience' },
      { src: 'FaeqFaisal-YP-careers_in_technology.png', srct: 'FaeqFaisal-YP-careers_in_technology.png', title: 'Careers in Technology' },
      { src: 'FaeqFaisal-YP-science,_engineering_&_IT_work_experience.png', srct: 'FaeqFaisal-YP-science,_engineering_&_IT_work_experience.png', title: 'Science, Engineering & IT Work Experience' },
      { src: 'FaeqFaisal-YP-tech_the_future_insight_evening.png', srct: 'FaeqFaisal-YP-tech_the_future_insight_evening.png', title: 'Tech the Future Insight Evening' },
      { src: 'FaeqFaisal-YP-tech_the_future_work_experience.png', srct: 'FaeqFaisal-YP-tech_the_future_work_experience.png', title: 'Tech the Future Work Experience' }
    ]
  });
});



*/

// new grid:

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

var $window = $(".modal-window");
var $overlay = $(".modal-overlay");

images = document.getElementsByClassName("modal-launcher");
function exitImageView() {
  for (i in images) images[i].checked = false;
  if (vw > 660) $("header").css("display", "block");
  $window.removeClass("fadeIn");
  $overlay.removeClass("fadeIn");
  $window.addClass("fadeOut");
  $overlay.addClass("fadeOut");
}

$($window).click(exitImageView);
$($overlay).click(exitImageView);

$(".modal-launcher").click(function () {
  if (vw > 660) $("header").css("display", "none");
  $window.removeClass("fadeOut");
  $overlay.removeClass("fadeOut");
  $window.addClass("fadeIn");
  $overlay.addClass("fadeIn");
});

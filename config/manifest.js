/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    name: "El Guapo",
    short_name: "El Guapo",
    description: "El Guapo's Beautiful Blog",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "images/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "images/icons/favicon-16x16.png",
        sizes: "16x16",
        targets: ["favicon"]
      },
      {
        src: "images/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        targets: ['apple']
      },
      {
        src: "images/icons/mstile-150x150.png",
        sizes: "150x150",
        type: "image/png",
        targets: ['ms']
      },
      {
        src: "images/icons/favicon-32x32.png",
        sizes: "32x32",
        targets: ["favicon"]
      }
    ]
  };
}

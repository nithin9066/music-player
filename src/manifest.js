export const manifestForPlugIn = {
    registerType:'prompt',
    includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
    manifest:{
      name:"Harmoni Cast",
      short_name:"HarmoniCast",
      description:"HarmoniCast: Your harmonious gateway to diverse music and audio content, offering curated playlists and seamless listening experiences tailored to your preferences.",
      icons:[{
        src: '/icon-192x192.png',
        sizes:'192x192',
        type:'image/png',
        purpose:'favicon'
      },
      {
        src:'/icon-512x512.png',
        sizes:'512x512',
        type:'image/png',
        purpose:'favicon'
      },
      {
        src: '/icon-192x192.png',
        sizes:'180x180',
        type:'image/png',
        purpose:'apple touch icon',
      },
      {
        src: '/icon-512x512.png',
        sizes:'512x512',
        type:'image/png',
        purpose:'any maskable',
      }
    ],
    theme_color:'#171717',
    background_color:'#f0e7db',
    display:"standalone",
    scope:'/',
    start_url:"/",
    orientation:'portrait'
    }
  }
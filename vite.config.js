import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

//import logo from './src/assets/images/logo.png';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "shimmer_security",
        short_name: "shimmer",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#007bff",
        icons: [
          {
            src: '/assets/logo192.png',
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: '/assets/logo512.png',
            sizes: "512x512",
            type: "image/png",
          },
          {
            "src":"/assets/logo1024.png",
            "sizes":"1024x1024",
            "type":"image/png"
          },
        ],
        "screenshots":[
          { 
              "src": "/assets/screenshot1024.png",
               "sizes": "1024x768",
              "type": "image/png" ,
              "form_factor":"wide"
          },
          { 
              "src": "/assets/screenshot1024.png",
               "sizes": "1024x768", 
               "type": "image/png" ,
               "form_factor":"wide"
          },
          {
            "src":"/assets/screenshot768.png",
            "sizes":"768x1024",
            "type":"image/png"
          },
          {
            "src":"/assets/screenshot768.png",
            "sizes":"768x1024",
            "type":"image/png"
          }
      ],
      },
    }),
  ],
});

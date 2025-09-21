/** 
** Detta behövs för att exponera undersidorna under src/pages mappen
** så att Vite kan inkludera dessa i den slutgiltiga versionen av projektet;
** det vill säga den version som skapas med kommandot 'vite build'.
** När projektet byggs, betyder det att det optimeras och packas ner till den finala
** publiceringsredo version.
** import { defineConfig } from "vite" - importera funktionen 'defineConfig' 
** från 'vite' biblioteket.
** export default defineConfig ({}) - exportera denna konfigurationsfunktion 
** så att Vite kan använda dessa inställningar när projektet byggs istället för standardkonfigurationen.
** 'build: {rollupOptions: [...]]} - specificerar inställningar för hur projketet byggs/optimeras/packas ner
** rollup - heter verktyget som Vite använder för att bunta ihop projektets filer, 'options' syftar på
** hur 'rollup' ska gå till väga. 
** input - anger sidorna som ska användas som 'entry point', alltså startfilen som ska webbsidan ska 
** utgå ifrån. Eftersom denna webbsida har flera olika sidor och inte är en Single Page
** (en enda html sida som ändras dynamisk) måste alla undersidor under pages mappen inkluderas
** import { resolve } from 'path' - importera funktionen resolve från 'path' biblioteket
** resolve(__dirname, [...]) - är en hjälpfunktion som hjälper till att skapa rätt sökväg 
** __dirname syftar på den aktuella filen sidan kallas ifrån.
**/

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: 'https://github.com/wesl2400-miun/fluffyworldo/dist',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/pages/about.html'),
        news: resolve(__dirname, 'src/pages/news.html'),
        payhip: resolve(__dirname, 'src/pages/payhip.html'),
        policy: resolve(__dirname, 'src/pages/policy.html'),
        shop: resolve(__dirname, 'src/pages/shop.html'),
        thanks: resolve(__dirname, 'src/pages/thanks.html')
      }
    }
  }
});
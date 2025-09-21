const menu = document.getElementById('menu');
const title = document.getElementById('title');
const routes = document.getElementById('routes');
const main = document.getElementById('main');
let expanded = false;

const clickExpand = () => {
  main.style.display = 'none';
  routes.style.display = 'flex';
  routes.style.animation = 'expand 0.5s ease-out';
}

const clickHide = () => {
  main.style.display = 'flex';
  title.style.animation = 'hide 0.5s ease-out';
  routes.style.display = 'none';
}

menu.addEventListener('click', () => {
  expanded = !expanded;
  if(expanded) clickExpand();
  else clickHide();
});

const onDesktop = () => {
  menu.style.display = 'none';
  routes.style.display = 'flex';
  main.style.display = 'flex';
}

const onMobile = () => {
  menu.style.display = 'flex';
  routes.style.display = 'none';
  main.style.display = 'flex';
}

window.addEventListener('resize', () => {
  expanded = false;
  routes.style.animation = 'none';
  title.style.animation = 'none';
  const width = window.innerWidth;
  if(width >= 700) onDesktop();
  else onMobile();
});

/* Referenserna till menu, title, routes,och main hämtas
** med hjälp av metoden document.getElementById();
** en flagga med namnet 'expanded' definieras som 'false'
** denna flagga ska avgöra om menyn ska rullas ut eller inte (på mobilerna)
** clickExpand() funktionen ska kallas när menyn ska rullas ut
** main.style.display = 'none' - dölj huvudinnehållet
** routes.style.display = 'flex' - visa routes (objekten i navigeringslista)
** definieras som 'flex' i nav.css filen
** routes.style.animation = 'expand 0.5s ease-out' - spela animationenen för routes elementet,
** använd animationen 'expand', under 0.5 sekunder och använd ease-out effekten 
** det vill säga - animationen startar fort och saktar ner vid slutet
** clickHide() funktionen ska kallas ner menyn stängs
** main.style.display = 'flex' - visa huvudinnehållet, definieras som flex containern i nav.css filen
** title.style.animation = 'hide 0.5s ease-out' - spela animationen för title elementet,
** använd animationen 'hide', under 0.5 sekunder och använd ease-out effekten
** routes.style.display = 'none' - dölj routes elementet
** menu.addEventListener('click', () => {}) - tilldela menyn en händelse via denna metod
** 'click' - händelsen utlöses när elementet klickas
** () => {} Kalla en anonym funktion och exkvera koden nedan varje gång meny klickas
** expanded = !expanded - sätt 'expanded' flaggan till dess motsats,
** alltså not expanded noterat som !expanded
** if(expanded) clickExpand() - om flaggan är sann (true) kalla clickExpand funktionen
** else clickHide() - annars kalla clickHide() funktionen
** const onDesktop = () => {} - definiera funktionen onDesktop som en const variabel
** menu.style.display = 'none' - dölj menyn
** routes.style.display = 'flex' - visa routes
** main.style.display = 'flex' - visa huvudinnehållet
** const onMobile = () => {} - definiera onMobile funktionen som en const variabel
** menu.style.display = 'flex' - visa menyn
** routes.style.display = 'none' - dölj navigeringsfältet 
** (på mobilerna måste först meny knappen pressas för att navigeringsfältet ska rullas ut)
** den är alltså dolt från början
** main.style.display = 'flex' - visa huvudinnehållet
** window.addEventListener('resize', () => {}) - låt webbläsarens fönster lyssna efter en händelse
** 'resize' - utlösa en händelse när skärmdimensionerna ändras
** () => {} - kör koden inuti denna anonyma funktion när skärmdimensionerna ändras
** Exekvera koden nedan vid händelsen:
** expanded = false - nollställ 'expanded' flaggan
** routes.style.animation = 'none' - ta bort animationen för routes
** title.style.animation = 'none' - ta bort animationen för title
** const width = window.innerWidth - hämta den aktuella bredden på fönstret och spara som eb const variabel
** if(width >= 700) onDesktop() - om bredden är större eller lika med 700 pixlar, kör funktionen onDesktop
** else onMobile() - annars kör funktionen onMobile
*/

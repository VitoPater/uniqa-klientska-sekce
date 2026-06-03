# UNIQA — Klientská sekce

## Co to je
Statický HTML prototyp nové sekce „Péče o klienty" pro web uniqa.cz. Cílem je prezentovat klientské služby, správu smluv a benefity v brand vizuálu UNIQA.

## Aktuální stav
- `index.html` — kopie HP uniqa.cz s upravenou hlavičkou (základ pro orientaci)
- `pece-o-klienty.html` — hlavní pracovní soubor, funkční prototyp stránky
- Hlavička: 2×2 grid tlačítek vpravo (Hlášení škod zelené, Klientský portál modré, EN, lupa) — `position: absolute; right: 24px`
- Hero: dvousloupcový layout (text vlevo, foto vpravo z `hero.webp`), modrá sekce „Co hledáte?" se 5 kartami
- Sekce Správa smluv: 4 karty s konkrétními úkoly, nadpis „Veškerou správu smluv vyřešíte v moje UNIQA"
- Ostatní sekce: Rychlé online služby, Sjednat pojištění (promo banner), Benefity (foto dlaždice), Kontakty

## Poslední práce (2026-06-02)
- Stažen CSS, JS, logo z živého uniqa.cz — projekt je soběstačný offline
- Přidána položka „Péče o klienty" do hlavní navigace (desktop: odkaz, mobil: rozcestník)
- Odstraněna tlačítka Kontakt, Hlášení škod, Online pojištění z původní hlavičky
- Postaven hero s místem na foto, trust badges (3M klientů, 10 let, rodiny)
- Redesign sekce Správa smluv — task-based karty místo generických popisů
- Benefit karty přepracovány na foto dlaždice s tmavým overlayem
- Lacexpres přejmenován na Leo Express
- Hlavička: implementován 2×2 grid (Hlášení škod / EN / Klientský portál / lupa) pomocí `position: absolute`
- Hero foto: doplněn reálný snímek `hero.webp`

## Další kroky
1. Doplnit reálné URL pro bridge pages (A: Platby, B: Údaje, C: Změny na smlouvě)
2. Vytvořit bridge pages — nové stránky vysvětlující kde v moje UNIQA danou věc najít
3. Doplnit reálné fotografie do benefit dlaždic (momentálně picsum.photos placeholdery)
4. Doplnit URL a popis pro benefity: Diagnose.me, Leo Express, Dr. Digital, Smart Guide, Rodinný asistent
5. Vyčistit zálohy (pece-o-klienty.backup-*.html)
6. Připravit mobilní variantu — rozcestník menu otestovat na reálném zařízení
7. Předat podklady webové agentuře pro implementaci do CMS (WebJET)

## Technologie & klíčové příkazy
- Stack: statické HTML + Bootstrap 4 + UNIQA vlastní CSS (staženo z uniqa.cz)
- Font: Lato (Google Fonts), Font Awesome 5 Free (CDN)
- Spuštění: otevřít `pece-o-klienty.html` přímo v prohlížeči (žádný build step)
- CSS assets: `assets/css/uniqa.css` (569 KB, staženo z uniqa.cz, cesty opraveny na absolutní URL)
- JS assets: `assets/js/jquery-masonry.js` + `assets/js/uniqa-bundle.js`
- Logo: `assets/images/logo.svg`
- Hero foto: `hero.webp` (v rootu projektu)
- Podklady: `Podklady/` — IA, mobilní menu mockupy, referenční HTML stránka
- Hlavička: grid je `position: absolute; right: 24px; top: 50%; transform: translateY(-50%)` — nezávislý na Bootstrap flex flow
- Zálohy: `pece-o-klienty.backup-HHMM.html` — vždy vytvořit před větší změnou

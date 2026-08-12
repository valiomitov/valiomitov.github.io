# Дара — Арт Сладкарница | 3 шаблона за уебсайт / 3 website templates

## Как да отворите / How to open

Отворете **`index.html`** — това е страницата за сравнение с трите шаблона.
Open **`index.html`** — the comparison page linking all three templates.

> ⚠️ За да се зареждат снимките и данните, отворете файловете през локален сървър, а не с двоен клик.
> To load images and data correctly, serve the folder rather than double-clicking the file.
>
> ```bash
> cd dara-cakess
> python3 -m http.server 8000
> # → http://localhost:8000
> ```

---

## Файлове / Files

| Файл | Описание |
|---|---|
| `index.html` | Сравнение на трите шаблона (BG/EN) |
| `template-1-seaside.html` | Шаблон 1 — „Морска ванилия“ |
| `template-2-cocoa.html` | Шаблон 2 — „Какао и карамел“ |
| `template-3-pistachio.html` | Шаблон 3 — „Шам фъстък и малина“ |
| `assets/data.js` | **Всички данни на едно място** — продукти, цени, категории, текстове (BG + EN) |
| `assets/*.jpg` | 54 снимки, извлечени от Каталог 2026 |
| `assets/logo-mark.png`, `logo-word.png` | Логото на Дара, извлечено от каталога |

---

## Как да редактирате / How to edit

Всичко съдържателно живее в **`assets/data.js`**. Промяна там се вижда веднага и в трите шаблона.
Everything content-related lives in **`assets/data.js`**. A change there updates all three templates at once.

### Промяна на цена / Change a price
```js
{ id:"dara", cat:"raw", img:"dara.jpg", price:4.50, unit:"slice", ... }
//                                            ↑ тук / here
```

### Нов продукт / Add a product
```js
{ id:"nov-desert", cat:"fruit", img:"nov-desert.jpg", price:5.00, unit:"slice",
  bg:{ n:"Име на торта", d:"Описание на български." },
  en:{ n:"Cake name",    d:"Description in English." },
  tags:["vegan","glutenfree"] }
```
Сложете снимката в `assets/` със същото име като в `img`.
Drop the photo into `assets/` using the same filename as in `img`.

### Налични тагове / Available tags
`vegan` · `sugarfree` · `glutenfree` · `raw`

### Категории / Categories
`fruit` · `chocolate` · `mascarpone` · `cheesecake` · `raw` · `muffins` · `savoury`

---

## Какво съдържа каталогът / What's in the catalogue

- **34 торти** — плодови, шоколадови, маскарпоне, чийзкейк, сурови
- **Мъфини** (3 вида) и **сурови бонбони**
- **Солени** — баница, соленки, лимецови мекичета
- **Брънч** — 6 позиции
- **Кетъринг** — 6 позиции
- **Декорации** — детски и сватбени, с цени

Общо **41 артикула** в каталога с филтри.

---

## Функционалности / Features

Всички шаблони / All templates:
- Двуезични BG / EN с превключвател, който помни избора
- Филтри по категория и по хранителен режим
- Лайтбокс за снимките
- Напълно адаптивни (телефон, таблет, десктоп)
- Реални контакти: 087 883 8353 · ул. „Екзарх Йосиф“ 1, гр. Царево
- Връзки към Facebook и Instagram (@dara_cakess)

Специфични / Template-specific:
- **Шаблон 1** — ивица с 4 предимства, класическа мрежа с карти
- **Шаблон 2** — бягащ ред, лента с „подписни“ торти, каталог като печатно меню, мозайка
- **Шаблон 3** — търсене на живо, лепкава лента с филтри, „Как да поръчате“ в 3 стъпки, ЧЗВ

---

## Следващи стъпки / Next steps

1. Изберете шаблон.
2. Заменете снимките с по-висока резолюция, ако имате оригиналите (сегашните са извлечени от PDF-а).
3. Проверете работното време в `assets/data.js` → `UI.hours_val` (сега е примерно 08:30 – 19:00).
4. Регистрирайте домейн (напр. `daracakes.bg`) и качете папката при хостинг доставчик.
5. По желание: добавете онлайн поръчка (формуляр или количка) — Шаблон 3 е най-подготвен за това.

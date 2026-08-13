# 📷 Bekzod's Archive

> *A private digital memory journal. Not a gallery — an experience.*

A premium, cinematic personal memory archive website. Open it and feel like you're reaching into a box of old photographs.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎞 **Cinematic Landing** | Animated hero with floating Polaroids and elegant entrance |
| 📚 **6 Memory Collections** | Organized chapters — each a scrapbook board |
| 🖼 **Polaroid Board** | Memories displayed as physical Polaroids with tape, pins & notes |
| 🔍 **Photo Viewer** | Full-screen diary-style viewer with date, location, and personal notes |
| 📱 **Phone Frame Viewer** | Open any photo inside a realistic phone frame |
| 🔎 **Zoom & Pan** | Pinch-to-zoom, mouse wheel, double-click, drag to pan |
| ✦ **Random Memory** | Cinematic reveal of a random moment from the archive |
| ✎ **Leave a Note** | Visitors can write handwritten notes (stored locally) |
| 🌙 **Dark / Light Mode** | Warm ivory or dark academia — both fully designed |
| 🎵 **Ambient Sound Toggle** | Always visitor-controlled, never autoplaying |
| ♿ **Accessible** | Alt text, keyboard nav, focus states, reduced-motion support |
| 📱 **Fully Responsive** | Beautiful on desktop, tablet, and mobile |

---

## 📁 Project Structure

```
tajriba 1/
├── index.html          ← The entire website (open this in a browser)
├── memories.js         ← YOUR memory data — edit this file
├── memories/
│   ├── img1.jpg        ← Placeholder photos (replace with yours)
│   ├── img2.jpg
│   ├── img3.jpg
│   ├── img4.jpg
│   ├── img5.jpg
│   └── img6.jpg
└── assets/
    └── (ambient.mp3)   ← optional ambient sound file
```

---

## 🚀 Getting Started

### Option 1 — Open locally (simplest)
1. Double-click `index.html`
2. It opens in your browser immediately

> ⚠️ If images don't load due to browser security restrictions (CORS), use a local server (see below).

### Option 2 — Local server (recommended)

If you have **Python** installed:
```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```
Then open `http://localhost:8080`

If you have **Node.js** installed:
```bash
npx serve .
```

---

## 📸 Adding Your Own Photos

1. **Drop your photo** into the `memories/` folder
   ```
   memories/your-photo.jpg
   ```

2. **Open `memories.js`** and add an entry to the `memories` array:
   ```js
   {
     id: "m99",                          // unique ID, no spaces
     collection: "little-moments",       // must match a collection ID below
     image: "memories/your-photo.jpg",   // path to your photo
     title: "Summer Evening",
     date: "12 August 2026",
     location: "Termiz",                 // optional
     description: "The light that evening was different from any other.",
     note: "Some light is worth chasing.", // optional handwritten note
     highlight: true,                    // include in Random Memory pool
     palette: "warm"                     // "warm" | "dark" | "blue"
   }
   ```

3. **Save** and refresh the browser.

### Collection IDs
| ID | Title |
|---|---|
| `little-moments` | Little Moments |
| `people` | People I Remember |
| `places` | Places |
| `university` | University Days |
| `random-happiness` | Random Happiness |
| `dont-forget` | Things I Don't Want To Forget |

### Adding a New Collection
In `memories.js`, add to the `collections` array:
```js
{
  id: "my-new-chapter",
  number: "07",
  title: "My New Chapter",
  subtitle: "A short poetic description.",
  coverImage: "memories/cover.jpg",
  accentColor: "#C4A862"
}
```

---

## 🌙 Dark / Light Mode

Click the **☽** moon button in the top-right corner. Your preference is saved automatically.

---

## 🎵 Ambient Sound

1. Drop an `.mp3` file into `assets/`:
   ```
   assets/ambient.mp3
   ```
2. Open `index.html` and find this line (around line 430):
   ```html
   <!-- Drop an ambient .mp3 here: <source src="assets/ambient.mp3" type="audio/mpeg" /> -->
   ```
3. Remove the comment tags:
   ```html
   <source src="assets/ambient.mp3" type="audio/mpeg" />
   ```
4. Visitors control playback with the **Ambient** button.

---

## ✎ Leave a Note

Visitors can leave handwritten notes. Notes are stored in the browser's `localStorage`.

To connect to a real database later, replace the `submitNote()` function in `index.html` with a fetch call to your backend (Supabase, Firebase, etc.).

---

## 🌐 Deployment

### GitHub Pages

1. Create a new GitHub repository (public or private)
2. Upload all files:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. Go to **Settings → Pages → Source → main branch / root**
4. Your site will be live at `https://yourusername.github.io/your-repo/`

### Vercel / Netlify

1. Drag and drop the entire project folder into Vercel or Netlify
2. Done — no build step required

---

## 🎨 Customization

### Change the watermark name
Search for `BEKZOD'S ARCHIVE` in `index.html` and replace with your name.

### Change fonts
The fonts are loaded from Google Fonts at the top of `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display...">
```
Edit the CSS variables `--font-serif`, `--font-sans`, `--font-hand` to switch fonts.

### Change colors
Edit the CSS custom properties in the `:root` block:
```css
:root {
  --bg-primary: #F5F0E8;  /* main background */
  --gold: #C4A862;        /* accent color */
  ...
}
```

---

## ♿ Accessibility

- All images have `alt` text support
- Full keyboard navigation (Tab, Enter, Escape)
- Visible focus states
- Reduced-motion respected via `prefers-reduced-motion`
- ARIA roles and labels on interactive elements

---

## 📝 License

Private personal archive. Not for redistribution.

---

*Made with care — for the moments worth keeping.*

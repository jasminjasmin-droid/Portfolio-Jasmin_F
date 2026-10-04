# Jasmin F. — Personal Portfolio

A simple, fast, and premium personal portfolio website for **Jasmin F.**, built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 🎨 Design Philosophy

- **Palette**: Warm cream / off-white background (`#FAF8F5`), crisp dark typography (`#1A1815`), and terracotta accents (`#D95D39`).
- **Typography**: Clean, elegant, and youthful with *Plus Jakarta Sans*.
- **Imagery**: Single photo design (`public/images/profile.jpg`). No project image dependencies or heavy 3D assets.
- **Tone**: Clean, professional, personal, and focused on learning by building.

---

## 📂 Project Structure

```
d:/jasmin/
├── public/
│   ├── images/
│   │   └── profile.jpg     # Single portrait photo
│   ├── _redirects          # Netlify SPA routing
│   └── favicon.svg         # Monogram favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky responsive navigation with mobile drawer
│   │   ├── Hero.tsx         # Hero section with portrait photo & CTAs
│   │   ├── About.tsx        # Personal story & core pillars
│   │   ├── Projects.tsx     # Clean project cards (SkillMesh, CivicPulse, JackBot)
│   │   ├── Skills.tsx       # 16 skills with categorized & unified views
│   │   ├── Journey.tsx      # Vertical timeline (2025 & 2026 milestones)
│   │   ├── Achievements.tsx # 5 authentic leadership & initiative cards
│   │   ├── Contact.tsx      # "Let's build something." + email copy + quick note
│   │   ├── Footer.tsx       # "Made with curiosity by Jasmin F."
│   │   └── Icons.tsx        # GitHub and LinkedIn SVG components
│   ├── data/
│   │   └── portfolioData.ts # Centralized portfolio content & links
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── netlify.toml             # Netlify deployment configuration
├── package.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

---

## 🌐 Deploying to Netlify

This website is frontend-only and pre-configured for instant deployment on Netlify.

### Option A: Via GitHub (Recommended)
1. Push this repository to your GitHub account (`https://github.com/jasminjasmin-droid/portfolio`).
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **"Add new site"** → **"Import an existing project"** → select GitHub.
4. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**.

### Option B: Drag and Drop (Manual)
1. Run `npm run build` on your machine.
2. Drag and drop the generated `dist` folder into the Netlify Drop dashboard.

---

## 🖼️ Updating Your Profile Photo & Resume

### Profile Photo
To replace the profile photo with your own photo at any time:
1. Save your photo as `profile.jpg`.
2. Replace the file at:
   ```
   public/images/profile.jpg
   ```
3. Re-run `npm run build`.

### Resume / CV
To replace the resume with your latest PDF file:
1. Save your document as `resume.pdf`.
2. Replace the file at:
   ```
   public/resume.pdf
   ```
3. Re-run `npm run build`.

# Rahmat Hidayat — Personal Branding Website

A futuristic personal branding website with **Future Automotive Editorial** design. Pure HTML, CSS, and JavaScript — no frameworks, no build tools. Ready for GitHub Pages.

## 🚀 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

```bash
cd /Users/holywings/project/bio
git init
git add .
git commit -m "Initial commit: personal branding website"
```

### Step 2: Push to GitHub

Create a new repository on GitHub (e.g., `rahmathidayat.github.io` for a user site, or any name for a project site), then:

```bash
# For user site (username.github.io):
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git branch -M main
git push -u origin main

# OR for project site (any repo name):
git remote add origin https://github.com/YOUR_USERNAME/bio.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select **main** branch, root folder `/`
5. Click **Save**

Your site will be live at:
- User site: `https://YOUR_USERNAME.github.io`
- Project site: `https://YOUR_USERNAME.github.io/bio`

## 📧 Contact Form (FormSubmit.co)

The contact form uses [FormSubmit.co](https://formsubmit.co/) to send emails — **no backend needed**.

### First-time activation:
1. When someone submits the form for the first time, FormSubmit.co will send a **confirmation email** to `rahmathidayatik1010@gmail.com`
2. Click the confirmation link in that email
3. After confirmation, all future form submissions will be forwarded to your email automatically

### How it works:
- Form POSTs to `https://formsubmit.co/YOUR_EMAIL`
- FormSubmit forwards the message to your email
- User is redirected back to your site with a success toast notification
- Honeypot spam protection is included
- No signup or API keys needed

## 📁 Project Structure

```
bio/
├── index.html          # Main page
├── index.css           # Design system & styles
├── index.js            # Interactions & animations
├── README.md           # This file
└── assets/
    ├── hero-bg.png     # Hero background
    ├── project-atlas.png
    ├── project-mangkokku.png
    └── project-padel.png
```

## 🛠 Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, glassmorphism, animations
- **Vanilla JavaScript** — IntersectionObserver, scroll effects, counters
- **FormSubmit.co** — Email forwarding (free, no backend)
- **Google Fonts** — Outfit, Inter, JetBrains Mono

No build tools. No npm. No frameworks. Just open `index.html`.

## 📝 License

© 2026 Rahmat Hidayat. All rights reserved.
# profile

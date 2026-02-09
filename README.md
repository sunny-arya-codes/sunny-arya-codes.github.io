# 🚀 Sunni Kumar - Portfolio

A bold, modern portfolio website built with NeoBrutalism design principles.

## 🎨 Design Features

- **NeoBrutalism Style**: Bold borders, bright contrasting colors, hard shadows
- **Responsive Design**: Looks great on all devices
- **Smooth Animations**: Scroll effects and hover interactions
- **Clean Code**: Semantic HTML, modular CSS, vanilla JavaScript

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # NeoBrutalism styles
├── script.js           # Interactive JavaScript
└── README.md          # This file
```

## 🚀 Deployment to sunny-arya-codes.github.io

### Option 1: GitHub Pages (RECOMMENDED - FREE)

**Steps:**
1. **Create a GitHub repository** for your portfolio
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/sunny-arya-codes/sunny-arya-codes.github.io.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Click Save

3. **Your site is live!**
   - ✅ Visit: https://sunny-arya-codes.github.io
   - ✅ Automatic HTTPS
   - ✅ Auto-deploys on every push

**Benefits:**
- ✅ Free forever
- ✅ Automatic HTTPS
- ✅ Automatic deployments from Git
- ✅ Easy setup

---

### Option 2: Cloudflare Pages (FREE)

**Steps:**
1. Push code to GitHub
2. Go to Cloudflare Dashboard → Pages
3. Click "Create a project"
4. Connect your GitHub repository
5. Deploy settings: None needed
6. Add custom domain if desired

**Benefits:**
- ✅ Free forever
- ✅ Global CDN (super fast)
- ✅ Unlimited bandwidth
- ✅ Built-in analytics

---

### Option 3: Vercel (FREE)

**Steps:**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add custom domain if desired

**Benefits:**
- ✅ Free for personal projects
- ✅ Instant deployments
- ✅ Edge network
- ✅ Great developer experience

---

### Option 4: Netlify (FREE)

**Steps:**
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "Add new site" → Import from Git
4. Deploy settings: None needed
5. Add custom domain in Site settings

**Benefits:**
- ✅ Free tier generous
- ✅ Form handling
- ✅ Serverless functions

---

## 🎯 Quick Start (Local Development)

1. **Open the portfolio locally:**
   ```bash
   cd portfolio
   open index.html
   # or for a local server:
   python3 -m http.server 8000
   # Then visit: http://localhost:8000
   ```

2. **Edit content:**
   - Update `index.html` for content changes
   - Modify `style.css` for styling
   - Customize `script.js` for interactions

3. **Customize:**
   - Update contact information in `index.html`
   - Add more projects or sections as desired

## 🔧 Customization Guide

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --color-primary: #FFD700;    /* Yellow */
    --color-secondary: #00D4FF;  /* Cyan */
    --color-accent: #FF006E;     /* Pink */
}
```

### Add New Sections
Follow the existing HTML structure and add matching CSS classes.

### Update Content
All content is in `index.html` - simply edit the text within the HTML tags.

## 📦 Production Checklist

Before deploying:
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Check all images load
- [ ] Test smooth scrolling
- [ ] Verify responsiveness
- [ ] Add favicon (optional)

## 🌟 Features to Add (Optional)

- Blog section
- Project showcase with screenshots
- Dark mode toggle
- Contact form
- Google Analytics
- Social media meta tags (Open Graph)

## 📝 License

Feel free to use this portfolio as a template for your own site!

---

Built with ❤️ and NeoBrutalism ⚡

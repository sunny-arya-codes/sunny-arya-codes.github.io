# ⚡ QUICK START - Deploy in 5 Minutes

## 🎯 Your Mission: Get Your Portfolio Live

Your portfolio is ready! Here's the fastest path to `hsinghplay.usa.dev`:

---

## 📋 Pre-Flight Checklist

- [ ] Portfolio looks good in browser ✅ (already open!)
- [ ] Update email in `index.html` (search for `email@example.com`)
- [ ] Create GitHub account (if you don't have one)
- [ ] Access to Cloudflare Dashboard for your domain

---

## 🚀 5-Minute Deployment

### 1️⃣ Create GitHub Repo (1 min)
Go to: https://github.com/new
- Name: `portfolio` or `hsinghplay`
- Public or Private (doesn't matter)
- Don't initialize with README
- Click "Create repository"

### 2️⃣ Push Your Code (1 min)
```bash
cd /Users/harnoorsingh/Developer/attractive-typst-resume/portfolio

git init
git add .
git commit -m "Launch portfolio 🚀"
git branch -M main
git remote add origin https://github.com/iharnoor/YOUR-REPO-NAME.git
git push -u origin main
```

### 3️⃣ Deploy on Cloudflare Pages (2 min)
1. Go to https://dash.cloudflare.com/
2. Click "Workers & Pages" → "Create application" → "Pages"
3. Click "Connect to Git"
4. Select your portfolio repo
5. Keep all settings default
6. Click "Save and Deploy"
7. Wait ~30 seconds

### 4️⃣ Add Your Domain (1 min)
1. In your Cloudflare Pages project
2. "Custom domains" → "Set up a custom domain"
3. Enter: `hsinghplay.usa.dev`
4. Click "Continue" → "Activate domain"
5. Done! 🎉

---

## ✅ Success!

Your portfolio should now be live at:
**https://hsinghplay.usa.dev**

---

## 🔄 Making Changes Later

Just edit your files and push:
```bash
git add .
git commit -m "Update content"
git push
```

Cloudflare automatically rebuilds and deploys in ~1 minute!

---

## 🆘 Need Help?

- **Can't push to GitHub?** Make sure you created the repo first
- **Domain not working?** Wait 5 minutes for DNS
- **Site looks broken?** Clear cache (Cmd+Shift+R)

---

## 📚 More Info

- Full guide: See `DEPLOYMENT_GUIDE.md`
- Customization: See `README.md`
- Colors/styling: Edit `style.css`

---

**Let's get your portfolio live! 🚀**

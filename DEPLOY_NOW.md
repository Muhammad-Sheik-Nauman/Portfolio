# Quick Deployment Guide

## After completing social links and OG image:

### 1. Rebuild the project
npm run build

### 2. Deploy to Vercel
npx vercel --prod

### Follow the prompts:
- Set up and deploy? Yes
- Which scope? (Select your account)
- Link to existing project? (Choose nauman-dev if it exists, or create new)
- What's your project's name? portfolio
- In which directory is your code located? ./
- Want to override settings? No

### That's it! Vercel will give you the URL.

## Alternative: Push to GitHub (if auto-deploy is set up)
git add .
git commit -m "Add SEO optimization and OG image"
git push

## Verify deployment:
1. Visit your site: https://sheiknauman.tech
2. Check if OG image works: https://www.opengraph.xyz/
3. Test with Lighthouse in Chrome DevTools

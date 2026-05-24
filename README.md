# Scrollytelling Personal Portfolio

A high-end, animated personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. This project features a cinematic HTML5 canvas scrub animation and premium glassmorphism UI.

---

## 🚀 How to Add New Skills (Spring & Hibernate)

In the future, when you are ready to add **Spring** and **Hibernate** to your Languages/Tools section, follow these exact steps:

1. Open the file: `src/components/Skills.tsx`
2. Locate the `languages` array near the top of the file.
3. Add the new items to the array. You can copy and paste the following snippet:

```javascript
{ 
  name: "Spring", 
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" 
},
{ 
  name: "Hibernate", 
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" 
}
```

Once you save the file, the grid will automatically update to show your new beautifully styled icons!

---

## 🌍 How to Deploy to Vercel (Step-by-Step)

Vercel is the creator of Next.js and is the absolute best place to host this portfolio for free. 

### Step 1: Push your code to GitHub
Before you can deploy, your code must be on GitHub.
1. Go to [GitHub](https://github.com/) and create a new repository (name it something like `anurag-portfolio`).
2. Open your terminal in your project folder (`c:\Users\chint\Downloads\sequence`) and run these commands to push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/anuragchowdary/your-repo-name.git
   git push -u origin main
   ```

### Step 2: Connect to Vercel
1. Go to [Vercel.com](https://vercel.com/) and sign up for a free account using your GitHub account.
2. Once logged in, click the **"Add New..."** button and select **"Project"**.
3. Under the "Import Git Repository" section, you will see your GitHub repositories. Find the portfolio repository you just created and click **"Import"**.

### Step 3: Deploy
1. Vercel will automatically detect that this is a Next.js project. You don't need to change any build settings!
2. Click the blue **"Deploy"** button.
3. Wait about 1-2 minutes for Vercel to build your site. Once finished, you will be given a live production URL (e.g., `anurag-portfolio.vercel.app`) that you can share with recruiters!

---

## 🔄 How to Update Your Live Website

The best part about using GitHub and Vercel is that updates are **completely automated**. When you want to update your site in the future (for example, after adding Spring and Hibernate to `Skills.tsx`), follow these steps:

1. **Make the changes** locally on your computer in VS Code.
2. **Test them** by running `npm run dev` to make sure it looks good.
3. **Push the updates** to GitHub by running these commands in your terminal:
   ```bash
   git add .
   git commit -m "Added Spring and Hibernate to skills"
   git push
   ```

**That's it!** You don't need to open Vercel at all. The moment you run `git push`, Vercel will automatically detect the new code on GitHub, rebuild the site in the background, and push your changes live to the internet within 60 seconds.

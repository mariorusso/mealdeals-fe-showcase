# 🥘 MealDeals Showcase  
### Interactive Map + Deals UI Demo (Next.js + TypeScript)

This repository contains a **safe, API-free demo** showcasing key UI/UX patterns used in the production MealDeals.app platform.

The real MealDeals app is a **geo-targeted restaurant deals platform** used by restaurants and consumers across Canada and the US.  
Its codebase is private, but this public showcase demonstrates the **frontend architecture, interactions, and map behavior** I developed.

---

## 🚀 What This Demo Shows

### ✔ Interactive Map + Deal List  
Hovering over a card highlights its marker, and hovering a marker highlights its card.

### ✔ City Selector  
Switch between static sets (Toronto, New York, etc.) — in production, this is driven by database queries and geolocation.

### ✔ Clean, Component-Based Architecture  
The demo reproduces real MealDeals components like:  
- DealCard  
- DealList  
- MapMarker  
- MapContainer  
- CitySelector  
- Layout components  

### ✔ No External APIs  
To keep the repo public, everything runs with safe hardcoded data:

- No Google Maps API  
- No backend calls  
- No restaurants or deal data pulled from production  
- No authentication logic  

The goal is to demonstrate UI/UX patterns **without exposing private business logic or databases**.

---

## 🧩 Why This Exists

MealDeals.app is a full production SaaS with:

- Dynamic map filtering  
- Geolocation logic and distance math  
- AI-ready recommendation pipeline  
- Restaurant dashboards  
- Deal approval workflows  
- SEO-optimized pages  
- Real-time analytics  
- Subscription tiers  
- Data-heavy query patterns  

None of that can be open-sourced.

So this showcase provides recruiters and engineering managers a **meaningful, real-world sample** of:

- My frontend engineering work  
- My UX/UI decisions  
- My map integration approach  
- My component design  
- My ability to build practical, user-friendly interfaces  

---

## 🛠 Tech Stack

- **Next.js 15 / App Router**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Component-driven architecture**
- **Mock data (no backend)**

---

## 📦 Running Locally

```bash
git clone https://github.com/mariorusso//mealdeals-fe-showcase.git
cd mealdeals-frontend-showcase
npm install
npm run dev
```
---

## 📁 Project Structure.

```bash
/app
  /map
  /deals
/components
  MapContainer.tsx
  MapMarker.tsx
  DealCard.tsx
  CitySelector.tsx
  ...
/lib
  cities.ts
  deals.ts
```

---

## 🔐 Notes About the Real MealDeals App

This repo is not the real platform.
The actual MealDeals includes:
- PostgreSQL schema
- Geo-distance index queries
- Multi-tenant restaurant dashboards
- Subscription billing (Stripe)
- Email automation pipelines
- Real-time analytics tables
- Server-side rendering for 10,000+ indexed pages
Those systems cannot be shared publicly, but this demo accurately reflects the UI and interaction patterns used in the production app.

---

## 👤 Author
**Mario Russo**

Senior Full Stack Engineer (Frontend-Centric)

https://russomario.com

https://github.com/mariorusso

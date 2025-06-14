
# 🚗 VehiGo - Next-Gen AI Car Buying Platform

VehiGo is a Next-Gen AI Car Buying Platform built using the latest web technologies. It allows users to list, view, and manage car listings, as well as book test drives — all wrapped in a clean and responsive UI.

---

## ✨ Features

- 🔐 **Authentication** using Clerk (Sign in, Sign up, Onboarding)
- 🚘 **Car Listings** with detailed view pages
- 📅 **Test Drive Booking** system
- 🌗 **Theme Switching** (light/dark)
- 🧠 **Gemini AI Integration** (e.g. for smart recommendations or description generation)
- 🔥 **Server-side Rendering** with Next.js 15 and Turbopack
- 📦 **Database**: Supabase/PostgreSQL with Prisma ORM
- ⚙️ Robust **Form Handling** using React Hook Form and Zod
- 🧪 Type-safe development with TypeScript

---

## 🛠️ Tech Stack

| Tech               | Description                            |
|--------------------|----------------------------------------|
| **Next.js 15**     | App Router, Server Components, SSR     |
| **Tailwind CSS**   | Utility-first styling                  |
| **Clerk**          | Authentication and user management     |
| **Supabase**       | PostgreSQL database and storage        |
| **Prisma**         | ORM for database access                |
| **Gemini API**     | Google Generative AI                   |
| **React Hook Form**| Elegant form handling                  |
| **Lucide React**   | Icon set for UI                        |

---

## 📂 Folder Structure (Highlights)

```
app/
  ├── (auth)/               # Sign-in, sign-up, onboarding pages
  ├── (main)/               # Main app layout
  │   ├── cars/             # Car listings and dynamic details
  │   ├── dashboard/        # User dashboard
  │   └── bookings/         # Test drive bookings
  ├── api/                  # Route handlers
components/                 # Reusable UI components
lib/                        # Helpers (e.g. auth, utils)
actions/                    # Server-side logic (e.g. DB access)
prisma/                     # Prisma schema and client
public/                     # Static assets
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vikesh3640/VehiGo.git
cd VehiGo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Environment Variables

Create a `.env` file and populate it with:

```env
# Supabase
DATABASE_URL=...
DIRECT_URL=...
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Gemini AI
GEMINI_API_KEY=...

# Arcjet (optional performance/security tool)
ARCJET_KEY=...
```

### 4. Set Up Prisma

```bash
npx prisma generate
npx prisma db push
```

> You can seed the database manually or via scripts depending on your project setup.

---

## 💻 Development

```bash
npm run dev
```

Runs the app in development mode on [http://localhost:3000](http://localhost:3000)

---

## 📦 Production Build

```bash
npm run build
npm start
```

---

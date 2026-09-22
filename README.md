# ⚡ Interactive Quote Engine — Full-Stack Web Application

A full-stack, type-safe web application built for multi-tenant dynamic estimations, client-server state synchronization, identity management, and strict API end-to-end reliability.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://interactive-quote-engine.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/muge-yilmaz/Interactive-Quote-Engine)

---

## 🚀 Key Features

### ⚡ Interactive State & Calculation Engine
- **Unified Client-Server Rendering:** Built with Next.js (App Router) for hybrid rendering and seamless dynamic state updates.
- **Strict Type-Safety:** End-to-end TypeScript interfaces across views and backend REST endpoints to eliminate runtime data mismatch bugs.
- **Dynamic Quote Calculation:** Real-time formula processing and user input validation tailored for multi-tenant scenarios.

### 🔐 Multi-Tenant Identity & Data Persistence
- **Auth0 Security Pipeline:** Multi-tenant user authentication and session management spanning client and server boundaries.
- **Database Modeling:** MongoDB Atlas data persistence with strict schemas and optimized querying pipelines.

### ♿ Accessibility & Modern Architecture
- **WCAG 2.1 Compliance:** Component architecture built according to Web Content Accessibility Guidelines.
- **Responsive Layout:** Pixel-perfect interface styled with Tailwind CSS for cross-device compatibility.

---

## 🛠 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | React, Next.js (App Router), TypeScript, Tailwind CSS |
| **Backend & DB** | Node.js, Express.js, RESTful APIs, MongoDB Atlas |
| **Auth & Security** | Auth0 Identity Platform |
| **Architecture** | Component-Based Architecture, WCAG 2.1 Accessibility |
| **Deployment** | Vercel |

---

## ⚙️ Architecture & Data Flow


```

[ Client / Browser ]
│
├──► Auth0 (Identity & Session Tokens)
├──► Next.js App Router (State & Dynamic Interfaces)
│         │
│         ├──► Type-Safe REST APIs (TypeScript Interfaces)
│         └──► MongoDB Atlas (Data Persistence & Schemas)
│
[ Client/Server Boundaries ] ──► Strict Type Validation & State Sync

```

---

## 💻 Local Setup & Installation

Follow these steps to run the application locally:

### 1. Clone the Repository
```bash
git clone [https://github.com/muge-yilmaz/Interactive-Quote-Engine.git](https://github.com/muge-yilmaz/Interactive-Quote-Engine.git)
cd Interactive-Quote-Engine

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI="your-mongodb-atlas-connection-string"
AUTH0_SECRET="your-auth0-secret"
AUTH0_BASE_URL="http://localhost:3000"

```

### 4. Launch Development Server

```bash
npm run dev

```

Open `http://localhost:3000` in your browser.

---

## 👩‍💻 Author & Contact

**Müge Yılmaz** — Full-Stack AI Developer & UI/UX Engineer

* **Email:** [mugeyilmaz.web@gmail.com](https://www.google.com/search?q=mailto%3Amugeyilmaz.web%40gmail.com)
* **LinkedIn:** [linkedin.com/in/muge-yilmaz](https://linkedin.com/in/muge-yilmaz)
* **GitHub:** [github.com/muge-yilmaz](https://github.com/muge-yilmaz)

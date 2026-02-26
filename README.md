# 🚀 Next.js 16 Production Template

A modern, production-ready **Next.js 16 + React 19 + TypeScript** boilerplate built for scalability and clean development workflows.

---

## 🚦 Usage

Create a new project using this template with your favorite package manager:

<details>
<summary>Yarn</summary>

```bash
yarn create next-app --example https://github.com/Diwasdh/nextjs-template app_name
```

</details>

<details>
<summary>npm</summary>

```bash
npx create-next-app --example https://github.com/Diwasdh/nextjs-template app_name
```

</details>

<details>
  <summary>pnpm</summary>

```bash
pnpm create next-app --example https://github.com/Diwasdh/nextjs-template app_name
```

</details>

<details>
  <summary>Bun</summary>

```bash
bunx create next-app --example https://github.com/Diwasdh/nextjs-template app_name
```

</details>

---

## ✨ Features

- ✅ Next.js 16 (App Router)
- ✅ React 19
- ✅ TypeScript
- ✅ ESLint (core-web-vitals + TypeScript)
- ✅ Prettier
- ✅ Husky + lint-staged (pre-commit protection)
- ✅ Tailwind CSS v4
- ✅ Docker (multi-stage production build)
- ✅ Yarn 1

---

## 📦 Tech Stack

| Tool       | Version |
| ---------- | ------- |
| Next.js    | 16      |
| React      | 19      |
| TypeScript | 5       |
| ESLint     | 9       |
| Tailwind   | 4       |
| Node       | 20      |
| Zod        | 4       |

---

## 🛠 Installation

```bash
yarn install
```

---

## 🧑‍💻 Development

```bash
yarn dev
```

App runs at:

```
http://localhost:3000
```

---

## 🏗 Production Build

```bash
yarn build
yarn start
```

---

## 🐳 Docker

### Build Image

```bash
docker build -t nextjs-template .
```

### Run Container

```bash
docker run -p 3000:3000 nextjs-template
```

---

## 🎨 Code Quality

### Lint

```bash
yarn lint
```

### Format

```bash
yarn format
```

### Check Formatting

```bash
yarn format:check
```

---

## 🛡 Pre-Commit Protection

Husky + lint-staged automatically:

- Runs ESLint
- Formats staged files
- Blocks commits if errors exist

No manual setup required after install.

---

## 📁 Project Structure

```
.
├── app/
├── public/
├── .husky/
├── eslint.config.mjs
├── next.config.ts
├── Dockerfile
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create:

```
.env.local
```

Example:

```
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🛡 Environment Validation (Zod)

This template uses [Zod](https://zod.dev/) for type-safe environment variable validation in `lib/env.ts`:

```ts
import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_APP_PORT: z.number().default(3000),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_APP_PORT: process.env.NEXT_PUBLIC_APP_PORT
    ? parseInt(process.env.NEXT_PUBLIC_APP_PORT, 10)
    : undefined,
});
```

This ensures your environment variables are validated and type-safe at runtime.

---

## 📌 Available Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint .",
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  "prepare": "husky",
  "create": "ts-node scripts/create.js"
}
```

---

## ⚡️ Page & Component Generator

Quickly scaffold new pages or UI components with the built-in script:

### Usage

```
yarn run create <page|component> <Name>
```

#### Examples

- Create a new page:

  ```bash
  yarn run create page about
  # ➜ app/about/page.tsx
  ```

- Create a new UI component:

  ```bash
  yarn run create component button
  # ➜ components/ui/Button.tsx, styles/components/ui/Button.module.scss
  ```

The script auto-generates boilerplate code and folders for fast development.

---

## 🔥 Philosophy

This template is designed to:

- Be production-ready from day one
- Enforce clean code automatically
- Support Docker deployment
- Scale for SaaS or enterprise apps
- Maintain a professional workflow

---

## 👨‍💻 Author

**Diwas Dhakal**
Nepal 🇳🇵

---

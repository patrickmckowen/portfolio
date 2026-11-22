# patrickmckowen.com

Source for patrickmckowen.com, deployed on Vercel.

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) on [Base UI](https://base-ui.com) primitives (no Radix)
- [Motion](https://motion.dev) for animation (`import { motion } from "motion/react"`)

## Develop

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run lint`, `npm run typecheck`, `npm run format`.

## Adding UI components

```bash
npx shadcn@latest add <component>
```

Components land in `components/ui/` and use `@base-ui/react` under the hood.

# Messenger tutorial

This is the messenger app developed by [tutorial](https://www.youtube.com/watch?v=PGPGcKBpAk8&ab_channel=CodeWithAntonio).

## Used library
- Next.js 13
- React
- Tailwind
- Prisma
- MongoDB
- NextAuth
- Pusher

## Getting Started

### Configure app:

Rename the file `example.env`to `.env`

```
# Got from https://www.mongodb.com/atlas/database
DATABASE_URL="mongodb+srv://{username}:{password}@{url}/{cluster}"

# Random string for secret users token
NEXTAUTH_SECRET="{SECRET}"

# Got from github
GITHUB_ID={GITHUB_ID}
GITHUB_SECRET={GITHUB_SECRET}

# Got from google console
GOOGLE_CLIENT_ID={GOOGLE_CLIENT_ID}
GOOGLE_CLIENT_SECRET={GOOGLE_CLIENT_SECRET}

# Got from https://cloudinary.com/
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME={NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}

# Got from https://pusher.com/
NEXT_PUBLIC_PUSHER_APP_KEY={NEXT_PUBLIC_PUSHER_APP_KEY}
PUSHER_APP_ID={PUSHER_APP_ID}
PUSHER_APP_SECRET={PUSHER_APP_SECRET}
PUSHER_APP_CLUSTER={PUSHER_APP_CLUSTER}
```

### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about libraries, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn React.js](https://react.dev/learn) - an interactive react.js tutorial.
- [tailwindcss Documentation](https://tailwindcss.com/docs/installation) - learn about tailwindcss features and API.
- [Prisma Documentation](https://www.prisma.io/docs) - learn about prisma features and API.
- [MongoDB Documentation](https://www.mongodb.com/docs/) - learn about MongoDB features and API.
- [Next-auth Documentation](https://next-auth.js.org/getting-started/introduction) - learn about Next-auth features and API.
- [Learn Next-auth](https://next-auth.js.org/tutorials) - an interactive Next-auth tutorial.
- [Pusher Documentation](https://pusher.com/docs/) - learn about Pusher features and API.
- [Learn Pusher](https://pusher.com/tutorials/) - an interactive Pusher tutorial.

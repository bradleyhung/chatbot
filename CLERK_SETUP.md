# Clerk Authentication Setup

## Setup Steps:

1. **Create a Clerk Account**

   - Go to https://dashboard.clerk.com
   - Sign up for a free account
   - Create a new application

2. **Get Your API Keys**

   - In your Clerk dashboard, go to "API Keys"
   - Copy your Publishable Key and Secret Key

3. **Update .env.local**

   - Open `.env.local` in your project root
   - Replace `your_publishable_key_here` with your actual Publishable Key
   - Replace `your_secret_key_here` with your actual Secret Key

4. **Restart Your Dev Server**
   ```powershell
   npm run dev
   ```

## What's Been Added:

- ✅ Clerk package installed (`@clerk/nextjs`)
- ✅ ClerkProvider wrapping your app in `layout.tsx`
- ✅ Sign Up and Sign In buttons in header
- ✅ User profile button (avatar) when signed in
- ✅ Middleware for authentication protection
- ✅ Environment variables configured

## Features:

- Modal-based sign up/sign in (no page redirects)
- User profile management
- Secure authentication
- Session management

## Testing:

1. Start your dev server: `npm run dev`
2. Click "Sign Up" to create an account
3. Once signed in, you'll see your profile avatar in the header
4. Click the avatar to manage your account or sign out

## Need Help?

- Clerk Docs: https://clerk.com/docs/quickstarts/nextjs
- Dashboard: https://dashboard.clerk.com

# Flomad Studios - Deployment & Admin Guide

## Table of Contents

1. [Admin Login Instructions](#admin-login-instructions)
2. [Environment Setup](#environment-setup)
3. [Deployment to Vercel](#deployment-to-vercel)
4. [Production Configuration](#production-configuration)
5. [Database Setup (Optional)](#database-setup-optional)
6. [Domain & SSL Configuration](#domain--ssl-configuration)
7. [Monitoring & Analytics](#monitoring--analytics)
8. [Troubleshooting](#troubleshooting)

## Admin Login Instructions

### Default Admin Account

- **Email**: `admin@flomadstudios.com`
- **Password**: `admin123`

### Accessing Admin Dashboard

1. Navigate to your website homepage
2. Click the "Login" button in the navigation bar (or go to `/login`)
3. Enter the admin credentials above
4. After successful login, you'll have access to the Dashboard at `/dashboard`

### Admin Dashboard Features

Once logged in as admin, you can access:

- **Dashboard Home** (`/dashboard`) - Overview and analytics
- **Video Management** (`/dashboard/videos`) - Upload and manage videos
- **Podcast Management** (`/dashboard/podcasts`) - Create and publish podcasts
- **Blog Management** (`/dashboard/blog`) - Write and publish blog posts
- **User Management** (`/dashboard/users`) - Manage user accounts and roles
- **Analytics** (`/dashboard/analytics`) - View website performance metrics
- **Settings** (`/dashboard/settings`) - Configure site settings and preferences

### Security Notes

- **Important**: Change the default admin password immediately after first login
- Consider creating additional admin users with unique credentials
- The admin system uses NextAuth.js for secure authentication

## Environment Setup

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager
- Git for version control
- Vercel account (for deployment)

### Local Development

1. **Clone the repository**:

   ```bash
   git clone [your-repository-url]
   cd flomadstudios
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory:

   ```env
   # NextAuth Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   
   # Database (if using)
   DATABASE_URL="your-database-connection-string"
   
   # Optional: Analytics
   GOOGLE_ANALYTICS_ID=your-ga-id
   ```

4. **Run development server**:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Access locally**: Open [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### Step 1: Prepare for Deployment

1. **Commit all changes**:

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Ensure all required files are present**:

   - `package.json` with all dependencies
   - `next.config.ts` with proper configuration
   - `vercel.json` (optional, for custom configuration)

### Step 2: Deploy to Vercel

#### Option A: Via Vercel Dashboard

1. Visit [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your Git repository
4. Configure project settings:
   - **Framework**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` or `pnpm build`
   - **Output Directory**: `.next` (default)

#### Option B: Via Vercel CLI

1. **Install Vercel CLI**:

   ```bash
   npm i -g vercel
   ```

2. **Deploy**:

   ```bash
   vercel --prod
   ```

### Step 3: Configure Environment Variables

In your Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the following variables:

```env
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-production-secret-key
DATABASE_URL=your-production-database-url
GOOGLE_ANALYTICS_ID=your-ga-id
```

### Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to "Domains"
2. Add your custom domain
3. Configure DNS settings as shown
4. SSL certificates are automatically provisioned

## Production Configuration

### Next.js Configuration

Your `next.config.ts` should include:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    domains: [
      'localhost',
      'your-domain.com',
      'vercel.app'
    ],
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ]
  }
};

export default nextConfig;
```

### Security Considerations

1. **Environment Variables**: Never commit `.env` files to version control
2. **HTTPS**: Always use HTTPS in production (automatic with Vercel)
3. **Secrets**: Use strong, unique secrets for `NEXTAUTH_SECRET`
4. **Authentication**: Monitor login attempts and consider rate limiting

## Database Setup (Optional)

### Using Prisma with PostgreSQL

1. **Install Prisma**:

   ```bash
   npm install prisma @prisma/client
   npx prisma init
   ```

2. **Configure database URL** in `.env`:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/flomadstudios"
   ```

3. **Run migrations**:

   ```bash
   npx prisma db push
   npx prisma generate
   ```

### Database Providers

- **Recommended**: [Supabase](https://supabase.com) (Free tier available)
- **Alternative**: [PlanetScale](https://planetscale.com)
- **Enterprise**: AWS RDS, Google Cloud SQL

## Domain & SSL Configuration

### Custom Domain Setup

1. **Purchase domain** from registrar (Namecheap, GoDaddy, etc.)
2. **Add to Vercel**:
   - Project Settings → Domains
   - Add your domain
   - Follow DNS configuration instructions

3. **DNS Configuration**:

   ```dns
   Type: A
   Name: @
   Value: 76.76.19.61 (Vercel's IP)
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### SSL Certificate

- SSL is automatically provisioned by Vercel
- No additional configuration needed
- Renewal is handled automatically

## Monitoring & Analytics

### Built-in Monitoring

- **Vercel Analytics**: Automatically enabled
- **Performance Monitoring**: Available in Vercel dashboard
- **Error Tracking**: Built into Vercel

### Optional Integrations

1. **Google Analytics 4**:

   ```javascript
   // Add to pages/_app.tsx or layout.tsx
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode
   }) {
     return (
       <html lang="en">
         <body>{children}</body>
         <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
       </html>
     )
   }
   ```

2. **Error Tracking**: Consider Sentry for detailed error monitoring

## Troubleshooting

### Common Issues

#### Build Failures

```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Clear node_modules
rm -rf node_modules
npm install
```

#### Environment Variables Not Working

- Ensure variables are set in Vercel dashboard
- Restart deployment after adding new variables
- Check variable names match exactly (case-sensitive)

#### Authentication Issues

- Verify `NEXTAUTH_URL` matches your domain exactly
- Ensure `NEXTAUTH_SECRET` is set and unique
- Check that callback URLs are correctly configured

#### Database Connection Issues

- Verify database URL is correct
- Check database server is accessible
- Ensure connection limits aren't exceeded

### Performance Optimization

#### Image Optimization

```typescript
// next.config.ts
export default {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  }
}
```

#### Caching Strategy

```typescript
// API routes caching
export async function GET() {
  const res = await fetch('your-api')
  
  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
    }
  })
}
```

### Support & Maintenance

#### Regular Tasks

1. **Update Dependencies**: Monthly security updates
2. **Monitor Analytics**: Weekly performance reviews
3. **Backup Data**: If using database, ensure regular backups
4. **Security Audits**: Quarterly security reviews

#### Getting Help

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Community Support**: [GitHub Discussions](https://github.com/vercel/next.js/discussions)

---

## Quick Reference Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel --prod

# Clear caches
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

## Deployment Checklist

- [ ] Admin login credentials changed from default
- [ ] Environment variables configured in Vercel
- [ ] Custom domain added and DNS configured
- [ ] SSL certificate active
- [ ] Analytics tracking enabled
- [ ] Error monitoring set up
- [ ] Performance monitoring verified
- [ ] Backup strategy implemented (if using database)
- [ ] Security headers configured
- [ ] SEO metadata completed

---

**Last Updated**: September 8, 2025  
**Version**: 1.0  
**Contact**: [admin@flomadstudios.com](mailto:admin@flomadstudios.com)

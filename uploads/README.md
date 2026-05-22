# FloStudios.ai

An AI-powered creative learning platform for managing and showcasing videos, podcasts, and blog posts with a beautiful sky blue to yellow gradient theme.

## Project Overview

FloStudios.ai is a comprehensive AI-enhanced content management platform designed for creators to upload, manage, and publish various types of content with cutting-edge AI learning experiences. The platform includes:

- **User-friendly dashboard** for content management
- **Video upload and management** system with thumbnail selection
- **Podcast publishing platform** with audio player controls
- **Blog content management** with rich text editing
- **Analytics tracking and visualization**
- **User management** with role-based permissions
- **Beautiful glassmorphism UI** with sky blue to yellow gradient theming
- **Dark/Light mode support** with smooth transitions

## Admin Access

**Default Admin Credentials:**

- Email: `admin@flostudios.ai`
- Password: `admin123`

**Important:** Change these credentials immediately after first login for security.

## Features

### 🎨 Modern UI/UX

- **Glassmorphism Design**: Beautiful glass-like effects with backdrop blur
- **Sky Blue to Yellow Theme**: Cohesive gradient color scheme throughout
- **Dark/Light Mode**: Complete theme switching with smooth transitions
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Smooth Animations**: Framer Motion powered animations and transitions

### 📊 Dashboard

- Overview with analytics cards and recent content metrics
- Content management sections (Videos, Podcasts, Blog)
- User management interface with role-based access
- Settings and account preferences
- Real-time analytics visualization

### 🎬 Videos

- Drag-and-drop upload interface with progress indicators
- Thumbnail selection and video metadata management
- Categories and tagging system for organization
- Publishing controls (draft/published status)
- Embedded video player with custom controls
- View tracking and analytics

### 🎙️ Podcasts

- Audio file upload with cover image support
- Episode metadata management (title, description, duration)
- Series organization and episode numbering
- Embedded audio player with seek controls
- RSS feed generation for podcast distribution
- Download and streaming analytics

### ✍️ Blog

- Rich text editor powered by modern WYSIWYG
- Media embedding (images, videos, audio)
- Categories and tagging system
- Draft/publishing workflow with preview
- SEO optimization fields
- Social media sharing integration

### 👥 User Management

- Role-based permissions (Admin, Creator, Viewer)
- User invitations and onboarding flow
- Profile management with avatars
- Activity tracking and audit logs
- Account settings and preferences

## Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom glassmorphism utilities
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React icon library
- **Authentication**: NextAuth.js with multiple provider support
- **Database**: Prisma ORM with PostgreSQL (optional)
- **Deployment**: Vercel (recommended) with automatic deployments
- **Type Safety**: Full TypeScript implementation
- **Theme Management**: next-themes for dark/light mode

## Project Structure

```text
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes (serverless functions)
│   │   ├── auth/         # Authentication endpoints
│   │   ├── podcasts/     # Podcast management API
│   │   ├── videos/       # Video management API
│   │   └── upload/       # File upload handling
│   ├── dashboard/        # Protected dashboard pages
│   │   ├── analytics/    # Analytics dashboard
│   │   ├── blog/         # Blog management
│   │   ├── podcasts/     # Podcast management
│   │   ├── settings/     # User settings
│   │   ├── users/        # User management
│   │   └── videos/       # Video management
│   ├── podcasts/         # Public podcast pages
│   ├── videos/           # Public video pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── privacy/          # Privacy policy
│   ├── terms/            # Terms of service
│   └── globals.css       # Global styles and theme
├── components/           # Reusable UI components
│   ├── auth/            # Authentication components
│   ├── layout/          # Layout components (Header, Footer, Navigation)
│   ├── providers/       # Context providers (Theme, Auth)
│   ├── shared/          # Shared utility components
│   └── ui/              # Core UI components
│       ├── AnimatedCursor.tsx
│       ├── BackgroundEffects.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── GlassButton.tsx
│       ├── GlassCard.tsx
│       ├── Loading.tsx
│       ├── MobileNavMenu.tsx
│       ├── ScrollToTop.tsx
│       ├── ThemeToggle.tsx
│       └── VideoPlayer.tsx
├── lib/                  # Utility functions and configurations
│   ├── auth.ts          # NextAuth configuration
│   ├── prisma.ts        # Database client
│   ├── utils.ts         # Utility functions
│   └── mockData.ts      # Development mock data
└── types/               # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager
- Git for version control

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/FlomadLabsRD/flomad-studios.git
   cd flomadstudios
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file:

   ```bash
   cp .env.example .env.local
   # Edit the file with your configuration
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**: Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

### Quick Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

### Manual Deployment

See the complete [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions including:

- Environment setup
- Database configuration
- Domain and SSL setup
- Performance optimization
- Security considerations

## Theme Customization

The project uses a consistent **sky blue to yellow gradient** theme. Key colors:

- **Sky Blue**: `#0ea5e9` (sky-500)
- **Emerald**: `#22c55e` (green-500)
- **Amber**: `#f59e0b` (amber-500)
- **Yellow**: `#fbbf24` (yellow-400)

Theme variables are defined in `globals.css` and can be customized in `tailwind.config.ts`.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:

- 📧 Email: [admin@flostudios.ai](mailto:admin@flostudios.ai)
- 📖 Documentation: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- 🐛 Issues: [GitHub Issues](https://github.com/FlomadLabsRD/flomad-studios/issues)

---

Built with ❤️ using Next.js and modern web technologies

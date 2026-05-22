import type { Config } from "tailwindcss";

const config: Config = {
  // Use "class" strategy for toggling dark mode
  darkMode: "class",
  // Define the files Tailwind should scan for class names
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Enhanced color palette with glassmorphism support
      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
          light: "hsl(var(--background-light))",
          muted: "hsl(var(--background-muted))",
          surface: "hsl(var(--surface))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          muted: "hsl(var(--muted-foreground))",
          dark: "#0f172a",
          light: "#f8fafc",
        },
        heading: {
          DEFAULT: "hsl(var(--heading-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        ring: "hsl(var(--ring))",
        input: "hsl(var(--input))",
        // FloStudios.ai brand colors - Professional sky-inspired palette with AI focus
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "#0ea5e9",   // Bright sky blue (sky-500)
          dark: "#0c4a6e",    // Deep sky blue (sky-800)
          50: "#f0f9ff",      // Very light sky
          100: "#e0f2fe",     // Light sky
          200: "#bae6fd",     // Sky blue tint
          300: "#7dd3fc",     // Light sky blue
          400: "#38bdf8",     // Sky blue
          500: "#0ea5e9",     // Standard sky blue
          600: "#0284c7",     // Medium sky blue
          700: "#0369a1",     // Professional sky blue
          800: "#075985",     // Deep sky blue
          900: "#0c4a6e",     // Very deep sky blue
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          light: "#06b6d4",   // Bright cyan (cyan-500)
          dark: "#164e63",    // Deep cyan (cyan-900)
          50: "#ecfeff",      // Very light cyan
          100: "#cffafe",     // Light cyan
          200: "#a5f3fc",     // Cyan tint
          300: "#67e8f9",     // Light cyan
          400: "#22d3ee",     // Cyan
          500: "#06b6d4",     // Standard cyan
          600: "#0891b2",     // Professional cyan
          700: "#0e7490",     // Medium cyan
          800: "#155e75",     // Deep cyan
          900: "#164e63",     // Very deep cyan
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          light: "#fbbf24",   // Light amber (amber-400)
          dark: "#d97706",    // Deep amber (amber-600)
          50: "#fffbeb",      // Very light amber
          100: "#fef3c7",     // Light amber
          200: "#fde68a",     // Amber tint
          300: "#fcd34d",     // Light amber
          400: "#fbbf24",     // Amber
          500: "#f59e0b",     // Standard amber
          600: "#d97706",     // Professional amber
          700: "#b45309",     // Medium amber
          800: "#92400e",     // Deep amber
          900: "#78350f",     // Very deep amber
        },
        // Glassmorphism colors for modern effects
        glass: {
          white: "rgba(255, 255, 255, 0.1)",
          dark: "rgba(0, 0, 0, 0.1)",
          primary: "rgba(3, 105, 161, 0.1)",      // Professional sky blue glass
          secondary: "rgba(8, 145, 178, 0.1)",    // Professional cyan glass
          accent: "rgba(245, 158, 11, 0.1)",      // Warm amber glass
          "light-primary": "rgba(3, 105, 161, 0.05)",    // Subtle light mode
          "light-secondary": "rgba(8, 145, 178, 0.05)",  // Subtle light mode
          "light-accent": "rgba(245, 158, 11, 0.05)",    // Subtle light mode
        },
        // Professional sky colors for atmospheric effects
        sky: {
          atmosphere: "rgba(14, 165, 233, 0.03)",    // Very subtle sky blue
          clouds: "rgba(255, 255, 255, 0.8)",       // Cloud white
          horizon: "rgba(147, 197, 253, 0.2)",      // Horizon blue
          dawn: "rgba(251, 191, 36, 0.1)",          // Dawn amber
          "dark-atmosphere": "rgba(79, 70, 229, 0.05)",  // Night sky purple
          "dark-horizon": "rgba(139, 92, 246, 0.03)",    // Dark horizon
        },
        // Neutral colors for better contrast
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        // Border colors with transparency
        border: {
          DEFAULT: "hsl(var(--border))",
          light: "rgba(15, 23, 42, 0.12)",     // Professional border in light mode
          "light-subtle": "rgba(15, 23, 42, 0.06)", // Very subtle light border
        },
      },
      // Enhanced gradient backgrounds with glassmorphism and sky themes
      backgroundImage: {
        "gradient-border": "linear-gradient(90deg, #f59e0b, #0369a1)",
        "gradient-primary": "linear-gradient(135deg, #0369a1, #0891b2)",
        "gradient-secondary": "linear-gradient(135deg, #0891b2, #0ea5e9)",
        "gradient-accent": "linear-gradient(135deg, #f59e0b, #fbbf24)",
        "gradient-hero": "linear-gradient(135deg, #0369a1, #f59e0b, #0891b2)",
        "gradient-card": "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.8) 100%)",

        // Professional glassmorphism gradients
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
        "glass-primary": "linear-gradient(135deg, rgba(3,105,161,0.2), rgba(3,105,161,0.05))",
        "glass-secondary": "linear-gradient(135deg, rgba(8,145,178,0.2), rgba(8,145,178,0.05))",

        // Sky-themed gradients for atmospheric effects
        "sky-day": "linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)",
        "sky-dawn": "linear-gradient(180deg, #fef3c7 0%, #fde68a 30%, #bae6fd 100%)",
        "sky-clouds": "radial-gradient(ellipse at top, rgba(255,255,255,0.9) 0%, rgba(147,197,253,0.1) 100%)",
        "sky-atmosphere": "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(14,165,233,0.08) 0%, transparent 70%)",

        // Night sky gradients (enhanced)
        "sky-night": "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        "sky-stars": "radial-gradient(ellipse at top, rgba(79,70,229,0.1) 0%, rgba(139,92,246,0.05) 100%)",
      },
      // Enhanced fonts
      fontFamily: {
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
        mono: ["Menlo", "Monaco", "Consolas", "monospace"],
      },
      // Enhanced animations with glassmorphism
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(99, 102, 241, 0.6)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      // Extended spacing utilities
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      // Extended border radius
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      // Enhanced box shadows with glassmorphism
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-inset': 'inset 0 -1px 0 0 rgba(255, 255, 255, 0.05)',
        'glow': '0 0 15px rgba(99, 102, 241, 0.5)',
        'glow-accent': '0 0 15px rgba(245, 158, 11, 0.5)',
        'glow-secondary': '0 0 15px rgba(6, 182, 212, 0.5)',
        'inner-glow': 'inset 0 0 15px rgba(99, 102, 241, 0.2)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.2)',
        'strong': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      // Backdrop blur utilities for glassmorphism
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      // Extended breakpoints for responsiveness
      screens: {
        "2xl": "1440px", // Extra-wide screens
      },
    },
  },
  // Add useful plugins
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("@tailwindcss/typography"), // Adds better text utilities
  ],
};

export default config;

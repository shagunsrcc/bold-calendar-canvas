import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'dancing': ['Dancing Script', 'cursive'],
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				calendar: {
					bg: 'hsl(var(--calendar-bg))',
					card: 'hsl(var(--calendar-card))',
					mint: 'hsl(var(--calendar-mint))',
					maroon: 'hsl(var(--calendar-maroon))',
					text: 'hsl(var(--calendar-text))'
				},
				premium: {
					dark: 'hsl(var(--premium-dark))',
					darker: 'hsl(var(--premium-darker))',
					card: 'hsl(var(--premium-card))',
					text: 'hsl(var(--premium-text))',
					muted: 'hsl(var(--premium-muted))',
					accent: 'hsl(var(--premium-accent))',
					glow: 'hsl(var(--premium-glow))'
				},
				'color-1': 'hsl(var(--color-1))',
				'color-2': 'hsl(var(--color-2))',
				'color-3': 'hsl(var(--color-3))',
				'color-4': 'hsl(var(--color-4))',
				'color-5': 'hsl(var(--color-5))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-dark': 'var(--gradient-dark)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-premium': 'var(--gradient-premium)',
				'gradient-accent': 'var(--gradient-accent)'
			},
			boxShadow: {
				'3d': 'var(--shadow-3d)',
				'card': 'var(--shadow-card)', 
				'hover': 'var(--shadow-hover)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float-3d': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)' 
					},
					'33%': { 
						transform: 'translateY(-8px) rotateX(2deg) rotateY(1deg)' 
					},
					'66%': { 
						transform: 'translateY(-4px) rotateX(-1deg) rotateY(-0.5deg)' 
					}
				},
				'geometric-glow': {
					'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
					'50%': { opacity: '0.6', transform: 'scale(1.02)' }
				},
				'float-pattern': {
					'0%, 100%': { transform: 'translateY(0px) rotateZ(0deg)' },
					'50%': { transform: 'translateY(-10px) rotateZ(2deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-3d': 'float-3d 6s ease-in-out infinite',
				'geometric-glow': 'geometric-glow 3s ease-in-out infinite',
				'float-pattern': 'float-pattern 20s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

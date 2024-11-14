/** @type {import('tailwindcss').Config} */
import { spacing } from 'tailwindcss/defaultTheme';

export default {
    darkMode: ['class', '[data-theme="dark"]'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
    	extend: {
    		colors: {
    			'blue-opaque': 'rgb(13 42 148 / 18%)',
    			gray: {
    				'0': '#fff',
    				'100': '#fafafa',
    				'200': '#eaeaea',
    				'300': '#999999',
    				'400': '#888888',
    				'500': '#666666',
    				'600': '#444444',
    				'700': '#333333',
    				'800': '#222222',
    				'900': '#111111'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		typography: '(theme) => ({\r\n                DEFAULT: {\r\n                    css: {\r\n                        color: theme(colors.gray.700),\r\n                        a: {\r\n                            color: theme(colors.blue.500),\r\n                            &:hover: {\r\n                                color: theme(colors.blue.700),\r\n                            },\r\n                            code: { color: theme(colors.blue.400) },\r\n                        },\r\n                        h2,h3,h4: {\r\n                            scroll-margin-top: spacing[32],\r\n                        },\r\n                        thead: {\r\n                            borderBottomColor: theme(colors.gray.200),\r\n                        },\r\n                        code: { color: theme(colors.pink.500) },\r\n                        blockquote p:first-of-type::before: false,\r\n                        blockquote p:last-of-type::after: false,\r\n                    },\r\n                },\r\n                dark: {\r\n                    css: {\r\n                        color: theme(colors.gray.200),\r\n                        a: {\r\n                            color: theme(colors.blue.400),\r\n                            &:hover: {\r\n                                color: theme(colors.blue.600),\r\n                            },\r\n                            code: { color: theme(colors.blue.400) },\r\n                        },\r\n                        blockquote: {\r\n                            borderLeftColor: theme(colors.gray.700),\r\n                            color: theme(colors.gray.300),\r\n                        },\r\n                        h2,h3,h4: {\r\n                            color: theme(colors.gray.100),\r\n                            scroll-margin-top: spacing[32],\r\n                        },\r\n                        hr: { borderColor: theme(colors.gray.700) },\r\n                        ol: {\r\n                            li: {\r\n                                &:before: { color: theme(colors.gray.500) },\r\n                            },\r\n                        },\r\n                        ul: {\r\n                            li: {\r\n                                &:before: {\r\n                                    backgroundColor: theme(colors.gray.500),\r\n                                },\r\n                            },\r\n                        },\r\n                        strong: { color: theme(colors.gray.100) },\r\n                        thead: {\r\n                            th: {\r\n                                color: theme(colors.gray.100),\r\n                            },\r\n                            borderBottomColor: theme(colors.gray.600),\r\n                        },\r\n                        tbody: {\r\n                            tr: {\r\n                                borderBottomColor: theme(colors.gray.700),\r\n                            },\r\n                        },\r\n                    },\r\n                },\r\n            })',
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    variants: {
        typography: ['dark'],
    },
    plugins: [require('@tailwindcss/typography'), require("tailwindcss-animate")],
};

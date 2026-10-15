/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variableName}-rgb) / ${opacityValue})`;
    }
    return `rgb(var(${variableName}-rgb))`;
  };
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: withOpacity('--primary'),
          foreground: withOpacity('--secondary'),
        },
        secondary: {
          DEFAULT: withOpacity('--secondary'),
          foreground: withOpacity('--primary'),
        },
        background: withOpacity('--background'),
        foreground: withOpacity('--foreground'),
        card: {
          DEFAULT: withOpacity('--card'),
          foreground: withOpacity('--card-foreground'),
        },
        popover: {
          DEFAULT: withOpacity('--popover'),
          foreground: withOpacity('--popover-foreground'),
        },
        muted: {
          DEFAULT: withOpacity('--muted'),
          foreground: withOpacity('--muted-foreground'),
        },
        border: withOpacity('--border'),
        input: withOpacity('--input'),
        ring: withOpacity('--ring'),
      },
      borderRadius: {
        'xs': 'calc(var(--radius) - 12px)',
        'sm': 'calc(var(--radius) - 8px)',
        'md': 'calc(var(--radius) - 4px)',
        'lg': 'var(--radius)',
        'xl': 'calc(var(--radius) + 6px)',
        '2xl': 'calc(var(--radius) + 12px)',
        '3xl': 'calc(var(--radius) + 20px)',
        'arch': '12rem 12rem 1.25rem 1.25rem',
      },
      letterSpacing: {
        'luxury': '0.2em',
        'subtle': '0.08em',
      },
    },
  },
  plugins: [],
};

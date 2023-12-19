import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        charcoalGray: "#454545",
        cloudGray: "#F1F1F1",
        darkCloudGray: "#ABABAB",
        linkBlue: "#1E90FF",
        realllyDarkBlue: "#313C4B"
      }
    },
  },
  plugins: [],
}
export default config

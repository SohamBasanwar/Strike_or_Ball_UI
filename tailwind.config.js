/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-red': '#EF4444',
                'primary-blue': '#3B82F6',
                'success-green': '#22C55E',
                'warning-orange': '#F97316',
                'slate-900': '#0F172A',
                'slate-600': '#475569',
                'slate-100': '#F1F5F9',
                'focus-yellow': '#FACC15',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            borderRadius: {
                '2xl': '24px',
                'xl': '16px',
                'lg': '12px',
            },
            boxShadow: {
                'card': '0px 4px 12px rgba(0,0,0,0.08)',
                'btn': '0px 4px 0px rgba(0,0,0,0.15)',
                'btn-pressed': '0px 2px 0px rgba(0,0,0,0.15)',
            },
            screens: {
                'mobile': '390px',
            },
            animation: {
                'ping-once': 'ping 0.5s cubic-bezier(0, 0, 0.2, 1) 1 forwards',
                'pop-in': 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
            },
            keyframes: {
                popIn: {
                    '0%': { opacity: '0', transform: 'scale(0.5)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                }
            }
        },
    },
    plugins: [],
}

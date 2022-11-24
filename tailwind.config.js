/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                stolzl: ['stolzl', 'sans-serif']
            },
            colors: {
                underline: {
                    "cta": "#4BE566",
                    "hero": "#00D17C"
                },
                btn: {
                    "primary": "#E04E4E",
                    "secondary": "#EEEEEE"
                },
                text: {
                    "body": "#1F1F1F",
                    "btn-light": "#1B352B",
                }
            },
            content: {
                "check": "url('./images/icons/icon-check.png')",
                "hero-pattern": "url('./images/hero-pattern.png')"
            }
        },
    },
    plugins: [],
}

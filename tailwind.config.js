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
                },
                gradient: {
                    "from": "#00DD78",
                    "to": "#00CC74",
                    "light-from": "#FAFAFA"
                },
                border: {
                    "light": "#F0F0F0"
                }
            },
            content: {
                "check": "url('./images/icons/icon-check.png')",
                "hero-pattern": "url('./images/hero-pattern.png')",
                "benefits-pattern": "url('./images/icons/icon-pattern.png')"
            },
            backgroundImage: {
                "benefits": "url('./images/benefits-img.png')",
                "mockup-slider": "url('./images/mockup-slider.png')",
                "icon-planet": "url('./images/icons/icon-planet.png')",
                "icon-wind": "url('./images/icons/icon-wind-energy.png')",
                "icon-gasoline": "url('./images/icons/icon-gasoline.png')",
                "icon-industry": "url('./images/icons/icon-industry.png')",
                "icon-tap": "url('./images/icons/icon-tap.png')",
                "icon-trash": "url('./images/icons/icon-trash.png')",
                "icon-battery": "url('./images/icons/icon-battery.png')",
                "icon-leaves": "url('./images/icons/icon-leaves.png')"
            },
            lineHeight: {
                'hero': '1.15'
            }
        },
    },
    plugins: [],
}

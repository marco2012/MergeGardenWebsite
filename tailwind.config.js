/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a",
                foreground: "#ededed",
                primary: "#2d5a2d",
                "primary-dark": "#1a3d1a",
                secondary: "#34c759",
                accent: "#ff9500",
                danger: "#ff3b30",
                success: "#4caf50",
                muted: "#8e8e93",
                border: "#38383a",
                card: "#1c1c1e",
                "card-shadow": "rgba(0, 0, 0, 0.04)",
            },
            animation: {
                "fade-in-up": "fadeInUp 0.8s ease-out",
                "fade-in-left": "fadeInLeft 0.8s ease-out",
                "fade-in-right": "fadeInRight 0.8s ease-out",
                float: "float 3s ease-in-out infinite",
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
            },
            keyframes: {
                fadeInUp: {
                    from: {
                        opacity: "0",
                        transform: "translateY(30px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                fadeInLeft: {
                    from: {
                        opacity: "0",
                        transform: "translateX(-30px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
                fadeInRight: {
                    from: {
                        opacity: "0",
                        transform: "translateX(30px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
                float: {
                    "0%, 100%": {
                        transform: "translateY(0px)",
                    },
                    "50%": {
                        transform: "translateY(-10px)",
                    },
                },
                "pulse-glow": {
                    "0%, 100%": {
                        boxShadow: "0 0 20px rgba(10, 132, 255, 0.3)",
                    },
                    "50%": {
                        boxShadow: "0 0 30px rgba(10, 132, 255, 0.6)",
                    },
                },
            },
        },
    },
    plugins: [],
};

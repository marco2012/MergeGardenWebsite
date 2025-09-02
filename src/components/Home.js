import React from "react";
import { trackDownload, trackVideoPlay } from "../utils/analytics";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6">
                    <div className="text-center">
                        {/* App Icon */}
                        <div className="mb-8 animate-float">
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-3xl shadow-2xl animate-pulse-glow">
                                <img
                                    src={
                                        process.env.PUBLIC_URL + "/icon-512.png"
                                    }
                                    alt="Merge Garden App Icon"
                                    className="w-20 h-20 rounded-2xl"
                                />
                            </div>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
                            Merge Garden
                        </h1>

                        {/* Subtitle */}
                        <p
                            className="text-xl md:text-2xl text-muted mb-8 max-w-3xl mx-auto animate-fade-in-up"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Merge connected tiles to create higher numbers and
                            achieve the highest score in this addictive puzzle
                            game!
                        </p>

                        {/* Download Buttons */}
                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
                            style={{ animationDelay: "0.4s" }}
                        >
                            <a
                                href="https://apps.apple.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block transition-all duration-300 transform hover:scale-105"
                                onClick={() => trackDownload("app_store")}
                            >
                                <img
                                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1276560000"
                                    alt="Download on the App Store"
                                    className="h-16 w-48 object-contain"
                                />
                            </a>

                            <a
                                href="https://play.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block transition-all duration-300 transform hover:scale-105"
                                onClick={() => trackDownload("google_play")}
                            >
                                <img
                                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                    alt="Get it on Google Play"
                                    className="h-24 w-54 object-contain"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gameplay Video Section */}
            <section className="py-4">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div
                        className="relative animate-fade-in-up flex justify-center"
                        style={{ animationDelay: "0.2s" }}
                    >
                        {/* iPhone Mockup */}
                        <div className="relative mt-4">
                            {/* iPhone Frame */}
                            <div
                                className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl shadow-white/40 ring-1 ring-white/20"
                                style={{
                                    boxShadow:
                                        "0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2), 0 0 90px rgba(255, 255, 255, 0.1)",
                                }}
                            >
                                {/* Screen */}
                                <div className="bg-black rounded-[2.5rem] overflow-hidden relative">
                                    {/* Video Content */}
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="metadata"
                                        webkit-playsinline="true"
                                        className="w-full h-auto object-cover"
                                        style={{
                                            objectFit: "cover",
                                            maxHeight: "600px",
                                        }}
                                        onPlay={() => trackVideoPlay()}
                                        onError={(e) => {
                                            console.log("Video error:", e);
                                            // Fallback to image if video fails
                                            e.target.style.display = "none";
                                        }}
                                    >
                                        <source
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/game.webm"
                                            }
                                            type="video/webm"
                                        />
                                        <source
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/game.mp4"
                                            }
                                            type="video/mp4"
                                        />
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/screenshots/game.PNG"
                                            }
                                            alt="Game Screenshot Fallback"
                                            className="w-full h-auto object-cover"
                                            style={{
                                                objectFit: "cover",
                                                maxHeight: "600px",
                                            }}
                                        />
                                    </video>

                                    {/* Home Indicator */}
                                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
                                </div>
                            </div>

                            {/* Side Buttons */}
                            <div className="absolute left-0 top-16 w-1 h-16 bg-gray-800 rounded-r-sm"></div>
                            <div className="absolute left-0 top-32 w-1 h-8 bg-gray-800 rounded-r-sm"></div>
                            <div className="absolute left-0 top-44 w-1 h-8 bg-gray-800 rounded-r-sm"></div>
                            <div className="absolute right-0 top-20 w-1 h-20 bg-gray-800 rounded-l-sm"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Screenshots Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
                            Beautiful Gameplay
                        </h2>
                        <p
                            className="text-lg text-muted max-w-2xl mx-auto animate-fade-in-up"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Experience smooth animations, haptic feedback, and
                            stunning visuals
                        </p>
                    </div>

                    <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
                        <div className="animate-fade-in-left order-2 md:order-1">
                            <div className="relative rounded-3xl shadow-2xl overflow-hidden">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/screenshots/tutorial.PNG"
                                    }
                                    alt="Interactive Tutorial"
                                    className="w-full h-auto object-contain rounded-3xl"
                                    style={{
                                        objectFit: "contain",
                                        maxHeight: "550px",
                                    }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                    <h3 className="text-white font-semibold text-lg">
                                        Interactive Tutorial
                                    </h3>
                                    <p className="text-white/80 text-sm">
                                        Learn the basics with our guided
                                        tutorial
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="animate-fade-in-up order-first md:order-none">
                            <div className="relative rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/screenshots/game.PNG"
                                    }
                                    alt="Core Gameplay"
                                    className="w-full h-auto object-contain rounded-3xl"
                                    style={{
                                        objectFit: "contain",
                                        maxHeight: "550px",
                                    }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                    <h3 className="text-white font-semibold text-lg">
                                        Core Gameplay
                                    </h3>
                                    <p className="text-white/80 text-sm">
                                        Merge tiles and chain combos for high
                                        scores
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="animate-fade-in-right order-3 md:order-3">
                            <div className="relative rounded-3xl shadow-2xl overflow-hidden">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/screenshots/stats.PNG"
                                    }
                                    alt="Statistics & Analytics"
                                    className="w-full h-auto object-contain rounded-3xl"
                                    style={{
                                        objectFit: "contain",
                                        maxHeight: "550px",
                                    }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                    <h3 className="text-white font-semibold text-lg">
                                        Statistics
                                    </h3>
                                    <p className="text-white/80 text-sm">
                                        Track your progress and achievements
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
                            Simple Rules, Endless Fun
                        </h2>
                        <p
                            className="text-lg text-muted max-w-2xl mx-auto animate-fade-in-up"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Tap to place tiles, merge 3+ connected tiles of the
                            same value, and chain combos for massive scores!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div
                            className="text-center p-6 rounded-2xl bg-background shadow-lg animate-fade-in-up"
                            style={{ animationDelay: "0.3s" }}
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🎯</span>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                Smart Merging
                            </h3>
                            <p className="text-muted">
                                Connect 3 or more tiles of the same value to
                                merge them into a higher number
                            </p>
                        </div>

                        <div
                            className="text-center p-6 rounded-2xl bg-background shadow-lg animate-fade-in-up"
                            style={{ animationDelay: "0.4s" }}
                        >
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                Chain Combos
                            </h3>
                            <p className="text-muted">
                                Create massive chain reactions for bonus points
                                and epic scores
                            </p>
                        </div>

                        <div
                            className="text-center p-6 rounded-2xl bg-background shadow-lg animate-fade-in-up"
                            style={{ animationDelay: "0.5s" }}
                        >
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">📈</span>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                Progressive Challenge
                            </h3>
                            <p className="text-muted">
                                Expand your grid from 4×4 to 6×6 for more
                                strategic gameplay
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section
                id="download"
                className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
                        Ready to Start Merging?
                    </h2>
                    <p
                        className="text-lg text-muted mb-8 max-w-2xl mx-auto animate-fade-in-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Download Merge Garden now and experience the most
                        addictive puzzle game on mobile!
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <a
                            href="https://apps.apple.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transition-all duration-300 transform hover:scale-105"
                            onClick={() => trackDownload("app_store")}
                        >
                            <img
                                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1276560000"
                                alt="Download on the App Store"
                                className="h-14 w-44 object-contain"
                            />
                        </a>

                        <a
                            href="https://play.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transition-all duration-300 transform hover:scale-105"
                            onClick={() => trackDownload("google_play")}
                        >
                            <img
                                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                alt="Get it on Google Play"
                                className="h-20 w-50 object-contain"
                            />
                        </a>
                    </div>

                    <p
                        className="text-sm text-muted mt-6 animate-fade-in-up"
                        style={{ animationDelay: "0.6s" }}
                    >
                        Free to play • Works offline
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-card border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mr-3">
                                <img
                                    src={
                                        process.env.PUBLIC_URL + "/icon-128.png"
                                    }
                                    alt="Merge Garden App Icon"
                                    className="w-6 h-6 rounded-lg"
                                />
                            </div>
                            <span className="text-xl font-bold text-foreground">
                                Merge Garden
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted">
                            <a
                                href="mailto:pingponggamesstudio@gmail.com"
                                className="text-primary hover:text-primary-dark transition-colors cursor-pointer"
                            >
                                Contact: pingponggamesstudio@gmail.com
                            </a>
                            <span className="hidden sm:inline">•</span>
                            <a
                                href="https://mergegarden.top/#/privacy"
                                className="text-primary hover:text-primary-dark transition-colors cursor-pointer"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

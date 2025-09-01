import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="text-center">
                        {/* App Icon */}
                        <div className="mb-8 animate-float">
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-3xl shadow-2xl animate-pulse-glow">
                                <img
                                    src="/icon-512.png"
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
                                href="#download"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                            >
                                <svg
                                    className="w-6 h-6 mr-3"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                Download on App Store
                            </a>

                            <a
                                href="#download"
                                className="inline-flex items-center justify-center px-8 py-4 bg-foreground hover:bg-muted text-background font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                            >
                                <svg
                                    className="w-6 h-6 mr-3"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                Get it on Google Play
                            </a>
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
                                    src="/screenshots/tutorial.PNG"
                                    alt="Interactive Tutorial"
                                    className="w-full h-auto object-contain rounded-3xl"
                                    style={{
                                        objectFit: "contain",
                                        maxHeight: "450px",
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
                                <video
                                    src="/game.webm"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto object-contain rounded-3xl"
                                    style={{
                                        objectFit: "contain",
                                        maxHeight: "450px",
                                    }}
                                >
                                    <source
                                        src="/game.webm"
                                        type="video/webm"
                                    />
                                    <img
                                        src="/screenshots/game.PNG"
                                        alt="Game Screenshot Fallback"
                                        className="w-full h-auto object-contain rounded-3xl"
                                        style={{
                                            objectFit: "contain",
                                            maxHeight: "450px",
                                        }}
                                    />
                                </video>
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
                                    src="/screenshots/stats.PNG"
                                    alt="Statistics & Analytics"
                                    className="w-full h-auto object-contain rounded-3xl"
                                    style={{
                                        objectFit: "contain",
                                        maxHeight: "450px",
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
                            href="#"
                            className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            <svg
                                className="w-6 h-6 mr-3"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            Download on App Store
                        </a>

                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-8 py-4 bg-foreground hover:bg-muted text-background font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            <svg
                                className="w-6 h-6 mr-3"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                            </svg>
                            Get it on Google Play
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
                                    src="/icon-128.png"
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
                            <Link
                                to="/privacy"
                                className="text-primary hover:text-primary-dark transition-colors cursor-pointer"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

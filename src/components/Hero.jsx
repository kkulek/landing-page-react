import {Button} from "./Button";

export function Hero() {
    return (
        <div className="px-10 py-10">
            <div className="container mx-auto">
                <section className="grid grid-cols-2 gap-10">
                    <div className="flex flex-col gap-4 justify-center">
                        <p className="text-lg font-medium">Skorzystaj z naszego kalkulatora</p>
                        <h1 className="text-6xl font-bold mb-10">
                            Oblicz jaki <span
                            className="relative z-10 after:absolute after:-z-10 after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-[115%] after:h-3 after:bg-underline-hero">ślad</span>
                            <span
                                className="relative z-10 after:absolute after:-z-10 after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-[105%] after:h-3 after:bg-underline-hero">węglowy</span> generuje
                            Twoja firma</h1>
                        <div className="mb-4">
                            <Button prm href="/">Przetestuj za darmo</Button>
                        </div>
                        <div className="flex gap-8 text-sm">
                            <p className="relative before:absolute before:-left-5 before:content-check ml-5 before:top-1/2 before:-translate-y-1/2">7
                                dni za darmo</p>
                            <p className="relative before:absolute before:-left-5 before:content-check ml-5 before:top-1/2 before:-translate-y-1/2">Konsultacje
                                z ekspertem</p>
                        </div>
                    </div>
                    <div className="relative before:absolute before:top-0 before:left-0 before:content-hero-pattern before:-z-10 before:w-full before:h-full">
                        <img
                            src="../images/hero-img.png"
                            alt="Macbook with the App"
                            className="ml-12"
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}
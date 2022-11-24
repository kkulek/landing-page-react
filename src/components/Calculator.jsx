import {Button} from "./Button";

export function Calculator() {
    return (
        <section className="px-10">
            <div className="relative container bg-gradient-to-br from-gradient-from to-gradient-to mx-auto -translate-y-1/2 flex items-center gap-20 py-20 px-28 divide-x-[1px] divide-black rounded">
                <div className="w-1/3 shrink-0 space-y-4 font-medium">
                    <p className="text-lg ">Sprawdź jak</p>
                    <h3 className="text-6xl">Działa nasz kalkulator</h3>
                </div>
                <div className="pl-20 py-12 space-y-6">
                    <p className="text-sm">Oblicz ile CO2e Twoja działalność zostawia w atmosferze i dołącz do liderów zmiany z biznesie. Dowiedz się jak zminimalizować szkodliwy wpływ na naszą planetę.</p>
                    <Button prm href="/">Przetestuj za darmo</Button>
                </div>
            </div>
        </section>
    )
}
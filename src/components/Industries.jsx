import {industries} from "../data.js"
import {Button} from "./Button";

export function Industries() {
    return (
        <section className="bg-gradient-to-b from-gradient-light-from to-white px-10 py-28 ">
            <div className="container mx-auto space-y-20">
                <div className="flex items-center justify-between">
                    <h2 className="text-6xl font-medium">Dla jakich branż?</h2>
                    <Button ter href="/">Wszystkie branże</Button>
                </div>
                <div className="grid grid-cols-4 gap-6
                {/* after:bg-icon-wind after:bg-icon-gasoline after:bg-icon-battery after:bg-icon-industry after:bg-icon-leaves after:bg-icon-planet after:bg-icon-tap after:bg-icon-trash after:bg-icon-trash*/}
                ">
                    {industries.map((item, index) => {
                        return (
                            <div key={index}
                                 className="bg-white flex items-center border border-1 border-border-light w-[306px] h-[86px] rounded">
                                <h3 className={`text-xl ml-24 relative after:absolute after:bg-icon-${item.icon} after:bg-contain after:bg-center after:bg-no-repeat after:h-6 after:w-6 after:-left-10 after:top-1/2 after:-translate-y-1/2`}>{item.name}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
import {Button} from "./Button";

export function Blog() {
    return (
        <section className="pt-40 mt-20 px-10 mb-36">
            <div className="container mx-auto space-y-20">
                <div className="flex items-center justify-between">
                    <h2 className="text-6xl font-medium">Nasz blog</h2>
                    <Button ter href="/">Więcej artykułów</Button>
                </div>
                <div className="flex gap-5">
                    <article>
                        <figure className="z-10 max-h-[300px] w-[738px] relative after:absolute after:content-['20.08.2022_r.'] after:top-10 after:left-10 after:text-sm after:font-light after:text-white">
                            <img
                                src="../images/blogpost-forest.png"
                                alt="Forest"
                                className="h-fit w-fit"
                            />
                        </figure>
                        <div className="border-x-1 border border-border-light -translate-y-1 py-10 px-12 space-y-10 rounded">
                            <h3 className="text-2xl font-medium">ECB Says Just 15% of Banks Disclose Financed CO2 Emissions</h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa...</p>
                            <Button ter href="/">Czytaj dalej</Button>
                        </div>
                    </article>
                    <article>
                        <figure className="z-10 max-h-[300px] w-[522px] relative after:absolute after:content-['17.08.2022_r.'] after:top-10 after:left-10 after:text-sm after:font-light after:text-white">
                            <img
                                src="../images/blogpost-leaves.png"
                                alt="Leaves"
                                className="h-fit w-fit"
                            />
                        </figure>
                        <div className="border-x-1 border border-border-light -translate-y-1 py-10 px-12 space-y-10 rounded">
                            <h3 className="text-2xl font-medium">Cursus euismod quis viverra nibh cras pulvinar occaecat</h3>
                            <p>Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt...</p>
                            <Button ter href="/">Czytaj dalej</Button>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}
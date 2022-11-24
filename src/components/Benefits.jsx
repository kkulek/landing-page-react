export function Benefits() {
    return (
        <section className="h-[150vh] bg-benefits bg-center bg-cover bg-no-repeat mt-40 px-10">
            <div className="container mx-auto ">
                <div className="flex gap-4 pt-40">
                    <div
                        className="w-1/3 relative bg-white border-t-2 border-underline-hero rounded py-12 px-12 text-sm after:absolute after:h-10 after:w-10 after:content-benefits-pattern after:top-8 after:right-14">
                        <h2 className="text-2xl font-medium mb-8 mt-6">Po co liczyć <br></br> ślad węglowy?</h2>
                        <div className="pr-4 space-y-8">
                            <p>Chcesz wyróżnić się lub utrzymać swoją pozycję na rynku? Pozyskać nowych, ważnych
                                kontrahentów? Pomóc planecie?</p>
                            <p>To bardzo dobre, ale nie jedyne powody dla których warto zacząć liczyć swoje emisje!</p>
                        </div>
                    </div>
                    <div
                        className="w-1/3 relative bg-white border-t-2 border-underline-hero rounded py-12 px-12 text-sm after:absolute after:h-10 after:w-10 after:content-benefits-pattern after:top-8 after:right-14">
                        <h2 className="text-2xl font-medium mb-8 mt-6">Co dokładnie <br></br> i jak warto liczyć?</h2>
                        <div className="pr-4 space-y-8">
                            <p>Według GHG Protocol należy monitorować trzy zakresy (ang. scope 1,2,3), które powstały
                                jako propozycja standardów liczenia emisji gazów cieplarnianych w przedsiębiorstwie.</p>
                            <p>Każdy z nich obiera inny obszar działalności i emisji z nią związanych, zarówno wewnątrz
                                firmy jak i poza nią.</p>
                        </div>
                    </div>
                    <div
                        className="w-1/3 relative bg-white border-t-2 border-underline-hero rounded py-12 px-12 text-sm after:absolute after:h-10 after:w-10 after:content-benefits-pattern after:top-8 after:right-14">
                        <h2 className="text-2xl font-medium mb-8 mt-6">Jak działa <br></br> nasz kalkulator?</h2>
                        <div className="pr-4 space-y-8">
                            <p>Nasze narzędzie jest zaawansowane i proste w obsłudze, co umożliwia korzystanie z niego
                                każdemu, jednocześnie dostarczając jakość zgodną z wszelkimi wymogami. </p>
                            <p>Liczymy emisje gazów cieplarnianych zgodnie z międzynarodowym standardem GHG we
                                wszystkich trzech zakresach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
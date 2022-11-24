export function Navigation() {
    return (
        <div className="w-screen flex justify-center py-16">
            <header className="w-full container flex gap-10 justify-between items-center">
                <a href="/">
                    <img src="../images/logo.png" alt="Logo"/>
                </a>
                <div className="flex justify-between gap-16 items-center text-sm">
                    <nav>
                        <ul className="flex gap-14">
                            <li><a href="/">Jak to działa</a></li>
                            <li><a href="/">O nas</a></li>
                            <li><a href="/">Cennik</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Kontakt</a></li>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-5">
                        <a href="/" className="bg-blue-500 px-8 py-4 rounded bg-btn-secondary font-medium">Logowanie</a>
                        <a href="/" className="bg-blue-500 px-8 py-4 rounded bg-btn-primary text-white font-medium">Przetestuj za darmo</a>
                    </div>
                </div>
            </header>
        </div>
    )
}
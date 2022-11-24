import {Button} from "./Button";

export function Navigation() {
    return (
        <div className="w-screen flex justify-center py-12 px-10">
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
                        <Button sec target="_blank" href="/">Logowanie</Button>
                        <Button prm target="_blank" href="/">Przetestuj za darmo</Button>
                    </div>
                </div>
            </header>
        </div>
    )
}
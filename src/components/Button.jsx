export function Button({prm, sec, ter, href, target, children}) {
    // prm: primary | sec: secondary | ter: tertiary

    return (
        <>
            {prm &&
                <a href={href}
                   target={target}
                   className="inline-block px-8 py-4 rounded bg-btn-primary text-white font-medium"
                >
                    {children}
                </a>
            }

            {sec &&
                <a href={href}
                   target={target}
                   className="inline-block px-8 py-4 rounded bg-btn-secondary font-medium"
                >
                    {children}
                </a>
            }

            {ter &&
                <a href={href}
                   target={target}
                   className="inline-block px-3 py-2 font-medium border-b-2 border-underline-cta"
                >
                    {children}
                </a>
            }
        </>
    )
}
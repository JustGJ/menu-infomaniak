import { useRef } from "react";

export interface NavbarProps {
    panelProductRef: React.RefObject<HTMLDivElement>;
    panelAboutRef: React.RefObject<HTMLDivElement>;
}

export const Navbar = ({ panelAboutRef, panelProductRef }: NavbarProps) => {
    const cursorRef = useRef<HTMLSpanElement | null>(null);

    const moveCursor = (e: any) => {
        const cursor: HTMLSpanElement | null = cursorRef.current;
        const item = e.target;
        const rectangle = item.getBoundingClientRect();
        const parentRectangle = item.parentElement?.getBoundingClientRect();

        if (cursor) {
            cursor.style.width = `${rectangle.width}px`;
            cursor.style.left = `${rectangle.left - parentRectangle.left}px`;
        }

        panelProductRef.current?.classList.remove("panel--active");
        panelAboutRef.current?.classList.remove("panel--active");

        switch (item.innerHTML) {
            case "Produits":
                panelProductRef.current?.classList.add("panel--active");
                break;
            case "A propos":
                panelAboutRef.current?.classList.add("panel--active");
                break;
            default: 
                break
        }
    }

    return (
        <div className="navbar-wrapper">
            <nav className="navbar">
                <img src="/logo-infomaniak.svg" alt="logo" className="navbar__logo" />
                <div className="navbar__items-wrapper">
                    <ul>
                        <li onMouseOver={moveCursor}>Produits</li>
                        <li onMouseOver={moveCursor}>A propos</li>
                        <li onMouseOver={moveCursor}>Support</li>
                        <li onMouseOver={moveCursor}>Support très long</li>
                    </ul>
                    <span ref={cursorRef}></span>
                </div>
            </nav>
        </div>
    )
}

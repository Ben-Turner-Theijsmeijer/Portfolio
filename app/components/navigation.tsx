import Link from "next/link";

export const HeaderNav = () => {
 return (
    <header className="">
        <div className="abosolute top-0 h-[40px] bg-[var(--nav-background)]"></div>
        <div className="header flex fixed top-0 z-10 justify-between w-full mx-auto bg-[var(--accent6)]/85">
            <div className="block justify-start pl-3">
                <Link href="/" className="font-bold text-xl mx-3">
                &lt; B.T.T / &gt;
                </Link>
            </div>

            <div className="block justify-right pr-3">
                <Link href="/about" className="mx-3">
                    About
                </Link>
                <Link href="/experience" className="mx-3">
                    Experience
                </Link>
                <Link href="/projects" className="mx-3">
                    Projects
                </Link>
            </div>
        </div>
    </header>
 );
}


export const FooterNav = () => {
    return (
        <footer className="footer">
          <div className="">
            <p>
              © {new Date().getFullYear()} Ben Turner-Theijsmeijer. All rights reserved. 
            </p>
            <a href="mailto:benturnertheijsmeijer@gmail.com">benturnertheijsmeijer@gmail.com</a>
          </div>
        </footer>
    );
}
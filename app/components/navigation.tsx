import Link from "next/link";

export const HeaderNav = () => {
 return (
    <header className="header">
        <div className="flex justify-between">

            <div className="block justify-start pl-3">
                <Link href="/" className="mx-3">
                    Home
                </Link>
            </div>

            <div className="block justify-right pr-3">
                <Link href="/about" className="mx-3">
                    About
                </Link>
                <Link href="/experience" className="mx-3">
                    Work Experience
                </Link>
            </div>
        </div>
    </header>
 );
}


export const FooterNav = () => {
    return (
        <footer className="footer">
          <div className="container">
            <p>
              © <span className="year" /> Ben Turner-Theijsmeijer. All rights reserved. 
            </p>
            <a href="mailto:benturnertheijsmeijer@gmail.com">benturnertheijsmeijer@gmail.com</a>
          </div>
        </footer>
    );
}
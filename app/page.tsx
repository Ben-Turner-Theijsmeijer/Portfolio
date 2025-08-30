import { ComingSoon } from "./components/comingSoon";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/about">
        <h1 className="text-4xl font-bold text-center duration-500 text-[var(--accent3)] hover:text-[var(--accent5)]">GO TO THE ABOUT PAGE WHILE THIS PAGE IS BEING BUILT</h1>
      </Link>
      <ComingSoon />
    </div>
  );
}

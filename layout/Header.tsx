import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-3">
      <div className="w-[95%] mx-auto">
        <Logo />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/images/biceps-logga.png" alt="Logotyp" height={70} width={70} />
      <span className="uppercase font-bold text-6xl">Biceps</span>
    </Link>
  );
}

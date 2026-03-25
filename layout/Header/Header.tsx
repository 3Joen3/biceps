import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-3 bg-gray-400 text-white">
      <div className="w-[94%] mx-auto">
        <Logo />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        className="rounded-xl"
        src="/images/biceps-logga.png"
        alt="Logotyp"
        height={60}
        width={60}
      />
      <span className="uppercase font-extrabold text-5xl">Biceps</span>
    </Link>
  );
}

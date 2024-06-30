import Link from "next/link";

export function Header() {
  return (
    <header className="py-4 px-6">
      <nav className="container mx-auto">
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="text-gray-500 hover:text-black text-sm">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

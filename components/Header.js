import Link from "next/link";

export default () => (
  <header className="p-8">
    <nav className="flex justify-between items-center">
      <Link href="/">
        <a className="no-underline text-lg font-serif uppercase font-bold tracking-wide text-black px-2 rounded-sm leading-normal text-white bg-black">
          Drive & Ride
        </a>
      </Link>
      <div>
        <Link href="/drivers/create">
          <a className="no-underline text-sm uppercase font-bold tracking-wide text-black p-4">
            Become a Driver
          </a>
        </Link>
        <Link href="/riders/create">
          <a className="no-underline text-sm uppercase font-bold tracking-wide text-black p-4">
            Become a Rider
          </a>
        </Link>
      </div>
    </nav>
  </header>
);

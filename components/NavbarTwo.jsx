import Link from "next/link";

export default function NavbarTwo() {
  return (
    <div>
      <nav className="rounded-3xl flex justify-between items-center bg-pink-700 px-8 py-3">
          <Link className="text-2xl font-mono md:text-3xl font-semibold text-white font-bold" href={"/"}>
            46 E Northwood house chores!
          </Link>

          <Link className="animate-pulse bg-gradient-to-r font-mono from-yellow-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-3xl" href={"/addTopic"}>
            Add Chore
          </Link>

      </nav>

    </div>
  );
}

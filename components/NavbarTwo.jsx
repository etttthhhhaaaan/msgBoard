import Link from "next/link";

export default function NavbarTwo() {
  return (
    <nav className="flex justify-between items-center bg-emerald-700 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        46 E Northwood house chores!
      </Link>
      <Link className="bg-white p-2" href={"/addTopic"}>
        Add Chore
      </Link>
    </nav>
  );
}

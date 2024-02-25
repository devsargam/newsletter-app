import Link from "next/link";

export default async function Home() {
  return (
    <main className="App">
      <nav className="flex gap-10 justify-center bg-slate-900 text-white py-5">
      <Link href={'/register'} >Register</Link>
      <Link href={'/login'} >Login</Link>
      </nav>
    </main>
  );
}

import Link from "next/link"

Link
export default function Home() {
  return (
    <main>
     <h1>hello world</h1>
     <Link href="/about">About</Link>
    </main>
  )
}
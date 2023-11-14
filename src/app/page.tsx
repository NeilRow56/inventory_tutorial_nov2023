import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-blue-50 ">
      <h2 className="text-3xl">Inventory Management Software</h2>
      <Link href="/admin/home/dashboard" className="text-blue-300 underline">
        Dashboard
      </Link>
    </div>
  )
}

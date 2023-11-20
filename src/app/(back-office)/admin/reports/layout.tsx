import TutorialHeader from '@/components/tutorial/Header'
import MobileHeader from '@/components/tutorial/MobileHeader'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inventory Management',
  description: 'Inventory management tutorial',
}

export default function AdminReportsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <main className=" min-h-screen w-full bg-slate-50 text-slate-900">
        <TutorialHeader />
        <MobileHeader />
        {children}
      </main>
    </div>
  )
}

'use client'

import { LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'

interface SidebarItemProps {
  icon: LucideIcon
  label: string
  href: string
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = pathname === href

  const onClick = () => {
    router.push(href)
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        'flex items-center gap-x-2 rounded-md pl-6 text-sm font-[500] text-slate-200 transition-all hover:bg-gray-300 hover:text-sky-800',
        isActive &&
          'rounded-md bg-sky-200/20 text-sky-300 hover:bg-sky-200/20 hover:text-slate-50'
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn('text-slate-200 ', isActive && 'text-sky-300')}
        />
        {label}
      </div>
      <div
        className={cn(
          'ml-auto h-full border-2 border-sky-700 opacity-0 transition-all',
          isActive && 'opacity-100'
        )}
      />
    </button>
  )
}

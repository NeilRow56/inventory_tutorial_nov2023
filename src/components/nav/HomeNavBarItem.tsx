'use client'

import { LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'

interface HomeNavBarItemProps {
  icon: LucideIcon
  label: string
  href: string
}

export const HomeNavBarItem = ({
  icon: Icon,
  label,
  href,
}: HomeNavBarItemProps) => {
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
        'flex items-center gap-x-2 rounded-md pl-6 text-sm font-[500] text-slate-200 transition-all hover:bg-gray-200 hover:text-sky-900',
        isActive &&
          'rounded-md bg-sky-200/20 text-sky-300 hover:bg-sky-200/20 hover:text-slate-50'
      )}
    >
      <div
        className={cn(
          'flex items-center gap-x-2 border-b-2 border-gray-400 px-1 py-4 text-slate-400',
          isActive && ' border-sky-300 text-sky-500'
        )}
      >
        <Icon
          size={22}
          className={cn('text-slate-400 ', isActive && 'text-sky-300')}
        />
        {label}
      </div>
    </button>
  )
}

'use client'

import { LucideIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import Link from 'next/link'

interface CollapsibleItemProps {
  icon: LucideIcon
  label: string
  href: string
}

export const CollapsibleItem = ({
  icon: Icon,
  label,
  href,
}: CollapsibleItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link href={href}>
      <div className="flex w-full items-center gap-x-2 py-2">
        <Icon
          size={22}
          className={cn('text-slate-200 ', isActive && 'text-sm text-sky-600')}
        />
        <h2
          className={cn(
            'pr-3 text-slate-200 transition-all duration-300 hover:text-slate-200 ',
            isActive && 'text-sm text-sky-300'
          )}
        >
          {label}
        </h2>
      </div>
      <div
        className={cn(
          'ml-auto h-full border border-sky-700 opacity-0 transition-all',
          isActive && 'opacity-100'
        )}
      />
    </Link>
  )
}

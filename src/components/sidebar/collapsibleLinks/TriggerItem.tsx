'use client'

import { LucideIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import Link from 'next/link'

interface TriggerItemProps {
  icon: LucideIcon
  href: string
  title: string
}

export const TriggerItem = ({ icon: Icon, title, href }: TriggerItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <div className="flex  items-center gap-x-2 py-1">
      <Icon
        size={22}
        className={cn('text-slate-200 ', isActive && 'text-sky-300')}
      />
      <Link
        href={href}
        className={cn('text-slate-200 ', isActive && 'text-sky-300')}
      >
        {title}
      </Link>
    </div>
  )
}

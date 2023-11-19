'use client'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { CollapsibleRoutes } from './collapsibleLinks/CollapisibleRoutes'

const SidebarCollapsibleItem = () => {
  const pathname = usePathname()
  const href = pathname
  const isActive = href

  return (
    <div>
      <Collapsible className="ml-6 mt-4   text-sm">
        <CollapsibleTrigger className="w-full ">
          <div className="flex  items-center gap-x-2 py-1">
            <PlusCircle
              size={22}
              className={cn('text-slate-200 ', isActive && 'text-sky-300')}
            />
            <Link
              href="/admin/inventory"
              className={cn('text-slate-200 ', isActive && 'text-yellow-300')}
            >
              Inventory
            </Link>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-1">
          <CollapsibleRoutes />
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default SidebarCollapsibleItem

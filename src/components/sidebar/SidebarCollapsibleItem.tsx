'use client'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'
import { BaggageClaim, PlusCircle } from 'lucide-react'
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
            <h2 className={cn('text-slate-200 ', isActive && 'text-sky-300')}>
              Inventory
            </h2>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-1 ">
          <Link href="/admin/inventory">
            <div className="flex w-full items-center gap-x-2 py-2">
              <BaggageClaim
                size={22}
                className={cn(
                  'text-slate-200 ',
                  isActive && 'text-sm text-green-600'
                )}
              />
              <h2
                className={cn(
                  'pr-3 text-green-600 transition-all duration-300 hover:text-slate-200 ',
                  isActive && 'text-sm text-sky-300'
                )}
              >
                Inventory summary
              </h2>
            </div>
            <div
              className={cn(
                'ml-auto h-full border border-sky-700 opacity-0 transition-all',
                isActive && 'opacity-100'
              )}
            />
          </Link>
        </CollapsibleContent>
        <CollapsibleContent className="mt-1">
          <CollapsibleRoutes />
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default SidebarCollapsibleItem
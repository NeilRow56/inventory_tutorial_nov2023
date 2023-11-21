'use client'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

import { PlusCircle } from 'lucide-react'

import { TriggerItem } from './collapsibleLinks/TriggerItem'
import { SalesCollapsibleRoutes } from './collapsibleLinks/SalesCollapsibleRoutes'

const SidebarSalesCollapsibleItem = () => {
  return (
    <div>
      <Collapsible className="ml-6 mt-4   text-sm">
        <CollapsibleTrigger className="w-full ">
          <TriggerItem
            href={'/admin/sales'}
            title={'Sales'}
            icon={PlusCircle}
          />
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-1">
          <SalesCollapsibleRoutes />
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default SidebarSalesCollapsibleItem

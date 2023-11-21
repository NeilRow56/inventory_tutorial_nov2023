'use client'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

import { PlusCircle } from 'lucide-react'

import { CollapsibleRoutes } from './collapsibleLinks/CollapsibleRoutes'

import { TriggerItem } from './collapsibleLinks/TriggerItem'

const SidebarCollapsibleItem = () => {
  return (
    <div>
      <Collapsible className="ml-6 mt-4   text-sm">
        <CollapsibleTrigger className="w-full ">
          <TriggerItem
            href={'/admin/inventory'}
            title={'Inventory6'}
            icon={PlusCircle}
          />
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-1">
          <CollapsibleRoutes />
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default SidebarCollapsibleItem

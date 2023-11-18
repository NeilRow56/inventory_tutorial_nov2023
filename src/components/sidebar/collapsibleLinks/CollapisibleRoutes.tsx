'use client'

import { PlusCircle } from 'lucide-react'

import { usePathname } from 'next/navigation'
import { CollapsibleItem } from './CollapsibleItem'

const inventoryLinks = [
  { label: 'Items', href: '/admin/inventory/items', icon: PlusCircle },

  {
    label: 'Item Groups',
    href: '/admin/inventory/item-groups',
    icon: PlusCircle,
  },

  {
    label: 'Adjustments',
    href: '/admin/inventory/adjustments',
    icon: PlusCircle,
  },
]

export const CollapsibleRoutes = () => {
  const pathname = usePathname()

  const routes = inventoryLinks

  return (
    <div className="flex w-full flex-col gap-2 py-2">
      {routes.map((route) => (
        <CollapsibleItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}

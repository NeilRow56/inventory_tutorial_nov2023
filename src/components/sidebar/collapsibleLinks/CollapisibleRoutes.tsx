'use client'

import { BaggageClaim } from 'lucide-react'

import { CollapsibleItem } from './CollapsibleItem'

const inventoryLinks = [
  { label: 'Items', href: '/admin/inventory/items', icon: BaggageClaim },

  {
    label: 'Item Groups',
    href: '/admin/inventory/item-groups',
    icon: BaggageClaim,
  },

  {
    label: 'Adjustments',
    href: '/admin/inventory/adjustments',
    icon: BaggageClaim,
  },
]

export const CollapsibleRoutes = () => {
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

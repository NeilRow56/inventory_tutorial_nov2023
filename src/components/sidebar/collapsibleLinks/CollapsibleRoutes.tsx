'use client'

import { BaggageClaim } from 'lucide-react'

import { CollapsibleItem } from './CollapsibleItem'

const inventoryLinks = [
  {
    label: 'Adjustments',
    href: '/admin/inventory/adjustments',
    icon: BaggageClaim,
  },
  {
    label: 'Brands',
    href: '/admin/inventory/brands',
    icon: BaggageClaim,
  },
  {
    label: 'Categories',
    href: '/admin/inventory/categories',
    icon: BaggageClaim,
  },
  { label: 'Items', href: '/admin/inventory/items', icon: BaggageClaim },
  {
    label: 'Units',
    href: '/admin/inventory/units',
    icon: BaggageClaim,
  },
  {
    label: 'Warehouse',
    href: '/admin/inventory/warehouse',
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

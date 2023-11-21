'use client'

import { ShoppingBag } from 'lucide-react'

import { CollapsibleItem } from './CollapsibleItem'

const salesLinks = [
  {
    label: 'Sales Analysis',
    href: '/admin/sales/sales-analysis',
    icon: ShoppingBag,
  },

  {
    label: 'Sales Groups',
    href: '/admin/sales/sales-groups',
    icon: ShoppingBag,
  },

  {
    label: 'Adjustments',
    href: '/admin/sales/adjustments',
    icon: ShoppingBag,
  },
]

export const SalesCollapsibleRoutes = () => {
  const routes = salesLinks

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

'use client'

import { BaggageClaim } from 'lucide-react'

import { SalesCollapsibleItem } from './SalesCollapsibleItem'

const salesLinks = [
  {
    label: 'Sales Items',
    href: '/admin/sales/sales=items',
    icon: BaggageClaim,
  },

  {
    label: ' Sales Groups',
    href: '/admin/sales/sales-item-groups',
    icon: BaggageClaim,
  },

  {
    label: 'Adjustments',
    href: '/admin/sales/sales-adjustments',
    icon: BaggageClaim,
  },
]

export const SalesCollapsibleRoutes = () => {
  const routes = salesLinks

  return (
    <div className="flex w-full flex-col gap-2 py-2">
      {routes.map((route) => (
        <SalesCollapsibleItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}

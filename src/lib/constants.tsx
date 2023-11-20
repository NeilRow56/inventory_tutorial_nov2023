import { Icon } from '@iconify/react'

import { SideNavItem } from './types'

export const SALES_LINKS: SideNavItem[] = [
  {
    label: 'Integrations2',
    href: '/admin/integrations',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },

  {
    label: 'Sales ',
    href: '/admin/sales',
    icon: <Icon icon="lucide:shopping" width="24" height="24" />,
    subMenu: true,
    subMenuItems: [
      { label: 'Sales Adjustments', href: '/admin/sales/adjustments' },
      { label: 'Sales Items', href: '/admin/sales/sales-items' },
      { label: 'Sales Groups', href: '/admin/sales/sales-groups' },
    ],
  },
  {
    label: 'Inventory ',
    href: '/admin/inventory',
    icon: <Icon icon="lucide:baggage-claim" width="24" height="24" />,
    subMenu: true,
    subMenuItems: [
      { label: 'Inventory Adjustments', href: '/admin/inventory/adjustments' },
      { label: 'Inventory Items', href: '/admin/inventory/inventory-items' },
      { label: 'Inventory Groups', href: '/admin/inventory/inventory-groups' },
    ],
  },

  {
    label: 'Reports',
    href: '/admin/reports',
    icon: <Icon icon="lucide:archive" width="24" height="24" />,
  },
]

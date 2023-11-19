'use client'

import InvItem from './InvItem'

const inventoryRoutes = [
  {
    image: '/vercelImage.svg',
    title: 'Item groups',
    description: 'Create multiple variants of the same item using item Groups',
    label: 'New Item Group',
    href: '/admin/inventory/item-groups',
    disabled: false,
  },
  {
    image: '/vercelImage.svg',
    title: 'Items',
    description: 'Create stanalone items and services that you buy and sell',
    label: 'New Item ',
    href: '/admin/inventory/items/new',
    disabled: false,
  },
  {
    image: '/vercelImage.svg',
    title: 'Composite Items',
    description: 'Create multiple variants of the same item using item Groups',
    label: 'Composite',
    href: '/admin/inventory/adjustments',
    disabled: true,
  },
  {
    image: '/vercelImage.svg',
    title: 'Price Lists',
    description: 'Create multiple variants of the same item using item Groups',
    label: 'Price',
    href: '/admin/inventory/adjustments',
    disabled: false,
  },
]

export const InvCard = () => {
  return (
    <div className="gap8 grid grid-cols-1 lg:grid-cols-2">
      {inventoryRoutes.map((item) => (
        <InvItem
          key={item.title}
          image={item.image}
          label={item.label}
          title={item.title}
          description={item.description}
          href={item.href}
          disabled={item.disabled}
        />
      ))}
    </div>
  )
}

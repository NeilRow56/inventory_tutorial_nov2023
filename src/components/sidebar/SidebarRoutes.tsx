'use client'

import {
  Layout,
  Compass,
  List,
  BarChart,
  Home,
  BaggageClaim,
  ShoppingCart,
  ShoppingBag,
  Blocks,
  LibraryBig,
  FileStack,
  BarChart4,
} from 'lucide-react'
import { SidebarItem } from './SidebarItem'
import { usePathname } from 'next/navigation'

const guestRoutes = [
  {
    icon: Layout,
    label: 'Dashboard',
    href: '/admin/home/dashboard',
  },
  {
    icon: Home,
    label: 'Home',
    href: '/admin/home',
  },

  {
    icon: ShoppingBag,
    label: 'Purchases',
    href: '/admin/purchases',
  },
  {
    icon: Blocks,
    label: 'Integrations',
    href: '/admin/integrations',
  },
  {
    icon: BarChart4,
    label: 'Reports',
    href: '/admin/reports',
  },
  {
    icon: FileStack,
    label: 'Documents',
    href: '/admin/documents',
  },
]

const teacherRoutes = [
  {
    icon: List,
    label: 'Courses',
    href: '/teacher/courses',
  },
  {
    icon: BarChart,
    label: 'Analytics',
    href: '/teacher/analytics',
  },
]

export const SidebarRoutes = () => {
  const pathname = usePathname()

  const isTeacherPage = pathname?.includes('/admin/teacher')

  const routes = isTeacherPage ? teacherRoutes : guestRoutes

  return (
    <div className="flex w-full flex-col gap-4 py-6">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}

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
  Play,
  Squirrel,
  Volume2,
} from 'lucide-react'

import { usePathname } from 'next/navigation'
import { HomeNavBarItem } from './HomeNavBarItem'

const guestRoutes = [
  {
    icon: Layout,
    label: 'Dashboard',
    href: '/admin/home/dashboard',
  },
  {
    icon: Volume2,
    label: 'Announcements',
    href: '/admin/home/announcements',
  },
  {
    icon: Play,
    label: 'Getting Started',
    href: '/admin/home/gettingStarted',
  },
  {
    icon: Squirrel,
    label: 'Recent Updates',
    href: '/admin/home/updates',
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

export const HomeNavBarRoutes = () => {
  const pathname = usePathname()

  const isTeacherPage = pathname?.includes('/teacher')

  const routes = isTeacherPage ? teacherRoutes : guestRoutes

  return (
    <div className="flex w-full  gap-4 py-2">
      {routes.map((route) => (
        <HomeNavBarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}

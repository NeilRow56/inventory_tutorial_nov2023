'use client'

import {
  Bell,
  History,
  LayoutGrid,
  Plus,
  ScanBarcodeIcon,
  Settings,
  Users2,
} from 'lucide-react'
import SearchInput from './SearchInput'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import React from 'react'
import UserAvatar from '../UserAvatar'
import UserMenu from '../nav/UserMenu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=" flex h-12 items-center  justify-between border-b border-slate-300  bg-gray-100 px-8 shadow-md">
      <div className="flex gap-3">
        {/* Recent Activities */}
        <button>
          <History className="h-6 w-6" />
        </button>
        {/* Search */}
        <SearchInput />
      </div>
      <div className="flex items-center ">
        <div className=" border-r border-gray-300 px-2">
          {/* Plus Icon */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="rounded-lg bg-blue-600 p-1 hover:bg-blue-400">
                  <Plus className="h-4 w-4 text-slate-50" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add users</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* Thee icons */}
        <div className="flex items-center gap-2 border-r border-gray-300 px-2">
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="rounded-lg  p-1 hover:bg-slate-200">
                    <Users2 className="h-4 w-4 text-slate-900" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Users</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="rounded-lg  p-1 hover:bg-slate-200">
                    <Bell className="h-4 w-4 text-slate-900" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="rounded-lg  p-1 hover:bg-slate-200">
                    <Settings className="h-4 w-4 text-slate-900" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        {/* Organisation 3 items */}
        <div className="flex space-x-3 ps-3">
          <div className="bg-gray-50">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Garat</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <ScanBarcodeIcon className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              Beautifully designed components built with Radix
                              UI and Tailwind CSS.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* <UserAvatar /> */}
          <UserMenu />
          <div
            className="flex items-center
          gap-3"
          >
            <Link href="/admin/inventory">
              <button>
                <LayoutGrid className="h-6 w-6" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
export default Navbar

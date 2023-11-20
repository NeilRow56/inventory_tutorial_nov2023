export type SideNavItem = {
  label: string
  href: string
  icon?: JSX.Element
  subMenu?: boolean
  subMenuItems?: SideNavItem[]
}

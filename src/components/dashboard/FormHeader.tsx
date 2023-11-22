import { LucideIcon, X } from 'lucide-react'
import Link from 'next/link'

interface FormHeaderProps {
  icon: LucideIcon
  title: string
  href: string
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, href, icon: Icon }) => {
  return (
    <div>
      <div className="flex items-center justify-between  bg-white px-8 py-3">
        <h2>{title}</h2>
        <Link href={href}>
          <Icon size={22} className="text-slate-900" />
        </Link>
      </div>
    </div>
  )
}

export default FormHeader

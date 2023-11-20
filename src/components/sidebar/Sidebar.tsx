import { BaggageClaim, ChevronLeft } from 'lucide-react'
import { SidebarRoutes } from './SidebarRoutes'
import SidebarCollapsibleItem from './SidebarCollapsibleItem'
import SubscriptionCard from './SubscriptionCard'

const Sidebar = () => {
  return (
    <div className="fixed flex min-h-screen w-60 flex-col justify-between bg-slate-800 px-3 py-3 text-slate-50">
      {/* Top */}

      <div className="flex flex-col  ">
        {/* Logo */}
        <div className="flex items-center gap-3 bg-slate-950 p-2 ">
          <BaggageClaim />
          <span className="text-bold text-xl">Inventory</span>
        </div>
        {/* Links */}
        <SidebarCollapsibleItem />
        <SidebarRoutes />
      </div>

      {/* Subscription Card */}
      <SubscriptionCard />
      <div className="flex flex-col py-6">
        <button className="flex items-center justify-center gap-3 rounded-md bg-slate-950 p-2 hover:bg-gray-300 hover:text-slate-900">
          <ChevronLeft />
        </button>
      </div>

      {/* Footer */}
    </div>
  )
}

export default Sidebar

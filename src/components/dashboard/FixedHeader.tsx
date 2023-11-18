import {
  ChevronDown,
  HelpCircle,
  LayoutGrid,
  List,
  MoreHorizontal,
  Plus,
} from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Link from 'next/link'

const FixedHeader = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-5">
      <div className=" flex  w-full flex-row items-center gap-2">
        <button className="flex gap-2 text-2xl">
          All Items
          <ChevronDown className=" mt-2 h-4 w-4 text-slate-900" />
        </button>
      </div>
      <div className="flex gap-4">
        {/* New */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex items-center rounded-md bg-blue-600 px-3 py-1 text-slate-50 hover:bg-blue-400 "
              >
                <Plus className=" h-4 w-4  text-slate-50" />
                <span className="px-2 text-sm">New</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add users</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/* Layout */}
        <div className="flex ">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="rounded-l-md bg-gray-300 p-2">
                  <List className="h-4 w-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add users</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="rounded-r-md bg-slate-100 p-2">
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add users</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* More */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="rounded-md bg-slate-100 p-2">
                <MoreHorizontal />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="">Add users</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/* Help */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="rounded-md bg-orange-500 p-2 text-white">
                <HelpCircle />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add users</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}

export default FixedHeader

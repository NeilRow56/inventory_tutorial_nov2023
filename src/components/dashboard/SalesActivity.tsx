import { Layout, Play, Squirrel, Volume2 } from 'lucide-react'
import SalesCard from './SalesCard'

const routes = [
  {
    icon: Layout,
    index: 1,
    label: 'TO BE PACKED',
    color: 'text-blue-400',
    number: 10,
  },
  {
    icon: Volume2,
    index: 2,
    label: 'TO BE SHIPPED',
    color: 'text-red-400',
    number: 20,
  },
  {
    icon: Play,
    index: 3,
    label: 'TO BE DELIVERED',
    color: 'text-yellow-400',
    number: 15,
  },
  {
    icon: Squirrel,
    index: 4,
    label: 'TO BE INVOICED',
    color: 'text-green-400',
    number: 85,
  },
]

const SalesActivity = () => {
  return (
    <div className="grid grid-cols-12 items-center justify-center bg-slate-100">
      <div className="col-span-8 flex p-3">
        <h2 className="text-xl ">Sales Activity</h2>
      </div>
      <div className="col-span-4 flex p-3">
        <h2 className="text-xl ">InventorySummary</h2>
      </div>
      <div className="col-span-8 flex">
        <div className=" mx-auto flex justify-between gap-4 border border-gray-100 pb-4 ">
          {routes.map((route, index) => (
            <SalesCard
              key={route.index}
              icon={route.icon}
              label={route.label}
              color={route.color}
              number={route.number}
            />
          ))}
        </div>
      </div>

      <div className="col-span-4 flex h-full w-full flex-col items-center justify-between gap-6  bg-slate-100 px-6 py-6">
        <div className="flex  h-1/2 w-full items-center justify-between rounded-md bg-slate-50 px-4 text-slate-500">
          <span>Quantity in hand</span>
          <div className="justify-end p-2">0</div>
        </div>
        <div className="flex  h-1/2 w-full items-center justify-between rounded-md bg-slate-50 px-4 text-slate-500">
          <span>Quantity to be received</span>
          <div className="justify-end p-2">0</div>
        </div>
      </div>
    </div>
  )
}

export default SalesActivity

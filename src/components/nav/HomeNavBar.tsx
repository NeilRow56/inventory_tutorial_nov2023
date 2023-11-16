import { Building2 } from 'lucide-react'

import { HomeNavBarRoutes } from './HomeNavBarRoutes'

const HomeNavBar = () => {
  return (
    <>
      <div className=" relative h-52  w-full border-b-2 border-slate-200 bg-neutral-100 pl-3 pt-5">
        <div className="mb-2 flex items-center p-5">
          <div className="mr-2 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-gray-200 ">
            <Building2 size={24} className="" />
          </div>
          <div className="flex flex-col border-2 border-gray-200 p-2">
            <div>Hello, J B WEBDEVELOPERS</div>
            <p>Garat</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0">
          <HomeNavBarRoutes />
        </div>
      </div>
    </>
  )
}

export default HomeNavBar

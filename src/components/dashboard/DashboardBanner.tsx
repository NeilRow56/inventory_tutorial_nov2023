'use client'

import { CreditCard, Mail, X } from 'lucide-react'
import { Button } from '../ui/button'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const DashboardBanner = () => {
  const [hidden, setHidden] = useState(false)
  return (
    <div
      className={cn(
        hidden ? 'hidden' : 'grid grid-cols-12 items-center bg-white px-8 py-2'
      )}
    >
      {/* Icon */}
      <div className="col-span-3 flex justify-center">
        <CreditCard className="h-16 w-16 text-sky-300" />
      </div>

      <div className="col-span-4">
        <h2 className="px-4 py-2 text-2xl font-bold">
          Start accepting online payments
        </h2>
        <p className="px-4">
          Businesses are moving towards online paymentsas they&apos;re easy,
          secure and fast. Try them for your business roday.{' '}
        </p>
      </div>
      <div className="col-span-2 flex justify-center">
        <Button className="bg-blue-500">
          <Mail className="mr-2 h-4 w-4" /> Enable
        </Button>
      </div>
      <div className="col-span-3 ">
        <button
          onClick={() => {
            setHidden(true)
          }}
          className="flex w-full justify-end px-8 py-4"
        >
          <X className="text-slate-600" />
        </button>
      </div>
    </div>
  )
}

export default DashboardBanner

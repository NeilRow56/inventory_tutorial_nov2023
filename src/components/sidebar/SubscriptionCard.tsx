import Link from 'next/link'
import { Button } from '../ui/button'

const SubscriptionCard = () => {
  return (
    <div className="flex h-20 flex-col items-center justify-center gap-3 border-l-2 border-yellow-500 px-3 py-6 text-center text-yellow-500">
      <div className="text-xs">
        <p>
          Your Premium plan&apos;s trial expires in
          <span className="px-1 text-rose-400">13 days</span>{' '}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center border-r  border-gray-200">
          <Button
            size="sm"
            className="m-1 bg-sky-200/10  text-xs text-yellow-500 hover:bg-gray-300 hover:text-sky-800"
          >
            Change plan
          </Button>
        </div>
        <div className="items-center rounded-md  p-1 hover:bg-gray-300 hover:text-sky-800">
          <Link
            href="/admin/home/getingStarted"
            className="items-center text-center text-sm "
          >
            Upgrade
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionCard

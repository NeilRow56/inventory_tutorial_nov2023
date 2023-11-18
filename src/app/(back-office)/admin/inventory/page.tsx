import FixedHeader from '@/components/dashboard/FixedHeader'
import { InvCard } from '@/components/dashboard/InvCard'

const Inventory = () => {
  return (
    <div>
      <FixedHeader />
      <div className="">
        <InvCard />
      </div>
    </div>
  )
}

export default Inventory

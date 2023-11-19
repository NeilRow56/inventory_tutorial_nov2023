import FixedHeader from '@/components/dashboard/FixedHeader'
import { InvCard } from '@/components/dashboard/InvCard'

const Inventory = () => {
  return (
    <div>
      <FixedHeader newLink="/admin/inventory/items/new" />
      <div className="">
        <InvCard />
      </div>
    </div>
  )
}

export default Inventory

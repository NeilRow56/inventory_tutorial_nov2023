import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
interface SalesCardProps {
  icon: LucideIcon
  label: string
  color: string
  number: number
}

const SalesCard: React.FC<SalesCardProps> = ({
  icon: Icon,
  label,
  color,
  number,
}) => {
  return (
    <div
      className="
          flex
          w-full
          cursor-pointer
          flex-col
          rounded-lg
          border-[1.2px]
          border-slate-300
          bg-slate-50
          p-2
          text-center
          text-sm
          transition
          hover:scale-105
      
          "
    >
      <div className="flex h-[150px] w-[200px]  items-center justify-center  text-4xl text-sky-400">
        {' '}
        <small className={color}>{number}</small>
      </div>
      <div>Qty</div>
      <div className=" flex items-center justify-center gap-4 px-4 pt-4">
        <Icon size={22} className={cn('text-sky-300')} />
        <div className="">
          <span>{label}</span>
        </div>
      </div>
    </div>
  )
}

export default SalesCard

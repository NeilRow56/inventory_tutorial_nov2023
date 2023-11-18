'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

interface InvItemProps {
  image: string
  label: string
  title: string
  description: string
}

const InvItem: React.FC<InvItemProps> = ({
  image,
  label,
  title,
  description,
}) => {
  const router = useRouter()

  return (
    <div
      onClick={() => {}}
      className="
    dorder-slate-200
    col-span-1
    m-8
    cursor-pointer
    rounded-lg
    border-[1.2px]
    bg-slate-50
    py-10

    text-center
    text-sm
    transition
    hover:scale-105

    "
    >
      <div
        className="
      flex
      w-full
      flex-col
      items-center
      gap-1
      "
      >
        <h2 className="mb-10 text-2xl font-semibold">{title}</h2>
        <div className="aspect-rectangle mx-auto mb-10 block  overflow-hidden">
          <Image src={image} width={300} height={200} alt="" />
        </div>
        <div>
          <p className="line-clamp-1">{description}</p>
        </div>
        <div className="mt-10 w-[150px]">
          <Button className="bg-blue-600 text-white ">{label}</Button>
        </div>
      </div>
    </div>
  )
}

export default InvItem

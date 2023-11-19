'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface InvItemProps {
  image: string
  label: string
  title: string
  description: string
  href: string
  disabled?: boolean
}

const InvItem: React.FC<InvItemProps> = ({
  image,
  label,
  title,
  description,
  href,
  disabled,
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

        <p className="line-clamp-1">{description}</p>
        <div className=" mt-10 flex flex-col items-center justify-center">
          {disabled ? (
            <button className="inline-flex  items-center rounded-md bg-blue-600 px-3 py-1 text-slate-50 hover:bg-blue-400">
              Enable
            </button>
          ) : (
            <Link
              href={href}
              className="mb-2 inline-flex items-center rounded-md bg-blue-600 px-3 py-1 text-slate-50 hover:bg-blue-400 "
            >
              <span className="px-2 ">{label}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default InvItem

interface HeadingProps {
  title: string
  center?: boolean
}

const Heading: React.FC<HeadingProps> = ({ title, center }) => {
  return (
    <div className={center ? 'text-center ' : 'text-start'}>
      <h2 className="text-2xl font-semibold text-slate-800">{title}</h2>
    </div>
  )
}

export default Heading

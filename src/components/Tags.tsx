import '../styles/tags.css'

interface props {
  selected: string
  setSelected: (value: string) => void
}
const labels = ['Lo mas vendido', 'Hamburguesas', 'Pizza', 'Ensalada', 'Milanesas', 'Topings']
const Tags = (props: props) => {
  const { selected = 'Lo mas vendido' } = props
  return (
    <div style={{ width: "100vw", overflowX: "scroll", display: "flex", }} className='py-3 px-1 bg-red-400 shadow-xl'>
      {labels.map((label) => (
        <button key={label} onClick={() => props.setSelected(label)} className={`snap-start ${selected === label ? "bg-red-600" : "bg-red-900"} px-12 py-1 rounded-md mx-1 text-xl text-slate-200`}>{label}</button>
      ))}
    </div>
  )
}

export default Tags
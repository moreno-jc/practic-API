
export default function Card(props: any) {
    let colorStatus = props.status ? 'bg-green-900' : 'bg-red-900';
    return (
        <>
            <div className="card grid grid-cols-2 gap-4 items-center bg-orange-500 text-white border-2 m-2 p-4">
              <div> 
                <h2>{props.id}</h2>
                <h3>{props.text}</h3>
              </div>
              <div className={`m-2 h-4 w-4 rounded-full ${colorStatus}`}></div>
          </div>
        </>
    )
}
  
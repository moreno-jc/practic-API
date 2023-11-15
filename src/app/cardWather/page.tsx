import { getWatherFrom } from './getWather'


export default async function CardWather() {

    const posts = await getWatherFrom ('mexico');

    return (
      <>
        <div className="container h-screen justify-center text-center mx-auto">

            <div className="grid grid-cols-1 py-12">
                <div className="col-span-1">
                    <input
                        type="text"
                        placeholder="Buscar el clima"
                        className="w-96 m-1 p-2 border rounded-l-lg focus:outline-none"
                        />  
                    <button className="w-24 m-1 p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none">
                        Buscar
                    </button>   
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 bg-opacity-20 backdrop-blur-lg bg-white rounded-lg p-4">
                    <div className='grid col-span-1 bg-opacity-20 backdrop-blur-lg bg-white rounded-full w-60 h-60 items-center justify-center'>
                            <h3 className="text-xl font-bold">{posts.name}</h3>
                            <img src={posts.icon} alt="Icono" className="w-24 h-auto" />
                            <span className='text-xs'>{posts.text}</span>
                            <p className='text-sm'>{posts.region}</p>
                    </div>
                
                    <div className='grid col-span-1 text-white items-center justify-center'>
                                   <p className='bg-blue-500 text-sm'>Temperatura</p>
                                   <span className='bg-blue-500 text-xs'>{posts.temp_c}</span>

                    </div> 
                    <div className='grid col-span-1 text-white items-center justify-center'>
                                     <span className='bg-blue-500 text-xs'>Viento</span>
                                   <p className='bg-blue-500 text-sm'>{posts.wind_kph}</p>
                    </div> 
                    <div className='grid col-span-1 text-white items-center justify-center'>
                                     <span className='bg-blue-500 text-xs'>ETC</span>
                                   <p className='bg-blue-500 text-sm'>ETC</p>
                    </div> 
                                                    
            </div>
        </div>
      </>
    )
  }
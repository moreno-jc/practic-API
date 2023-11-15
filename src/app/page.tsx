import Image from 'next/image'
import Test from './components/Navigation/test'

export default function Home() {
  return (
    <main>
      <section className='flex h-screen items-center justify-center'>
            <h1 className="text-8xl m-8 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-50 to-yellow-200">Practica de API's</h1>
            <img src="./api.png" className='w-72' alt="image Api"/>
      </section>
      <section className='flex h-screen items-center justify-center'>
           <div>
              <h2 className="text-xl font-bold text-yellow-900 ">¿Qué significa API?</h2>
              <p className='text-white mb-4'>
              API significa “interfaz de programación de aplicaciones”.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-yellow-900">¿Qué es una API?</h2>
                <p className='text-white text-justify m-4'>
                Las API son mecanismos que permiten a dos componentes de software comunicarse entre sí mediante un conjunto de definiciones y protocolos. 
                Por ejemplo, el sistema de software del instituto de meteorología contiene datos meteorológicos diarios. 
                La aplicación meteorológica de su teléfono “habla” con este sistema a través de las API y le muestra las actualizaciones meteorológicas diarias en su teléfono.
                </p>
           </div>
      </section>

      <section>
       
      </section>
    </main>
  )
}

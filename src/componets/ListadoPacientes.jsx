import React from 'react'
import Paciente from './Paciente'


const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {



  return (
    <div className='md:w-1/2 lg:w3/5 md:h-screen overflow-y-scroll'>

      {pacientes && pacientes.length ? (
        <>

<h2 className='font-black text-3xl text-center'>ListadoPacientes</h2>
<p className='text-xl mt-5 mb-10 text-center'>

  Adminstra tus{''}
  <span className='text-indigo-600 font-bold text-xl'> Pacientes y Citas</span>
</p>

          {pacientes.map ( paciente =>(

          <Paciente
          key={paciente.id}
          paciente= {paciente}
          setPaciente={setPaciente}
          eliminarPaciente = {eliminarPaciente}
          
          
          
      />
          ))}
          </>
          



      ):(
        <>
        
                  <h2 className='font-black text-3xl text-center'>No Hay Paciente</h2>
          <p className='text-xl mt-5 mb-10 text-center'>

            Comienza Agregando Pacientes{''}
            <span className='text-indigo-600 font-bold text-xl'> Apareceran En este Lugar</span>
          </p>
        
        
        </>



      )}

    

                

            
           

      
      
      
         


    </div>
  )
}

export default ListadoPacientes

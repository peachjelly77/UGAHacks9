import React from 'react'
import background from '../../images/family.jpeg'
import icon from '../../images/leafIcon.png'
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  return(
    <div style = {{width:'100%', margin:'0', height: '100vh', backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: '0.7' }}>
      <div className='layout p-1'>
        <div className='header flex justify-between'>
          <div>
              <img src={icon} alt="" height={70}/>
          </div>
          <div className='header flex justify-between gap-1'>
            <div className='bg-white br-1 p-1 flex'>
              <h1 className='text-sm cursor-pointer'onClick={()=>{navigate("/event")}}>
                {"Event"}
              </h1>
            </div>
            <div className='bg-white br-1 p-1 flex'>
              <h1 className='text-sm cursor-pointer' onClick={()=>{navigate("/cs")}}>
                {"Contact"}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
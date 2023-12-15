import { FaStar } from 'react-icons/fa';

const Recipess = ({title,Calories,img,ingredients}) => {

return (

<div className='flex  items-center justify-center  flex-wrap  md:mx-8 '>
<div className=" m-4  border-[1px] "> 
          <div className="image">
            <img
              className="h-[150px] w-[200px] rounded-full"
              src={img}
              alt=""
             
            />
          </div>
          <p className="items-start text-white text-left pl-2">{title}</p>
          <br />
          <div className="pl-2 flex">
            {/* React Icons for stars */}
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#b7db37]' />
            <FaStar className='text-[#ffffff]' />
          </div>
         
    
         
      </div>

      </div>


)

}
export default Recipess;
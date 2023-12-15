import { FaStar } from 'react-icons/fa';

const Recipess = ({ title, img, ingredients }) => {

  return (
    <div className='flex justify-center flex-wrap md:mx-8'>
      <div className="m-4 ">
        <div className="image mx-auto ">
          <img
            className="h-[150px] w-[200px] rounded-full object-cover"
            src={img}
            alt=""
          />
        </div>
        <p className="items-start text-white text-left text-2xl pl-2">{title}</p>
        <br />
        <h4 className="font-bold text-left text-[#8dd449] ">
          Rating?
        </h4>
        <div className="pl-2 flex">
          {/* React Icons for stars */}
          <FaStar className='text-[#b7db37]' />
          <FaStar className='text-[#b7db37]' />
          <FaStar className='text-[#b7db37]' />
          <FaStar className='text-[#b7db37]' />
          <FaStar className='text-[#ffffff]' />
        </div>

        {/* Use 'list-inside' class to move list markers to the left */}
        <h4 className="font-bold text-left text-[#ebc64e] ">
          Ingredients
        </h4>
        <div className='items-start pl-8'>
          <ul className='border-l mt-4 pt-2'>
            {ingredients.map((ingredient, index) => (
              <li key={index} className='flex justify-start text-[#44da44]'>{ingredient.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipess;

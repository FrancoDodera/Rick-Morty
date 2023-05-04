 import style from './Card.module.css'



 const Card = ({id, name, status, species, gender, origin, image, onClose}) => {
  
   return (
      <div className='cards'>
         <div className='face front'>
            <img src={image} alt="" />
         </div>

         <div className='face back'>
             <p>Name: "{name}"</p>
             <p>Status: "{status}"</p>
             <p>Species: "{species}"</p>
             <p>Gender: "{gender}"</p>
             <p>Origin: "{origin}"</p>
             <button onClick={onClose}>Close</button>
         </div>
      </div>
   );
};

export default Card



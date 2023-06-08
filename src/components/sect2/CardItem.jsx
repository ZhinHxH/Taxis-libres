import { datos } from "./datos";
import { AiOutlineFileDone } from 'react-icons/ai';
import { FiUserCheck, FiEdit, FiAirplay } from 'react-icons/fi'

function CardItem() {
  return (
    <>
        {
            datos.map((items)=>{
                let selected;
                if(items.icon == 'FiUserCheck'){
                    selected = (<FiUserCheck />);
                }else if(items.icon == 'FiEdit'){
                    selected = (<FiEdit />);
                }else if(items.icon == 'FiAirplay'){
                    selected = (<FiAirplay />);
                }else if(items.icon == 'AiOutlineFileDone'){
                    selected = (<AiOutlineFileDone />);
                }else{
                    selected = (<FiUserCheck />);
                }
                return (
                    <div className="card-container w-80 flex flex-col items-center text-center md:mb-4" key={items.text}>
                    <div className="card-icono w-24 h-24 rounded-[100%] flex justify-center items-center">
                        <i className="text-[2rem]">{selected}</i>
                    </div>
                    <br></br>
                    <div className="card-text-container">
                        <h3 className="text-subtitles">{ items.title }</h3>
                        <br></br>
                        <p className="text-paragraphs">{ items.text }</p>
                    </div>
                </div>
                )
            })
        }
    </>
  )
}

export default CardItem
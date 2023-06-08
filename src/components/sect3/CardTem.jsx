import { datos } from './datos';
import { BsGraphUpArrow, BsShieldLock } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';

function CardTem() {
  return (
    <>
        {
            datos.map(temas=>{
                let selected;
                if(temas.icon == 'BsGraphUpArrow'){
                    selected = (<BsGraphUpArrow />);
                }else if(temas.icon == 'BsShieldLock'){
                    selected = (<BsShieldLock />);
                }else if(temas.icon == 'BiWorld'){
                    selected = (<BiWorld />);
                }else{
                    selected = (<BiWorld />);
                }
                return(
                    <div className="card-container w-80 flex flex-col items-center text-center md:mb-4" key={temas.text}>
                    <div className="card-supericono w-24 h-24 rounded-[100%] flex justify-center items-center">
                        <i className="text-[4rem]">{selected}</i>
                    </div>
                    <br></br>
                    <div className="card-text-container">
                        <h3 className="text-subtitles">{ temas.title }</h3>
                        <br></br>
                        <p className="text-paragraphs">{ temas.text }</p>
                    </div>
                </div>
                )
            })
        }
    </>
  )
}

export default CardTem
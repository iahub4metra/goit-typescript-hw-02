import css from "./ImageCard.module.css"
import { Image } from "../App/App.types";

type Props = {
    image: Image,
    openModal: (arg:Image)=> void,
}


const ImageCard = ({ image, openModal }: Props) => {
    return ( 
        <div>
            <img onClick={()=> openModal(image)} className={css.image} src={image.urls.small} alt={image.alt_description} />
        </div>
     );
}
 
export default ImageCard;
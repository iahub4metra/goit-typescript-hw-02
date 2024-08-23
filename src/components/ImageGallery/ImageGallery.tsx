import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"
import { Image } from "../App/App.types";

type Props = {
    images: Image[],
    openModal: (arg: Image) => void
}


const ImageGallery = ({images, openModal}:Props) => {
    return ( 
        <ul className={css.listGallery}>
            {images.map(image => (
                <li className={css.listItem} key={image.id}>
                    <ImageCard image={image} openModal={openModal} />
                </li>
            ))}
        </ul>
     );
}

export default ImageGallery;
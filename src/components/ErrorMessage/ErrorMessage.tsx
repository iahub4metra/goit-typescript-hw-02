import { Image } from "../App/App.types";
import css from "./ErrorMessage.module.css"

type Props = {
    images: Image[],
}

const ErrorMessage = ({ images }: Props) => {
    return ( 
        <>
            {images && images.length === 0 ? (<p className={css.errorMsg}>Sorry, there are no images matching your search query. Please try again!</p>) : (<p className={css.errorMsg}>Something went wrong. Please try reload the page</p>)}
        </>
        
     );
}
export default ErrorMessage;



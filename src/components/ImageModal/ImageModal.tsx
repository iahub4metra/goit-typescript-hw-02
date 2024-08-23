import Modal from "react-modal"
import css from "./ImageModal.module.css"
import { Image } from "../App/App.types"
Modal.setAppElement('#root')


type Props = {
    selectedImage: Image,
    customStyles: object,
    modalIsOpen: boolean,
    closeModal: ()=> void,
}

const ImageModal = ({modalIsOpen, closeModal, customStyles, selectedImage}: Props) => {
    return ( 
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <img src={selectedImage?.urls?.regular} alt={selectedImage?.alt_description} />
            <h3 className={css.descriptionModal}>{selectedImage?.description}</h3>
        </Modal>
     );
}
 
export default ImageModal;
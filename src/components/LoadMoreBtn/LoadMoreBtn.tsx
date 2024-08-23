import css from "./LoadMoreBtn.module.css"

type Props = {
    onUpdate: ()=> void,
}

const LoadMoreBtn = ({ onUpdate }: Props) => {
    return ( 
        <button className={css.btnLoadMore} onClick={()=> onUpdate()}>Load more</button>
     );
}
 
export default LoadMoreBtn;
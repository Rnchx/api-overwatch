
import style from '../header/header.module.css'

const Header = () => {
    return (
        <div className={style.principal}>
            <div className={style.imagem}>
                <img src='over.png' width={50} height={50}/>
            </div>
        </div>
    )
}

export default Header

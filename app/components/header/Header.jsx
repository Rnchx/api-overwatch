
import style from '../header/header.module.css'

const Header = () => {
    return (
        <div className={style.principal}>
              <div>
                <img src='/overwatchlogo.png' className={style.logo}/>
            </div>
            <div >
                <img src='/over.png' className={style.imagem}></img>
            </div>
        </div>

    )
}

export default Header

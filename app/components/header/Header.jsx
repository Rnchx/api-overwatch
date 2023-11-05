
import style from './header.module.css'

const Header = () => {
    return (
        <div className={style.principal}>
              <div>
                
              <a href="../"><img src='/overwatchlogo.png' className={style.logo}/></a>
            </div>
            <div >
            <a href="../"><img src='/over.png' className={style.imagem}></img></a>
            </div>
        </div>

    )
}

export default Header

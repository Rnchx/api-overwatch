import React from "react";
import style from "./footer.module.css";
const Footer = () => {
    return (
        <div id={style.adjustFooter}>
            <div className={style.principal}>
                <img src='overwatchlogo.png' className={style.img}></img>
                <p className={style.text}>© 2021 Blizzard Entertainment, Inc. Todos os direitos reservados. Todas as marcas comerciais aqui mencionadas são de propriedade de seus respectivos donos.</p>
            </div>
        </div>
    );
};
export default Footer;
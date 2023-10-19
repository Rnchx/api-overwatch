import styles from "./register.module.css"



const Register = () => {
    return (
        <div >
            <h2>Crie seu personagem e faça faça parte do nosso jogo!</h2>
            <div className={styles.divMainForm}>
                <input placeholder='nome'></input>
                <input placeholder='descrição'></input>
                <input placeholder='foto do personagem'></input>
                <input placeholder='expecialidade'></input>
                <input placeholder='nacionalidade'></input>
                <h2>Informações da vida:</h2>
                <input placeholder='pontos'></input>
                <input placeholder='escudos'></input>
                <input placeholder='saúde'></input>
                <input placeholder='armadura'></input>
                <input placeholder='abilidade'></input>
                <input placeholder='total'></input>
            </div>


        </div>
    )
}
export default Register;



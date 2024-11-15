import Card from "../../components/Card"
import Container from '../../components/Container' 



function Tarefas(){
    return (
        <Container>
            <h1>Tarefas</h1>
            <Card
                titulo={"Mario"}
                afazer={"limpar"}
            />
        </Container>
    
    );
}


export default Tarefas
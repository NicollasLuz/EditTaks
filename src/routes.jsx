import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tarefas from './pages/Tarefas'
import PageBase from './pages/PaginaBase'
import AdicionarTarefas from './pages/Adicionartarefas'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <AdicionarTarefas /> }></Route>
                    <Route path="/tarefas" element={ <Tarefas /> }></Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
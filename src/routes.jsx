import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tarefas from './pages/Tarefas'
import PageBase from './pages/PaginaBase'
import AdicionarTarefas from './pages/Adicionartarefas'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path='/AdicionarTarefas' element={ <AdicionarTarefas /> }></Route>
                    <Route path="/tarefas" element={ <Tarefas /> }></Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
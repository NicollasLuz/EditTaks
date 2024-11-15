import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Tarefas'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path="/sobre" element={ <Tarefas /> }></Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
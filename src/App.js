import {Fragment} from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import {publicRoutes} from '~/routes'
import {DefaultLayout} from '~/compoments/Layout'
import Following from './pages/Following'
import Home from './pages/Home'
function App() {
    return (
        // <Router>
        // <div className='App'>

        //     <Routes>
        //         <Route path='/' element = {<Home/>}/>
        //         <Route path='flowing' element = {<Fllowing/>}/>
        //     </Routes>
        // </div>

        // </Router>

        <Router>
        <div className='App'>
        <Routes>
        {publicRoutes.map((route,index) => {
                const Page = route.component
                let LayoutCheck = DefaultLayout;
                if(route.layout) {
                    LayoutCheck = route.layout
                }
                else if(route.layout === null)(
                    LayoutCheck = Fragment
                )
                return <Route key={index} path={route.path} element={<LayoutCheck> <Page/></LayoutCheck>}/>
            })}
        </Routes>
       
        </div>
           
        </Router>

    )
}

export default App
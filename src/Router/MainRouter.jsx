
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import HomePage from '../Pages/Home/HomePage/HomePage';
import About from '../Pages/About/About';

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: 'about',
                element: <About></About>
            }
        ]
    }
])

export default MainRouter;
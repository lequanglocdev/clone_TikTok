// Layout
import {HeaderOnly} from '~/compoments/Layout'


import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'

// không cần đăng nhập
const publicRoutes =[
    {path:'/' , component:Home },
    {path:'/following' , component:Following},
    {path:'/profile' , component:Profile},
    {path:'/upload' , component:Upload , layout: HeaderOnly}
]

//  phải đăng nhập
const privatRoutes = [

]

export { publicRoutes, privatRoutes}

import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router, HashRouter } from 'react-router-dom';
// 引入组件
import { MainView as Main } from './index/index'; 
import About from './about/AboutView'
import TimeLine from './timeLine/TimeLineView'
import Home from './home/HomeView'
import LoginView from './login/index'

const routes =[
    { path: '/login', component: LoginView},
    { path: '/main', component: Main ,routes:[
        { path: '/main/about', component: About},
        { path: '/main/timeline', component: TimeLine}
    ]}
]

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
    )} />
)

class Parent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Router>
                <Switch>
                {routes.map((route,i)=>{
                    return <RouteWithSubRoutes key={i} {...route} />
                })}
                </Switch>
            </Router>
        )
    }
}
// const Parent = () => (
//     routes.map((route,i)=>{
//        return  <RouteWithSubRoutes key={i} {...route} />
//     })
// )
export default Parent 
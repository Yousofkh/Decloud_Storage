import React from "react";
import { Component } from "react";
import {  createBrowserRouter,RouterProvider,} from 'react-router-dom' ;
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' ;
import 'bootstrap/dist/js/bootstrap.min';
import {Layout }from "./Component/Layout/Layout";
import  Home from "./Component/Home/Home";
import Docs from "./Component/Docs/Docs";
import Contact from "./Component/Contact/Contact";
import Description from "./Component/Layout/Description/Description";
import NotFound from "./Component/NotFound/NotFound";
const routers = createBrowserRouter([
  {
    path: "/", element:<Layout/>, children:[
      {index:true ,element:<Home/>},
      {path:'Docs',element:<Docs/>},
      {path:'Contact',element:<Contact/>},
      {path:'Howitwork',element:<Description/>},
      {path:'*',element:<NotFound/>}
    ]
  }
])


export class App extends Component
{
  state={};
  render()
  {
    return  <RouterProvider router={routers}/>;
    
  }
}



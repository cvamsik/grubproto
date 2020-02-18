import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory-style.css';
class Directory extends Component {
    constructor()
    {
        super();
        this.state={
            items:[
                {
                    id:1,
                    title:'Mexican',
                    imageurl:'https://images.unsplash.com/photo-1524412529635-a258ed66c010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=985&q=80'
                },
                {
                    id:2,
                    title:'Indian',
                    imageurl:'https://images.pexels.com/photos/1051399/pexels-photo-1051399.jpeg?cs=srgb&dl=baked-roti-topped-with-sliced-lime-beside-onion-ring-in-1051399.jpg&fm=jpg'
                },
                {
                    id:3,
                    title:'Italian',
                    imageurl:'https://images.pexels.com/photos/1398688/pexels-photo-1398688.jpeg?cs=srgb&dl=person-making-pasta-tagliatelle-1398688.jpg&fm=jpg'
                },
                {
                    id:4,
                    title:'American',
                    imageurl:'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?cs=srgb&dl=burger-on-brown-wooden-tray-1108117.jpg&fm=jpg'
                },
                {
                    id:5,
                    title:'Chinese',
                    imageurl:'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?cs=srgb&dl=cooked-ramen-1907244.jpg&fm=jpg'
                }
            ]
        };
    }
    render() { 
        return ( 
            <div className='directory-menu'>
                {this.state.items.map(({title,id,imageurl})=>{
                   return <MenuItem key={id} title={title} imageurl={imageurl} />
                    
                   }
                )}
            </div>
         );
    }
}
 
export default Directory;
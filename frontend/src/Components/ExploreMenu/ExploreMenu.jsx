import React from 'react'
import "./exploreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Menu</h1>
        <p className='explore-menu-text'> choose from a diverse menu featuring a delectable array</p>
        <div className="explore-menu-list">
            {menu_list.map((list,index)=>{
                return(
                    <div className='explore-menu-list-item' onClick={()=>setCategory(prev=>prev === list?.menu_name ? "All" : list?.menu_name)} key={index}>
                        <img className={category === list?.menu_name ? "active" : ""} src={list.menu_image} alt={list.menu_name}/>
                        <p>{list.menu_name}</p>
                    </div>
                )
            })}
        </div>
       <hr/>
    </div>
  )
}

export default ExploreMenu

import React, { useState } from 'react';

// import Component
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

export default function Layout({children}){
    
    const [isMenu, setMenu] = useState(false);

    function onOpenMenu(){
        setMenu(!isMenu)
    }

    return(
       <>
       <Header isMenu={isMenu} onOpenMenu={onOpenMenu}/>
       <div onClick={()=>setMenu(false)}>
        {children}
        </div>
       <Footer />
      </>
    )
}
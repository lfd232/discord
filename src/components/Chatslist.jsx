import React from 'react'
import styles from "./chatslist.module.css"
import sea from "../assets/search.png"
import figma from "../assets/figmaa.png"
import mas from "../assets/mask.png"
import  icons from "../assets/icons.png"

 const chatslist = () => {
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <img className={styles.sear} src = {sea} alt=""></img>
        
      <input
      type="text"
      className={styles.searcher}
      placeholder='search'
      />
      
      
    </div>
    <h1 className={styles.mes}>Message</h1>
    <div className={styles.board}>
      <button className={[styles.name, styles.active]}>
       all chats
      </button>
         <button className={[styles.name,]}>
       group
      </button>
      <button className={[styles.name,]}>
       contacts
      </button>
 

    </div>
         <div className={styles.chats}>
<img className={styles.figma} src = {figma} alt=""></img>
figma teams

      </div>
      <div className={styles.chat2}>
      
      <img className={styles.mas} src={mas} alt=""></img>
      vova zlotyhon 
      </div>
      <div className={styles.ic} >
        <img className={styles.ico} src={icons} alt=""></img>
        vadim usanov
      </div>
      
      
    </div>
    
    
    
  )
}
export default chatslist
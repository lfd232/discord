import styles from "./sidebar.module.css"
import React from 'react'
// import img from './d logo.jpg'
import logo from "../assets/side.png"
import home from "../assets/dome.png"
import sea from "../assets/search.png"
import savee from "../assets/save.png"
import sharet from"../assets/share.png"
import setings from "../assets/setting.png"
import nig from "../assets/night.png"
import mas from "../assets/mask.png"
function SideBarKakashkiPopki() {
  return (
    <div className={styles.chat}>
       <img src={logo} alt=""></img>  
       <img className={styles.domik} src={home} alt="" ></img>
       <h1>Home</h1>
       <img className={styles.sear} src = {sea} alt=""></img>
       <h1 className={styles.poick}>Search</h1>
       <img className={styles.savet} src={savee} alt=""></img>
       <h1 className={styles.te}>Save</h1>
       <img className={styles.shar} src={sharet} alt=""></img>
       <h1 className={styles.sh}>Share</h1>
       <img className={styles.set} src={setings} alt=""></img>
       <h1 className={styles.seti}>Setting</h1>
       <img className={styles.night} src={nig} alt=""></img>
       <img className={styles.mask} src={mas} alt=""></img>
    </div>
  )
}

export default SideBarKakashkiPopki
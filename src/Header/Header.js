import React from 'react';
import styles from './header.module.css'
import  {FaCircle} from'react-icons/fa'


function Header(props) {
  return (
    <div >

      <div className={styles.header}>

      <div className={styles.topbar}>
        <h1></h1>
        
        <div></div>

        
      </div>
        <div>
          <FaCircle className={styles.icon}/>
        </div>
      
      </div>
    
      
    </div>
  );
}

export default Header;
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { wrapper as  PopperWraper} from '~/compoments/Popper';
import styles from './Header.module.scss'
import images from '~/assets/images';

import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import Account from '~/compoments/Account';
const cx = classNames.bind(styles)
function Header() {
    const[searchResult,setSearchResult] = useState([]);

    useEffect(() =>{
        setTimeout(() =>{
            setSearchResult([])
        },3000)
    },[])
    return( 
    <header className= {cx('wrapper')} >
        <div className={ cx('inner')}>
            <div className={cx('loggo')}>
                <img src={images.logo} alt='TikTok'></img>  
            </div>
            <Tippy
            interactive
            visible={searchResult.length > 0}
                render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <PopperWraper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        <Account/>
                        <Account/>
                        <Account/>
                        <Account/>

                     </PopperWraper>   
                 </div>
    )}
            >
            <div className={cx('search')}>
                <input placeholder='Search accounts and videos' spellCheck={false}></input>
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark}/>
                </button>
                <FontAwesomeIcon icon={faSpinner} className={cx('loading')}/>
                
               
                <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />

                </button>
                
            </div>
            </Tippy>
           
            <div className={cx('actions')}></div>
        </div>      
    </header>
    );
}

export default Header;
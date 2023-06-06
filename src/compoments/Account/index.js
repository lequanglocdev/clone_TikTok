import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Styles from "./Account.scss"

const cx = classNames.bind(Styles)
function Account() {
    return ( 
    <div className={cx('wrapper')}>

            <img className={cx('avata')} src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1686211200&x-signature=QPvO6F6uwGhqrRZfA3ml%2FN2DDss%3D' alt='' />
            <div className={cx('info')}>
                    <h4 className={cx('name')}>
                            <span>Hoaa</span>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                    <sapn className={cx('username')}>Đào Lê Phương Hoa</sapn>
            </div>
        </div> 
    
);
}

export default Account;
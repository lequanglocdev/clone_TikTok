import style from './Popper.module.scss'
import classNames  from 'classnames/bind';
const cx  = classNames.bind(style)

function wrapper({children}) {
    return (  <div className={cx('wrapper')}>
        {children}
    </div>);
}

export default wrapper;
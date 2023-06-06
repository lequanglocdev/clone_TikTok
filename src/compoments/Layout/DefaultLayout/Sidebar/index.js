import className from 'classnames/bind'
import styles from './Siddbar.module.scss'

const cx = className.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Side Bar</h2>
        </aside>
    );
}

export default Sidebar;

import Header from "~/compoments/Layout/componemts/Header";


function HeaderOnly({children}) {
    return ( 
        <div>
            <Header/>
            <div className='container'>
                <div className='content'>{children}</div>
            </div>
        </div> 
    );
}

export default HeaderOnly;
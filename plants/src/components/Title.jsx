
import './Title.css';


export default function Title({text1, text2, showLink}){
    return(

        <div className='title-box'>
            <h2 className='sectionTitle'>
                <span className='greenTitle'>{text1}</span>
                <span>{text2}</span>
            </h2>
 
            {showLink && (
                <a href='#' className='title-link'>Shop all &gt;</a>
            )}
        </div>

    )
}








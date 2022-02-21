import  React from 'react';


const BookCard =(props) =>{
    return(
        <div className="card-container">
            <img src={props.image} alt=""/>
            <div className="desc">
                <h2>Title:{props.title}</h2>
                <h3>Author:{props.author}</h3>
                <p>Published:{props.published}</p>
               {/* <p><a href={props.preview} type='button' target='_blank' rel='noopener noreferrer'>Preview Link</a></p> */}
               <p>Hello</p>
            </div>           
        </div>
    )
}

export default  BookCard;


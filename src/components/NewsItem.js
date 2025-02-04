import React from 'react'

const NewsItem = (props) => {

    let {title,description,imageUrl,newurl,author,date,source} = props;
    return (
      <div>
        <div className="card" >
            <img src={props.imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}... 
                  <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger " style={{left:'90%',zIndex: '1'}}>
                {source}
                </span></h5>
                <p className="card-text">{props.description}...</p>
                <p className="card-text"> <small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                <a href={props.newurl} className="btn btm-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem

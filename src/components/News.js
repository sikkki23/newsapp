import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// import SelectComponent from './SelectComponent';
// import Navbar from './components/Navbar.js';
const News = (props) => {

const [articles,setArticles]=useState([])
const [loading,setLoading]=useState(true)
const [page,setPage]=useState(1)
const [totalResults,setTotalResults]=useState(0)
const [selectedValue,setSelectedValue]=useState('');

    // this.handleValueChange = this.handleValueChange.bind(this);
  
  // handleValueChange(newValue) {
  //   setState({ selectedValue: newValue });
  // }

  const capitalizeFirstLetter = (str) => {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // const handleValueChange = async (newValue) => {
  //   setSelectedValue(newValue);
  // }

  useEffect(() => {
    console.log("useEffect Did mount news");
      updateNews();
  }, [])

  // const handleNextClick = async () => {
  //   if (!(page > Math.ceil(totalResults / 5))) {
  //     setPage(page + 1);
  //     updateNews();
  //   }
  // };

  const updateNews = async () => {
    props.setProgress(0);
    let url = "";
    if (props.country === "World") {
      url = `${props.apihost}?category=${props.category}&page=${page}&pagesize=${props.pagesize}`;
    } else {
      url = `${props.apihost}?category=${props.category}&country=${props.country}&page=${page}&pagesize=${props.pagesize}`;
    }
    let data = await fetch(url, {
      headers: {
        "X-Api-Key": props.apikey,
      },
    });
    props.setProgress(30);
    setLoading(true);
    let parsedata = await data.json();
    props.setProgress(70);
    //      console.log(parsedata);
    setPage(page + 1);
    setArticles(parsedata.articles);
    setLoading(false);
    
    props.setProgress(100);
  }

  const handlePreviousClick = async () => {
    console.log("previous clicked");
    if (page - 1 < Math.ceil(totalResults / 5)) {
    } else {
      setPage(page - 1);
      updateNews();
    }
  };

  const fetchMoreData = async () => {
    props.setProgress(0);
    console.log("Hello I am News fetchMoreData");
   // if (!(page > Math.ceil(totalResults / 5))) {
      setPage(page + 1);
      console.log("Hello I am News fetchMoreData2");
      let url = "";
      if (props.country === "World") {
        url = `${props.apihost}?category=${props.category}&page=${page}&pagesize=${props.pagesize}`;
      } else {
        url = `${props.apihost}?category=${props.category}&country=${props.country}&page=${page}&pagesize=${props.pagesize}`;
      }
      let data = await fetch(url, {
        headers: {
          "X-Api-Key":  props.apikey,
        },
      });
      props.setProgress(30);
      setLoading(true);
      let parsedata = await data.json();
      props.setProgress(60);
      //      console.log(parsedata);
      setPage(page+1);
      setLoading(false);
      setArticles(articles.concat(parsedata.articles));
    
      props.setProgress(100);

 //   }
  };

    return (
      <>
     
        <h2 className="text-center" style={{ margin: "40px 0px" }}>
          {" "}
          News How Now -Top {capitalizeFirstLetter(props.category)} Headlines
        </h2>

        {/* {loading && <Spinner/> } */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
            {articles?.map((element) => {
              // console.log('element',element);
              return (
                <div className="col-md-4" key={element.url + element.title}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw"
                    }
                    newurl={element.url}
                    author={element.author ? element.author : "unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>

        {/* <div className='container d-flex justify-content-between'>
        <button disabled={page<=1} className="btn btn-dark" type="button" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button disabled={page + 1 > (Math.ceil(totalResults/5))} className="btn btn-dark" type="button" onClick={this.handleNextClick}>&rarr; Next </button>
        </div> */}
      
      </>
      );
  
}

News.defaultProps = {
  country: "in",
  pagesize: 5,
  category: "science",
};

News.propsTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

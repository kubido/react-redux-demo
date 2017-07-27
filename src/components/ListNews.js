import React from 'react';
import { connect } from 'react-redux'

import { fetchNewsAsync as fetchNews } from '../actions'

class ListNews extends React.Component{
  constructor(){
    super();
    this.state = {
      dataNews: [1,2,3,4,5],
      formData: {
        personName: ''
      }
    }

   // tthis.addNews = this.addNews.bind(this, name)
  }

  addNews(elem){
    const News = this.state.dataNews
    News.push(`dataBaru ${Math.random(100)}`)
    this.setState({dataNews: News})
  }


  render(){
    const { props } = this
    return (
      <div>
        <h1> This is list news </h1>
      <button onClick={() => props.ambilNews() }> Fetch news </button>
      <ul>
          {props.news.map( (_news, idx) => {
            return <li key={idx}> {_news.title} </li>
          }) }
      </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ambilNews: () => dispatch(fetchNews())
  }
}

const mapStateToProps = (state) => {
  return  {
    news: state.stateCounter.news
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListNews)

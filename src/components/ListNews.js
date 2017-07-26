import React from 'react';

export default class ListNews extends React.Component{
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
    return (
      <div>
        <h1> This is a react component </h1>
        <form>
          <input onChange={(e) => this.setState({personName: e.target.val() })}/>
        </form>
        <ul>
          { this.state.dataNews.map( (idx) => 
            <li key={idx}>News {idx} </li>
          )}
        </ul>
        <button onClick={(e) => this.addNews(e.target)}> Add news </button>
      </div>
    )
  }
}

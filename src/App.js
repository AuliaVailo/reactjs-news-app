import axios from 'axios';
import { Component } from 'react';
import './App.css';
import CategoryButton from './components/CategoryButton';
import Loading from './components/Loading';
import NewsCard from './components/NewsCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      categories: [],
      apiUrl: 'https://newsapi.org/v2/everything?q=technology&apiKey=b153da8d70c3481b94272477c52b0f52'
    }
  }

  componentDidMount() {
    axios.get(this.state.apiUrl)
      .then(res => {
        let data = res.data
        let detailCategory = []
        data.articles.map((el) => {
            detailCategory.push(el.source)
        })
        const filteredArr = detailCategory.reduce((acc, current) => {
          const x = acc.find(item => item.name === current.name);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);
        this.setState({
          articles: data,
          categories: filteredArr
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const articles = this.state.articles.articles
    const totalArticles = this.state.articles.totalResults
    const categories = this.state.categories
    let newsCard;
    let categoryBtn;
    if (articles != undefined) {
      console.log(articles)
      newsCard = articles.map((d) => <NewsCard data={d} />);
    }
    if(categories.length > 0) {
      categoryBtn = categories.map((d) => <CategoryButton name={d.name} />);
    }
    return (
      <div className="App">
        <div className="flex flex-col justify-center py-3 bg-white">
          <div className="flex justify-center">
            <img src="https://image.freepik.com/free-vector/newspaper-vector-illustration-logo-icon-clipart_7688-575.jpg" className="w-24 h-24" alt="logo" />
          </div>
          {(this.state.articles.length === 0) ?
          <Loading />
          :
          <div>
            <div className="grid grid-flow-col p-2 mx-0 gap-2 overflow-x-auto">
              {categoryBtn}
            </div>
            <div className="grid grid-flow-row grid-cols-1 grid-rows-1 md:grid-cols-4 gap-4">
              {newsCard}
            </div>
          </div>
            }
        </div>
      </div>
    )
  }
}
export default App;

// import React, { Component } from 'react'

// import store from './redux/store'
// import { Provider } from 'react-redux'


// export class Products extends Component {

//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div className="Products-container">
//                 <Provider store = {store}>
//                     <Posts
//                 </Provider>
//             </div>
//         )
//     }

// }

// export default Products;


// import React, { Component } from "react";

// // import axios from 'axios';

// import Posts from './Home/Posts';
// import Pagination from './Home/Pagination';

// import { createStore } from 'redux'
// import { Provider, ReactReduxContext } from 'react-redux'

// import './HomePage.css';

// class HomePage extends Component {

//   constructor(){
//     super()

//     this.state = {
//       posts : [],
//       currentPage : 1,
//       postsPerPage: 9,
//     }
//     this.componentDidMount = this.componentDidMount.bind(this);
//     this.paginate = function(){};
//     // this.paginate = this.paginate.bind(this);

//   }

  
//   componentDidMount(){
//     fetch(`https://fakestoreapi.com/products`)
//     .then(resp => resp.json())
//     .then(data => {
//         this.setState({
//             posts: data,
//         })
//     })
//   }

//   // paginate(pageNumber){
//   //   this.indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
//   //   this.indexOfFirstPost = this.indexOfLastPost - this.postsPerPage;
//   //   this.currentPosts = this.state.posts.slice(this.indexOfFirstPost, this.indexOfLastPost);
//   //   this.setState({
//   //     posts: pageNumber,
//   // })
//   // }

//   render() {



//     const initialState ={
//       count :0
//     };

//     let reducer = (state = initialState, action) => {
//       switch(action.type){
//         case "increment" :
//           return {
//             count : state.count + 1
//           };

//           default:
//             return state
//       }
//   }

//   const store = createStore(reducer)


//     this.indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
//     this.indexOfFirstPost = this.indexOfLastPost - this.postsPerPage;
//     this.currentPosts = this.state.posts.slice(this.indexOfFirstPost, this.indexOfLastPost);
//     this.paginate = pageNumber =>{ this.setState({currentPage : pageNumber});}
//         // console.log(this.paginate)

//     return (
//       <div>
//         <h1 className="head">HomePage</h1>
//           <div className="container">
//             <Provider store = {store}>
//             <Posts posts={ this.currentPosts } />
//             </Provider>
//             <Pagination
//               postsPerPage={ this.state.postsPerPage }
//               totalPosts={ this.state.posts.length }
//               paginate={ this.paginate }
//             />
//           </div>
//       </div>
//     );
//   }
// }

// export default HomePage;


// // create method dispathtoprops
// //and pass the value to the method


// // divide the action dispacher and 

// //action dispacher reducer
// //divide must see
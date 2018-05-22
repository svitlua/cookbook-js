import React from 'react';
import Header from './Header';
import RecipePreview from './RecipePreview';

class App extends React.Component{
  state = {
    pageHeader: 'CookBook'
  };

  componentDidMount(){
    //ajax, timers. listeners
  }

  componentWillUnmount(){
    //clean timers. listeners

  }

  render() {
    return (
      <div className="App">
      <Header message={this.state.pageHeader} />
        <div>
         {this.props.recipes.map(recipe=>
           <RecipePreview {...recipe}/>
         )}

        </div>
      </div>
    );
  }
}

export default App;

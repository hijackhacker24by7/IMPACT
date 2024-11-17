

import { BrowserRouter as Router, Route,   Routes as Switch, useHistory } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import QueryList from './QueryList';
import QueryDetail from './QueryDetail';

function Global_chat_box() {
  return (
  
  <div>
    <QueryList></QueryList>
  

  
  </div>
   
  );
}

export default Global_chat_box;

// CSS
// .fade-enter { opacity: 0; }
// .fade-enter-active { opacity: 1; transition: opacity 300ms; }
// .fade-exit { opacity: 1; }
// .fade-exit-active { opacity: 0; transition: opacity 300ms; }

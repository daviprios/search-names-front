import React from 'react';

import './index.sass';

import { Link, Redirect, Route, Switch } from 'react-router-dom';

import CreateForm from './CreateForm';
import ShowForm from './ShowForm';
import UpdateForm from './UpdateForm';
import DeleteForm from './DeleteForm';

export default function Form() {
  return (
    <div id='Form'>
      <Link to='/'>
        <button>
          Voltar para o menu principal
        </button>
      </Link>
      <Switch>
        <Route path='/form/create' component={CreateForm}/>
        <Route path='/form/show' component={ShowForm}/>
        <Route path='/form/update' component={UpdateForm}/>
        <Route path='/form/delete' component={DeleteForm}/>
        <Route path='*'>
          <Redirect to='/notfound'/>
        </Route>
      </Switch>
    </div>
  )
}

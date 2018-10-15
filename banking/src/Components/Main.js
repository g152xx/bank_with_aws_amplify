
import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home';
// import BorrowersPage from '../Component/Borrower/BorrowersPage';
// import LendersPage from '../Component/Lender/LendersPage'


const Main =() =>(
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route path="/borrow" component={BorrowersPage}/>
            <Route path="/lend" component={LendersPage}/> */}
        </Switch>
    </main>

)
export default Main;
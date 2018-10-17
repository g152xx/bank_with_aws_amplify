import React, { Component } from 'react'

import { API, graphqlOperation} from 'aws-amplify'

const LenderMutation =`
query {
    listLenders{
        items {
        id
        name
        deposit
        borrowers{
          items  {
            id
            name
            picture
             credit
            paymentDate
          }
        }
      }
    }
  }
`

class LendersQuery extends  Component{
    state={
        alllenders: []
    }

    async componentDidMount(){
        const lender= await API.graphql(graphqlOperation(LenderMutation));
        this.setState({
            alllenders: lender.data.listLenders.items
            
        })
    }
    render(){
        return(
            <div>

                <h1>Lenders Query</h1>
                {
                    this.state.alllenders.map((item)=>(<div>
                        
                        <p key={item.id}>{item.name} has lendered {item.deposit} </p>
                   </div>))
                }
            </div>
        )
    }
}

export default LendersQuery;
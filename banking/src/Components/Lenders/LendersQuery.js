import React, { Component } from 'react'

import { API, graphqlOperation} from 'aws-amplify'

const query =`
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
        const data= await API.graphql(graphqlOperation(query))
        this.setState({
            alllenders: data.data.listLenders.items
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.alllenders.map((item)=>(
                        <p key={item.id}>{item.name}- {item.deposit}</p>
                    ))
                }
            </div>
        )
    }
}

export default LendersQuery;
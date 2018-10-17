import React, { Component } from 'react'
import { API, graphqlOperation} from 'aws-amplify'

const getAllBorrowers =`
query{
  listBorrowers{
    items{
      id
	  name
      picture
      credit
      paymentDate
      lenderName{
        id
        name
        deposit
        
      }
    }
  }
}`


class BorrowersQuery extends  Component{
    state={
        allBorrowers: []
    }

    async componentDidMount(){
        const borrower= await API.graphql(graphqlOperation(getAllBorrowers))
        //console.log(borrower)
        this.setState({
            allBorrowers: borrower.data.listBorrowers.items
        })
    }
    render(){
        return(
            <div>
                <h1>Borrowers List</h1>
                {
                    this.state.allBorrowers.map((item)=>(
                        <p key={item.id}>{item.name} has borrowerd {item.credit}</p>
                    ))
                }
            </div>
        )
    }
}

export default BorrowersQuery;
import React, { Component } from 'react'
import { API, graphqlOperation} from 'aws-amplify'

import { Col, Button, Card, CardBody, CardHeader, FormGroup, FormText, Input, Label} from 'reactstrap';
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

const createNewBorrower = `
  mutation ($name: String!, $picture:String, $credit:String,$paymentDate: String, $borrowerLenderNameId:ID! ) {
    createBorrower(input: {
      name: $name, picture:$picture, credit:$credit, paymentDate:$paymentDate, borrowerLenderNameId:$borrowerLenderNameId
    }) {
      id
    name
    picture
    credit
    paymentDate
    lenderName{
      id
      name
    }
    }
  }
`

const LenderQuery =`
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

class BorrowersQuery extends  Component{
    displayLenders(){
        var data= this.props;
        console.log(data)
    }
    state={
        alllenders: [], allBorrowers: [], name:"", picture:"", credit:"", paymentDate:"", borrowerLenderNameId:""
    }

    async componentDidMount(){
        const borrower= await API.graphql(graphqlOperation(getAllBorrowers))
        const lenderData= await API.graphql(graphqlOperation(LenderQuery));
        //console.log(borrower)
        this.setState({
            allBorrowers: borrower.data.listBorrowers.items,
            alllenders: lenderData.data.listLenders.items
            
        })
        console.log(this.state.allBorrowers)
    }

    createBorrower= ()=>{

    }

    render(){
        return(
            <div>
                <div className="container" >
           
           <Card>
           <CardHeader>
               <strong className="display-4" >Borrow Money </strong> 
           </CardHeader>
           <CardBody>
               <FormGroup row>
                   <Col md="3">
                   <Label htmlFor="hf-lender">Lender Name</Label>
                   </Col>
                   <Col xs="12" md="9">
                   <Input type="text"  placeholder="Enter lender Name" autoComplete="lender" onChange={(e) =>this.setState({name: e.target.value})}  />
                   <FormText className="help-block">Please Lender Name</FormText>
                   </Col>
               </FormGroup>
               <FormGroup row>
                   <Col md="3">
                   <Label htmlFor="hf-lender">What Is Your Colaterel </Label>
                   </Col>
                   <Col xs="12" md="9">
                   <Input type="text"  placeholder="Enter colaterel"  onChange={(e) =>this.setState({colaterel: e.target.value})}  />
                   <FormText className="help-block">Your Colaterel</FormText>
                   </Col>
               </FormGroup>
               <FormGroup row>
                   <Col md="3">
                   <Label htmlFor="hf-lender">What Is Your Amount Borrowing </Label>
                   </Col>
                   <Col xs="12" md="9">
                   <Input type="text" placeholder="How Much will you want to borrow"  onChange={(e) =>this.setState({credit: e.target.value})}  />
                   <FormText className="help-block">Amount Borrowing</FormText>
                   </Col>
               </FormGroup>

               <FormGroup row>
                   <Col md="3">
                   <Label htmlFor="hf-lender">Date Of Payment </Label>
                   </Col>
                   <Col xs="12" md="9">
                   <Input type="date" placeholder="Date you will Pay the Money"  onChange={(e) =>this.setState({paymentDate: e.target.value})}  />
                   <FormText className="help-block">When Will You Paythe Money Back </FormText>
                   </Col>
               </FormGroup>
               <FormGroup row>
                   <Col md="3">
                   <Label htmlFor="hf-lender">Varification Email </Label>
                   </Col>
                   <Col xs="12" md="9">
                   <Input type="email" placeholder="Email"  onChange={(e) =>this.setState({varificationEmail: e.target.value})}  />
                   <FormText className="help-block">Email Address To Reach You </FormText>
                   </Col>
               </FormGroup>

               <FormGroup row>
                   <Col md="3">
                   <Label htmlFor="hf-lender">Your Personal Picture</Label>
                   </Col>
                   <Col xs="12" md="9">
                   <Input type="text" placeholder="Picture"  onChange={(e) =>this.setState({picture: e.target.value})}  />
                   <FormText className="help-block">Personal Picture </FormText>
                   </Col>
               </FormGroup>

               <FormGroup row>
                   <Col md="3">
                   <Label htmlFor="hf-lender">Which Invester Will You Like to Borrow From?</Label>
                   </Col>
                   <Col xs="12" md="9">
                   <select onChange={(e)=>this.setState({lenderNameId: e.target.value})}>
                       <option>Select Lender</option>
                       {this.displayLenders()}
                   </select>
                   </Col>
               </FormGroup>
                   <Button onClick={this.createBorrower} type="submit" size="lg" color="warning"><i className="fa fa-dot-circle-o"></i> Send Request To Borrow Money </Button>
           </CardBody>
           </Card>
           </div>
   
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
import React, { Component } from 'react'
import { Row,Col, Button,Card, CardBody, CardHeader, FormGroup, FormText, Input, Label} from 'reactstrap';
import { API, graphqlOperation} from 'aws-amplify'

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
const createNewLender = `
  mutation($name: String!, $deposit:String) {
    createLender(input: {name: $name, deposit:$deposit
    })
    {
      id
      name
      deposit
    }
  }
`
const SubscribeToLenders=`
subscription{
    onCreateLender{
      id
      name
      deposit
    }
  }
`

class LendersQuery extends  Component{
    state={
        alllenders: [], name:"", deposit:""
    }

    async componentDidMount(){
        const lenderData= await API.graphql(graphqlOperation(LenderQuery));
        this.setState({
            alllenders: lenderData.data.listLenders.items
            
        })
        API.graphql(
            graphqlOperation(SubscribeToLenders)
        ).subscribe({
            next: (eventData) => {
                const lender= eventData.value.data.onCreateLender;
                const alllenders = [...this.state.alllenders.filter(i=>{
                    return ((i.name !==lender.name) && (i.deposit !== lender.deposit))
                }), lender]
                this.setState({alllenders})
            }
        });
    }


    createLender = async() => {
        if((this.state.name===""|| (this.state.deposit==="")))return
        const lender = {name: this.state.name, deposit: this.state.deposit}
        try{
            const alllenders =[...this.state.alllenders, lender]
            this.setState({alllenders, name:"", deposit:""})
            await API.graphql(graphqlOperation(createNewLender, lender) )
            console.log("succes ")
        }
        catch(err){console.log("err", err)}
    }
    render(){
        return(
            <div>
                <div>
                <Row>
          <Col sm="12" xl="6">
                <Card>
                    <CardHeader>
                        <strong className="display-4" > Lend Money</strong> 
                    </CardHeader>
                    <CardBody>
                        <FormGroup row>
                            <Col md="3">
                            <Label htmlFor="hf-lender">Lender Name</Label>
                            </Col>
                            <Col xs="12" md="9">
                            <Input type="text" id="hf-lender" name="name" placeholder="Enter lender Name" autoComplete="lender" onChange={(e) =>this.setState({name: e.target.value})}  />
                            <FormText className="help-block">Please Lender Name</FormText>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                            <Label htmlFor="hf-date">Deposit Amount</Label>
                            </Col>
                            <Col xs="12" md="9">
                            <Input   type="text" id="deposit" placeholder="Enter The Amount You want to Deposit" autoComplete="current-date"  onChange={(e) =>this.setState({deposit: e.target.value})}/>
                            <FormText className="help-block">Deposit Amount</FormText>
                            </Col>
                        </FormGroup>
                            <Button onClick={this.createLender} type="submit" size="lg" color="danger"><i className="fa fa-dot-circle-o"></i> Post Money For Lending </Button>
                     
                    </CardBody>
                    </Card>
                    </Col>

                    <Col sm="12" xl="6">
                        <h1>Lenders Query</h1>
                        {
                            this.state.alllenders.map((item)=>(
                                <p key={item.id}>{item.name} has lendered {item.deposit} </p>))
                        }

                    </Col>
                    </Row>
                </div>
            
            </div>
        )
    }
}

export default LendersQuery;
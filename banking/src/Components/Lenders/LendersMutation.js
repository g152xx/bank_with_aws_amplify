import { API, graphqlOperation } from "aws-amplify";
import { createNewLender } from '../../Queries'

class LendersMutation extends Component{
    constructor(){
        super();
        this.state ={
            name:"",
            deposit:""
        }
        

    }

   async componentDidMount(){
    const lender = { name: this.state.name }
    await API.graphql(graphqlOperation(createNewLender, lender))
    console.log('blog successfully created')
    // this.setState({
    //     alllenders: lender.data.listLenders.items
        
    // })
}

    render(){
        return(
            <div>
                <Card>
                    <CardHeader>
                        <strong className="display-4" > Lend Money</strong> 
                    </CardHeader>
                    <CardBody>
                        <Form id="" className="form-horizontal">
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
                            <Input type="text" id="deposit" placeholder="Enter The Amount You want to Deposit" autoComplete="current-date"  onChange={(e) =>this.setState({deposit: e.target.value})}/>
                            <FormText className="help-block">Deposit Amount</FormText>
                            </Col>
                        </FormGroup>
                        <CardFooter>
                            <Button type="submit" size="lg" color="danger"><i className="fa fa-dot-circle-o"></i> Post Money For Lending </Button>
                        </CardFooter>
                        </Form>
                    </CardBody>
                    </Card>
            </div>
        )
    }
    
}
export default LendersMutation;

// // Mutation
// const eventDetails = {
//     name: 'Party tonight!',
//     when: '8:00pm',
//     where: 'Ballroom',
//     description: 'Coming together as a team!'
// };

const newEvent = await API.graphql(graphqlOperation(createNewLender, eventDetails));
console.log(newEvent);



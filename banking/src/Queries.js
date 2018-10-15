import { gql } from "apollo-boost";
const getAllLenders =gql`
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

const getAllBorrowers =gql`
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


const createNewBorrower = gql`
  mutation createBorrower($name: String!, $picture:String, $credit:String,$paymentDate: String, $borrowerLenderNameId:ID! ) {
    createPost(input: {
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
const createNewLender = gql`
  mutation createLender($name: String!, $deposit:String) {
    createPost(input: {name: $name, deposit:$deposit})
    {
      id
      name
      deposit
    }
  }
`



export {getAllLenders, getAllBorrowers, createNewBorrower, createNewLender}
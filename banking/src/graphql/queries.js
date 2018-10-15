// eslint-disable
// this is an auto generated file. This will be overwritten

export const getLender = `query GetLender($id: ID!) {
  getLender(id: $id) {
    id
    name
    deposit
    borrowers {
      items {
        id
        name
        picture
        credit
        paymentDate
      }
      nextToken
    }
  }
}
`;
export const listLenders = `query ListLenders(
  $filter: ModelLenderFilterInput
  $limit: Int
  $nextToken: String
) {
  listLenders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      deposit
      borrowers {
        items {
          id
          name
          picture
          credit
          paymentDate
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getBorrower = `query GetBorrower($id: ID!) {
  getBorrower(id: $id) {
    id
    name
    picture
    credit
    paymentDate
    lenderName {
      id
      name
      deposit
    }
  }
}
`;
export const listBorrowers = `query ListBorrowers(
  $filter: ModelBorrowerFilterInput
  $limit: Int
  $nextToken: String
) {
  listBorrowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      picture
      credit
      paymentDate
      lenderName {
        id
        name
        deposit
      }
    }
    nextToken
  }
}
`;

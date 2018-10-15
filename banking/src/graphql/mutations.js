// eslint-disable
// this is an auto generated file. This will be overwritten

export const createLender = `mutation CreateLender($input: CreateLenderInput!) {
  createLender(input: $input) {
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
export const updateLender = `mutation UpdateLender($input: UpdateLenderInput!) {
  updateLender(input: $input) {
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
export const deleteLender = `mutation DeleteLender($input: DeleteLenderInput!) {
  deleteLender(input: $input) {
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
export const createBorrower = `mutation CreateBorrower($input: CreateBorrowerInput!) {
  createBorrower(input: $input) {
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
export const updateBorrower = `mutation UpdateBorrower($input: UpdateBorrowerInput!) {
  updateBorrower(input: $input) {
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
export const deleteBorrower = `mutation DeleteBorrower($input: DeleteBorrowerInput!) {
  deleteBorrower(input: $input) {
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

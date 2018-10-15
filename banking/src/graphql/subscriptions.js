// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateLender = `subscription OnCreateLender {
  onCreateLender {
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
export const onUpdateLender = `subscription OnUpdateLender {
  onUpdateLender {
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
export const onDeleteLender = `subscription OnDeleteLender {
  onDeleteLender {
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
export const onCreateBorrower = `subscription OnCreateBorrower {
  onCreateBorrower {
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
export const onUpdateBorrower = `subscription OnUpdateBorrower {
  onUpdateBorrower {
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
export const onDeleteBorrower = `subscription OnDeleteBorrower {
  onDeleteBorrower {
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

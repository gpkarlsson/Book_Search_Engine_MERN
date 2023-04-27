// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`

// ADD_USER will execute the addUser mutation.

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// SAVE_BOOK will execute the saveBook mutation.

export const SAVE_BOOK = gql`
    mutation saveBook($book: BookInput!) {
        saveBook(book: $book) {
            username
            email
            bookCount
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
                description
            }
        }
    }
`;

// REMOVE_BOOK will execute the removeBook mutation.

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      bookCount
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;
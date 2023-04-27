const { gql } = require('apollo-server-express');

// Define the necessary Query and Mutation types:

const typeDefs = gql`
type Query {
    users: [User]
    me: User
} 
Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!, username: String!): Auth
    saveBook(book: BookInput): User
    removeBook(bookId: ID!): User
}
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        password: String
        savedBooks: [Book]
    }
    type Book {
        _id: ID
        authors: [String]
        bookId: String
        image: String
        link: String
        title: String
    }
    input BookInput {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;
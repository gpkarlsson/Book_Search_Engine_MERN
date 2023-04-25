

// TODO: LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`

// TODO: ADD_USER will execute the addUser mutation.

export const ADD_USER = gql`
    mutation addUser($username: String!, email: $email, password: $password) {
        
}
`

// TODO: SAVE_BOOK will execute the saveBook mutation.

export const SAVE_BOOK = gql`
    mutation saveBook($)

`

// TODO: REMOVE_BOOK will execute the removeBook mutation.

export const REMOVE_BOOK = gql`
    mutation removeBook($)
`
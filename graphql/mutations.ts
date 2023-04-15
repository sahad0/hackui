import { gql } from 'graphql-tag';



export const GENERATE_OTP = gql`
mutation generateOTP($email:NullString) {
  generateOTP(input:{email:$email}) 
}
`;

export const LOGIN = gql`
  mutation login($input:LoginRequest!) {
    login(input:$input) {
      id
      name
      isAdmin
      orgUID
      roleID
      sessionToken
    }
  }
`;





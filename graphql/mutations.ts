import { gql } from 'graphql-tag';



export const GENERATE_OTP = gql`
mutation generateOTP($input:OTPRequest) {
  generateOTP(input:$input) 
}
`;

export const LOGIN = gql`
  mutation login($input:LoginRequest!) {
    login(input:$input) {
      id
      name
      sessionToken
    }
  }
`;





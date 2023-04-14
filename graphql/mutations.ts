import { gql } from '@apollo/client';

export const GENERATE_OTP = gql`
  mutation generateOTP($email:NullString,$phone:NullString) {
    generateOTP(input:{email:$email,phone:$phone}) 
  }
`;

export const LOGIN = gql`
  mutation login($email:NullString,$phone:NullString,$otp:NullString) {
    login(input:{email:$email,phone:$phone,otp:$otp}) {
      id
      name
      isAdmin
      orgUID
      roleID
      sessionToken
    }
  }
`





/** @format */

import { gql } from "@apollo/client";
const Signup = () => {
	const SIGNUP = gql`
    query{
      mutation loginUser($email: String!, $password: String!) {
        tokenCreate(email: $email, password: $password) {
          token
          refreshToken
          csrfToken
          user {
            id
            email
            firstName
            lastName
            avatar {
              url
              alt
            }
          }
          accountErrors {
            field
            message
          }
        }
      }
      `;
	return (
		<>
			<></>
		</>
	);
};
export default Signup;

/** @format */

import { gql, useMutation } from "@apollo/client";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";

const Login = () => {
	const cookies = new Cookies();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const LOGIN = gql`
		mutation Login($email: String!, $password: String!) {
			tokenCreate(email: $email, password: $password) {
				token
				refreshToken
				csrfToken
				user {
					email
				}
				errors {
					field
					message
				}
			}
		}
	`;
	const VERIFY = gql`
		mutation Token($token: String!) {
			tokenVerify(token: $token) {
				isValid
				errors {
					field
					code
				}
			}
		}
	`;
	const [getVerification, { loading1, error1, data: validation }] = useMutation(
		VERIFY,
		{
			onCompleted: (validation) => {
				if (validation.tokenVerify.isValid) {
					cookies.set("token", data.tokenCreate.refreshToken, { path: "/" });
					dispatch({ type: "TRUE" });
				}
			},
			// console.log("isValid: ", validation.tokenVerify.isValid),
			onError: (error) => console.log("Error: ", error),
		}
	);
	const [getLogin, { loading, error, data }] = useMutation(LOGIN, {
		onCompleted: (data) =>
			getVerification({ variables: { token: data.tokenCreate.refreshToken } }),
		onError: (error) => console.log("error: ", error),
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		getLogin({ variables: { email: email, password: password } });
	};

	return (
		<Popup
			trigger={<button className='border-2 px-2 py-1 rounded-md'>Login</button>}
			modal>
			<form onSubmit={handleSubmit}>
				<div className='flex flex-col'>
					<div className='inline-block'>
						Email:
						<input
							type='text'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='inline-block'>
						Password:
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button>Submit</button>
				</div>
			</form>
		</Popup>
	);
};
export default Login;

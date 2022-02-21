import UserForm from "./UserForm";

const signup = (email, password) => {
  return fetch("/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return res.json();
  });
};

const Signup = (props) => {
  const handleSignup = (email, password) => {
    signup(email, password).then(() => {
      props.onSuccess();
    });
  };

  return <UserForm onSubmit={handleSignup} />;
};

export default Signup;

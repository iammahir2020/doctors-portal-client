import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = useToken(user);
  const handleGoogleSignin = () => {
    signInWithGoogle();
  };
  let errorMessage;
  let from = location.state?.from?.pathname || "/";
  // if (loading) {
  //   return <button className="btn loading">loading</button>;
  // }
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  if (error) {
    errorMessage = <p className="text-red-500">{error?.message}</p>;
  }
  return (
    <div>
      {loading ? (
        <button className="btn btn-outline btn-accent w-full max-w-md mb-3 loading">
          loading
        </button>
      ) : (
        <button
          onClick={handleGoogleSignin}
          className="btn btn-outline btn-accent w-full max-w-md mb-3"
        >
          Continue With Google
        </button>
      )}

      {errorMessage}
    </div>
  );
};

export default SocialLogin;

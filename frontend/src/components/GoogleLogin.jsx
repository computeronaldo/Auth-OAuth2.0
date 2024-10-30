const GoogleLogin = () => {
  const clientId =
    "479832262608-ekp2jdiavkmtvg5lil211sptfloliijs.apps.googleusercontent.com";
  const redirectUri = "http://localhost:3000/auth/google";
  const scopes = "openid profile email";

  const handleLogin = () => {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}`;
    window.location.href = authUrl;
  };

  return (
    <div className="app">
      <button onClick={handleLogin}>Login With Google</button>
    </div>
  );
};

export default GoogleLogin;

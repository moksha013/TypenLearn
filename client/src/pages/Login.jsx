import LoginForm from "../components/auth/LoginForm";

function Login() {
  return (
    <main
      className="
        min-h-screen
        w-full
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
        justify-center
        px-6
        py-10
        relative
      "
      style={{ backgroundImage: "url('/login-bg.png')" }}
    >

      {/* Soft pastel overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-lg">
        <LoginForm />
      </div>

    </main>
  );
}

export default Login;
import LoginForm from "../components/auth/LoginForm";

function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B1120] flex items-center justify-center px-6">

      {/* Top Left Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet-600/15 blur-3xl"></div>

      {/* Bottom Right Glow */}
      <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl"></div>

      {/* Center Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]"></div>

      {/* Login Card */}
      <div className="relative z-10">
        <LoginForm />
      </div>

    </div>
  );
}

export default Login;
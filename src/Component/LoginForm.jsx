function LoginForm({ isLogin, setisLogin }) {
  return (
    <div className="flex-1 gap-3 h-72 justify-center items-center flex flex-col">
      <div>
        <input
          className="rounded-md bg-slate-200 text-black px-2"
          type="Email"
          placeholder="email"
        />
      </div>
      <div>
        <input
          className="rounded-md   bg-slate-200 px-2"
          type="text"
          placeholder="Username"
        />
      </div>
      <div>
        <input
          className="rounded-md bg-slate-200 px-2"
          type="Password"
          placeholder="Password"
        />
      </div>
      <strong>
        <button className="bg-stone-300  px-3 rounded-md">Login</button>
      </strong>
      <div>
        <p>Dont have an account?</p>
        <button>
          <b onClick={() => setisLogin(!isLogin)}>Register</b>
        </button>
      </div>
    </div>
  );
}
export default LoginForm;

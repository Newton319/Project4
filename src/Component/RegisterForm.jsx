function RegisterForm({ isLogin, setisLogin }) {
  return (
    <div className="flex-1 gap-3 h-64 justify-center items-center flex flex-col">
      <div>
        <input
          className="rounded-md  bg-slate-200"
          type="Email"
          placeholder="email"
        />
      </div>
      <div>
        <input
          className="rounded-md bg-slate-200 px-2"
          type="text"
          placeholder="Username"
        />
      </div>
      <div>
        <input
          className="rounded-md  bg-slate-200 px-3"
          type="Password"
          placeholder="Password"
        />
      </div>
      <div>
        <input
          className="rounded-md  bg-slate-200 px-4"
          type="Password"
          placeholder="Comfirm Password"
        />
      </div>
      <strong>
        <button className="bg-stone-300 px-3 rounded-md">Sign Up</button>
      </strong>
      <div>
        <p>Already have an account?</p>
        <button>
          {" "}
          <b onClick={() => setisLogin(!isLogin)}>Login </b>
        </button>
      </div>
    </div>
  );
}
export default RegisterForm;

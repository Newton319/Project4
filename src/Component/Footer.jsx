function Footer() {
  return (
    <div className="flex flex-col md:flex-row bg-cyan-600  ">
      <div className="flex-1 py-11 ">
        {" "}
        contact us to know more @www.project4.com help
      </div>
      <div className="gap-4 py-12  ">
        {" "}
        <div>
          <input
            className="rounded-md h-10"
            type="text"
            placeholder="Send feedback"
          />
        </div>
        <div>
          <button className="bg-slate-400 px-2 rounded-md ">Send</button>
        </div>
      </div>
      <div className="flex-1 py-12 ">help Terms and Privacy</div>
    </div>
  );
}
export default Footer;

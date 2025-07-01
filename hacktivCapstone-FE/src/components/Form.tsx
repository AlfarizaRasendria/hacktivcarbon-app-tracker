const Form = () => {
  return (
    <form className="d-flex flex-column">
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label text-light">Username</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="inputEmail3" />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label text-light">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword3" />
        </div>
      </div>
      <button type="submit" className="btn btn-success align-self-end" style={{width: '100%', maxWidth: '100px'}}>Sign in</button>
    </form>
  );
};

export default Form;
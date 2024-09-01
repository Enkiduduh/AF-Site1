function FormCreateAccount() {
  return (
    <>
      <div className="form-container">
        <form className="formCreate">
          <div className="form-content">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" required></input>
          </div>
          <div className="form-content">
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" required></input>
          </div>
          <div className="recover">
            <label htmlFor="recover">
              <input type="submit" value="I lost my password"></input>
            </label>
          </div>
          <div className="submit">
            <input type="submit" value="Login"></input>
          </div>
          <div className="createNew">
            <input type="submit" value="Create New Account"></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormCreateAccount;

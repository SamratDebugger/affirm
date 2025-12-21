export default function UserForm({ title }) {
  return (
    <form className="fieldset">
      <h1 className="text-center text-4xl">{title}</h1>

      <label className="label">Email</label>
      <input required type="email" className="input" placeholder="Email" />

      <label className="label">Password</label>
      <input
        required
        minLength="6"
        type="password"
        className="input"
        placeholder="Password"
      />

      <button className="btn btn-success mt-4">{title}</button>
    </form>
  );
}

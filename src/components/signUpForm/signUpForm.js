import { useState, useEffect } from "react";
// import { Switch } from "react-router";
import s from "./signUpForm.module.css";

export default function SignUpForm() {
  const [email, setEmail] = useState(
    JSON.parse(window.localStorage.getItem("email")) ?? ""
  );
  const [password, setPassword] = useState(
    JSON.parse(window.localStorage.getItem("password")) ?? ""
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };
  useEffect(() => {
    window.localStorage.setItem("email", JSON.stringify(email));
  }, [email]);

  useEffect(() => {
    window.localStorage.setItem("password", JSON.stringify(password));
  }, [password]);
  return (
    <form className={s.form} autoComplete="off">
      <label className={s.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label className={s.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>
    </form>
  );
}

// class OldSignUpForm extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form className={s.form} autoComplete="off">
//         <label className={s.label}>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>
//         <label className={s.label}>
//           <span>Пароль</span>
//           <input
//             type="password"
//             name="password"
//             onChange={this.handleChange}
//             value={this.state.password}
//           />
//         </label>
//       </form>
//     );
//   }
// }

import { Switch, Route } from "react-router-dom";
// import AppBar from "./components/AppBar/AppBar";
import SignupForm from "./components/signUpForm/signUpForm";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Counter from "./components/Counter/Counter";
// import Clock from "./components/Clock/Clock";
// import PokemonView from "./views/PokemonView";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const containerStyles = {
  maxWidth: 1170,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 15,
  paddingRight: 15,
};

export default function App() {
  return (
    <div style={containerStyles}>
      {/* <AppBar /> */}

      <Switch>
        <Route path="/signup">
          <SignupForm />
        </Route>

        <Route path="/colorpicker">
          <ColorPicker options={colorPickerOptions} />
        </Route>

        <Route path="/counter">
          <Counter />
        </Route>

        {/* <Route path="/clock"><Clock /></Route> */}

        {/* <Route path="/pokemon"><PokemonView /></Route> */}
      </Switch>
    </div>
  );
}

// import { Component } from "react";
// import { ToastContainer } from "react-toastify";
// import PokemonForm from "./components/PokemonForm";
// import PokemonInfo from "./components/PokemonInfo";

// export default class App extends Component {
//   state = {
//     pokemonName: "",
//   };

//   handleFormSubmit = (pokemonName) => {
//     this.setState({ pokemonName });
//   };

//   render() {
//     return (
//       <div style={{ maxWidth: 1170, margin: "o auto", padding: 20 }}>
//         <PokemonForm onSubmit={this.handleFormSubmit} />
//         <PokemonInfo pokemonName={this.state.pokemonName} />
//         <ToastContainer autoClose={3000} />
//       </div>
//     );
//   }
// }

// Простий варіант
// export default class App extends Component{

//   state = {
//   pokemon: null,
//   loading: false,
// }

//   componentDidMount() {
//     this.setState({ loading: true });

//     setTimeout(() => {
//       fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//         .then(res => res.json())
//         .then(pokemon => this.setState({ pokemon }))
//           .finally(() => this.setState({ loading: false }));
//     }, 1000);
//   };

//   render() {
//     return (
//       <div style={{ maxWidth: 1170, margin: 'o auto', padding: 20 }}>
//         <ToastContainer autoClose={3000} />
//         {/* {this.state.pokemon && (<div>Тут будет покемон после фетча и когда в стейт запишем </div>)} */}
//         {this.state.loading && <h1>Загружаем</h1>}
//         {this.state.pokemon && (<div>{this.state.pokemon.name} </div>)}

//       </div>
//     );
//   };
// };

// LANGKAH PRAKTIKUM BASIC ROUTER
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// export default function BasicExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//         <hr/>

//         <Routes>
//           <Route path="/" element={<Home />}/>
//           <Route path="/about" element={<About />}/>
//           <Route path="/dashboard" element={<Dashboard />}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

// LANGKAH PRAKTIKUM URL PARAMETERS
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useParams
// } from "react-router-dom";

// export default function ParamsExample() {
//   return (
//     <Router>
//       <div>
//         <h2>Accounts</h2>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">Gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">Amazon</Link>
//           </li>
//         </ul>

//         <Routes>
//           <Route path="/:id" element={<Child />}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function Child() {
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID : {id}</h3>
//     </div>
//   );
// }

// LANGKAH PRAKTIKUM USE NESTING ROUTER
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useParams,
//   Outlet
// } from "react-router-dom";

// export default function NestingExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>
//         <hr/>

//         <Routes>
//           <Route path="/" element={<Home />}/>
//           <Route path="/topics" element={<Topics />}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function Topics() {
//   // path untuk membuat jalur <Route> yang terhadap rute induk,
//   // url digunakan untuk membuat link.
//   let { path, url } = Outlet();
//   return (
//     <div>
//       <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${url}/Sate, Nasi Goreng`}>Kuliner</Link>
//       </li>
//       <li>
//         <Link to={`${url}/Wisata Alam, Nasi Goreng`}>Travelling</Link>
//       </li>
//       <li>
//         <Link to={`${url}/Ibis, JW Merriot`}>Review Hotel</Link>
//       </li>
//     </ul>
//     <hr/>
//     <Routes>
//       <Route path={path}>
//         <h3>Please select a topic</h3>
//       </Route>
//       <Route path={`${path}/:topicId`} element={<Topic />}/>
//     </Routes>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();

//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );   
// }

// LANGKAH PRAKTIKUM USE REDIRECTS (AUTH)
// import React, { useContext, createContext, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useLocation,
//   useNavigate,
//   Navigate,
//   Outlet
// } from "react-router-dom";

// export default function AuthExample() {
//   return (
//     <ProvideAuth>
//       <Router>
//         <div>
//           <AuthButton />

//           <ul>
//             <li>
//               <Link to="/public">Public Page</Link>
//             </li>
//             <li>
//               <Link to="/protected">Protected Page</Link>
//             </li>
//           </ul>

//           <Routes>
//             <Route path="/public" element={<PublicPage/>}/>
//             <Route path="/login" element={<LoginPage/>}/>
//             <Route element={<PrivateRoute/>}>
//               <Route path="/protected" element={<ProtectedPage/>}/>
//             </Route>
//           </Routes>
//         </div>
//       </Router>
//     </ProvideAuth>
//   );
// }

// const fakeAuth = {
//   isAuthenticated: false,
//   signin(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// const authContext = createContext();

// function ProvideAuth({ children }) {
//   const auth = useProvideAuth();
//   return (
//     <authContext.Provider value={auth}>
//       {children}
//     </authContext.Provider>
//   );
// }

// function useAuth() {
//   return useContext(authContext);
// }

// function useProvideAuth() {
//   const [user, setUser] = useState(null);

//   const signin = cb => {
//     return fakeAuth.signin(() => {
//       setUser("user");
//       cb();
//     });
//   };

//   const signout = cb => {
//     return fakeAuth.signout(() => {
//       setUser(null);
//       cb();
//     });
//   };

//   return {
//     user,
//     signin,
//     signout
//   };
// }

// function AuthButton() {
//   let navigate = useNavigate();
//   let auth = useAuth();

//   return auth.user ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           auth.signout(() => navigate("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

// function PrivateRoute({ children, ...rest}){
//   let auth = useAuth();
//   return auth.user ? <Outlet /> : <Navigate to="/login" />;
// }

// function PublicPage() {
//   return <h3>Public</h3>;
// }

// function ProtectedPage() {
//   return(
    
//     <h3>Protected</h3>
//   );
// }

// function LoginPage() {
//   let navigate = useNavigate();
//   let location = useLocation();
//   let auth = useAuth();

//   let { from } = location.state || { from: { pathname: "/protected" } };
//   let login = () => {
//     auth.signin(() => {
//       navigate("/", {replace: true});
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }

// Tugas Praktikum
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  Navigate
} from "react-router-dom";

export default function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/private">Private</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/private/*" 
            element={
              <PrivateRoute >
                <Barangs />
              </PrivateRoute>
            } 
          ></Route>
          <Route 
            path="/private/barang/Elektronik/*" 
            element={
              <PrivateRoute >
                <Barangs >
                  <BarangElektroniks />
                </Barangs>
              </PrivateRoute>
            } 
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated : false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useNavigate();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
        >
          Sign out
        </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children }) {
  return fakeAuth.isAuthenticated ? ( children ) : <Navigate to={{ pathname: "/login" }} />;
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Private</h3>
}

function LoginPage() {
  let history = useNavigate();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at { from.pathname }</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

// NESTED
function Barangs() {
  return (
    <div>
      <h2>Barang</h2>
      <ul>
        <li>
          <Link to={"/private/barang/Elektronik"}>Elektronik</Link>
        </li>
        <li>
          <Link to={"/private/barang/Pakaian"}>Pakaian</Link>
        </li>
        <li>
          <Link to={"/private/barang/Sepatu"}>Sepatu</Link>
        </li>
      </ul>

      <Routes>
        {/* <Route path="/" element={<h3>Harap pilih barang.</h3>} /> */}
        <Route path="/private/barang/Elektronik" element={<BarangElektroniks />} />
        <Route path="/private/barang/Pakaian" element={<BarangPakaian />} />
        <Route path="/private/barang/Sepatu" element={<BarangSepatu />} />
      </Routes>
    </div>
  );
}

function BarangElektroniks() {
  return (
    <div>
      <h2>Barang Elektronik</h2>
    </div>
  );
}

function BarangPakaian() {
  return (
    <div>
      <h2>Barang Pakaian</h2>
    </div>
  );
}
function BarangSepatu() {
  return (
    <div>
      <h2>Barang Sepatu</h2>
    </div>
  );
}
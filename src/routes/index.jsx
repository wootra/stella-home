import Components from 'views/Components/Components.jsx'
import LandingPage from 'views/LandingPage/LandingPage.jsx'
import ProfilePage from 'views/ProfilePage/ProfilePage.jsx'
import LoginPage from 'views/LoginPage/LoginPage.jsx'
import App from 'views/App/App.js'
import Home from 'views/Home'
import Login from 'views/Login'

var indexRoutes = [
  { path: '/landing-page', name: 'LandingPage', component: LandingPage },
  { path: '/profile-page', name: 'ProfilePage', component: ProfilePage },
  { path: '/login-page', name: 'LoginPage', component: LoginPage },
  // { path: "/", name: "Components", component: Components }
  { path: '/components', name: 'Components', component: Components },
  { path: '/login', name: 'Login', component: Login },
  { path: '/', name: 'Stella', component: Home }
]

export default indexRoutes

import { createStore } from 'vuex'
import users from './modules/users'
import loader from "./modules/loader";
import snackbar from "./modules/snackbar";

export default createStore({
  modules: {
    users,
    loader,
    snackbar
  }
})
// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//     name:"auth",
//     initialState:{
//         loading:false,
//         user:null
//     },
//     reducers:{
//         // actions
//         setLoading:(state, action) => {
//             state.loading = action.payload;
//         },
//         setUser:(state, action) => {
//             state.user = action.payload;
//         }
//     }
// });
// export const {setLoading, setUser} = authSlice.actions;
// export default authSlice.reducer;

// redux/authSlice.js
// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,      // current logged-in user
  loading: false,  // to track login/signup requests
  error: null,     // to store auth errors
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;     // clear any previous error
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, logout, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;

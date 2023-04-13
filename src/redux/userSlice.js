import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  userData: user ? user : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    resetUser: () => initialState,
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;

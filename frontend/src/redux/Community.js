import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  talks: [{ id: 1, text: "Todo 1"  } ,
   {id : 2 , text : "lorem lepsum and luana nagual dua lis"},
   {id : 3 , text : "lorem lepsum and luana nagual dua lis"},
   {id : 4 , text : "lorem lepsum and luana nagual dua lis"},
   {id : 5 , text : "lorem lepsum and luana nagual dua lis"},
   {id : 6 , text : "lorem lepsum and luana nagual dua lis"}
  ],
};

export const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    addtalks: (state, action) => {
      const talks = {
        id: nanoid(),
        text: action.payload,
      };
      state.talks.push(talks);
    },

    removetalks: (state, action) => {
      state.talks = state.talks.filter((talk) => talk.id !== action.payload);
    },
  },
});

export const { addtalks, removetalks } = communitySlice.actions;
export default communitySlice.reducer;

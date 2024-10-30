import { createSlice } from "@reduxjs/toolkit";
import games from '../Games/Games1420/Games1420.json'
const Games1420Slice = createSlice({
    name:"games",
    initialState:{
        value: games 
    },
    reducers:{

    }
})

export default Games1420Slice.reducer;
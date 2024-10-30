import { createSlice } from "@reduxjs/toolkit";
import cardsData from '../CardsData/CardsData.json'
const CardsDataSlice = createSlice({
    name:"data",
    initialState:{
        value: cardsData 
    },
    reducers:{

    }
})

export default CardsDataSlice.reducer;
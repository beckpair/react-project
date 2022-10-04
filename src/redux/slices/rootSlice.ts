import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        "Name": "The Fool", 
        "Zodiac": "Uranus", 
        "Element": "Air", 
        "Arcana": "Major", 
        "Upright": "Beginnings, innocence, spontaneity, free-spirited", 
        "Reversed_": "Holding back, recklessness, risk-taking", 
        "Gender": "Masculine", "Suit": null
        },
    reducers: {
        chooseName: (state, action) => { state.Name = action.payload},
        chooseZodiac: (state, action) => { state.Zodiac = action.payload},
        chooseElement: (state, action) => { state.Element = action.payload},
        chooseArcana: (state, action) => { state.Arcana = action.payload},
        chooseUpright: (state, action) => { state.Upright = action.payload},
        chooseReversed_: (state, action) => { state.Reversed_ = action.payload},
        chooseGender: (state, action) => { state.Gender = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseZodiac, chooseElement, chooseArcana, chooseUpright, chooseReversed_, chooseGender } = rootSlice.actions;
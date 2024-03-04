import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        fixedSidePanel: false, 
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        setFixedSidePanel: (state) => {
            state.fixedSidePanel = true;
        },
        removeFixedSidePanel: (state) => {
            state.fixedSidePanel = false;
        }
    },
});

export const { toggleMenu, closeMenu, setFixedSidePanel, removeFixedSidePanel } = appSlice.actions;
export default appSlice.reducer;

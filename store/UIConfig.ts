import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// State type
interface UIConfig {
  count: number;
}

// Helper function to load from localStorage
const loadFromLocalStorage = (): UIConfig => {
  try {
    const serializedState = localStorage.getItem("UIConfig");
    if (serializedState === null) {
      return { count: 0 }; // Default initial state
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Failed to load state from localStorage", e);
    return { count: 0 }; // Fallback to default initial state
  }
};

// Helper function to save to localStorage
const saveToLocalStorage = (state: UIConfig) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("UIConfig", serializedState);
  } catch (e) {
    console.warn("Failed to save state to localStorage", e);
  }
};

// Initial state
const initialState: UIConfig = loadFromLocalStorage();

const UIConfigSlice = createSlice({
  name: "UIConfig",
  initialState,
  reducers: {
    // Action to update the entire UIConfig state
    setUIState(state, action: PayloadAction<UIConfig>) {
      state = action.payload;
      saveToLocalStorage(state); // Save updated state to localStorage
    },
    increment(state) {
      state.count += 1;
      saveToLocalStorage(state); // Save updated state to localStorage
    },
    decrement(state) {
      state.count -= 1;
      saveToLocalStorage(state); // Save updated state to localStorage
    },
  },
});

export const { setUIState, increment, decrement } = UIConfigSlice.actions;
export default UIConfigSlice.reducer;

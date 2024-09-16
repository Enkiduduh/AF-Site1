import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

export const updateUserData = createAsyncThunk(
  'auth/updateUserData',
  async (updatedFields, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;

    try {
      const response = await fetch('http://localhost:3000/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedFields),
      });

      if (!response.ok) {
        throw new Error('Failed to update user data');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isLogged: false,
    user: null,
    status: 'idle', // Pour suivre le statut de l'action
    error: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.isLogged = true;
    },
    clearToken: (state) => {
      state.token = null;
      state.isLogged = false;
      state.user = null;
      localStorage.removeItem('token');
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload; // Mettre à jour les données utilisateur
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setToken, clearToken, setUserData  } = authSlice.actions;

export default authSlice.reducer;

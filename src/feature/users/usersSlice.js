import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../configs/api";

export const login = createAsyncThunk("users/login", async (data, thunkAPI) => {
    try {
        const result = await api.post('/auth/login', {
            email: data.email,
            password: data.password
        })
        return result.data
    } catch (error) {
        const message = error.response.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const register = createAsyncThunk("users/register", async (data, thunkAPI) => {
    try {
        const result = await api.post('/workers/register', {
            email: data.email,
            password: data.password,
            name: data.name,
            phone: data.phone
        })
        return result.data
    } catch (error) {
        const message = error.response.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const registerRecruiter = createAsyncThunk("users/registerRecruiter", async (data, thunkAPI) => {
    try {
        const result = await api.post('/recruiters/register', {
            email: data.email,
            password: data.password,
            name: data.name,
            company: data.company,
            position: data.position,
            phone: data.phone
        })
        return result.data
    } catch (error) {
        const message = error.response.message
        return thunkAPI.rejectWithValue(message)
    }
})

const initialState = {
    name: '',
    count: 0,
    loading: false,
    user: null,
    role: null,
    error: null
}

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        },
    },
    extraReducers(builder) {

        //login -------------------------------------------------------
        builder.addCase(login.pending, (state) => {
            state.loading = true
        })

        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload)
            localStorage.setItem('token', action.payload.data.token)
            localStorage.setItem('refreshToken', action.payload.data.token)
            localStorage.setItem('role', action.payload.data.role)
           
            state.loading = false
            state.user = action.payload
            state.role = action.payload.data.role 
        })

        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
           
        })

        // register --------------------------------------------------

        builder.addCase(register.pending, (state) => {
            state.loading = true
        })

        builder.addCase(register.fulfilled, (state, action) => {
            console.log(action.payload)

            state.loading = false
            state.user = action.payload
        })

        builder.addCase(register.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
           
        })

        // registerRecruiter -----------------------------------------

        builder.addCase(registerRecruiter.pending, (state) => {
            state.loading = true
        })

        builder.addCase(registerRecruiter.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loading = false
            state.user = action.payload
        })

        builder.addCase(registerRecruiter.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const { changeName } = usersSlice.actions

export default usersSlice.reducer
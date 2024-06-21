import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../configs/api";


// const testAsync = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(true)
//         }, 2000)
//     })
// }

// export const incrementAsync = createAsyncThunk("users/increment", async (thinkAPI) => {
//     await testAsync()
//     return 'benar'
// })

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

const initialState = {
    name: '',
    count: 0,
    loading: false,
    user: null
}

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        },
        // increment: async (state) => {
        //     await testAsync()
        //     state.count = state.count + 1
        // },
        // decrement: (state) => {
        //     state.count = state.count - 1
        // }
    },
    extraReducers(builder) {
        // builder.addCase(incrementAsync.pending, (state) => {
        //     state.loading = true
        // })

        // builder.addCase(incrementAsync.fulfilled, (state) => {
        //     state.loading = false
        //     state.count = state.count + 1
        // })

        // builder.addCase(incrementAsync.rejected, (state) => {
        //     state.loading = false
        // })

        //login -------------------------------------------------------

        builder.addCase(login.pending, (state) => {
            state.loading = true
        })

        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload)
            localStorage.setItem('token', action.payload.data.token)
            localStorage.setItem('refreshToken', action.payload.data.token)

            state.loading = false
            state.user = action.payload
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
    }
})

// export const { changeName, increment, decrement } = usersSlice.actions

export default usersSlice.reducer
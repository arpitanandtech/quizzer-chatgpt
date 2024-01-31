import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CHAT_GPT } from "../../consts/consts";
import TypeQuiz from "../../views/QuizPage/Quiz.interface";

const getQuiz = createAsyncThunk('getQuiz', async () => {
  const storage = JSON.parse(localStorage.getItem("payload") as string);
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer `+CHAT_GPT.KEY,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo-1106', 
      messages: [
        { role: 'user', content: `Give me One very ramdom, unique and non-repetitive question with 4 options and correct answer related to ${storage.title}? give me a json object with Question string,  Options with array of string and Answer with string!` },
      ],
    }),
  });

  // Parse and update state with the response
  const data = await response.json();

  return data?.choices[0]; 
});

export interface TYPE_INITIAL_STATE {
  isLoading: boolean,
  data: TypeQuiz,
  error?: null | unknown
}

const INITIAL_STATE: TYPE_INITIAL_STATE = {
  isLoading: false,
  data: {},
  error: null
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState: INITIAL_STATE,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getQuiz.pending , (state) => {
      state.isLoading = true;
    });

    builder.addCase(getQuiz.fulfilled , (state, action) => {
      state.isLoading = false;
      state.data = JSON.parse(action.payload.message.content);
    });

    builder.addCase(getQuiz.rejected , (state) => {
      state.isLoading = false;
    });
  }
});

export default quizSlice.reducer;

export {getQuiz};
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Tweet {
  _id: number;
  author: { username: string; firstName: string };
  content: string;
  createdAt: Date;
  likes: { username: string }[];
  // Add other tweet properties as needed
}
interface TweetState {
  value: Tweet[];
}

const initialState: TweetState = {
  value: [],
};

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    setTweets: (state, action: PayloadAction<Tweet[]>) => {
      state.value = action.payload;
    },
    addTweet: (state, action: PayloadAction<Tweet>) => {
      state.value.unshift(action.payload);
    },
    deleteTweet: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((tweet) => tweet._id !== action.payload);
    },
    isLiked: (
      state,
      action: PayloadAction<{ tweetId: number; username: string }>
    ) => {
      const index = state.value.findIndex(
        (tweet) => tweet._id === action.payload.tweetId
      );
      const isLiked = state.value[index].likes.some(
        (e) => e.username === action.payload.username
      );

      if (isLiked) {
        state.value[index].likes = state.value[index].likes.filter(
          (e) => e.username !== action.payload.username
        );
      } else {
        state.value[index].likes.push({ username: action.payload.username });
      }
    },
  },
});

export const { setTweets, addTweet, deleteTweet, isLiked } = tweetSlice.actions;
export const tweetReducer = tweetSlice.reducer;

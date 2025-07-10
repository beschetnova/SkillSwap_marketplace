import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ExchangeState {
  proposed: Record<string, boolean>;
}

const initialState: ExchangeState = {
  proposed: {}
};

const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    proposeExchange: (
      state,
      action: PayloadAction<{ fromUserId: string; toUserId: string }>
    ) => {
      const { toUserId } = action.payload;
      state.proposed[toUserId] = true;
    }
  }
});

export const { proposeExchange } = exchangeSlice.actions;
export default exchangeSlice.reducer;

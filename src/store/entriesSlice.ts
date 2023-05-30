import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from "./store";
import { PriceTemplateItemReadDto } from '../types';
import {sampleData} from "../sampleData";

interface EntriesState {
    entries: PriceTemplateItemReadDto[];
    selectedEntry: PriceTemplateItemReadDto | null;
}

const initialState: EntriesState = {
    entries: sampleData,
    selectedEntry: null,
};

const entriesSlice = createSlice({
    name: 'entries',
    initialState,
    reducers: {
        setEntries: (state, action: PayloadAction<PriceTemplateItemReadDto[]>) => {
            state.entries = action.payload;
        },
        selectEntry: (state, action: PayloadAction<string>) => {
            state.selectedEntry = state.entries.find((entry) => entry.id === action.payload) || null;
        },
        updateEntry: (state, action: PayloadAction<PriceTemplateItemReadDto>) => {
            const updatedEntry = action.payload;
            state.entries = state.entries.map((entry) =>
                entry.id === updatedEntry.id ? updatedEntry : entry
            );
            state.selectedEntry = updatedEntry;
        },
    },
});

export const { setEntries, selectEntry, updateEntry } = entriesSlice.actions;

export const selectEntries = (state: RootState) => state.entries.entries;
export const selectSelectedEntry = (state: RootState) => state.entries.selectedEntry;

export default entriesSlice.reducer;

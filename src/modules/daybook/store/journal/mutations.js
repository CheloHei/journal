export const setEntries = (state,entries) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}
export const updateEntries = (state,entry) => {
    
    const index = state.entries.findIndex(item => item.id === entry.id)

    state.entries[index] = entry
}
export const addEntry = (state,entry) => {
    state.entries = [entry,...state.entries]
}
export const deleteEntry = (state,id) => {
    //const index = state.entries.findIndex(item => item.id !== entry.id)
    state.entries = state.entries.filter(item => item.id !== id)
}
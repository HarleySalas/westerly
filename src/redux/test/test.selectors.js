import { createSelector } from "reselect"

const selectTest = state => state.test

export const selectCount = createSelector([selectTest], test => test.count)

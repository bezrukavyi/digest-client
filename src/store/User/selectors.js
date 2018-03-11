import { select } from 'redux-saga/effects'

export const accessHeaders = (state) => state.user.headers

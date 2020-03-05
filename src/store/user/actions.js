import axios from "axios";
import { baseUrl, authHeader } from "../../api";

export const SET_SESSION = "users/SET_SESSION_DATA";
export const REMOVE_SESSION = "users/REMOVE_SESSION_DATA";
export const UPDATE_USER_DATA = "users/UPDATE_USER_DATA";

export function updateUser(updateData, token) {
  return async (dispatch, getState) => {
    try {
      const authorization = authHeader(token);
      const updatedUserData = await axios.patch(
        `${baseUrl}/users`,
        updateData,
        authorization
      );

      dispatch(updateUserAction(updatedUserData.data));
    } catch (error) {
      throw error;
    }
  };
}

function updateUserAction(updateData) {
  return {
    type: UPDATE_USER_DATA,
    payload: updateData
  };
}

export function signUp(userData) {
  return async (dispatch, getState) => {
    try {
      const sessionData = await axios.post(`${baseUrl}/users`, userData);

      dispatch(setSessionAction(sessionData.data));
    } catch (error) {
      throw error;
    }
  };
}

export function login(loginData) {
  return async (dispatch, getState) => {
    try {
      const sessionData = await axios.post(`${baseUrl}/login`, loginData);

      dispatch(setSessionAction(sessionData.data));
    } catch (error) {
      throw error;
    }
  };
}

function setSessionAction(sessionData) {
  return {
    type: SET_SESSION,
    payload: sessionData
  };
}

export function logoutAction() {
  return {
    type: REMOVE_SESSION
  };
}

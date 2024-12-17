import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const token = AsyncStorage.getItem("token");

const api = axios.create({
  baseURL: "http://54.254.164.127/api/v1/",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
});

export const register = async (
  fullName,
  email,
  password,
  phoneNumber,
  avatarUrl
) => {
  try {
    if (!phoneNumber) {
      phoneNumber = "088899991010";
    }
    if (!avatarUrl) {
      avatarUrl =
        "https://media.licdn.com/dms/image/v2/D5635AQELiaZBuETVGw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1697527607522?e=1735009200&v=beta&t=IxNM41YHhrYWPbVynT75T7yy0zNuUsjTyRh9czBKR5I";
    }
    const response = await api.post("auth/register", {
      full_name: fullName,
      email,
      password,
      phone_number: phoneNumber,
      avatar_url: avatarUrl,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.errors || "Error registering user");
  }
};

export const login = async (email, password) => {
  try {
    const response = await api.post("auth/login", {
      email,
      password,
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Error logging in");
  }
};

export default api;

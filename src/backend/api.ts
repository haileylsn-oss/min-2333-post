import axios from "axios";

const BASE_URL = "https://ivory-dunlin-618889.hostingersite.com/invest/users.php";


// https://ivory-dunlin-618889.hostingersite.com/


// Get all users + transactions
export const getUsers = async () => {
  const response = await axios.post(BASE_URL, { action: "getUsers" });
  return response.data.users || [];
};

// Add new user
export const addUser = async (user: any) => {
  const response = await axios.post(BASE_URL, { action: "addUser", ...user });
  return response.data;
};

// Update user
export const updateUser = async (user: any) => {
  const response = await axios.post(BASE_URL, { action: "updateUser", ...user });
  return response.data;
};

// Delete user
export const deleteUser = async (id: number) => {
  const response = await axios.post(BASE_URL, { action: "deleteUser", id });
  return response.data;
};

// Add transaction
export const addTransaction = async (txn: any) => {
  const response = await axios.post(BASE_URL, { action: "addTransaction", ...txn });
  return response.data;
};

export const loginUser = async (data: { usernameOrEmail: string; password: string }) => {
  const response = await axios.post(BASE_URL, { action: "login", ...data });
  return response.data;
};


// Update transaction
export const updateTransaction = async (txn: any) => {
  const response = await axios.post(BASE_URL, { action: "updateTransaction", ...txn });
  return response.data;
};

// Delete transaction
export const deleteTransaction = async (id: number) => {
  const response = await axios.post(BASE_URL, { action: "deleteTransaction", id });
  return response.data;
};

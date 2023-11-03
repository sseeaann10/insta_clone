export const registerUser = (userData) => ({
    type: "REGISTER_USER",
    payload: userData,
  });

  export const deleteUser = (id) => ({
    type: "DELETE_USER",
    payload: id,
  });
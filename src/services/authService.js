const storeCredentials = [
  { storeName: "Store A", password: "storeA123" },
  { storeName: "Store B", password: "storeB456" }
];

export const login = (storeName, password) => {
  console.log("Attempting login with:", storeName, password); // Debugging log

  const store = storeCredentials.find(
    (store) => store.storeName === storeName && store.password === password
  );

  if (store) {
    localStorage.setItem("loggedInStore", storeName);
    return true;
  }

  return false;
};

export const getLoggedInStore = () => {
  return localStorage.getItem("loggedInStore");
};

export const logout = () => {
  localStorage.removeItem("loggedInStore");
};

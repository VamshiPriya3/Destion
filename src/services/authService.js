
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
    return true;  // Return true for successful login
  }

  return false; 
};


export const getLoggedInStore = () => {
  return localStorage.getItem("loggedInStore"); // Retrieve the logged-in store from localStorage
};


export const logout = () => {
  localStorage.removeItem("loggedInStore"); // Remove the store from localStorage on logout
};

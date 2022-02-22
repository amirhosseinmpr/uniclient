export const setUsersToLocalStorage = (users: Array<string>) => {
  localStorage.setItem("USERS", JSON.stringify(users));
};

export const getUsersFromLocalStorage = (): Array<string> | undefined => {
  const usersJson: string | null = localStorage.getItem("USERS");
  let users: Array<string> | undefined;
  try {
    // ? Gets users only if usersJson's type equals string
    if (typeof usersJson === "string") users = JSON.parse(usersJson);
  } catch (e) {
    console.error("An error has occurred white getting users data.");
  }
  return users;
};

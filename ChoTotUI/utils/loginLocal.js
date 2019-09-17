const savedVariableName = "@LoggedIn"

const isLoggedIn = async () => {
  try {
    const value = await AsyncStorage.getItem(savedVariableName);

    if (value == null) {
      return true;
    }
  } catch (error) {
    // Error retrieving data
  }

  return false;
}

const logIn = async (userData) => {
  try {
    await AsyncStorage.setItem(savedVariableName, JSON.stringify(userData));
    return true;
  } catch (error) {

  }
  return false;
}

const logOut = async () => {
  try {
    await AsyncStorage.removeItem(savedVariableName);
    return true;
  } catch (error) {

  }
  return false;
}

export {
  isLoggedIn,
  logIn,
  logOut
}
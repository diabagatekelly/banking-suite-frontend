export function register_login({_token, user}) {
    localStorage.setItem("user_token", _token)
    localStorage.setItem("user_data", JSON.stringify(user))
    return {
      type: 'AUTH'
    };
  }

  export function logout() {
    localStorage.removeItem("user_token");
    localStorage.removeItem("user_data");
    localStorage.removeItem("suites");
    return {
      type: 'UNAUTH'
    };
  }
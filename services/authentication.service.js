class AuthenticationService {
  static authenticate(username, password) {
    const hardcodedUsername = 'admin@gmail.com';
    const hardcodedPassword = 'password';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      return { isAuthenticated: true, token: "sasaxsdlcihsdoichisdjnc" };
    } else {
      return { isAuthenticated: false, token: null };
    }
  }
}

module.exports = AuthenticationService;

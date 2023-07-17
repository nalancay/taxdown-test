export default class Users {
  static async getUsers() {
    try {
      const response = await fetch(`${BACKEND_URL}/users`);
      if (!response.ok) {
        throw new NetworkError();
      }

      const dataUsers = await response.json();
      return dataUsers;
    } catch (err) {
      return err;
    }
  }
}

class NetworkError extends Error {
  constructor() {
    super("Network error");
  }
}

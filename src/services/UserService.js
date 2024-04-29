import APIServiceBase from "./APIServiceBase";

class UserService extends APIServiceBase {
  login(data) {
    return this.http({
      method: "POST",
      url: this.url + "login",
      data,
    });
  }
  getAll() {
    return this.http({
      method: "GET",
      url: this.url + "getAll",
    });
  }
  getById(id) {
    return this.http({
      method: "GET",
      url: this.url + id,
    });
  }
}

export default function UserAPI(api, apiUser) {
  return {
    userService: new UserService(api, apiUser),
  };
}

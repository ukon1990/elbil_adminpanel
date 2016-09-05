export class Global{
  private static username: string;
  private static password: string;

  //Username
  getUsername(){
    return Global.username;
  }
  setUsername(username: string){
    Global.username = username;
  }
  //Password
  getPassword(){
    return Global.password;
  }
  setPassword(password: string){
    Global.password = password;
  }
}

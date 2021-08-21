const authenticate = (user) =>{
  if (user != null) {
    return user;
  }
  return false;
}



export default authenticate;
export const registerUserRequest=(formData: { username: string; email: string; password: string; })=>({
    type:'REGISTER_USER_REQUEST',
    payload:formData,
})
// export const registerUserSuccess = () => ({
//     type: 'REGISTER_USER_SUCCESS',
//   });
  
//   export const registerUserFailure = (error: string) => ({
//     type: 'REGISTER_USER_FAILURE',
//     payload: error,
//   });
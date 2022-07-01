function loadUsers(data) {
  return {
    type: 'ADD_USERS',
    payload: data,
  };
}

export default loadUsers;

import loadData from '../Store/Actions/loadData';
import loadUsers from '../Store/Actions/loadUsers';

const dataAPILink = `https://api.escuelajs.co/api/v1/products`;
const usersAPILink = `https://api.escuelajs.co/api/v1/users`;

const getData = () => {
  return function (dispatch) {
    fetch(dataAPILink)
      .then((response) => response.json())
      .then((json) => dispatch(loadData(json)));
  };
};

const getUser = () => {
  return function (dispatch) {
    fetch(usersAPILink)
      .then((response) => response.json())
      .then((json) => dispatch(loadUsers(json)));
  };
};

export { getUser, getData };

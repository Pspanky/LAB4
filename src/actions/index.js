import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  // CREATE_POST: 'CREATE_POST',
  // UPDATE_POST: 'UPDATE_POST',
  // DELETE_POST: 'DELETE_POST',
};

const ROOT_URL = 'http://localhost:9090/api/';

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts`).then((response) => {
      dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function createPost(post, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts`, post).then((response) => {
      history.push('/');
    }).catch((error) => {
      console.log('There\'s an error good luck lol');
    });
  };
}

export function updatePost(post, id) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}`, post).then((reponse) => {}).catch((error) => {
      console.log(error);
    });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}`).then((response) => {
      // do something with response.data  (some json)
      dispatch({ type: 'FETCH_POST', payload: response.data });
    }).catch((error) => {
      console.log('There\'s an error good luck lol');
    });
  };
}

export function deletePost(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}`).then((response) => {
      history.push('/');
    }).catch((error) => {
      console.log('There\'s an error good luck lol');
    });
  };
}

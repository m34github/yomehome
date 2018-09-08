import axios from 'axios';
import endpoint from '../.env/endpoint.json';

const JUDGE = 'JUDGE';
const ERROR = 'ERROR';

const judge = data => (dispatch) => {
  const datas = data.substring(data.indexOf(',') + 1);

  axios({
    method: 'post',
    url: endpoint.upload,
    headers: {
      Accept: '*',
      'Content-Type': 'application/json'
    },
    data: {
      image: datas
    }
  })
    .then((d) => {
      dispatch({
        type: JUDGE,
        payload: {
          keywords: d.data
        },
        meta: {
          judged: true
        }
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        error: err
      });
    });
};

const initialState = {
  judged: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case JUDGE: {
      return Object.assign({}, state, {
        keywords: action.payload.keywords,
        judged: action.meta.judged
      });
    }
    case ERROR: {
      return Object.assign({}, state, {
        error: action.error
      });
    }
    default: {
      return state;
    }
  }
};

export { judge };
export default reducer;

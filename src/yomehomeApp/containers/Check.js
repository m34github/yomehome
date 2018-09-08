import { connect } from 'react-redux';

import * as action from '../modules/check';
import Check from '../components/Check.jsx';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  judge: (data) => {
    dispatch(action.judge(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Check);

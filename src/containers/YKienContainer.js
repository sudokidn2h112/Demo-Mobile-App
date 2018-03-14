import { connect } from 'react-redux';
import YKienComponent from '../components/ykien/YKienComponent';

//Actions ?
import {  fetchYKienAction} from '../actions';
function mapStateToProps({ yKienReducers }, ownProps) {
    return {
        listYKien: yKienReducers.dataSource
    };
  }
  
const mapDispatchToProps = (dispatch) => {
    return {    
        onFetchYKien: () => {                     
            dispatch(fetchYKienAction());
        }, 
    };
}
const YKienContainer = connect(mapStateToProps, mapDispatchToProps)(YKienComponent);
export default YKienContainer;
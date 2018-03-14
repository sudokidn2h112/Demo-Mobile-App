import { connect } from 'react-redux';
import ChuDeComponent from '../components/chude/ChuDeComponent';

//Actions ?
import {  fetchChuDesAction} from '../actions';
function mapStateToProps({ chuDeReducers }, ownProps) {
    //alert(`list chu de container : ${JSON.stringify( chuDeReducers.dataSource)}`)
    return {
        listChuDes: chuDeReducers.dataSource
    };
  }
  
const mapDispatchToProps = (dispatch) => {
    return {    
        onFetchChuDes: () => {                        
            dispatch(fetchChuDesAction());
        }, 
        //Not necessary !   
        // onSuccessFetch: () => {                        
        //     dispatch(fetchSuccessAction());
        // }, 
        // onAddMovie: (newMovie) => {                        
        //     dispatch(addMovieAction(newMovie));
        // },
        // onUpdateItemAction: (updatedMovie) => {                        
        //     dispatch(updateItemAction(updatedMovie));
        // }, 
        // //Not necessary !  
        // onUpdateItemSuccessAction: (updatedMovie) => {                        
        //     dispatch(updateItemSuccessAction(updatedMovie));
        // }, 
        // //delete a movie
        //  onDeleteItemAction: (movieId) => {                        
        //     dispatch(deleteItemAction(movieId));
        // },
        // //Not necessary !  
        // onDeleteItemSuccessAction: (deletedMovie) => {                        
        //     dispatch(deleteItemSuccessAction(deletedMovie));
        // }, 
    };
}
const ChuDeContainer = connect(mapStateToProps, mapDispatchToProps)(ChuDeComponent);
export default ChuDeContainer;
import * as editorActions from './actions';
import * as modalActions from '../modal_actions';
import {connect} from 'react-redux';

import Editor from './Editor';

const mapStateToProps = state => (
    {
        showSidebar: state.editorUi.sideBarIsVisibal,
        bookTabs: state.mockData.tabs,
        bookSubTabs: state.mockData.subTab,
        dataToRender: state.editorUi.dataToRender,
        modalInfo: state.modals.modals[0],
    }
) 
const mapDispatchToProps = dispatch => (
    {
        showModal: obj => dispatch(modalActions.showModal(obj)),
        hideModal: obj => dispatch(modalActions.hideModal(obj)),
        toggleSideBar: () => dispatch(editorActions.cntrlSideBar()),
        toggleRenderView: (type,src) => dispatch(editorActions.renderMedia(type,src)),
        addEbookTab: () => dispatch(editorActions.addEbookTab()),
        removeEbookTab: id => dispatch(editorActions.removeEbookTab(id)), 
    }
) 

export default connect(mapStateToProps,mapDispatchToProps)(Editor);
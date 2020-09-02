import Home from '../screen/Home';
import { connect } from 'react-redux';
import { getEmployee } from '../redux/actions';

const mapStateToProps = state => ({
    employeeLoading: state.employee.employeeLoading,
    employeeData: state.employee.employeeData,
    employeeErrorMsg: state.employee.employeeErrorMsg
});

const mapDispatchToProps = {
    getEmployee
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
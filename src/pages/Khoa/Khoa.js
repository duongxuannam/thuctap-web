import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actDangXuatAPI } from '../../actions/index';


class Khoa extends Component {
    componentDidMount(){
        if(this.props.taiKhoan && this.props.taiKhoan.thongbao){
            this.props.actDangXuat();
        }
        
    }
    render() {
        if(this.props.taiKhoan && this.props.taiKhoan.taikhoan && !this.props.taiKhoan.taikhoan.khoa)
        {
            
            return <Redirect to={ `` }/>
        }
        return (
            <React.Fragment>
                <div className="thongbao-ghide-height">
                    <div className="container ">
                        <div class="panel panel-danger ">
                            <div class="panel-heading">Tài khoản của bạn đã bị khóa</div>
                            <div class="panel-body">Vui lòng hệ theo <Link to={`lienhe`}>thông tin</Link> để biết thêm chi tiết</div>

                        </div>
                    </div>
                </div>
                <div class="push"></div>
            </React.Fragment>

        );
    }
}
const mapStateToProps = state => {
    return {
        taiKhoan: state.taiKhoan
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actDangXuat: () => {
            dispatch(actDangXuatAPI());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Khoa);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DanhSachDangKyNhaTuyenDung from '../../components/DanhSachDangKyNhaTuyenDung';
import DanhSachTaiKhoan from '../../components/DanhSachTaiKhoan';
import { actLayDanhSachDangKyNhaTuyenDungAPI } from '../../actions/index';


class QuanLy extends Component {
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
        this.props.actLayDanhSachDangKyNhaTuyenDung();
    }
    render() {
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3 col-xs-12">
                                <div class="panel">
                                    <div class="panel-heading">
                                        <div class="panel-title">
                                            <span class="wc-editable" >Quản lý</span>
                                        </div>
                                    </div>

                                    <div class="panel-body pointer ">
                                        <a className='clr contro'
                                            >
                                            Danh sách đăng ký nhà tuyển dụng
                                          </a>
                                    </div>
                                    <div class="panel-body pointer">
                                    <Link to={`/quanlythanhvien`}className='contro'
                                           
                                        >
                                            Danh sách thành viên
                                         </Link>
                                    </div>
                                    <div class="panel-body pointer">
                                    <Link to={`/quanlycongviec`}  className= 'contro'
                                           >
                                            Danh sách công việc
                                         </Link>
                                    </div>
                                    <div class="panel-body pointer">
                                        <Link to={`quanlytintuc`} className= 'contro'
                                            >
                                            Danh sách tin tức
                                         </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-9 col-xs-12">

                                <div class="resume-head">
                                    <p>
                                        <a class="btn btn-back btn-secondary" >
                                            <span class="glyphicon glyphicon-menu-left"></span> Quay lại </a>
                                    </p>
                                </div>
                              <DanhSachDangKyNhaTuyenDung /> 
                                 {/* <DanhSachTaiKhoan />  */}


                            </div>
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
        actLayDanhSachDangKyNhaTuyenDung: () => {
            dispatch(actLayDanhSachDangKyNhaTuyenDungAPI());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanLy);


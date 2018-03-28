import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import DanhSachDangKyNhaTuyenDung from '../../components/DanhSachDangKyNhaTuyenDung';
import DanhSachTaiKhoan from '../../components/DanhSachTaiKhoan';
import { actLayDanhSachDangKyNhaTuyenDungAPI } from '../../actions/index';


class QuanLyDanhSachCongViec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dangChon: 'dkNhaTuyenDung'
        }
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
                                        <a className={this.state.dangChon === 'dkNhaTuyenDung' ? 'clr contro' : 'contro'}
                                            onClick={() => this.setState({ dangChon: 'dkNhaTuyenDung' })} >
                                            Danh sách đăng ký nhà tuyển dụng
                                          </a>
                                    </div>
                                    <div class="panel-body pointer">
                                        <a className={this.state.dangChon === 'thanhVien' ? 'clr contro' : 'contro'}
                                            onClick={() => this.setState({ dangChon: 'thanhVien' })}
                                        >
                                            Danh sách thành viên
                                         </a>
                                    </div>
                                    <div class="panel-body pointer">
                                        <a className={this.state.dangChon === 'congViec' ? 'clr contro' : 'contro'}
                                            onClick={() => this.setState({ dangChon: 'congViec' })} >
                                            Danh sách công việc
                                         </a>
                                    </div>
                                    <div class="panel-body pointer">
                                        <a className={this.state.dangChon === 'tinTuc' ? 'clr contro' : 'contro'}
                                            onClick={() => this.setState({ dangChon: 'tinTuc' })} >
                                            Danh sách tin tức
                                         </a>
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
                                {this.state.dangChon === 'dkNhaTuyenDung' ? <DanhSachDangKyNhaTuyenDung /> : ''}
                                {this.state.dangChon === 'thanhVien' ? <DanhSachTaiKhoan /> : ''}


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
        danhSachCongViec: state.danhSachCongViec
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actLayDanhSachDangKyNhaTuyenDung: () => {
            dispatch(actLayDanhSachDangKyNhaTuyenDungAPI());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanLyDanhSachCongViec);


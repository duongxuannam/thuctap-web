import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DanhSachDangKyNhaTuyenDung from '../../components/DanhSachDangKyNhaTuyenDung';
import DanhSachTaiKhoan from '../../components/DanhSachTaiKhoan';
import { actLayDanhSachTaiKhoanAPI, actSuaKhoaAPI } from '../../actions/index';

class QuanLyThanhVien extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
        this.props.actLayDanhSachTaiKhoan();
    }
    suaKhoa(data) {
        this.props.actSuaKhoa(data);
    }
    showData(data) {
        var result = null;
        if (data.length > 0) {
            result = data.map((item, index) => {
            const truyenvao = { _id: item._id, khoa: item.khoa }
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.email}</td>
                        <td>{item.hoten}</td>
                        <td>{item.sodienthoai}</td>
                        {item.kichhoatnhatuyendung ? <td><Link to={`/thongtinnhatuyendung/${item._id}`} onClick={() => window.scrollTo(0, 0)} class='contro clr'> Nhà tuyển dụng </Link></td> : <td><Link to={`/chitiettaikhoan/${item._id}`} onClick={() => window.scrollTo(0, 0)} class='contro'> Người dùng </Link></td>}
                        {item.khoa ? <td><a class='contro clr' onClick={()=> this.suaKhoa(truyenvao)}> Khóa </a></td> : <td><a class='contro gre' onClick={() =>this.suaKhoa(truyenvao)}> Bình thường </a></td>}

                    </tr>
                );
            });
        }
        return result;
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
                                        <Link to={`/quanly`} className= 'contro'
                                           >
                                            Danh sách đăng ký nhà tuyển dụng
                                          </Link>
                                    </div>
                                    <div class="panel-body pointer">
                                        <Link to={`/quanlythanhvien`} className='contro clr'
                                          
                                        >
                                            Danh sách thành viên
                                         </Link>
                                    </div>
                                    <div class="panel-body pointer">
                                    <Link to={`/quanlycongviec`} className='contro'
                                         >
                                            Danh sách công việc
                                         </Link>
                                    </div>
                                    <div class="panel-body pointer">
                                    <Link to={`/quanlytintuc`} className=' contro'
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
                             
                                <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh sách thành viên ({this.props.danhSachTaiKhoan.length})</h3>
                </div>
                <div className="panel-body ">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th >Email</th>
                                <th >Tên hiển thị</th>
                                <th >Số điện thoại</th>
                                <th >Loại tài khoản</th>
                                <th>Trạng thái</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" name="locTheoTen" class="form-control" placeholder="lọc theo email" />
                                </td>
                                <td>

                                </td>

                                <td>

                                </td>
                                <td></td>

                                <td></td>
                            </tr>



                            {this.showData(this.props.danhSachTaiKhoan)}

                        </tbody>
                    </table>
                </div>
            </div>


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
        danhSachTaiKhoan: state.danhSachTaiKhoan
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actLayDanhSachTaiKhoan: (data) => {
            dispatch(actLayDanhSachTaiKhoanAPI(data));
        },
        actSuaKhoa: (data) => {
            dispatch(actSuaKhoaAPI(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanLyThanhVien);


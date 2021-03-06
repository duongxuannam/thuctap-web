import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actLayDanhSachTaiKhoanAPI, actSuaKhoaAPI } from '../../actions/index';
import KhongDuocTruyCap from '../../components/KhongDuocTruyCap';

class QuanLyThanhVien extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locTheoEmail: '',
            locTheoTen: '',
            locTheoSDT: '',
            locTheoLoaiTaiKhoan: '',
            locTheoTrangThai: ''
        }
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
                        <td class='namMuoi'>{index + 1}</td>
                        <td class='baTram'>{item.email}</td>
                        <td>{item.hoten}</td>
                        <td>{item.sodienthoai}</td>
                        {item.kichhoatnhatuyendung ? <td><Link to={`/thongtinnhatuyendung/${item._id}`} onClick={() => window.scrollTo(0, 0)} class='contro clr'> Nhà tuyển dụng </Link></td> : <td><Link to={`/chitiettaikhoan/${item._id}`} onClick={() => window.scrollTo(0, 0)} class='contro'> Người dùng </Link></td>}
                        {item.khoa ? <td><a class='contro clr' onClick={() => this.suaKhoa(truyenvao)}> Khóa </a></td> : <td><a class='contro gre' onClick={() => this.suaKhoa(truyenvao)}> Bình thường </a></td>}

                    </tr>
                );
            });
        }
        return result;
    }
    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    timAdminTrongMang = (mang) => {
        var index = -1;
        if (mang.length > 0) {
            for (var i = 0; i < mang.length; i++) {
                if (mang[i].admin) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
    render() {
        const { locTheoEmail, locTheoTen, locTheoSDT, locTheoLoaiTaiKhoan, locTheoTrangThai } = this.state;
        var mang = this.props.danhSachTaiKhoan;
       var index =  this.timAdminTrongMang(mang)
       if (index !== -1) {
        mang.splice(index, 1);
    }
        if (locTheoEmail) {
            mang = mang.filter((item) => {
                return item.email.toLowerCase().indexOf(locTheoEmail.toLowerCase()) !== -1
            })
        };
        if (locTheoTen) {
            mang = mang.filter((item) => {
                return item.hoten.toLowerCase().indexOf(locTheoTen.toLowerCase()) !== -1
            })
        }
        if (locTheoSDT) {
            mang = mang.filter((item) => {
                return item.sodienthoai.toLowerCase().indexOf(locTheoSDT.toLowerCase()) !== -1
            })
        }
        if (locTheoLoaiTaiKhoan) {
            if (locTheoLoaiTaiKhoan === 'Người dùng') {
                mang = mang.filter((item) => {
                    return !item.kichhoatnhatuyendung
                })
            };
            if (locTheoLoaiTaiKhoan === 'Nhà tuyển dụng') {
                mang = mang.filter((item) => {
                    return item.kichhoatnhatuyendung
                })
            }
        }
        if (locTheoTrangThai) {
            if (locTheoTrangThai === 'Bình thường') {
                mang = mang.filter((item) => {
                    return !item.khoa
                })
            };
            if (locTheoTrangThai === 'Khóa') {
                mang = mang.filter((item) => {
                    return item.khoa
                })
            }
        }

        const ok = (
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
                                <Link to={`/quanly`} className='contro'
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
                                <h3 className="panel-title">Danh sách thành viên ({mang.length})</h3>
                            </div>
                            <div className="panel-body ">
                                <table className="table table-bordered table-hover quanlydaithietdai">
                                    <thead>
                                        <tr>
                                            <th class='namMuoi'>STT</th>
                                            <th class='baTram'>Email</th>
                                            <th >Tên hiển thị</th>
                                            <th >Số điện thoại</th>
                                            <th >Loại tài khoản</th>
                                            <th>Trạng thái</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class='namMuoi'></td>
                                            <td class='baTram'>
                                                <input type="text" name="locTheoEmail" class="form-control" placeholder="lọc theo email" value={locTheoEmail} onChange={this.onChange} />
                                            </td>
                                            <td>
                                                <input type="text" name="locTheoTen" class="form-control" placeholder="lọc theo tên" value={locTheoTen} onChange={this.onChange} />

                                            </td>

                                            <td>
                                                <input type="text" name="locTheoSDT" class="form-control" placeholder="lọc theo SDT" value={locTheoSDT} onChange={this.onChange} />

                                            </td>
                                            <td>
                                                <select type="text" name="locTheoLoaiTaiKhoan" value={locTheoLoaiTaiKhoan} onChange={this.onChange} class="form-control">
                                                    <option value="">Tất ca</option>
                                                    <option value="Người dùng">Người dùng</option>
                                                    <option value="Nhà tuyển dụng">Nhà tuyển dụng</option></select>
                                            </td>

                                            <td>
                                                <select type="text" name="locTheoTrangThai" value={locTheoTrangThai} onChange={this.onChange} class="form-control">
                                                    <option value="">Tất ca</option>
                                                    <option value="Bình thường">Bình thường</option>
                                                    <option value="Khóa">Khóa</option></select>
                                            </td>
                                        </tr>



                                        {this.showData(mang)}

                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
        )
        const main = this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan.admin ? ok : <KhongDuocTruyCap/>
        return (
            <React.Fragment>
               { main }
                <div class="push"></div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        taiKhoan: state.taiKhoan,
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


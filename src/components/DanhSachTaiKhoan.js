import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actLayDanhSachTaiKhoanAPI, actSuaKhoaAPI } from '../actions/index';

class DanhSachTaiKhoan extends Component {
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
            console.log('huhum ', truyenvao)
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
        );
    }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachTaiKhoan);

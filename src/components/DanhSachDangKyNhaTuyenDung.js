import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actDuyetNhaTuyenDungAPI } from '../actions/index';

class DanhSachDangKyNhaTuyenDung extends Component {
    constructor(props) {
        super(props);
        
    }

    showData(data) {
        var result = null;
        if (data.length > 0) {
            result = data.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.nhatuyendung.tencongty}</td>
                        <td>{item.nhatuyendung.email}</td>
                        <td>{item.nhatuyendung.sodienthoai}</td>
                        <td>
                            <p  className="btn btn-success-edit mr-10 mrl-edit " onClick={() => this.kichHoatNhaTuyenDung(item._id)} > Kích hoạt </p>
                        </td>
                        <td>
                            <Link to={`/thongtinnhatuyendung/${item._id}`} onClick={()=>window.scrollTo(0, 0)} className="btn btn-info-edit mr-10 mrl-edit" > Chi tiết </Link>
                        </td>
                    </tr>
                );
            });
        }
        return result;
    }
    kichHoatNhaTuyenDung(id) {
        this.props.actDuyetNhaTuyenDung(id);

    }
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh sách đăng ký nhà tuyển dụng</h3>
                </div>
                <div className="panel-body ">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th >Tên công ty</th>
                                <th >Email</th>
                                <th >Số điện thoại</th>
                                <th  ></th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" name="locTheoTen" class="form-control" placeholder="lọc theo tên công ty" />
                                </td>
                                <td>
                                    <input type="text" name="locTheoTen" class="form-control" placeholder="lọc theo email" />

                                </td>

                                <td>

                                </td>
                                <td></td>

                                <td></td>
                            </tr>



                            {this.showData(this.props.danhSachDangKyNhaTuyenDung)}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        danhSachDangKyNhaTuyenDung: state.danhSachDangKyNhaTuyenDung
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actDuyetNhaTuyenDung: (data) => {
            dispatch(actDuyetNhaTuyenDungAPI(data));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachDangKyNhaTuyenDung);

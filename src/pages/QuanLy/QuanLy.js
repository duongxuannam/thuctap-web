import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actLayDanhSachDangKyNhaTuyenDungAPI, actDuyetNhaTuyenDungAPI } from '../../actions/index';


class QuanLy extends Component {
    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })}
    componentDidMount() {
        this.props.actLayDanhSachDangKyNhaTuyenDung();
    }
    kichHoatNhaTuyenDung(id) {
        this.props.actDuyetNhaTuyenDung(id);
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
                            <a class = 'contro gre' onClick={() => this.kichHoatNhaTuyenDung(item._id)} > Kích hoạt </a>
                        </td>
                        <td>
                            <Link to={`/thongtinnhatuyendung/${item._id}`} onClick={()=>window.scrollTo(0, 0)} > Chi tiết </Link>
                        </td>
                    </tr>
                );
            });
        }
        return result;
    }
    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        })
    }
    render() {
        const { locTheoEmail, locTheoTenCongTy, locTheoSDT } = this.state;
        var  mang  = this.props.danhSachDangKyNhaTuyenDung;
        if(locTheoEmail){
            mang = mang.filter((item) => {
                return item.nhatuyendung.email.toLowerCase().indexOf(locTheoEmail.toLowerCase()) !== -1
            })
        };
        if(locTheoTenCongTy){
            mang = mang.filter((item) => {
                return item.nhatuyendung.tencongty.toLowerCase().indexOf(locTheoTenCongTy.toLowerCase()) !== -1
            })
        }
        if(locTheoSDT){
            mang = mang.filter((item) => {
                return item.nhatuyendung.sodienthoai.toLowerCase().indexOf(locTheoSDT.toLowerCase()) !== -1
            })
        }
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
                                <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Danh sách đăng ký nhà tuyển dụng ({ mang.length })</h3>
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
                                                <input type="text" name="locTheoTenCongTy" class="form-control" placeholder="lọc theo tên" value={locTheoTenCongTy} onChange={this.onChange}/>
                                                </td>
                                                <td>
                                                <input type="text" name="locTheoEmail" class="form-control" placeholder="lọc theo email" value={locTheoEmail} onChange={this.onChange} />
                
                                                </td>
                
                                                <td>
                                                <input type="text" name="locTheoSDT" class="form-control" placeholder="lọc theo SDT" value={locTheoSDT} onChange={this.onChange}/>

                                                </td>
                                                <td></td>
                
                                                <td></td>
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
                <div class="push"></div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        danhSachDangKyNhaTuyenDung: state.danhSachDangKyNhaTuyenDung
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actLayDanhSachDangKyNhaTuyenDung: () => {
            dispatch(actLayDanhSachDangKyNhaTuyenDungAPI());
        },
        actDuyetNhaTuyenDung: (data) => {
            dispatch(actDuyetNhaTuyenDungAPI(data));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanLy);


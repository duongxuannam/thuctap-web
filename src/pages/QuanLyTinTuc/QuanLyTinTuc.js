import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { actLayDanhSachTinTucAPI, actXoaTinTucAdminAPI } from '../../actions/index';
import KhongDuocTruyCap from '../../components/KhongDuocTruyCap';

class QuanLyTinTuc extends Component {
    constructor(props){
        super(props);
        this.state = {
            locTheoTieuDe: ''
        }
    }
    componentDidMount() {
            return this.props.actLayDanhSachTinTuc()
        }
    xoaTinTuc(id) {
        this.props.actXoaTinTucAdmin(id);
    }
    showData(data) {
        var result = null;
        if (data.length > 0) {
            result = data.map((item, index) => {
                return (

                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.tieude}</td>
                        <td>{moment(item.ngaydang).utc().format('DD-MM-YYYY')}</td>

                        <td>{item.luotxem} lượt</td>
                        {/* <td className='text-center'>
                        <span class="label label-danger">hết hạn</span>
                    </td> */}


                        <td><Link to={`/chitiettintuc/${item._id}`} class='contro'>Xem</Link></td>
                        <td>
                            {/* <a  onClick={this.xoaTinTuc(item._id)}>   Xóa  </a> */}
                            <a onClick={() =>{if(window.confirm('Bạn chắc chắn muốn xóa?')){ this.xoaTinTuc(item._id)} } } class='contro clr'>   Xóa  </a>

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
        const { locTheoTieuDe } = this.state;
        var  mang  = this.props.danhSachTinTuc;
        if(locTheoTieuDe){
            mang = mang.filter((item) => {
                return item.tieude.toLowerCase().indexOf(locTheoTieuDe.toLowerCase()) !== -1
            })
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
                                <Link to={`/quanlythanhvien`} className='contro '

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
                                <Link to={`/quanlytintuc`} className=' contro clr'
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
                            <h3 className="panel-title">Danh sách tin tức đã đăng ({ mang.length })</h3>
                        </div>
                        <div className="panel-body ">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tiêu đề</th>
                                        <th>Ngày đăng</th>
                                        <th>Lượt xem</th>
                                    
                                        <th></th>
                                        
                                    </tr>
                                </thead>
                                <tbody>


                                    <tr>
                                        <td></td>
                                        <td>
                                        <input type="text" name="locTheoTieuDe" class="form-control" placeholder="lọc theo tiêu đề"  value = {locTheoTieuDe} onChange={this.onChange} />
                                        </td>
                                        <td>

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
    // console.log('log state dc ko', state)
    return {
        taiKhoan: state.taiKhoan,
        danhSachTinTuc: state.danhSachTinTuc,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actLayDanhSachTinTuc: () => {
            dispatch(actLayDanhSachTinTucAPI());
        },
        actXoaTinTucAdmin: (data) => {
            dispatch(actXoaTinTucAdminAPI(data));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuanLyTinTuc);


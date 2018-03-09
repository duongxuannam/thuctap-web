import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CongViecDaDang extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <Link to={`/themcongviec`} className="btn btn-back btn-secondary btn-sm mr10">
                                Thêm công việc
                </Link>
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Danh sách công việc đã đăng</h3>
                                </div>
                                <div className="panel-body">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Tiêu đề</th>
                                                <th>Địa điểm</th>
                                                <th>Ngày đăng</th>
                                                <th>Trạng Thái</th>
                                                <th>Đã ứng tuyển</th>
                                            </tr>
                                        </thead>
                                        <tbody>


                                            <tr>
                                                <td></td>
                                                <td>
                                                    <input type="text" name="locTheoTen" class="form-control" placeholder="lọc theo tiêu đề"/>
                                                </td>
                                                <td>
                                                <input type="text" name="locTheoTen" class="form-control" placeholder="lọc theo địa điểm"/>

                                                </td>
                                                <td></td>
                                                <td>
                                                    <select type="text" name="locTheoTrangThai" class="form-control">
                                                        <option value="-1">Tat ca</option>
                                                        <option value="0">Còn thời hạn</option>
                                                        <option value="1">Hết hạn</option></select>
                                                </td>
                                                <td></td>
                                            </tr>



                                            <tr>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>hihi</td>
                                                <td>huhu</td>
                                                <td className='text-center'>
                                                    <span class="label label-danger">hết hạn</span>
                                                </td>
                                                <td>
                                                    4 ứng viên <a className="btn btn-info-edit mr-10 mrl-edit" >  danh sách </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>hihi</td>
                                                <td>huhu</td>
                                                <td className='text-center'>
                                                    <span class="label label-success">còn thời hạn</span>
                                                </td>
                                                <td>
                                                    4 ứng viên <a className="btn btn-info-edit mr-10 mrl-edit" >  danh sách </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>hihi</td>
                                                <td>huhu</td>
                                                <td className='text-center'>
                                                    <span class="label label-danger">hết hạn</span>
                                                </td>
                                                <td>
                                                    4 ứng viên <a className="btn btn-info-edit mr-10 mrl-edit" >  danh sách </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>hihi</td>
                                                <td>huhu</td>
                                                <td className='text-center'>
                                                    <span class="label label-danger">hết hạn</span>
                                                </td>
                                                <td>
                                                    4 ứng viên <a className="btn btn-info-edit mr-10 mrl-edit" >  danh sách </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>hihi</td>
                                                <td>huhu</td>
                                                <td className='text-center'>
                                                    <span class="label label-danger">hết hạn</span>
                                                </td>
                                                <td>
                                                    4 ứng viên <a className="btn btn-info-edit mr-10 mrl-edit" >  danh sách </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>hihi</td>
                                                <td>huhu</td>
                                                <td className='text-center'>
                                                    <span class="label label-danger">hết hạn</span>
                                                </td>
                                                <td>
                                                    4 ứng viên <a className="btn btn-info-edit mr-10 mrl-edit" >  danh sách </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="push"></div>
            </React.Fragment >
        );
    }
};


export default CongViecDaDang;

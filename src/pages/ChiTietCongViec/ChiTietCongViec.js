import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { chiTietCongViecAPI, ungTuyenAPI } from '../../actions/index';
import CongViecTuongTu from '../../components/CongViecTuongTu';


class ChiTietCongViec extends Component {
    componentDidMount() {
        const { match } = this.props;
        if (match) {
            const { id } = match.params;
            this.props.actChiTietCongViec(id);
        }
    }
    ungTuyen = () => {
        const data = {
            _idCongViec: this.props.chiTietCongViec._id,
            _idTaiKhoan: JSON.parse(localStorage.getItem('taikhoan')).taikhoan._id
        };
        this.props.actUngTuyen(data);
    };
    kiemTraDaUngTuyen = () => {
        var result = false
        if (this.props.chiTietCongViec._danhsachungtuyen && this.props.chiTietCongViec._danhsachungtuyen.length > 0) {
            for (var i = 0; i < this.props.chiTietCongViec._danhsachungtuyen.length; i++) {
                if (this.props.taiKhoan && this.props.chiTietCongViec._danhsachungtuyen[i] === this.props.taiKhoan.taikhoan._id) {
                    result = true;
                    break;
                }
            };
        }
        return result
    }
    render() {
        console.log('chi tiet ne: ', this.props.chiTietCongViec);
        console.log('may tai lai hong', this.props.chiTietCongViec._id);
        const buttondDisabled = (
            <a disabled class="btn btn-primary btn-lg btn-apply">Bạn đã ứng tuyển</a>
        )
        const buttondChuaHoanThienHoSo = (
            <Link to={`/thongtintaikhoan`} class="btn btn-primary btn-lg btn-apply">Hoàn thiện hồ sơ trước khi ứng tuyển</Link>
        )
        const buttonEnabled = (
            <a onClick={this.ungTuyen} class="btn btn-primary btn-lg btn-apply">Ứng tuyển</a>
        )
        const buttonNhaTuyenDung = (
            <a disabled class="btn btn-primary btn-lg btn-apply">Nhà tuyển dụng không thể ứng tuyển</a>
        )
        const buttonChuaDangNhap = (
            <Link to={`/dangnhap`} class="btn btn-primary btn-lg btn-apply">Đăng nhập để ứng tuyển</Link>
        )
        const daDangNhap = this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan.hoanthienhoso ? buttonEnabled : buttondChuaHoanThienHoSo
        const hienthiButton = this.kiemTraDaUngTuyen() ? buttondDisabled : daDangNhap;
        const hienthiButtonCuoiCung = this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan.kichhoatnhatuyendung ? buttonNhaTuyenDung : hienthiButton
        const ChuaDangNhap = this.props.taiKhoan && this.props.taiKhoan.taikhoan ? hienthiButtonCuoiCung : buttonChuaDangNhap
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4 col-xs-12">
                                <div class="panel">
                                    <div class="panel-heading">
                                        <div class="panel-title">
                                            <span class="wc-editable" data-pk="front_job_summary" data-type="text">Thông tin</span>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                        <p>
                                            <span>
                                                <span class="wc-editable" data-pk="front_post_on" data-type="text">Ngày đăng</span>
                                            </span>
                                            <br />
                                            <strong>{this.props.chiTietCongViec && this.props.chiTietCongViec.ngaydang ? this.props.chiTietCongViec.ngaydang : 'Đang tải'}</strong>
                                        </p>
                                        <p>
                                            <span>
                                                <span class="wc-editable" data-pk="front_post_on" data-type="text">Thời hạn</span>
                                            </span>
                                            <br />
                                            <strong>{this.props.chiTietCongViec && this.props.chiTietCongViec.thoihan ? this.props.chiTietCongViec.thoihan : 'Đang tải'}</strong>
                                        </p>
                                        <p>
                                            <span>
                                                <span class="wc-editable" data-pk="ws_category" data-type="text">Chuyên ngành</span>
                                            </span>
                                            <br />
                                            <strong>{this.props.chiTietCongViec && this.props.chiTietCongViec.chuyennganh ? this.props.chiTietCongViec.chuyennganh : 'Đang tải'}</strong>
                                        </p>
                                        <p>
                                            <span>
                                                <span class="wc-editable" data-pk="ws_job_type" data-type="text">Kiểu</span>
                                            </span>
                                            <br />
                                            <strong>{this.props.chiTietCongViec && this.props.chiTietCongViec.kieu ? this.props.chiTietCongViec.kieu : 'Đang tải'}</strong>
                                        </p>
                                        <p>
                                            <span>Chức vụ</span>
                                            <br />
                                            <strong>{this.props.chiTietCongViec && this.props.chiTietCongViec.chucvu ? this.props.chiTietCongViec.chucvu : 'Đang tải'}</strong>
                                        </p>
                                        <p>
                                            <span>Trình độ</span>
                                            <br />
                                            <strong>{this.props.chiTietCongViec && this.props.chiTietCongViec.trinhdo ? this.props.chiTietCongViec.trinhdo : 'Đang tải'}</strong>
                                        </p>
                                        <p>
                                            <span>Kinh nghiệm</span>
                                            <br />
                                            <strong>{this.props.chiTietCongViec && this.props.chiTietCongViec.kinhnghiem ? this.props.chiTietCongViec.kinhnghiem : 'Đang tải'}</strong>
                                        </p>
                                        <p>
                                            <span>
                                                <span class="wc-editable" data-pk="front_label_salary" data-type="text">Mức lương</span>
                                            </span>
                                            <br />
                                            <strong>{this.props.chiTietCongViec && this.props.chiTietCongViec.luong ? this.props.chiTietCongViec.luong : 'Đang tải'}</strong>
                                        </p>


                                    </div>
                                </div>
                                <div class="company-info">
                                    <div class="company-image">
                                        <img src={this.props.chiTietCongViec && this.props.chiTietCongViec._nguoidang && this.props.chiTietCongViec._nguoidang.nhatuyendung.logo ? this.props.chiTietCongViec._nguoidang.nhatuyendung.logo : 'https://res.cloudinary.com/thuctap/image/upload/v1521876438/LogoTitle.png'} alt="" />
                                    </div>
                                    <div class="company-description">
                                        <p>
                                            <span>
                                                <span class="wc-editable" >Nhà tuyển dụng</span>
                                            </span>

                                            <strong>{this.props.chiTietCongViec && this.props.chiTietCongViec._nguoidang && this.props.chiTietCongViec._nguoidang.nhatuyendung.tencongty ? this.props.chiTietCongViec._nguoidang.nhatuyendung.tencongty : 'Đang tải'}</strong>
                                        </p>
                                        <p>
                                            <span>
                                                <span class="wc-editable" >Điện thoại</span>
                                            </span>
                                            <strong>{this.props.chiTietCongViec && this.props.chiTietCongViec._nguoidang && this.props.chiTietCongViec._nguoidang.nhatuyendung.sodienthoai ? this.props.chiTietCongViec._nguoidang.nhatuyendung.sodienthoai : 'Đang tải'}</strong>
                                        </p>
                                        <p>
                                            <span>
                                                <span class="wc-editable" >Email</span>
                                            </span>
                                            <strong>
                                                <a >{this.props.chiTietCongViec && this.props.chiTietCongViec._nguoidang && this.props.chiTietCongViec._nguoidang.nhatuyendung.email ? this.props.chiTietCongViec._nguoidang.nhatuyendung.email : 'Đang tải'}</a>
                                            </strong>
                                        </p>
                                        <p>
                                            <span>
                                                <span class="wc-editable" data-pk="front_label_website" data-type="text">Website</span>
                                            </span>
                                            <strong>
                                                <a>{this.props.chiTietCongViec && this.props.chiTietCongViec._nguoidang && this.props.chiTietCongViec._nguoidang.nhatuyendung.website ? this.props.chiTietCongViec._nguoidang.nhatuyendung.website : 'Đang tải'}</a>
                                            </strong>
                                        </p>
                                        <p>
                                            <Link to={`/thongtinnhatuyendung/${this.props.chiTietCongViec && this.props.chiTietCongViec._nguoidang ? this.props.chiTietCongViec._nguoidang._id : ''}`}  onClick={()=>window.scrollTo(0, 0)} class="btn btn-secondary">
                                                <span class="wc-editable">Chi tiết</span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-8 col-xs-12">
                                <div class="post">
                                    <div class="resume-head">
                                        <p>
                                            <a class="btn btn-back btn-secondary" role="button" onClick={() => this.props.history.goBack()} >
                                                <span class="glyphicon glyphicon-menu-left" aria-hidden="true" />
                                                Quay lại công việc mới nhất
                                            </a>
                                        </p>

                                        <h1>{this.props.chiTietCongViec.tieude ? this.props.chiTietCongViec.tieude : 'Đang tải'}</h1>

                                        <p>
                                            <em>
                                                <span class="wc-editable" data-pk="front_company" data-type="text">Nhà tuyển dụng</span>:
                                                &nbsp; <strong>{this.props.chiTietCongViec && this.props.chiTietCongViec._nguoidang && this.props.chiTietCongViec._nguoidang.nhatuyendung.tencongty ? this.props.chiTietCongViec._nguoidang.nhatuyendung.tencongty : 'Đang tải'}</strong>
                                            </em>
                                            <em>
                                                <span class="wc-editable" data-pk="front_location" data-type="text">Địa điểm</span>:
                                                &nbsp;   <strong>{this.props.chiTietCongViec.diadiem ? this.props.chiTietCongViec.diadiem : 'Đang tải'}</strong>
                                            </em>
                                        </p>
                                    </div>


                                    <h2>
                                        <span class="wc-editable" data-pk="front_label_job_description" data-type="text">Mô tả công việc</span>
                                    </h2>

                                    <div class="lead black-color" dangerouslySetInnerHTML={{ __html: this.props.chiTietCongViec && this.props.chiTietCongViec.mota ? this.props.chiTietCongViec.mota : 'Đang tải' }} >

                                    </div>


                                </div>
                                <div class="post-actions">
                                    {ChuaDangNhap}
                                    <div class="share-actions">
                                        <div class="socials-share">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <span class="wc-editable" data-pk="ws_share" data-type="text">Chia sẽ</span>:</span>
                                                </li>

                                                <li>
                                                    <a>
                                                        <img src="https://res.cloudinary.com/thuctap/image/upload/v1521951393/social-facebook-176-1507281876.png" alt=""
                                                            title="" />
                                                    </a>
                                                </li>


                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <CongViecTuongTu
                            actChiTietCongViec={this.props.actChiTietCongViec}
                            chuyennganh={this.props.chiTietCongViec && this.props.chiTietCongViec.chuyennganh ? this.props.chiTietCongViec.chuyennganh : 'ahuhu'} />

                    </div>
                </div>
                <div class="push"></div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    // console.log('log state dc ko', state)
    return {
        chiTietCongViec: state.chiTietCongViec,
        taiKhoan: state.taiKhoan
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actChiTietCongViec: (id) => {
            dispatch(chiTietCongViecAPI(id));
        },
        actUngTuyen: (data) => {
            dispatch(ungTuyenAPI(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChiTietCongViec);


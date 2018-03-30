import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cloudinary from 'cloudinary';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { configCloudinary } from '../../global/config';
import { actCapNhatThongTinAPI, actKiemTraDangNhapAPI } from '../../actions/index';


cloudinary.config(configCloudinary)

class ThongTinTaiKhoan extends Component {
    constructor(props) {
        super(props);
        // const html = '<ol>\n<li>Đêm nay trên đường hành quân ra mặt trận&nbsp;<\/li>\n<li>trùng trùng đoàn quân tiến bước theo con đường của <strong>Bác<\/strong><\/li>\n<\/ol>\n';
        // const contentBlock = htmlToDraft(html);
        // const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        // const editorState = EditorState.createWithContent(contentState);

        this.state = {
            editorState: EditorState.createEmpty(),
            txtHoTen: '',
            txtSoDienThoai: '',
            txtEmail: '',
            txtDiaChi: '',
            txtTruongDaiHoc: '',
            txtChuyenNganh: '',
            loiHoTen: '',
            loiSoDienThoai: '',
            loiDiaChi: '',
            loiTruongDaiHoc: '',
            loiChuyenNganh: '',
            loiHinhAnh: '',
            daThayHinh: false,
            disabled: '',
            hinhanh: 'http://res.cloudinary.com/thuctap/image/upload/v1520564546/user-default.png'

        };
        //  this.state = { editorState };
    }
    componentDidMount() {
        if (this.props.taiKhoan && this.props.taiKhoan.taikhoan) {
            const { anhdaidien, email, hotenthat, diachi, truongdaihoc, chuyennganh, gioithieu, sodienthoai } = this.props.taiKhoan.taikhoan
            const gioiThieuCuoiCung = gioithieu ? EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(gioithieu).contentBlocks)) : EditorState.createEmpty()
            // const contentBlock = htmlToDraft(gioithieu);
            // const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            // gioiThieuCuoiCung = EditorState.createWithContent(contentState);

            this.setState({
                txtHoTen: hotenthat,
                txtDiaChi: diachi,
                txtEmail: email,
                txtChuyenNganh: chuyennganh,
                txtTruongDaiHoc: truongdaihoc,
                txtSoDienThoai: sodienthoai,
                editorState: gioiThieuCuoiCung,
                hinhanh: anhdaidien ? anhdaidien : this.state.hinhanh
            })
        }
        const _id = JSON.parse(localStorage.getItem('taikhoan')) && JSON.parse(localStorage.getItem('taikhoan')).taikhoan && JSON.parse(localStorage.getItem('taikhoan')).taikhoan._id ? JSON.parse(localStorage.getItem('taikhoan')).taikhoan._id : '';
        if (_id) {
            return this.props.actKiemTraDangNhap(_id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.taiKhoan && this.props.taiKhoan.taikhoan) {
            const { anhdaidien, email, hotenthat, diachi, truongdaihoc, chuyennganh, gioithieu, sodienthoai } = this.props.taiKhoan.taikhoan
            const gioiThieuCuoiCung = gioithieu ? EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(gioithieu).contentBlocks)) : EditorState.createEmpty()
            // const contentBlock = htmlToDraft(gioithieu);
            // const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            // gioiThieuCuoiCung = EditorState.createWithContent(contentState);

            this.setState({
                txtHoTen: hotenthat,
                txtDiaChi: diachi,
                txtEmail: email,
                txtChuyenNganh: chuyennganh,
                txtTruongDaiHoc: truongdaihoc,
                txtSoDienThoai: sodienthoai,
                editorState: gioiThieuCuoiCung,
                hinhanh: anhdaidien ? anhdaidien : this.state.hinhanh
            })
        }
    }
    onEditorStateChange = (editorState) => this.setState({ editorState: editorState });
    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        }, () => {
            if (name === 'txtHoTen') {
                if (this.state.txtHoTen.length < 3) {
                    this.setState({ loiHoTen: 'Họ tên quá ngắn' });
                    if (this.state.txtHoTen === '') {
                        this.setState({ loiHoTen: 'Trường này là bắt buộc' })
                    }
                } else {
                    this.setState({ loiHoTen: '' })
                }
            }
            if (name === 'txtDiaChi') {
                if (this.state.txtDiaChi.length < 5) {
                    this.setState({ loiDiaChi: 'Địa chỉ quá ngắn' });
                    if (this.state.txtDiaChi === '') {
                        this.setState({ loiDiaChi: 'Trường này là bắt buộc' })
                    }
                } else {
                    this.setState({ loiDiaChi: '' })
                }
            }
            if (name === 'txtChuyenNganh') {
                if (this.state.txtChuyenNganh.length < 3) {
                    this.setState({ loiChuyenNganh: 'Tên chuyên ngành quá ngắn' });
                    if (this.state.txtChuyenNganh === '') {
                        this.setState({ loiChuyenNganh: 'Trường này là bắt buộc' })
                    }
                } else {
                    this.setState({ loiChuyenNganh: '' })
                }
            }
            if (name === 'txtTruongDaiHoc') {
                if (this.state.txtTruongDaiHoc.length < 3) {
                    this.setState({ loiTruongDaiHoc: 'Tên trường đại học quá ngắn' });
                    if (this.state.txtTruongDaiHoc === '') {
                        this.setState({ loiTruongDaiHoc: 'Trường này là bắt buộc' })
                    }
                } else {
                    this.setState({ loiTruongDaiHoc: '' })
                }
            }

            if (name === 'txtSoDienThoai') {
                if (this.state.txtSoDienThoai.length < 9) {
                    this.setState({ loiSoDienThoai: 'Số điện thoại không hợp lệ' });
                    if (this.state.txtSoDienThoai === '') {
                        this.setState({ loiSoDienThoai: 'Trường này là bắt buộc' })
                    }
                    if (isNaN(this.state.txtSoDienThoai)) {
                        this.setState({ loiSoDienThoai: 'Số điện thoại không hợp lệ' })
                    }
                } else {
                    this.setState({ loiSoDienThoai: '' })
                }
                if (isNaN(this.state.txtSoDienThoai)) {
                    this.setState({ loiSoDienThoai: 'Số điện thoại không hợp lệ' })
                }
            }
        });
    };
    onChangeFile = () => {
        const file = this.refs.file.files[0];
        switch (file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase()) {
            case 'gif': case 'jpg': case 'png': case 'jpeg':
                this.setState({ loiHinhAnh: '' })
                break;
            default:
                return this.setState({
                    hinhanh: this.state.hinhanh,
                    loiHinhAnh: 'File được chọn không phải định dạng hình ảnh'
                })
                break;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (e) => {
            this.setState({
                hinhanh: [reader.result],
                daThayHinh: true
            })
        };
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.txtHoTen) {
            this.setState({ loiHoTen: "Trương này là bắt buộc" })
        }
        if (!this.state.txtDiaChi) {
            this.setState({ loiDiaChi: "Trương này là bắt buộc" })
        }
        if (!this.state.txtTruongDaiHoc) {
            this.setState({ loiTruongDaiHoc: "Trương này là bắt buộc" })
        }
        if (!this.state.txtChuyenNganh) {
            this.setState({ loiChuyenNganh: "Trương này là bắt buộc" })
        }
        if (this.state.loiHoTen === '' && this.state.loiHinhAnh === '' && this.state.loiSoDienThoai === '' && this.state.loiDiaChi === '' && this.state.loiTruongDaiHoc === '' && this.state.loiChuyenNganh === '') {
            if (this.state.txtHoTen !== '' && this.state.txtDiaChi !== '' && this.state.txtTruongDaiHoc !== '' && this.state.txtChuyenNganh !== '') {

                if (this.state.daThayHinh) {
                    this.setState({ disabled: 'disabled' })
                    cloudinary.uploader.upload(`${this.state.hinhanh}`).then(result => {
                        return result.secure_url
                    }).then(hinh => {
                        const data = {
                            hoten: this.state.txtHoTen,
                            sodienthoai: this.state.txtSoDienThoai,
                            diachi: this.state.txtDiaChi,
                            truongdaihoc: this.state.txtTruongDaiHoc,
                            chuyennganh: this.state.txtChuyenNganh,
                            gioithieu: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
                            _id: JSON.parse(localStorage.getItem('taikhoan')).taikhoan._id,
                            hinhanh: hinh,
                        }
                        this.props.actCapNhatThongTin(data);
                        alert("Thêm thành công");
                        return this.props.history.goBack();
                    })
                } else {
                    const data = {
                        hoten: this.state.txtHoTen,
                        sodienthoai: this.state.txtSoDienThoai,
                        diachi: this.state.txtDiaChi,
                        truongdaihoc: this.state.txtTruongDaiHoc,
                        chuyennganh: this.state.txtChuyenNganh,
                        gioithieu: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
                        _id: JSON.parse(localStorage.getItem('taikhoan')).taikhoan._id,
                    }
                    this.props.actCapNhatThongTin(data);
                    alert("Thêm thành công");
                    return this.props.history.goBack();
                }
            }
        }
    }
    render() {
        const { editorState,
            txtHoTen,
            txtSoDienThoai,
            txtEmail,
            txtDiaChi,
            txtTruongDaiHoc,
            txtChuyenNganh,
            hinhanh, loiChuyenNganh, loiTruongDaiHoc, loiSoDienThoai, loiHoTen, loiDiaChi, loiHinhAnh,
        } = this.state;
        const divUploading = (
            <div>
                <div id="popup">
                    <div id="overlay"></div>
                    <div id="lightbox">
                        <h1>đang lưu vào cơ sỡ dữ liệu vui lòng đợi</h1>
                    </div>
                </div>
                <div class='cuoi'>
                </div>
            </div>
        )
        const uploading = this.state.disabled ? divUploading : '';
        const chuaHoanThienHoSo = (
            <div class="alert alert-danger text-center">Bạn cần hoàn thiện hồ sơ để có thể ứng tuyển</div>
        )
        const daHoanThienHoSo = (
            <div class="alert alert-success text-center">Bạn đã hoàn thiện hồ sơ. Có thê cập nhật và lưu lại</div>

        )
        const mainHoanThien = this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan.hoanthienhoso ? daHoanThienHoSo : chuaHoanThienHoSo
        const chuaDangNhap = (
            <div className="loi-ghide-height">
                <div className="container ">
                    <div class="panel panel-danger ">
                        <div class="panel-heading">Bạn chưa đăng nhập</div>
                        <div class="panel-body">Vui lòng <Link to='dangnhap'>đăng nhập</Link></div>
                    </div>
                </div>
            </div>
        )
        const daDangNhap = (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="col-lg-8 col-md-7 col-xs-12 flr">
                            {mainHoanThien}
                        </div>
                        <div class="row">
                            {uploading}
                            <div class="col-lg-4 col-md-5 col-xs-12">
                                <div class="current-image">
                                    {/* <img src="http://res.cloudinary.com/thuctap/image/upload/v1520564546/user-default.png" alt=""
                                        class="photo" /> */}
                                    <img src={hinhanh} alt=""
                                        class="photo" />

                                    <div class="upload-file upload-file3 upload-photo">
                                        <a >
                                            <span class="wc-editable" >Ảnh đại diện</span>
                                        </a>
                                        <input
                                            ref="file"
                                            type="file"
                                            name="user[image]"
                                            multiple="true"
                                            onChange={this.onChangeFile} />
                                    </div>
                                    <div class="help-block with-errors">
                                        <span class="wc-editable hien-thi-loi-edit">{loiHinhAnh}</span>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-xs-12">
                                    <div class="form-group">
                                        <label class="control-label">
                                            <span class="wc-editable">CV</span>: </label>
                                        <input name="txtChuyenNganh" type="file" class="form-control required"
                                        />
                                        <div class="help-block with-errors">
                                            <span class="wc-editable hien-thi-loi-edit ml-20">file khong dung dinh dang</span>
                                        </div>
                                    </div>




                                    {/* <div class="form-group text-center">
                                        <label class="control-label">
                                            <span class="wc-editable clr">CV </span>: <a class='contro'>Xem</a></label>

                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">
                                            <a class="wc-editable contro" onClick={() => this.setState({ hienThiThayCV: true })}>Thay CV</a></label>
                                        {this.state.hienThiThayCV ?
                                           <React.Fragment> <input name="txtChuyenNganh" type="file" class="form-control required"
                                            />
                                            <div class="help-block with-errors">
                                                <span class="wc-editable hien-thi-loi-edit ml-20">file khong dung dinh dang</span>
                                            </div></React.Fragment> : ''}
                                    </div> */}
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-7 col-xs-12">
                                <div class="form">
                                    <form class="form-dyna xs-4" onSubmit={this.onSubmit}>
                                        <div class="row">
                                            <div class="col-sm-12 col-xs-12">
                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label"> <span class="wc-editable" >Họ tên</span>:</label>
                                                        <input
                                                            type="text"
                                                            name="txtHoTen"
                                                            value={txtHoTen}
                                                            onChange={this.onChange}
                                                            class="form-control" />
                                                        <div class="help-block with-errors">
                                                            <span class="wc-editable hien-thi-loi-edit ml-20">{loiHoTen}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable" >Số điện thoại</span>: </label>
                                                        <input type="tel" name="txtSoDienThoai" value={txtSoDienThoai} onChange={this.onChange} class="form-control" />
                                                        <div class="help-block with-errors">
                                                            <span class="wc-editable hien-thi-loi-edit ml-20">{loiSoDienThoai}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-xs-12">
                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable" >Email</span>:</label>
                                                        <input type="text" name="txtEmail" value={txtEmail} onChange={this.onChange} class="form-control required email" disabled />
                                                        <div class="help-block with-errors">
                                                            <span class="wc-editable hien-thi-loi-edit ml-20"></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable">Địa chỉ</span>:</label>
                                                        <input type="text" name="txtDiaChi" value={txtDiaChi} onChange={this.onChange} class="form-control url" />
                                                        <div class="help-block with-errors">
                                                            <span class="wc-editable hien-thi-loi-edit ml-20">{loiDiaChi}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-xs-12">
                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable">Trường đại học</span>:</label>
                                                        <input name="txtTruongDaiHoc" type="text" value={txtTruongDaiHoc} onChange={this.onChange} class="form-control required" />
                                                        <div class="help-block with-errors">
                                                            <span class="wc-editable hien-thi-loi-edit ml-20">{loiTruongDaiHoc}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable">Chuyên ngành</span>: </label>
                                                        <input name="txtChuyenNganh" value={txtChuyenNganh} type="text" onChange={this.onChange} class="form-control required"
                                                        />
                                                        <div class="help-block with-errors">
                                                            <span class="wc-editable hien-thi-loi-edit ml-20">{loiChuyenNganh}</span>
                                                        </div>
                                                    </div>
                                                </div>







                                            </div>
                                            <div class="col-sm-12 col-xs-12">
                                                <div class="form-group editor-themcongviec" >
                                                    <label class="control-label">
                                                        <span class="wc-editable" >Giới thiệu bản thân</span>:</label>
                                                    <Editor
                                                        editorState={editorState}
                                                        wrapperClassName="demo-wrapper"
                                                        editorClassName="demo-editor boderediter-edit"
                                                        onEditorStateChange={this.onEditorStateChange}
                                                    />

                                                </div>
                                            </div>

                                        </div>

                                        <button type="submit" class="btn btn-primary" >
                                            <span class="wc-editable">Lưu</span>
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div id="upload" className="thongtin-tam"></div>
            </React.Fragment>
        )

        const main = this.props.taiKhoan && this.props.taiKhoan.taikhoan ? daDangNhap : chuaDangNhap

        return (
            <React.Fragment>
                {main}
                <div class="push"></div>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        taiKhoan: state.taiKhoan
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actCapNhatThongTin: (data) => {
            dispatch(actCapNhatThongTinAPI(data));
        },
        actKiemTraDangNhap: (data) => {
            dispatch(actKiemTraDangNhapAPI(data));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinTaiKhoan);

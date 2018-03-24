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
import { actKichHoatNhaTuyenDungAPI } from '../../actions/index';


cloudinary.config(configCloudinary)

class NhaTuyenDung extends Component {
    constructor(props) {
        super(props);
        // const html = '<ol>\n<li>Đêm nay trên đường hành quân ra mặt trận&nbsp;<\/li>\n<li>trùng trùng đoàn quân tiến bước theo con đường của <strong>Bác<\/strong><\/li>\n<\/ol>\n';
        // const contentBlock = htmlToDraft(html);
        // const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        // const editorState = EditorState.createWithContent(contentState);

        this.state = {
            editorState: EditorState.createEmpty(),
            txtTenCongTy: '',
            txtSoDienThoai: '',
            txtEmail: '',
            txtDiaChi: '',
            txtWebsite: '',
            linhvuchoatdong: '',
            loiTenCongTy: '',
            loiSoDienThoai: '',
            loiDiaChi: '',
            loiLinhVucHoatDong: '',
            loiEmail: '',
            loiWebsite: '',
            loiHinhAnh: '',
            daThayHinh: false,
            disabled: '',
            hinhanh: 'https://res.cloudinary.com/thuctap/image/upload/v1521876438/LogoTitle.png'

        };
    }
    componentDidMount() {
        if (this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan.nhatuyendung) {
            const { tencongty, email, website, diachi, linhvuchoatdong, gioithieu, sodienthoai, logo } = this.props.taiKhoan.taikhoan.nhatuyendung
            const gioiThieuCuoiCung = gioithieu ? EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(gioithieu).contentBlocks)) : EditorState.createEmpty()
            // const contentBlock = htmlToDraft(gioithieu);
            // const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            // gioiThieuCuoiCung = EditorState.createWithContent(contentState);

            this.setState({
                txtTenCongTy: tencongty,
                txtDiaChi: diachi,
                txtEmail: email,
                txtWebsite: website,
                txtSoDienThoai: sodienthoai,
                linhvuchoatdong: linhvuchoatdong,
                editorState: gioiThieuCuoiCung,
                hinhanh: logo ? logo : this.state.hinhanh,
                trangthai: this.props.taiKhoan.taikhoan
            })
        }
    }
    onEditorStateChange = (editorState) => this.setState({ editorState: editorState });
    validateEmail(sEmail) {
        var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

        if (!sEmail.match(reEmail)) {

            return false;
        }

        return true;

    }
    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        }, () => {
            if (name === 'txtTenCongTy') {
                if (this.state.txtTenCongTy.length < 3) {
                    this.setState({ loiTenCongTy: 'Tên công ty quá ngắn' });
                    if (this.state.txtTenCongTy === '') {
                        this.setState({ loiTenCongTy: 'Trường này là bắt buộc' })
                    }
                } else {
                    this.setState({ loiTenCongTy: '' })
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
            if (name === 'txtEmail') {
                if (this.state.txtEmail.length < 5) {
                    this.setState({ loiEmail: 'Email không hợp lệ' });
                    if (this.state.txtChuyenNganh === '') {
                        this.setState({ loiEmail: 'Trường này là bắt buộc' })
                    }

                }
                if (!this.validateEmail(this.state.txtEmail)) {
                    console.log('co vo day ko')
                    this.setState({ loiEmail: 'Email không hợp lệ' })
                } else {
                    this.setState({ loiEmail: '' })
                }
            }
            if (name === 'txtWebsite') {
                if (this.state.txtWebsite.length < 3) {
                    this.setState({ loiTruongDaiHoc: 'Tên website quá ngắn' });
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
            if (name === 'linhvuchoatdong') {
                if (this.state.linhvuchoatdong.length === '') {
                    this.setState({ loiLinhVucHoatDong: 'Bạn chưa chọn' });
                } else {
                    this.setState({ loiLinhVucHoatDong: '' })
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
        if (!this.state.txtTenCongTy) {
            this.setState({ loiTenCongTy: "Trương này là bắt buộc" })
        }
        if (!this.state.txtDiaChi) {
            this.setState({ loiDiaChi: "Trương này là bắt buộc" })
        }
        if (!this.state.txtSoDienThoai) {
            this.setState({ loiSoDienThoai: "Trương này là bắt buộc" })
        }
        if (!this.state.txtEmail) {
            this.setState({ loiEmail: "Trương này là bắt buộc" })
        }
        if (this.state.linhvuchoatdong === '') {
            this.setState({ loiLinhVucHoatDong: "Trương này là bắt buộc" })
        }
        
        
        if (this.state.loiTenCongTy === '' && this.state.loiHinhAnh === '' && this.state.loiSoDienThoai === '' && this.state.loiDiaChi === '' && this.state.loiEmail === '' && this.state.loiLinhVucHoatDong === '') {
            console.log('hi')
            if (this.state.txtTenCongTy !== '' && this.state.txtDiaChi !== '' && this.state.txtEmail !== '' && this.state.txtSoDienThoai !== '' && this.state.linhvuchoatdong !== '') {
                console.log('hello')
                if (this.state.daThayHinh) {
                    this.setState({ disabled: 'disabled' })
                    cloudinary.uploader.upload(`${this.state.hinhanh}`).then(result => {
                        return result.secure_url
                    }).then(hinh => {
                        const data = {
                            tencongty: this.state.txtTenCongTy,
                            sodienthoai: this.state.txtSoDienThoai,
                            diachi: this.state.txtDiaChi,
                            email: this.state.txtEmail,
                            website: this.state.txtWebsite,
                            linhvuchoatdong: this.state.linhvuchoatdong,
                            gioithieu: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
                            _id: JSON.parse(localStorage.getItem('taikhoan')).taikhoan._id,
                            logo: hinh,
                            trangthai: this.state.trangthai
                        }
                        this.props.actKichHoatNhaTuyenDung(data);
                        alert("Thêm thành công");
                        return this.props.history.goBack();
                    })
                } else {
                    const data = {
                        tencongty: this.state.txtTenCongTy,
                        sodienthoai: this.state.txtSoDienThoai,
                        diachi: this.state.txtDiaChi,
                        email: this.state.txtEmail,
                        website: this.state.txtWebsite,
                        linhvuchoatdong: this.state.linhvuchoatdong,
                        gioithieu: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
                        _id: JSON.parse(localStorage.getItem('taikhoan')).taikhoan._id,
                        trangthai: this.state.trangthai
                    }
                    this.props.actKichHoatNhaTuyenDung(data);
                    alert("Thêm thành công");
                    return this.props.history.goBack();
                }
            }
        }
    }
    render() {
        const { editorState,
            txtTenCongTy,
            txtSoDienThoai,
            txtEmail,
            txtDiaChi,
            txtWebsite,
            linhvuchoatdong,
            hinhanh, loiLinhVucHoatDong, loiSoDienThoai, loiTenCongTy, loiDiaChi, loiHinhAnh, loiEmail
        } = this.state;
        console.log('linnh vu : ', this.state.trangthai)
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
        const chuaDangKy = (
            <div class="alert alert-danger">Bạn cần đăng ký thông tin nhà tuyển dụng để có thể đăng tuyển</div>
        )
        const choDuyet = (
            <div class="alert alert-warning">Bạn đã đăng ký thông tin nhà tuyển dụng vui lòng đợi hoặc liên hệ trực tiếp để kích hoạt tính năng</div>
        )
        const daDuyet = (
            <div class="alert alert-success">Bạn đã kích hoạt nhà tuyển dụng. Có thể đăng tuyển và chỉnh sửa thông tin</div>
        )
        const mainHoanThien = this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan.trangthai === 'dangduyet' ? choDuyet : chuaDangKy;
        const mainHoanThienDaDuyet = this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan.trangthai === 'daduyet' ? daDuyet : mainHoanThien;

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
                                            <span class="wc-editable" >Logo</span>
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
                            </div>

                            <div class="col-lg-8 col-md-7 col-xs-12">
                                {mainHoanThienDaDuyet}


                                <div class="form">
                                    <form class="form-dyna xs-4" onSubmit={this.onSubmit}>
                                        <div class="row">
                                            <div class="col-sm-12 col-xs-12">
                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label"> <span class="wc-editable" >Tên công ty</span>:</label>
                                                        <input
                                                            type="text"
                                                            name="txtTenCongTy"
                                                            value={txtTenCongTy}
                                                            onChange={this.onChange}
                                                            class="form-control" />
                                                        <div class="help-block with-errors">
                                                            <span class="wc-editable hien-thi-loi-edit ml-20">{loiTenCongTy}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable" >Số điện thoại công ty</span>: </label>
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
                                                            <span class="wc-editable" >Email liên hệ</span>:</label>
                                                        <input type="email" name="txtEmail" value={txtEmail} onChange={this.onChange} class="form-control required email" />
                                                        <div class="help-block with-errors">
                                                            <span class="wc-editable hien-thi-loi-edit ml-20">{loiEmail}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable">Địa chỉ công ty</span>:</label>
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
                                                            <span class="wc-editable">Website(nếu có)</span>:</label>
                                                        <input name="txtWebsite" type="text" value={txtWebsite} onChange={this.onChange} class="form-control required" />
                                                        <div class="help-block with-errors">
                                                            <span class="wc-editable hien-thi-loi-edit ml-20"></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <label class="control-label">
                                                            <span class="wc-editable">Lĩnh vực hoạt động</span>: </label>
                                                        <select class="form-control" onChange={this.onChange} value={linhvuchoatdong} name="linhvuchoatdong">
                                                            <option value="" disabled >Lựa chọn Lĩnh vực</option>
                                                            <option value="Kinh doanh"> Kinh doanh</option>                                                            <option value="Công nghệ thông tin"> Công nghệ thông tin</option>
                                                            <option value="Cơ khí"> Cơ khí</option>
                                                            <option value="Kỹ thuật"> Kỹ thuật</option>
                                                            <option value="Kinh tế"> Kinh tế</option>
                                                            <option value="Giáo dục"> Giáo dục</option>
                                                            <option value="Hành chính - luật"> Hành chính - luật</option>
                                                            <option value="Khác"> Khác</option>
                                                        </select>
                                                        <div class="help-block with-errors">
                                                            <span class="wc-editable hien-thi-loi-edit ml-20">{loiLinhVucHoatDong}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-xs-12">
                                                <div class="form-group editor-themcongviec" >
                                                    <label class="control-label">
                                                        <span class="wc-editable" >Giới thiệu công ty</span>:</label>
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
                {
                    main
                }
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
        actKichHoatNhaTuyenDung: (data) => {
            dispatch(actKichHoatNhaTuyenDungAPI(data));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NhaTuyenDung);

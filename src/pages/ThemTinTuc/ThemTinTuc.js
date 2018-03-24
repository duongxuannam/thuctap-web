import React, { Component } from 'react';
import cloudinary from 'cloudinary';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { EditorState, convertToRaw, } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { configCloudinary } from '../../global/config';
import { actThemTinTucAPI } from '../../actions/index';


cloudinary.config(configCloudinary)

class ThemTinTuc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtTieuDe: '',
            txtNoiDung: EditorState.createEmpty(),
            txtHinhAnh: '',
            loiTieuDe: '',
            loiHinhAnh: '',
            loiNoiDung: '',
            disabled: ''
        };
    }
    onEditorStateChange = (txtNoiDung) => this.setState({ txtNoiDung });
    onChangeFile = () => {
        const file = this.refs.file.files[0];
        console.log('file: ', file)
        switch (file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase()) {
            case 'gif': case 'jpg': case 'png': case 'jpeg':
                this.setState({ loiHinhAnh: '' })
                break;
            default:
                return this.setState({
                    txtHinhAnh: '',
                    loiHinhAnh: 'File không phải định dạng hình ảnh'
                })
                break;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (e) => {
            this.setState({
                txtHinhAnh: [reader.result]
            })
        };
    }
    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        }, () => {
            if (name === 'txtTieuDe') {
                if (this.state.txtTieuDe.length < 5) {
                    this.setState({ loiTieuDe: 'Tiêu đề quá ngắn' });
                    if (this.state.txtTieuDe === '') {
                        this.setState({ loiTieuDe: 'Trường này là bắt buộc' })
                    }
                } else {
                    this.setState({ loiTieuDe: '' })
                }
            }

        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.txtTieuDe === '') {
            return this.setState({ loiTieuDe: "Trương này là bắt buộc" })
        }
        if (this.state.loiTieuDe === '' && this.state.loiHinhAnh === '') {
            if (this.state.txtTieuDe !== '' && this.state.txtNoiDung !== '') {
                if (this.state.txtHinhAnh) {
                    this.setState({ disabled: 'disabled' })
                    cloudinary.uploader.upload(`${this.state.txtHinhAnh}`).then(result => {
                        return result.secure_url
                    }).then(hinh => {
                        const data = {
                            tieude: this.state.txtTieuDe,
                            noidung: draftToHtml(convertToRaw(this.state.txtNoiDung.getCurrentContent())),
                            _nguoidang: JSON.parse(localStorage.getItem('taikhoan')).taikhoan._id,
                            hinhanh: hinh,
                        }
                        this.props.actThemTinTuc(data);
                        alert("Thêm thành công");
                        return this.props.history.goBack();
                    })
                } else {
                    const data = {
                        tieude: this.state.txtTieuDe,
                        noidung: draftToHtml(convertToRaw(this.state.txtNoiDung.getCurrentContent())),
                        _nguoidang: JSON.parse(localStorage.getItem('taikhoan')).taikhoan._id,
                    }
                    this.props.actThemTinTuc(data);
                    alert("Thêm thành công");
                    return this.props.history.goBack();
                }
            }
        }
    }
    render() {
        const { txtNoiDung, txtTieuDe, loiTieuDe, loiHinhAnh } = this.state;
        // console.log('luu lai o day ne:', draftToHtml(convertToRaw(txtNoiDung.getCurrentContent())));
        const chuaDangNhap = (
            <div className="loi-ghide-height">
                <div className="container ">
                    <div class="panel panel-danger ">
                        <div class="panel-heading">Bạn chưa đăng nhập</div>
                        <div class="panel-body">Vui lòng <Link to='dangnhap'>đăng nhập</Link> và kích hoạt tài khoản nhà tuyển dụng để đăng bài</div>

                    </div>
                </div>
            </div>
        )
        const chuaKichHoat = (
            <div className="loi-ghide-height">
                <div className="container ">
                    <div class="panel panel-danger ">
                        <div class="panel-heading">Bạn chưa kich hoạt tài khoản nhà tuyên dụng</div>
                        <div class="panel-body">Vui lòng <Link to='dangnhap'>kích hoạt</Link> tài khoản nhà tuyển dụng để đăng bài</div>

                    </div>
                </div>
            </div>
        )
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
        const ok = (
            <div class="main">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1">
                            <div class="form">
                                <form class="form-dyna xs-4" onSubmit={this.onSubmit}>
                                    <input type="hidden" name="job_create" value="1" />
                                    <div class="edit-job-actions">
                                        <a class="btn btn-back btn-secondary btn-sm" role="button">
                                            <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                                            <span class="wc-editable" onClick={() => this.props.history.goBack()}>Quay lại</span>
                                        </a>
                                    </div>
                                    <div class="row">
                                        {uploading}
                                        <div class="col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label class="control-label">
                                                    <span class="wc-editable" data-pk="front_label_job_title" >Tiêu đề bài viết</span>
                                                </label>
                                                <input
                                                    type="text" class="form-control required"
                                                    onChange={this.onChange}
                                                    value={txtTieuDe}
                                                    name='txtTieuDe'
                                                    placeholder='Tiêu đề'
                                                    disabled={this.state.disabled}
                                                />
                                                <div class="help-block with-errors">
                                                    <span class="wc-editable hien-thi-loi-edit">{loiTieuDe}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <label class="control-label">
                                                    <span class="wc-editable"  >Hình ảnh(nếu có)</span>
                                                </label>
                                                <input
                                                    ref="file"
                                                    type="file"
                                                    name="user[image]"
                                                    multiple="true"
                                                    onChange={this.onChangeFile} />
                                                <img src={this.state.txtHinhAnh} alt="Chưa chọn hình" />
                                                <div class="help-block with-errors">
                                                    <span class="wc-editable hien-thi-loi-edit">{loiHinhAnh}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group editor-themcongviec">
                                        <label class="control-label">
                                            <span class="wc-editable" >Nội dung</span>:</label>
                                        <Editor
                                            editorState={txtNoiDung}
                                            wrapperClassName="demo-wrapper"
                                            editorClassName="demo-editor boderediter-edit"
                                            onEditorStateChange={this.onEditorStateChange}
                                        />
                                    </div>


                                    <button type="submit" class="btn btn-primary">
                                        <span class="wc-editable" data-pk="front_button_save" data-type="action">Lưu</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        const daDangNhap = this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan.kichhoatnhatuyendung ? ok : chuaKichHoat;
        const main = this.props.taiKhoan && this.props.taiKhoan.taikhoan ? daDangNhap : chuaDangNhap
        return (
            <React.Fragment>
                {main}

                <div class="push"></div>
            </React.Fragment >
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
        actThemTinTuc: (data) => {
            dispatch(actThemTinTucAPI(data));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemTinTuc);
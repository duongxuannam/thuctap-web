import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import cloudinary from 'cloudinary';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import callApi from '../../global/apiCaller';
import { actSuaTinTucAPI } from '../../actions/index';
import { configCloudinary } from '../../global/config';
import KhongDuocTruyCap from '../../components/KhongDuocTruyCap';

cloudinary.config(configCloudinary)

class SuaTinTuc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtTieuDe: '',
            txtNoiDung: EditorState.createEmpty(),
            txtHinhAnh: '',
            loiTieuDe: '',
            loiHinhAnh: '',
            loiNoiDung: '',
            disabled: '',
            daThayHinh: false,
        };
        window.scrollTo(0, 0)
    }
     componentDidMount() {
        const { match } = this.props;
        if (match) {
            const { id } = match.params;
            return callApi(`tintuc/${id}`, 'GET', null).then(res => {
                this.setState({
                    txtTieuDe: res.data.tieude,
                    txtHinhAnh: res.data.hinhanh,
                    _nguoidang:  res.data._nguoidang._id,
                    _id: res.data._id,
                    txtNoiDung:  EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(res.data.noidung).contentBlocks))
                })
            });
        }
    }
     
    onEditorStateChange = (txtNoiDung) => this.setState({ txtNoiDung });
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

    onChangeFile = () => {
        const file = this.refs.file.files[0];
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
                txtHinhAnh: [reader.result],
                daThayHinh: true
            })
        };
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.txtTieuDe === '') {
            return this.setState({ loiTieuDe: "Trương này là bắt buộc" })
        }
        if (this.state.loiTieuDe === '' && this.state.loiHinhAnh === '') {
            if (this.state.txtTieuDe !== '' && this.state.txtNoiDung !== '') {
                if (this.state.daThayHinh) {
                    this.setState({ disabled: 'disabled' })
                    cloudinary.uploader.upload(`${this.state.txtHinhAnh}`).then(result => {
                        return result.secure_url
                    }).then(hinh => {
                        const data = {
                            tieude: this.state.txtTieuDe,
                            noidung: draftToHtml(convertToRaw(this.state.txtNoiDung.getCurrentContent())),
                            _id: this.state._id,
                            hinhanh: hinh,
                        }
                        this.props.actSuaTinTuc(data);
                        alert("Sửa thành công");
                        return this.props.history.goBack();
                    })
                } else {
                    const data = {
                        tieude: this.state.txtTieuDe,
                        noidung: draftToHtml(convertToRaw(this.state.txtNoiDung.getCurrentContent())),
                        _id: this.state._id
                    }
                    this.props.actSuaTinTuc(data);
                    alert("Sửa thành công");
                    return this.props.history.goBack();
                }
            }
        }
    }
    render() {
        const { txtNoiDung, txtTieuDe, loiTieuDe, loiHinhAnh, _nguoidang } = this.state;

        //console.log('luu lai o day ne:', draftToHtml(convertToRaw(txtMoTa.getCurrentContent())));
     
      
      
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
        const main = this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan._id === _nguoidang || this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan.admin ? ok : <KhongDuocTruyCap/>;
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
        taiKhoan: state.taiKhoan,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actSuaTinTuc: (data) => {
            dispatch(actSuaTinTucAPI(data));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SuaTinTuc);

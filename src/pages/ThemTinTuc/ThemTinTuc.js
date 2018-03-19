import React, { Component } from 'react';
import { EditorState, convertToRaw, } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import cloudinary from 'cloudinary';
import { connect } from 'react-redux';
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
            loiNoiDung: ''
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

        // cloudinary.uploader.upload(`${this.state.txtHinhAnh}`).then(result => {
            const data = {
                tieude: this.state.txtTieuDe,
                noidung: draftToHtml(convertToRaw(this.state.txtNoiDung.getCurrentContent())),
                _nguoidang: JSON.parse(localStorage.getItem('taikhoan')).taikhoan._id,
                // hinhanh: result.secure_url,
                hinhanh: result.secure_url,
            }
            this.props.actThemTinTuc(data);
        // })



    }

    render() {
        const { txtNoiDung, txtTieuDe, loiTieuDe, loiHinhAnh } = this.state;
        // console.log('luu lai o day ne:', draftToHtml(convertToRaw(txtNoiDung.getCurrentContent())));
        // console.log(configCloudinary)
        return (
            <React.Fragment>
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
                                                        placeholder='Tiêu đề' />
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

                <div class="push"></div>
            </React.Fragment >
        );
    }
};



const mapDispatchToProps = (dispatch, props) => {
    return {
        actThemTinTuc: (data) => {
            dispatch(actThemTinTucAPI(data));
        },
    }
}

export default connect(null, mapDispatchToProps)(ThemTinTuc);
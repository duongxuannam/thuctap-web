import React, { Component } from 'react';
import { EditorState, convertToRaw, } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class ThemCongViec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            txtTieuDe: '',
            txtDiaDiem: '',
            chuyenNganh: '',
            kieu: '',
            chucVu: '',
            txtLuong: '',
            trinhDo: '',
            kinhNghiem: '',
            txtSoLuong: '',
            thoiHan: '',
            txtMoTa: EditorState.createEmpty(),
            demnguoc: 5,
        };
    }
    onEditorStateChange = (txtMoTa) => this.setState({ txtMoTa });
    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    };
    onChangeFile = () => {
        var file = this.refs.file.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend =  (e) => {
            this.setState({
                imgSrc: [reader.result]
            })
          };
    }
    render() {
        const {
            editorState,
            txtTieuDe,
            txtDiaDiem,
            chuyenNganh,
            kieu,
            chucVu,
            txtLuong,
            trinhDo,
            kinhNghiem,
            txtSoLuong,
            thoiHan,
            txtMoTa,
            demnguoc,
         } = this.state;
        console.log('luu lai o day ne:', draftToHtml(convertToRaw(txtMoTa.getCurrentContent())))
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1">
                                <div class="form">
                                    <form class="form-dyna xs-4" onSubmit={this.handleFiles}>
                                        <input type="hidden" name="job_create" value="1" />
                                        <div class="edit-job-actions">
                                            <a class="btn btn-back btn-secondary btn-sm" role="button">
                                                <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                                                <span class="wc-editable" onClick={() => this.props.history.goBack()}>Quay lại</span>
                                            </a>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable">Tiêu đề</span>
                                                    </label>
                                                    <input
                                                        type="text" class="form-control required"
                                                        onChange={this.onChange}
                                                        value={txtTieuDe}
                                                        name='txtTieuDe'
                                                        placeholder='Tiêu đề' />
                                                    <div class="help-block with-errors">
                                                        <ul class="list-unstyled"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" >Địa điểm</span>:</label>
                                                    <input
                                                        type="text" class="form-control required"
                                                        onChange={this.onChange}
                                                        value={txtDiaDiem}
                                                        name='txtDiaDiem'
                                                        placeholder='Địa điểm làm việc' />
                                                    <div class="help-block with-errors">
                                                        <ul class="list-unstyled"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" >Chuyên ngành</span>:</label>
                                                    <select class="form-control" onChange={this.onChange} defaultValue={chuyenNganh} name="chuyenNganh">
                                                        <option value="" disabled >Lựa chọn chuyên ngành</option>
                                                        <option value="Công nghệ thông tin">Công nghệ thông tin</option>
                                                        <option value="Giáo dục">Giáo dục</option>
                                                        <option value="Kinh tế">Kinh tế</option>
                                                        <option value="Tài nguyên môi trường">Tài nguyên môi trường</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" >Kiểu</span>:</label>
                                                    <select class="form-control" onChange={this.onChange} defaultValue={kieu} name="kieu">
                                                        <option value="" disabled >Lựa chọn kiểu</option>
                                                        <option value="Toàn thời gian">Toàn thời gian</option>
                                                        <option value="Bán thời gian">Bán thời gian</option>
                                                        <option value="Thực tập">Thực tập</option>
                                                        <option value="Thời vụ">Thời vụ</option>
                                                        <option value="Chính thức">Chính thức</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable">Chức vụ</span>:</label>
                                                    <select class="form-control" onChange={this.onChange} defaultValue={chucVu} name="chucVu">
                                                        <option value="" disabled>Lựa chọn chức vụ</option>

                                                        <option value="Thực tập sinh">Thực tập sinh</option>

                                                        <option value="Nhân viên chính thức">Nhân viên chính thức</option>

                                                        <option value="Freelancer">Freelancer</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" >Lương</span>:</label>
                                                    <input type="text" class="form-control" onChange={this.onChange} value={txtLuong} name="txtLuong" placeholder='Nhập khoản lương hoặc trợ cấp' />
                                                </div>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" >Trình độ</span>:</label>
                                                    <select class="form-control" onChange={this.onChange} defaultValue={trinhDo} name="trinhDo">
                                                        <option value="" disabled >Lựa chọn trình độ</option>
                                                        <option value="Sinh viên năm 1 - 2"> Sinh viên năm 1 - 2</option>
                                                        <option value="Sinh viên năm 3 - 4"> Sinh viên năm 3 - 4</option>
                                                        <option value="Đại học"> Đại học</option>
                                                        <option value="Cao đẳng"> Cao đẳng</option>
                                                        <option value="Không"> Không</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable">Kinh nghiệm</span>:</label>

                                                    <select class="form-control" onChange={this.onChange} defaultValue={kinhNghiem} name="kinhNghiem">
                                                        <option value="" disabled >Lựa chọn kinh nghiệm</option>
                                                        <option value="Không" >Không</option>

                                                        <option value="< 1 năm"> &lt; 1 năm</option>

                                                        <option value="1 - 2 năm"> 1 - 2 năm</option>

                                                        <option value="> 2 năm"> &gt; 2 năm</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable">Số lượng</span>
                                                    </label>
                                                    <input type="text" class="form-control required" onChange={this.onChange} value={txtSoLuong} name="txtSoLuong" />
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" >Thời hạn</span>:</label>
                                                    <input type="date" class="form-control required" onChange={this.onChange} value={thoiHan} name="thoiHan" />
                                                    <div class="help-block with-errors">
                                                        <ul class="list-unstyled"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">

                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" >Hình ảnh(nếu có)</span>:</label>
                                                    <input
                                                        ref="file"
                                                        type="file"
                                                        name="user[image]"
                                                        multiple="true"
                                                        onChange={this.onChangeFile} />
                                                    <img src={this.state.imgSrc} />
                                                    <div class="help-block with-errors">
                                                        <ul class="list-unstyled"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group editor-themcongviec">
                                            <label class="control-label">
                                                <span class="wc-editable" >Miêu tả chi tiết</span>:</label>
                                            <Editor
                                                editorState={txtMoTa}
                                                wrapperClassName="demo-wrapper"
                                                editorClassName="demo-editor boderediter-edit"
                                                onEditorStateChange={this.onEditorStateChange}
                                            />
                                        </div>


                                        <button type="submit" class="btn btn-primary">
                                            <span class="wc-editable" >Lưu</span>
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

export default ThemCongViec;
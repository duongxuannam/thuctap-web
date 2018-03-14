import React, { Component } from 'react';
import { EditorState, } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class ThongTinTaiKhoan extends Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
    }
    onEditorStateChange = (editorState) => this.setState({ editorState });
    render() {
        const { editorState } = this.state;
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-5 col-xs-12">
                                <div class="current-image">
                                    <img src="http://res.cloudinary.com/thuctap/image/upload/v1520564546/user-default.png" alt=""
                                        class="photo" />

                                    <div class="upload-file upload-file3 upload-photo">
                                        <a >
                                            <span class="wc-editable" data-pk="ws_upload_photo" data-type="text">Upload Photo</span>
                                        </a>

                                        <input type="file" accept="image/*" />
                                    </div>
                                    <div class="alert alert-danger" id="errLogo" className="thongtin-display-none"></div>
                                </div>
                            </div>

                            <div class="col-lg-8 col-md-7 col-xs-12">
                                <div class="alert alert-success">The profile has been updated.</div>
                                <ul class="resume-nav-tabs" role="tablist">
                                    <li role="presentation" class="active">
                                        <a href="#contact-details" aria-controls="contact-details" role="tab" data-toggle="tab">
                                            <span class="wc-editable" data-pk="ws_contact_detail" data-type="text">Contact details</span>
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#billing-details" aria-controls="billing-details" role="tab" data-toggle="tab">
                                            <span class="wc-editable" data-pk="ws_billing_detail" data-type="text">Billing details</span>
                                        </a>
                                    </li>
                                </ul>

                                <form action="employer-profile.html" method="post" id="frmEmployerProfile" name="frmEmployerProfile" encType="multipart/form-data"
                                    class="form-dyna xs-4 form-profile">
                                    <input type="hidden" name="profile_update" value="1" />
                                    <input type="hidden" name="id" value="63" />
                                    <input type="hidden" name="tab" value="contact-details" />
                                    <div class="tab-content resume-tab-content company-tab-content">
                                        <div role="tabpanel" class="tab-pane active" id="contact-details">
                                            <div class="form">
                                                <div class="row">
                                                    <div class="col-sm-6 col-xs-12">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                <span class="wc-editable" data-pk="front_label_contact_name" data-type="text">Họ tên</span>:</label>
                                                            <input type="text" name="contact_name" class="form-control" />
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6 col-xs-12">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                <span class="wc-editable" data-pk="front_label_phone" data-type="text">Số điện thoại</span>: </label>
                                                            <input type="text" name="phone" class="form-control" />
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6 col-xs-12">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                <span class="wc-editable" data-pk="front_label_email" data-type="text">Email</span>:</label>
                                                            <input type="text" name="email" class="form-control required email" />
                                                            <div class="help-block with-errors">
                                                                <ul class="list-unstyled"></ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6 col-xs-12">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                <span class="wc-editable" data-pk="front_label_website" data-type="text">Địa chỉ</span>:</label>
                                                            <input type="text" name="url" class="form-control url"
                                                                placeholder="http://www.domain.com" />
                                                            <div class="help-block with-errors">
                                                                <ul class="list-unstyled"></ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6 col-xs-12">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                <span class="wc-editable">Trường đại học</span>:</label>
                                                            <input id="pjJLProfilePassword" name="password" class="form-control required"
                                                            />
                                                            <div class="help-block with-errors">
                                                                <ul class="list-unstyled"></ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6 col-xs-12">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                <span class="wc-editable">Chuyên ngành</span>: </label>
                                                            <input name="cpassword" class="form-control required"
                                                            />
                                                            <div class="help-block with-errors">
                                                                <ul class="list-unstyled"></ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" data-pk="front_label_description" data-type="text">Miêu tả bản thân</span>:</label>
                                                    <textarea name="i18n[1][description]" rows="10" class="form-control"></textarea>
                                                </div>

                                                <button type="submit" class="btn btn-primary">
                                                    <span class="wc-editable" data-pk="front_button_save" data-type="action">Lưu</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div role="tabpanel" class="tab-pane " id="billing-details">
                                            <div class="form">
                                                <div class="row">
                                                    <div class="col-sm-6 col-xs-12">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                <span class="wc-editable" data-pk="front_label_b_contact_name" data-type="text">Tên doanh nghiệp</span>:</label>
                                                            <input type="text" name="b_contact_name" value="" class="form-control" />
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6 col-xs-12">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                <span class="wc-editable" data-pk="front_label_b_phone" data-type="text">Số điện thoại</span>:</label>
                                                            <input type="text" name="b_phone" value="" class="form-control" />
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6 col-xs-12">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                <span class="wc-editable" data-pk="front_label_b_email" data-type="text">Email</span>:</label>
                                                            <input type="text" name="b_email" value="" class="form-control email"
                                                                data-msg-remote="Email was registered by another." />
                                                            <div class="help-block with-errors">
                                                                <ul class="list-unstyled"></ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6 col-xs-12">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                <span class="wc-editable" data-pk="front_label_company_name" data-type="text">Website</span>:</label>
                                                            <input type="text" name="company_name" class="form-control required" />
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-12 col-xs-12">
                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                <span class="wc-editable" data-pk="front_label_b_address" data-type="text">Địa chỉ liên hệ</span>:</label>
                                                            <input type="text" name="b_address" value="" class="form-control" />
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-12 col-xs-12">
                                                        <div class="form-group editor-themcongviec" >
                                                            <label class="control-label">
                                                                <span class="wc-editable" >Miêu tả chi tiết</span>:</label>
                                                            <Editor
                                                                editorState={editorState}
                                                                wrapperClassName="demo-wrapper"
                                                                editorClassName="demo-editor boderediter-edit"
                                                                onEditorStateChange={this.onEditorStateChange}
                                                            />

                                                        </div>
                                                    </div>


                                                </div>

                                                <button type="submit" class="btn btn-primary">
                                                    <span class="wc-editable" data-pk="front_button_save" data-type="action">Lưu</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="upload" className="thongtin-tam"></div>
                <div class="push"></div>
            </React.Fragment>
        );
    }
};

export default ThongTinTaiKhoan;
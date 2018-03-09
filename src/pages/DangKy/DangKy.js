import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DangKy extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="paragraph">
                            <span class="wc-editable" data-pk="ws_candidate_regsiter_desc" data-type="textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.</span>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-sm-6 col-xs-12">
                                <div class="form">
                                    <form id="frmCandidateRegister" name="frmCandidateRegister" method="post" encType="multipart/form-data"
                                        class="form-dyna xs-4">
                                        <input type="hidden" name="candidate_register" value="1" />
                                        <div class="form-group">
                                            <label class="control-label">
                                                <span class="wc-editable" data-pk="front_label_email" data-type="text">Email</span>
                                            </label>
                                            <input type="text" name="email" value="" class="form-control required email"
                                                data-msg-remote="Email was registered by another." />
                                            <div class="help-block with-errors">
                                                <ul class="list-unstyled"></ul>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">
                                                <span class="wc-editable" data-pk="front_label_password" data-type="text">Password</span>: </label>
                                            <input type="password" id="pjJLCandidatePassword" name="password" value="" class="form-control required"
                                            />
                                            <div class="help-block with-errors">
                                                <ul class="list-unstyled"></ul>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">
                                                <span class="wc-editable" data-pk="front_label_cpassword" data-type="text">Confirm password</span>: </label>
                                            <input type="password" name="cpassword" class="form-control required" value=""
                                            />
                                            <div class="help-block with-errors">
                                                <ul class="list-unstyled"></ul>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">
                                                <span class="wc-editable" data-pk="front_label_fname" data-type="text">First name</span>: </label>
                                            <input type="text" name="fname" value="" class="form-control required" />
                                            <div class="help-block with-errors">
                                                <ul class="list-unstyled"></ul>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">
                                                <span class="wc-editable" data-pk="front_label_lname" data-type="text">Last name</span>: </label>
                                            <input type="text" name="lname" value="" class="form-control required" />
                                            <div class="help-block with-errors">
                                                <ul class="list-unstyled"></ul>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">
                                                <span class="wc-editable" data-pk="front_label_phone" data-type="text">Phone</span>: </label>
                                            <input type="text" name="phone" value="" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">
                                                <span class="wc-editable" data-pk="front_label_linkedin" data-type="text">Linkedin</span>: </label>
                                            <input type="text" name="linkedin" value="" class="form-control" />
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            <span class="wc-editable" data-pk="front_button_register" data-type="action">Đăng ký</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-md-offset-2 col-xs-12">
                                <div class="box">
                                    <div class="box-title">
                                        <span class="wc-editable" data-pk="front_have_account" data-type="text">Nếu bạn đã có tài khoản</span>
                                    </div>
                                    <Link to={`/dangnhap`} class="btn btn-primary btn-lg">
                                        <span class="wc-editable" data-pk="front_btn_login" data-type="action">Đăng nhập ngay</span>
                                    </Link>
                                    <p>
                                        <Link to={`/quenmatkhau`} >
                                            <span class="wc-editable" data-pk="front_link_forgot_password" data-type="text">Quên mật khẩu</span>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="push"></div>
            </React.Fragment>
        );
    }
};


export default DangKy;

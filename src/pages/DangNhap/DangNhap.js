import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DangNhap extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="paragraph">
                            <span class="wc-editable" data-pk="ws_candidate_login_desc" data-type="textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.</span>
                        </div>

                        <br />

                        <div class="row">
                            <div class="col-sm-6 col-xs-12">
                                <div class="form">
                                    <form id="frmCandidateLogin" name="frmCandidateLogin">
                                        <input type="hidden" name="candidate_login" value="1" />
                                        <div class="form-group">
                                            <label class="control-label">
                                                <span class="wc-editable" data-pk="front_label_email" data-type="text">Email</span>:</label>
                                            <input type="email" name="email" class="form-control required email" data-msg-required="Email is required." data-msg-email="Email is invalid."
                                            />
                                            <div class="help-block with-errors">
                                                <ul class="list-unstyled"></ul>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label">
                                                <span class="wc-editable" data-pk="front_label_password" data-type="text">Mật khẩu</span>: </label>
                                            <input type="password" name="password" class="form-control required" data-msg-required="Password is required." />
                                            <div class="help-block with-errors">
                                                <ul class="list-unstyled"></ul>
                                            </div>
                                        </div>

                                        <div class="form-actions">
                                            <button type="submit" class="btn btn-primary btn-lg">
                                                <span class="wc-editable" data-pk="front_btn_login" data-type="action">Đăng nhập</span>
                                            </button>

                                            <Link to={`/quenmatkhau`} >
                                                <span class="wc-editable" data-pk="front_link_forgot_password" data-type="text">Quên mật khẩu</span>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6 col-md-offset-2 col-xs-12">

                                <div class="box">
                                    <div class="box-title">
                                        <span class="wc-editable" data-pk="front_dont_have_account" data-type="text">Bạn chưa có tài khoản?</span>
                                    </div>

                                    <Link to={`/dangky`} class="btn btn-primary btn-lg">
                                        <span class="wc-editable" data-pk="front_register" data-type="text">Đăng ký ngay</span>
                                    </Link>
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


export default DangNhap;

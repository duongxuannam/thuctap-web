import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuenMatKhau extends Component {
    render() {
        return (
            <React.Fragment>
               <div class="main">
            <div class="container">
                <div class="paragraph">
                    <span class="wc-editable" data-pk="ws_forgot_password_desc" data-type="textarea">Enter your email address and password will be sent.</span>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-6 col-xs-12">
                        <div class="form">
                            <form action="forgot.html" method="post" id="frmForgotPassword" name="frmForgotPassword"  class="form-dyna xs-4 form-forgot-password">
                                <input type="hidden" name="forgot_password" value="1" />
                                <div class="form-group">
                                    <label class="control-label">
                                        <span class="wc-editable" data-pk="front_label_email" data-type="text">Email</span>:</label>

                                    <input type="text" name="email" class="form-control required email" 
                                    />
                                    <div class="help-block with-errors">
                                        <ul class="list-unstyled"></ul>
                                    </div>
                                </div>

                                <div class="form-actions">
                                    <button type="submit" class="btn btn-primary btn-lg">
                                        <span class="wc-editable" data-pk="front_button_send" data-type="action">Xác nhận</span>
                                    </button>

                                    <a onClick={ ()=>this.props.history.goBack() }>
                                        <span class="wc-editable" >Quay lại</span>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6 col-md-offset-2 col-xs-12">
                        <div class="box">
                            <div class="box-title">
                                <span class="wc-editable" data-pk="ws_sign_in_with" data-type="text">Đăng nhập bằng</span>:</div>

                            <a href="" class="btn-facebook">Facebook</a>
                        </div>

                        <div class="box">
                            <div class="box-title">
                                <span class="wc-editable" data-pk="front_dont_have_account" data-type="text">Chưa có tài khoản?</span>
                            </div>

                            <Link to={`/dangky`} class="btn btn-primary btn-lg">
                                <span class="wc-editable" data-pk="front_register" data-type="text">Đăng ký</span>
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


export default QuenMatKhau;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThongTinTaiKhoan extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-5 col-xs-12">
                                <div class="current-image">
                                    <img src="http://res.cloudinary.com/thuctap/image/upload/v1520564546/user-default.png" alt=""
                                        class="photo"/>

                                        <div class="upload-file upload-file3 upload-photo">
                                            <a href="#">
                                                <span class="wc-editable" data-pk="ws_upload_photo" data-type="text">Upload Photo</span>
                                            </a>

                                            <input type="file" accept="image/*"/>
                            </div>
                                            <div class="alert alert-danger" id="errLogo" style="display: none;"></div>
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

                                        <form action="employer-profile.html" method="post" id="frmEmployerProfile" name="frmEmployerProfile" autocomplete="off" enctype="multipart/form-data"
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
                                                                        <span class="wc-editable" data-pk="front_label_contact_name" data-type="text">Contact Name</span>:</label>
                                                                    <input type="text" name="contact_name" value="dasdasd" class="form-control" />
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-6 col-xs-12">
                                                                <div class="form-group">
                                                                    <label class="control-label">
                                                                        <span class="wc-editable" data-pk="front_label_phone" data-type="text">Phone</span>: </label>
                                                                    <input type="text" name="phone" value="051554" class="form-control" />
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-6 col-xs-12">
                                                                <div class="form-group">
                                                                    <label class="control-label">
                                                                        <span class="wc-editable" data-pk="front_label_email" data-type="text">Email</span>:</label>
                                                                    <input type="text" name="email" value="test@gmail.com" class="form-control required email" data-msg-required="Email is required."
                                                                        data-msg-email="Email is invalid." data-msg-remote="Email was registered by another."
                                                                    />
                                                                    <div class="help-block with-errors">
                                                                        <ul class="list-unstyled"></ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-6 col-xs-12">
                                                                <div class="form-group">
                                                                    <label class="control-label">
                                                                        <span class="wc-editable" data-pk="front_label_website" data-type="text">Website</span>:</label>
                                                                    <input type="text" name="url" value="http://vevs.website/web-demo/job-portal-website/employer-register.html" class="form-control url"
                                                                        placeholder="http://www.domain.com" data-msg-url="The URL is not valid. Please check again. The URL much also contain the prefix http:// or https://"
                                                                    />
                                                                    <div class="help-block with-errors">
                                                                        <ul class="list-unstyled"></ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-6 col-xs-12">
                                                                <div class="form-group">
                                                                    <label class="control-label">
                                                                        <span class="wc-editable" data-pk="front_label_password" data-type="text">Password</span>:</label>
                                                                    <input type="password" id="pjJLProfilePassword" name="password" value="password" class="form-control required" data-msg-required="Password is required."
                                                                    />
                                                                    <div class="help-block with-errors">
                                                                        <ul class="list-unstyled"></ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-6 col-xs-12">
                                                                <div class="form-group">
                                                                    <label class="control-label">
                                                                        <span class="wc-editable" data-pk="front_label_cpassword" data-type="text">Confirm password</span>: </label>
                                                                    <input type="password" name="cpassword" value="password" class="form-control required" data-msg-required="Confirm password is required."
                                                                        data-msg-equalTo="Password does not match." />
                                                                    <div class="help-block with-errors">
                                                                        <ul class="list-unstyled"></ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                <span class="wc-editable" data-pk="front_label_address" data-type="text">Address</span>:</label>
                                                            <input type="text" name="i18n[1][address]" value="dasdasf fsdf" class="form-control" />
                                                        </div>

                                                        <div class="form-group">
                                                            <label class="control-label">
                                                                <span class="wc-editable" data-pk="front_label_description" data-type="text">Description</span>:</label>
                                                            <textarea name="i18n[1][description]" rows="10" class="form-control">fsdfsd fgsd gdfg</textarea>
                                                        </div>

                                                        <button type="submit" class="btn btn-primary">
                                                            <span class="wc-editable" data-pk="front_button_save" data-type="action">Save</span>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div role="tabpanel" class="tab-pane " id="billing-details">
                                                    <div class="form">
                                                        <div class="row">
                                                            <div class="col-sm-6 col-xs-12">
                                                                <div class="form-group">
                                                                    <label class="control-label">
                                                                        <span class="wc-editable" data-pk="front_label_b_contact_name" data-type="text">Contact Name</span>:</label>
                                                                    <input type="text" name="b_contact_name" value="" class="form-control" />
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-6 col-xs-12">
                                                                <div class="form-group">
                                                                    <label class="control-label">
                                                                        <span class="wc-editable" data-pk="front_label_b_phone" data-type="text">Phone</span>:</label>
                                                                    <input type="text" name="b_phone" value="" class="form-control" />
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-6 col-xs-12">
                                                                <div class="form-group">
                                                                    <label class="control-label">
                                                                        <span class="wc-editable" data-pk="front_label_b_email" data-type="text">Email</span>:</label>
                                                                    <input type="text" name="b_email" value="" class="form-control email" data-msg-required="Email is required." data-msg-email="Email is invalid."
                                                                        data-msg-remote="Email was registered by another." />
                                                                    <div class="help-block with-errors">
                                                                        <ul class="list-unstyled"></ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-6 col-xs-12">
                                                                <div class="form-group">
                                                                    <label class="control-label">
                                                                        <span class="wc-editable" data-pk="front_label_company_name" data-type="text">Company Name</span>:</label>
                                                                    <input type="text" name="company_name" value="asdasd" class="form-control required" data-msg-required="Company name is required."
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-6 col-xs-12">
                                                                <div class="form-group">
                                                                    <label class="control-label">
                                                                        <span class="wc-editable" data-pk="front_label_b_address" data-type="text">Address</span>:</label>
                                                                    <input type="text" name="b_address" value="" class="form-control" />
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-6 col-xs-12">
                                                                <div class="form-group">
                                                                    <label class="control-label">
                                                                        <span class="wc-editable" data-pk="front_label_b_city" data-type="text">City</span>:</label>
                                                                    <input type="text" name="b_city" value="" class="form-control" />
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-6 col-xs-12">
                                                                <div class="form-group">
                                                                    <label class="control-label">
                                                                        <span class="wc-editable" data-pk="front_label_b_state" data-type="text">State</span>:</label>
                                                                    <input type="text" name="b_state" value="" class="form-control" />
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-6 col-xs-12">
                                                                <div class="form-group">
                                                                    <label class="control-label">
                                                                        <span class="wc-editable" data-pk="front_label_b_country" data-type="text">Country</span>:</label>
                                                                    <input type="text" name="b_country" value="" class="form-control" />
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-6 col-xs-12">
                                                                <div class="form-group">
                                                                    <label class="control-label">
                                                                        <span class="wc-editable" data-pk="front_label_b_vat" data-type="text">VAT Number</span>:</label>
                                                                    <input type="text" name="b_vat" value="" class="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <button type="submit" class="btn btn-primary">
                                                            <span class="wc-editable" data-pk="front_button_save" data-type="action">Save</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="upload" style="position: absolute; left: -9999px; top: 0;"></div>
                        <div class="push"></div>
            </React.Fragment>
                    );
    }
};


export default ThongTinTaiKhoan;

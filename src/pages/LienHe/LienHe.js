import React, { Component } from 'react';

class LienHe extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-7 col-sm-6 col-xs-12">
                                <div class="form" id="formContact">
                                    <div id="pjWrapperContactForm_1">
                                        <div class="container-fluid pjCF-container">
                                            <div id="pjCF_container_1" class="panel-body lienhe-ghide-block" >
                                                <form >
                                                    <input type="hidden" name="id" value="1" />
                                                    <div class="form-group">
                                                        <label class="col-sm-3 control-label">Họ tên</label>
                                                        <div class="col-sm-9 col-xs-12">
                                                            <input type="text" id="pjCF_field_20" name="pjCF_field_20" value="" class="form-control pjCF-form-field pjCF-checked-field lienhe-ghide"
                                                                placeholder="" />
                                                            <div class="help-block with-errors">
                                                                <ul class="list-unstyled"></ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-sm-3 control-label">Địa chỉ</label>
                                                        <div class="col-sm-9 col-xs-12">
                                                            <input type="text" id="pjCF_field_21" name="pjCF_field_21" value=""  class="form-control pjCF-form-field pjCF-checked-field lienhe-ghide"
                                                                placeholder="" />
                                                            <div class="help-block with-errors">
                                                                <ul class="list-unstyled"></ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-sm-3 control-label">Email</label>
                                                        <div class="col-sm-9 col-xs-12">
                                                            <input type="text" id="pjCF_field_22" name="pjCF_field_22" value="" class="form-control pjCF-form-field lienhe-ghide"
                                                                placeholder="" />
                                                            <div class="help-block with-errors">
                                                                <ul class="list-unstyled"></ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-sm-3 control-label">Số điện thoại</label>
                                                        <div class="col-sm-9 col-xs-12">
                                                            <input type="text" id="pjCF_field_23" name="pjCF_field_23" value=""  class="form-control pjCF-form-field pjCF-checked-field lienhe-ghide"
                                                                placeholder="" />
                                                            <div class="help-block with-errors">
                                                                <ul class="list-unstyled"></ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="col-sm-3 control-label">Câu hỏi</label>
                                                        <div class="col-sm-9 col-xs-12">
                                                            <textarea name="pjCF_field_24" placeholder="" rows="6" cols="40" class="form-control pjCF-form-field pjCF-checked-field"></textarea>
                                                            <div class="help-block with-errors">
                                                                <ul class="list-unstyled"></ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <div class="col-sm-offset-3 col-sm-6">
                                                            <button  type="submit" class="btn pjVrBtnPrimary pjCF-button btn-primary lienhe-ghide-button">Gửi</button>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div class="form-group">
                                                    <div id="pjCF_message_container_1" class="alert" role="alert"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-5 col-sm-6 col-xs-12">
                                <div class="panel">
                                    <div class="panel-heading">
                                        <div class="panel-title">
                                            <span class="wc-editable" data-pk="ws_our_specialist" data-type="text">Nhóm của chúng tôi</span>
                                        </div>
                                    </div>

                                    <div class="panel-body">
                                        <div class="availability-specialist">
                                            <img src="https://res.cloudinary.com/thuctap/image/upload/v1523634189/Namm.jpg" alt="" title="" />

                                            <strong>
                                                <span class="wc-editable" data-pk="ws_contact_customer_support_name" data-type="text">Dương Xuân Nam</span>
                                            </strong>

                                            <p>
                                                <span class="wc-editable" data-pk="ws_contact_customer_support" data-type="text">Trưởng nhóm</span>
                                            </p>
                                        </div>

                                        <div class="availability-time">
                                            <p>
                                                <strong>
                                                    <span class="wc-editable" data-pk="ws_contact_monday_through_friday" data-type="text">Võ Quốc Luong</span> </strong>

                                                <span>
                                                    <span class="wc-editable" data-pk="ws_contact_monday_through_friday_desc" data-type="text">Giáo viên hướng dẫn</span>
                                                </span>
                                            </p>

                                            <p>
                                                <strong>
                                                    <span class="wc-editable" data-pk="ws_contact_saturday" data-type="text">Võ So Ny</span> </strong>

                                                <span>
                                                    <span class="wc-editable" data-pk="ws_contact_saturday_desc" data-type="text">Thành viên</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="map-holder">
                                    <div class="map lienhe-ghide-map" >
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7834.878871590268!2d106.7703011!3d10.9301406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9a6d10c239b%3A0x59d3599adaf8050!2zVW5uYW1lZCBSb2FkLCBExKkgQW4sIELDrG5oIETGsMahbmc!5e0!3m2!1svi!2s!4v1520569196121"
                                            width="800" height="600" frameBorder="0" className="lienhe-ghide-iframe" allowFullScreen title={`nha Nam`}></iframe>
                                    </div>

                                    <div class="map-info">
                                        <ul>
                                            <li>
                                                <span class="glyphicon glyphicon-phone"></span>

                                                <strong>
                                                    <span class="wc-editable" data-pk="ws_contact_phone" data-type="text">Số điện thoại</span>:</strong>

                                                <em>
                                                    <span class="wc-editable" data-pk="ws_contact_phone_number" data-type="text">0165 326 4570</span>
                                                </em>
                                            </li>

                                            <li>
                                                <span class="glyphicon glyphicon-envelope"></span>

                                                <strong>
                                                    <span class="wc-editable" data-pk="ws_contact_email" data-type="text">Email</span>:</strong>
                                                <a href="mailto:info@jobagency.com">
                                                    <span class="wc-editable" data-pk="ws_contact_email_address" data-type="text">duongxuannam1995@gmail.com</span>
                                                </a>
                                            </li>

                                            <li>
                                                <span class="glyphicon glyphicon-map-marker"></span>

                                                <strong>
                                                    <span class="wc-editable" data-pk="ws_contact_address" data-type="text">Địa chỉ</span>:</strong>

                                                <em id="address">
                                                    <span class="wc-editable" data-pk="ws_contact_address_details" data-type="text">137/1 Tân Bình, Dĩ An, Bình Dương</span>
                                                </em>
                                            </li>
                                        </ul>
                                    </div>
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


export default LienHe;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { chiTietTinTucAPI } from '../../actions/index';

class ChiTietTinTuc extends Component {
    componentDidMount() {
        const { match } = this.props;
        if (match) {
            const { id } = match.params;
            this.props.actChiTietTinTuc(id);
        }
    }

    render() {
        const { tieude, _nguoidang, ngaydang, hinhanh, noidung, luotxem } = this.props.chiTietTinTuc
        var tenDefualt = ''
        if (_nguoidang && _nguoidang.hoten) {
            tenDefualt = _nguoidang.hoten
        }


        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-xs-12">
                                <div class="resume-head">
                                    <p>
                                        <a class="btn btn-back" onClick={() => this.props.history.goBack()}>
                                            <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                                            <span class="wc-editable">Quay lại</span>
                                        </a>
                                    </p>
                                    <h1>{tieude}</h1>
     
                                    <p class="lead">
                                        <span class="wc-editable">Người đăng</span> {tenDefualt} |
                       <span class="wc-editable" data-pk="ws_blog_posted_on" data-type="text">Ngày đăng:</span> {moment(ngaydang).utc().format('DD-MM-YYYY')}
                                        <span class="wc-editable" data-pk="ws_blog_at" data-type="text">   Lượt xem:</span> {luotxem}</p>
                                </div>

                                <div class="blog-post">
                                    <div class="blog-post-image">
                                        <img class="img-responsive img-hover" src={hinhanh}
                                            alt="" />
                                    </div>
                                    <div class="lead" dangerouslySetInnerHTML={{ __html: noidung }} >

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-xs-12">
                                <div class="box">
                                    <div class="box-title">
                                        <span class="wc-editable" data-pk="ws_blog_side" data-type="text">Đăng tải bài viết của bạn</span>
                                    </div>
                                    <p>
                                        <span class="wc-editable" data-pk="ws_blog_side_desc" data-type="text">Bạn có những thông tin muốn gửi đến mọi người có những bài viết hay muốn chia sẻ??.</span>
                                    </p>
                                    <Link to={`/themtintuc`} class="btn btn-primary" >
                                        <span class="wc-editable" >Đăng bài</span>

                                    </Link>
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


const mapStateToProps = state => {
    // console.log('log state dc ko', state)
    return {
        chiTietTinTuc: state.chiTietTinTuc,
        taiKhoan: state.taiKhoan
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actChiTietTinTuc: (id) => {
            dispatch(chiTietTinTucAPI(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChiTietTinTuc);
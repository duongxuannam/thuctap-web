import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        const { tieude, _nguoidang, ngaydang, hinhanh, noidung } = this.props.chiTietTinTuc
        var tenDefualt = ''
        if(_nguoidang && _nguoidang.hoten){
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
                                        <a class="btn btn-back" onClick={ ()=> this.props.history.goBack() }>
                                            <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                                            <span class="wc-editable">Quay lại</span>
                                        </a>
                                    </p>
                                    <h1>{tieude}</h1>
                                    <p>
                                        <span class="wc-editable" >Posted by</span>{tenDefualt}
                                <span class="wc-editable" data-pk="ws_blog_on" data-type="text">on</span> {ngaydang}</p>
                                </div>

                                <div class="blog-post">
                                    <div class="blog-post-image">
                                        <img class="img-responsive img-hover" src={ hinhanh }
                                            alt="" />
                                    </div>
                                    <div class="lead" dangerouslySetInnerHTML={{__html: noidung}} >
                            
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-xs-12">
                                <div class="box">
                                    <div class="box-title">
                                        <span class="wc-editable" data-pk="ws_blog_side" data-type="text">Tell Us Your Story</span>
                                    </div>
                                    <p>
                                        <span class="wc-editable" data-pk="ws_blog_side_desc" data-type="text">Use this field as a call to action to your job portal visitors - candidates and employers.
                                    Ask them to send you a short success story or contribute to your blog.</span>
                                    </p>
                                    <Link to={`/themtintuc`} class="btn btn-primary" >
                                        <span class="wc-editable" data-pk="ws_blog_read_more" data-type="text">Đăng bài</span>
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
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { actLayDataTinTucAPI } from '../../actions/index';

class TinTuc extends Component {
    componentDidMount() {
        this.props.actLayDataTinTuc();
    };
    showData(data) {
        var result = null;
        if (data.length > 0) {
            result = data.map((item, index) => {
                return (
                    <div class="blog-post" key={index}>
                        <h2>
                            <Link to={`/chitiettintuc/${item._id}`} onClick={()=>window.scrollTo(0, 0)}>{item.tieude}</Link>
                        </h2>

                        <p class="lead">
                            <span class="wc-editable">Người đăng</span> {item._nguoidang.hoten} |
                       <span class="wc-editable" data-pk="ws_blog_posted_on" data-type="text">Ngày đăng:</span> {moment(item.ngaydang).utc().format('DD-MM-YYYY')}
                       <span class="wc-editable" data-pk="ws_blog_at" data-type="text">   Lượt xem:</span> { item.luotxem }</p>

                        <div class="blog-post-image ">
                            <Link to={`/chitiettintuc/${item._id}`} onClick={()=>window.scrollTo(0, 0)}>
                                <img class="imgbootstrap  " src={item.hinhanh ? item.hinhanh : 'https://res.cloudinary.com/thuctap/image/upload/v1522173916/tinTucMacDinh.png'}
                                    alt="" />
                            </Link>
                        </div>

                        {/* <p>Write a short description containing the key highlights from your post.</p> */}

                        <Link to={`/chitiettintuc/${item._id}`} class="btn btn-primary" onClick={()=>window.scrollTo(0, 0)}>
                            <span class="wc-editable" data-pk="ws_blog_read_more" data-type="text">Xem</span>
                        </Link>
                    </div>

                );
            });
        }
        return result;
    }


    render() {
        console.log(this.props.dataTinTuc) 
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-xs-12">

                            {this.showData(this.props.dataTinTuc)}
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
        dataTinTuc: state.dataTinTuc
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actLayDataTinTuc: () => {
            dispatch(actLayDataTinTucAPI());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TinTuc);

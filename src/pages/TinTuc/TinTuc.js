import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
                            <Link to={`/chitiettintuc/${item._id}`} >{item.tieude}</Link>
                        </h2>

                        <p class="lead">
                            <span class="wc-editable">by</span> {item._nguoidang.hoten} |
                       <span class="wc-editable" data-pk="ws_blog_posted_on" data-type="text">Posted on</span> February 09, 2018
                       <span class="wc-editable" data-pk="ws_blog_at" data-type="text">at</span> {item.ngaydang}</p>

                        <div class="blog-post-image ">
                            <Link to={`/chitiettintuc/${item._id}`}>
                                <img class="imgbootstrap  " src={item.hinhanh}
                                    alt="" />
                            </Link>
                        </div>

                        {/* <p>Write a short description containing the key highlights from your post.</p> */}

                        <Link to={`/chitiettintuc/${item._id}`} class="btn btn-primary">
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
                                        <span class="wc-editable" data-pk="ws_blog_side" data-type="text">Tell Us Your Story</span>
                                    </div>
                                    <p>
                                        <span class="wc-editable" data-pk="ws_blog_side_desc" data-type="text">Use this field as a call to action to your job portal visitors - candidates and employers.
                                    Ask them to send you a short success story or contribute to your blog.</span>
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

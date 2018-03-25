import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actTimKiemCongViecAPI } from '../actions/index';

class BannerSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            tuKhoa : '',
            diaDiem: '',
            loiTuKhoa: 'Từ khóa',
            loiDiaDiem: 'Địa điểm'
        }
    }
    timKiem = (e) => {
        e.preventDefault();
        if(this.state.tuKhoa === '')
        { 
             this.setState({ loiTuKhoa: 'Vui lòng nhập từ khóa để tìm kiếm' })
        }
        if(this.state.diaDiem === '')
        { 
             this.setState({ loiDiaDiem: 'Vui lòng nhập địa điểm để tìm kiếm' })
        }
        if(this.state.tuKhoa !== '' && this.state.diaDiem !== ''){
           // this.props.actTimKiemCongViec(data)
           console.log('kiem de')
        }
        
    }
    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }  
    render() {
        return (
            <div class="section-background-intro-edit intro intro-home">
                <div class="search-jobs">
                    <div class="container">
                        <h1>
                            <span class="wc-editable" >Tìm kiếm công việc</span>
                        </h1>
                        <form >
                            <div class="row">
                                <div class="col-sm-5 col-xs-12">
                                    <div class="form-group">
                                    <select class="form-control"  value='' name="chuyenNganh">
                                    <option value="" disabled >Lựa chọn chuyên ngành</option>
                                    <option value="Công nghệ thông tin">Công nghệ thông tin</option>
                                    <option value="Giáo dục">Giáo dục</option>
                                    <option value="Kinh tế">Kinh tế</option>
                                    <option value="Tài nguyên môi trường">Tài nguyên môi trường</option>
                                    <option value="Khác">Khác</option>
                                </select>                                        <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div class="col-sm-5 col-xs-12">
                                    <div class="form-group">
                                    <select class="form-control"  value='' name="chuyenNganh">
                                            <option value="" disabled >Lựa chọn chuyên ngành</option>
                                            <option value="Công nghệ thông tin">Công nghệ thông tin</option>
                                            <option value="Giáo dục">Giáo dục</option>
                                            <option value="Kinh tế">Kinh tế</option>
                                            <option value="Tài nguyên môi trường">Tài nguyên môi trường</option>
                                            <option value="Khác">Khác</option>
                                        </select>
                                        <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div class="col-sm-2 col-xs-12">
                                <button to={`/danhsachcongviec`} onClick={this.timKiem} class="btn btn-primary btn-lg">
                                        <span class="wc-editable" >Tìm kiếm</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <p>
                         
                        </p>
                        <p>
                         
                        </p>
                                  <p>
                         
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actTimKiemCongViec: (data) => {
            dispatch(actTimKiemCongViecAPI(data));
        }
    }
}
export default connect(null, mapDispatchToProps)(BannerSearch);

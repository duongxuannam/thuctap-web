import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { actTaiThongBaoAPI } from '../../actions/index';



class ThongBao extends Component {
    componentDidMount() {
        const id = this.props.taiKhoan.taikhoan._id
        this.props.actTaiThongBao(id);
    }
    showData(data) {
        var result = null;
        if (data.length > 0) {
            result = data.reverse().map((item, index) => {

                // var local_date= moment.utc(item.thoigian).local().format('YYYY-MM-DD HH:mm:ss');
                const local_date = moment.utc(item.thoigian).local().format('HH:mm DD-MM-YYYY');
                // console.log(local_date)

                const kichhoatnhatuyendung = (
                    <div class="panel panel-success " >
                        <div class="panel-heading">Tài khoản của bạn đã được kích hoạt nhà tuyển dụng <span class='flr'>Thòi gian: {local_date}</span></div>
                        <div class="panel-body">

                            Bạn đã có thể <Link to={`themcongviec`}>đăng tuyển </Link> và <Link to={`themtintuc`}> thêm bài viết </Link>

                        </div>

                    </div>
                )
                const ungtuyen = (
                    <div class="panel panel-warning " >
                        <div class="panel-heading">Vừa có người ứng tuyển vào công việc bạn đăng<span class='flr'>Thòi gian: {local_date}</span></div>
                        <div class="panel-body">

                            Xem <Link to={`danhsachungtuyen/${item.idCongViec}`}>danh sách
                        </Link>
                            
                        </div>

                    </div>
                )
                return (
                    <React.Fragment key={index}>
                        {item.loai === 'duyetdangkynhatuyendung' ? kichhoatnhatuyendung : ungtuyen}
                    </React.Fragment>

                );
            });
        }
        return result;
    }
    render() {
        if(!this.props.taiKhoan || !this.props.taiKhoan.taikhoan ){
            return <Redirect to={``}/>
        }
        const mang = this.props.thongBao;
        console.log('log log ', this.props.thongBao)
        return (
            <React.Fragment>
                <div className="thongbao-ghide-height">
                    <div className="container ">

                        {this.showData(mang)}


                    </div>
                </div>
                <div class="push"></div>
            </React.Fragment>

        );
    }
}
const mapStateToProps = state => {
    return {
        taiKhoan: state.taiKhoan,
        thongBao: state.thongBao
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actTaiThongBao: (id) => {
            dispatch(actTaiThongBaoAPI(id));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThongBao);


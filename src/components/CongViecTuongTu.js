import React, { Component } from 'react';
import callApi from '../global/apiCaller';
import { Link } from 'react-router-dom';

class CongViecTuongTu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: []
        };
    }
    componentDidMount() {
        console.log(' log ne ', this.props.chuyennganh)
        //     const data ={
        //         chuyennganh : 'Giáo dục'
        //     }
        //     callApi(`congviectuongtu`, 'POST', data).then(res => { 
        //       this.setState({
        //           mang: res.data
        //       })
        //    }).catch(()=> console.log('loi o day ne'));
    }
    componentWillReceiveProps(nextProps) {
        const data = {
            chuyennganh: nextProps.chuyennganh
        }
        callApi(`congviectuongtu`, 'POST', data).then(res => {
            console.log('dâta', res.data)
            this.setState({
                mang: res.data
            })
        }).catch(() => console.log('loi o day ne'));
    }
    showData(data) {
        var result = null;
        if (data.length > 0) {
            result = data.map((item, index) => {
                return (
                    <div class="job" key={index}>
                        <Link to={`/chitietcongviec/${item._id}`} onClick={() => { this.props.actChiTietCongViec(item._id);window.scrollTo(0, 0) }} class="job-image">
                            <img src={item._nguoidang.nhatuyendung.logo ? item._nguoidang.nhatuyendung.logo : 'https://res.cloudinary.com/thuctap/image/upload/v1521876438/LogoTitle.png'}
                                alt="" />
                        </Link>

                        <div class="job-info">
                            <Link to={`/chitietcongviec/${item._id}`} onClick={() => { this.props.actChiTietCongViec(item._id);window.scrollTo(0, 0) }}  class="job-title">{item.tieude}</Link>

                            <div class="job-meta">
                                <ul>
                                    <li class="col-size-1of4">
                                        <span class="glyphicon glyphicon-calendar"></span>

                                        &nbsp; {item.thoihan}
                                    </li>

                                    <li class="col-size-2of4">
                                        <span class="glyphicon glyphicon-briefcase"></span>

                                        &nbsp;  {item.chuyennganh} </li>

                                    <li class="col-size-1of4">
                                        <span class="glyphicon glyphicon-map-marker"></span>

                                        &nbsp;{item.diadiem} </li>
                                </ul>

                                <div class="job-meta-inner">
                                    <span class="badge badge-label-temp">  <Link to={`/chitietcongviec/${item._id}`} onClick={() => { this.props.actChiTietCongViec(item._id);window.scrollTo(0, 0) }}>Chi tiết</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        }
        return result;
    }
    render() {
        return (
            <div class="section-similar">
                <h2>
                    <span class="wc-editable" data-pk="ws_similar_jobs" data-type="text">Công việc tương tự</span>
                </h2>
                {this.showData(this.state.mang)}

            </div>
        );
    }
}

export default CongViecTuongTu;

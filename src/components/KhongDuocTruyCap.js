import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class KhongDuocTruyCap extends Component {

    render() {
        return (
            <div className="loi-ghide-height">
                <div className="container ">
                    <div class="panel panel-danger ">
                        <div class="panel-heading">Bạn không đủ quyền chi cập trang này</div>
                        <div class="panel-body">Vui lòng quay lại <Link to=''>trang chủ</Link></div>

                    </div>
                </div>
            </div>
        );
    }
}


export default KhongDuocTruyCap;

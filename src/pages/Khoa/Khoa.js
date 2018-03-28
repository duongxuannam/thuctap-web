import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Khoa extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="loi-ghide-height">
                    <div className="container ">
                        <div class="panel panel-danger ">
                            <div class="panel-heading">Tài khoản của bạn đã bị khóa</div>
                            <div class="panel-body">Vui lòng hệ theo <Link to={`lienhe`}>thông tin</Link> để biết thêm chi tiết</div>

                        </div>
                    </div>
                </div>
                <div class="push"></div>
            </React.Fragment>

        );
    }
}

export default Khoa;

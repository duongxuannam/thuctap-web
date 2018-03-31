import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import callApi from '../../global/apiCaller';
import { actDangTuyenAPI, actSuaCongViecAPI } from '../../actions/index';


class SuaCongViec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtTieuDe: '',
            txtDiaDiem: '',
            chuyenNganh: '',
            kieu: '',
            chucVu: '',
            txtLuong: '',
            trinhDo: '',
            kinhNghiem: '',
            txtSoLuong: '',
            thoiHan: '',
            txtMoTa: EditorState.createEmpty(),
            loiTieuDe: '',
            loiDiaDiem: '',
            loiChuyenNganh: '',
            loiKieu: '',
            loiChucVu: '',
            loiLuong: '',
            loiTrinhDo: '',
            loiKinhNghiem: '',
            loiSoLuong: '',
            loiThoiHan: '',
            loiMoTa: '',
        };
        window.scrollTo(0, 0)
    }
     componentDidMount() {
        const { match } = this.props;
        if (match) {
            const { id } = match.params;
            return callApi(`congviec/${id}`, 'GET', null).then(res => {
                this.setState({
                    txtTieuDe: res.data.tieude,
                    txtDiaDiem: res.data.diadiem,
                    chuyenNganh: res.data.chuyennganh,
                    kieu: res.data.kieu,
                    chucVu: res.data.chucvu,
                    txtLuong: res.data.luong,
                    trinhDo: res.data.trinhdo,
                    kinhNghiem: res.data.kinhnghiem,
                    txtSoLuong: res.data.soluong,
                    thoiHan: res.data.thoihan,
                    _id: res.data._id,
                    txtMoTa:  EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(res.data.mota).contentBlocks))
                })
            });
        }
    }
     
    onEditorStateChange = (txtMoTa) => this.setState({ txtMoTa });
    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        }, () => {
            if (name === 'txtTieuDe') {
                if (this.state.txtTieuDe.length < 5) {
                    this.setState({ loiTieuDe: 'Tiêu đề quá ngắn' });
                    if (this.state.txtTieuDe === '') {
                        this.setState({ loiTieuDe: 'Trường này là bắt buộc' })
                    }
                } else {
                    this.setState({ loiTieuDe: '' })
                }
            }
            if (name === 'txtDiaDiem') {
                if (this.state.txtDiaDiem.length < 5) {
                    this.setState({ loiDiaDiem: 'Địa điểm quá ngắn' });
                    if (this.state.txtDiaDiem === '') {
                        this.setState({ loiDiaDiem: 'Trường này là bắt buộc' })
                    }
                } else {
                    this.setState({ loiDiaDiem: '' })
                }
            }
            if (name === 'chuyenNganh') {
                if (this.state.chuyenNganh.length === '') {
                    this.setState({ loiChuyenNganh: 'Bạn chưa chọn' });
                } else {
                    this.setState({ loiChuyenNganh: '' })
                }
            }
            if (name === 'kieu') {
                if (this.state.kieu.length === '') {
                    this.setState({ loiKieu: 'Bạn chưa chọn' });
                } else {
                    this.setState({ loiKieu: '' })
                }
            }
            if (name === 'trinhDo') {
                if (this.state.trinhDo.length === '') {
                    this.setState({ loiTrinhDo: 'Bạn chưa chọn' });
                } else {
                    this.setState({ loiTrinhDo: '' })
                }
            } if (name === 'kinhNghiem') {
                if (this.state.kinhNghiem.length === '') {
                    this.setState({ loiKinhNghiem: 'Bạn chưa chọn' });
                } else {
                    this.setState({ loiKinhNghiem: '' })
                }
            }
            if (name === 'chucVu') {
                if (this.state.chucVu.length === '') {
                    this.setState({ loiChucVu: 'Bạn chưa chọn' });
                } else {
                    this.setState({ loiChucVu: '' })
                }
            }
            if (name === 'txtLuong') {
                if (this.state.txtLuong.length === '') {
                    this.setState({ loiLuong: 'Trường này là bắt buộc' });

                } else {
                    this.setState({ loiLuong: '' })
                }
            }
            if (name === 'txtSoLuong') {
                if (isNaN(this.state.txtSoLuong)) {
                    this.setState({ loiSoLuong: 'Số lượng không hợp lệ' });
                    if (this.state.txtSoLuong === '') {
                        this.setState({ loiSoLuong: 'Trường này là bắt buộc' })
                    }
                } else {
                    this.setState({ loiSoLuong: '' })
                }
            }
            if (name === 'thoiHan') {
                if (this.state.thoiHan.length === '') {
                    this.setState({ loiThoiHan: 'Trường này là bắt buộc' });

                } else {
                    this.setState({ loiThoiHan: '' })
                }
            }

        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            tieude: this.state.txtTieuDe,
            diadiem: this.state.txtDiaDiem,
            chuyennganh: this.state.chuyenNganh,
            kieu: this.state.kieu,
            chucvu: this.state.chucVu,
            luong: this.state.txtLuong,
            trinhdo: this.state.trinhDo,
            kinhnghiem: this.state.kinhNghiem,
            soluong: this.state.txtSoLuong,
            thoihan: this.state.thoiHan,
            mota: draftToHtml(convertToRaw(this.state.txtMoTa.getCurrentContent())),
            _id: this.state._id,
        };
        if (this.state.chuyenNganh === '') {
            this.setState({ loiChuyenNganh: "Bạn chưa chọn" })
        }
        if (this.state.kieu === '') {
            this.setState({ loiKieu: "Bạn chưa chọn" })
        }
        if (this.state.chucVu === '') {
            this.setState({ loiChucVu: "Bạn chưa chọn" })
        }
        if (this.state.trinhDo === '') {
            this.setState({ loiTrinhDo: "Bạn chưa chọn" })
        }
        if (this.state.kinhNghiem === '') {
            this.setState({ loiKinhNghiem: "Bạn chưa chọn" })
        }
        if (this.state.txtTieuDe === '') {
            this.setState({ loiTieuDe: 'Trường này là bắt buộc' })
        }
        if (this.state.txtDiaDiem === '') {
            this.setState({ loiDiaDiem: 'Trường này là bắt buộc' })
        }
        if (this.state.txtLuong === '') {
            this.setState({ loiLuong: 'Trường này là bắt buộc' })
        }
        if (this.state.txtSoLuong === '') {
            this.setState({ loiSoLuong: 'Trường này là bắt buộc' })
        }
        if (this.state.thoiHan === '') {
            this.setState({ loiThoiHan: 'Trường này là bắt buộc' })
        }
        if (this.state.txtMoTa === '') {
            this.setState({ loiMoTa: 'Trường này là bắt buộc' })
        }
    
        if (this.state.loiTieuDe === '' && this.state.loiDiaDiem === '' && this.state.loiChuyenNganh === ''&& this.state.loiKieu === ''  && this.state.loiChucVu === '' && this.state.loiLuong === '' && this.state.loiTrinhDo === '' && this.state.loiKinhNghiem === '' && this.state.loiSoLuong === '' && this.state.loiThoiHan === ''  ) {
           
            if (this.state.txtTieuDe !== '' && this.state.txtDiaDiem !== '' && this.state.chuyenNganh !== '' && this.state.kieu !== '' && this.state.chucVu !== '' && this.state.txtLuong !== '' && this.state.trinhDo !== '' && this.state.kinhNghiem !== '' && this.state.txtSoLuong !== '' && this.state.thoiHan !== '') {
                this.props.actSuaCongViec(data);
                alert("Chỉnh sửa thành công");
                return this.props.history.goBack();
            }
        }

    }
    render() {
        const {
            txtTieuDe,
            txtDiaDiem,
            chuyenNganh,
            kieu,
            chucVu,
            txtLuong,
            trinhDo,
            kinhNghiem,
            txtSoLuong,
            thoiHan,
            txtMoTa,
            loiTieuDe,
            loiDiaDiem,
            loiChuyenNganh,
            loiKieu,
            loiChucVu,
            loiLuong,
            loiTrinhDo,
            loiKinhNghiem,
            loiSoLuong,
            loiThoiHan,
            loiMoTa,
         } = this.state;

        const day = new Date().toISOString().substr(0, 10);
        // console.log('ahuhu', this.state)
        console.log('luu lai o day ne:', draftToHtml(convertToRaw(txtMoTa.getCurrentContent())));
        // console.log('aaa', this.props.taiKhoan.taikhoan)
        const chuaDangNhap = (
            <div className="loi-ghide-height">
                <div className="container ">
                    <div class="panel panel-danger ">
                        <div class="panel-heading">Bạn chưa đăng nhập</div>
                        <div class="panel-body">Vui lòng <Link to='dangnhap'>đăng nhập</Link> và kích hoạt tài khoản nhà tuyển dụng để đăng tuyển</div>

                    </div>
                </div>
            </div>
        )
        const ok = (
            <div class="main">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1">
                            <div class="form">
                                <form class="form-dyna xs-4" onSubmit={this.onSubmit}>
                                    <input type="hidden" name="job_create" value="1" />
                                    <div class="edit-job-actions">
                                        <a class="btn btn-back btn-secondary btn-sm" role="button">
                                            <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                                            <span class="wc-editable" onClick={() => this.props.history.goBack()}>Quay lại</span>
                                        </a>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label class="control-label">
                                                    <span class="wc-editable">Tiêu đề</span>
                                                </label>
                                                <input
                                                    type="text" class="form-control required"
                                                    onChange={this.onChange}
                                                    value={txtTieuDe}
                                                    name='txtTieuDe'
                                                    placeholder='Tiêu đề' />
                                                <div class="help-block with-errors">
                                                    <span class="wc-editable hien-thi-loi-edit">{loiTieuDe}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label class="control-label">
                                                    <span class="wc-editable">Địa điểm</span>:</label>
                                                <input
                                                    type="text" class="form-control required"
                                                    onChange={this.onChange}
                                                    value={txtDiaDiem}
                                                    name='txtDiaDiem'
                                                    placeholder='Địa điểm làm việc' />
                                                <div class="help-block with-errors">
                                                    <span class="wc-editable hien-thi-loi-edit">{loiDiaDiem}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label class="control-label">
                                                    <span class="wc-editable" >Chuyên ngành</span>:</label>
                                                <select class="form-control" onChange={this.onChange} value={chuyenNganh} name="chuyenNganh">
                                                    <option value="" disabled >Lựa chọn chuyên ngành</option>
                                                    <option value="Công nghệ thông tin">Công nghệ thông tin</option>
                                                    <option value="Giáo dục">Giáo dục</option>
                                                    <option value="Kinh tế">Kinh tế</option>
                                                    <option value="Tài nguyên môi trường">Tài nguyên môi trường</option>
                                                    <option value="Khác">Khác</option>
                                                </select>
                                                <div class="help-block with-errors">
                                                    <span class="wc-editable hien-thi-loi-edit">{loiChuyenNganh}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label class="control-label">
                                                    <span class="wc-editable" >Kiểu</span>:</label>
                                                <select class="form-control" onChange={this.onChange} value={kieu} name="kieu">
                                                    <option value="" disabled >Lựa chọn kiểu</option>
                                                    <option value="Toàn thời gian">Toàn thời gian</option>
                                                    <option value="Bán thời gian">Bán thời gian</option>
                                                    <option value="Thực tập">Thực tập</option>
                                                    <option value="Thời vụ">Thời vụ</option>
                                                    <option value="Chính thức">Chính thức</option>
                                                </select>
                                                <div class="help-block with-errors">
                                                    <span class="wc-editable hien-thi-loi-edit">{loiKieu}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label class="control-label">
                                                    <span class="wc-editable">Chức vụ</span>:</label>
                                                <select class="form-control" onChange={this.onChange} value={chucVu} name="chucVu">
                                                    <option value="" disabled>Lựa chọn chức vụ</option>

                                                    <option value="Thực tập sinh">Thực tập sinh</option>

                                                    <option value="Nhân viên chính thức">Nhân viên chính thức</option>

                                                    <option value="Freelancer">Freelancer</option>
                                                </select>
                                                <div class="help-block with-errors">
                                                    <span class="wc-editable hien-thi-loi-edit">{loiChucVu}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label class="control-label">
                                                    <span class="wc-editable" >Lương</span>:</label>
                                                <input type="text" class="form-control" onChange={this.onChange} value={txtLuong} name="txtLuong" placeholder='Nhập khoản lương hoặc trợ cấp' />
                                                <div class="help-block with-errors">
                                                    <span class="wc-editable hien-thi-loi-edit">{loiLuong}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">
                                        <div class="col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label class="control-label">
                                                    <span class="wc-editable" >Trình độ</span>:</label>
                                                <select class="form-control" onChange={this.onChange} value={trinhDo} name="trinhDo">
                                                    <option value="" disabled >Lựa chọn trình độ</option>
                                                    <option value="Sinh viên năm 1 - 2"> Sinh viên năm 1 - 2</option>
                                                    <option value="Sinh viên năm 3 - 4"> Sinh viên năm 3 - 4</option>
                                                    <option value="Đại học"> Đại học</option>
                                                    <option value="Cao đẳng"> Cao đẳng</option>
                                                    <option value="Không"> Không</option>
                                                </select>
                                                <div class="help-block with-errors">
                                                    <span class="wc-editable hien-thi-loi-edit">{loiTrinhDo}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label class="control-label">
                                                    <span class="wc-editable">Kinh nghiệm</span>:</label>

                                                <select class="form-control" onChange={this.onChange} value={kinhNghiem} name="kinhNghiem">
                                                    <option value="" disabled >Lựa chọn kinh nghiệm</option>
                                                    <option value="Không" >Không</option>
                                                    <option value="< 1 năm"> &lt; 1 năm</option>

                                                    <option value="1 - 2 năm"> 1 - 2 năm</option>

                                                    <option value="> 2 năm"> &gt; 2 năm</option>
                                                </select>
                                                <div class="help-block with-errors">
                                                    <span class="wc-editable hien-thi-loi-edit">{loiKinhNghiem}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label class="control-label">
                                                    <span class="wc-editable">Số lượng</span>
                                                </label>
                                                <input type="text" class="form-control required" onChange={this.onChange} value={txtSoLuong} name="txtSoLuong" />
                                                <div class="help-block with-errors">
                                                    <span class="wc-editable hien-thi-loi-edit">{loiSoLuong}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <label class="control-label">
                                                    <span class="wc-editable" >Thời hạn</span>:</label>
                                                <input type="date" class="form-control required" min={day} onChange={this.onChange} value={thoiHan} name="thoiHan" />
                                                <div class="help-block with-errors">
                                                    <span class="wc-editable hien-thi-loi-edit">{loiThoiHan}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                    <div class="form-group editor-themcongviec">
                                        <label class="control-label">
                                            <span class="wc-editable" >Mô tả chi tiết</span>:</label>
                                        <Editor
                                            editorState={txtMoTa}
                                            wrapperClassName="demo-wrapper"
                                            editorClassName="demo-editor boderediter-edit"
                                            onEditorStateChange={this.onEditorStateChange}
                                        />
                                        <div class="help-block with-errors">
                                            <span class="wc-editable hien-thi-loi-edit">{loiMoTa}</span>
                                        </div>
                                    </div>


                                    <button type="submit" class="btn btn-primary">
                                        <span class="wc-editable" >Lưu</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        const chuaKichHoat = (
            <div className="loi-ghide-height">
                <div className="container ">
                    <div class="panel panel-danger ">
                        <div class="panel-heading">Bạn chưa kich hoạt tài khoản nhà tuyên dụng</div>
                        <div class="panel-body">Vui lòng <Link to='kichhoatnhatuyendung'>kích hoạt</Link> tài khoản nhà tuyển dụng để đăng tuyển</div>

                    </div>
                </div>
            </div>
        )
        const choDuyet = (
            <div className="loi-ghide-height">
                <div className="container ">
                    <div class="panel panel-warning ">
                        <div class="panel-heading">Bạn đã đăng ký tài khoản nhà tuyên dụng</div>
                        <div class="panel-body">Vui lòng đợi duyệt hoặc liên hệ trực tiếp <Link to='lienhe'>tại đây</Link></div>

                    </div>
                </div>
            </div>
        )
        const daDangNhap = this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan.kichhoatnhatuyendung ? ok : chuaKichHoat;
        const daDangKyChuaDuyet = this.props.taiKhoan && this.props.taiKhoan.taikhoan && this.props.taiKhoan.taikhoan.trangthai === 'dangduyet' ? choDuyet : daDangNhap;
        const main = this.props.taiKhoan && this.props.taiKhoan.taikhoan ? daDangKyChuaDuyet : chuaDangNhap
        return (
            <React.Fragment>

                {main}
                <div class="push"></div>
            </React.Fragment >
        );
    }
};

const mapStateToProps = state => {
    return {
        taiKhoan: state.taiKhoan,
        congViecDuocChon: state.congViecDuocChon
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actDangTuyen: (data) => {
            dispatch(actDangTuyenAPI(data));
        },
        actSuaCongViec: (data) => {
            dispatch(actSuaCongViecAPI(data));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SuaCongViec);

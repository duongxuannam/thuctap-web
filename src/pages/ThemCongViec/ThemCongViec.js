import React, { Component } from 'react';
import { EditorState, convertToRaw, } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class ThemCongViec extends Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
    }
    onEditorStateChange = (editorState) => this.setState({ editorState });
    render() {
        const { editorState } = this.state;
        console.log('luu lai o day ne:', draftToHtml(convertToRaw(editorState.getCurrentContent())))
        return (
            <React.Fragment>
                <div class="main">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1">
                                <div class="form">
                                    <form class="form-dyna xs-4">
                                        <input type="hidden" name="job_create" value="1" />
                                        <div class="edit-job-actions">
                                            <a class="btn btn-back btn-secondary btn-sm" role="button">
                                                <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                                                <span class="wc-editable" onClick={() => this.props.history.goBack()}>Quay lại</span>
                                            </a>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-8 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" data-pk="front_label_job_title" data-type="text">Tiêu đề</span>
                                                    </label>
                                                    <input type="text" name="i18n[1][job_title]" class="form-control required" data-msg-required="Job title is required" />
                                                    <div class="help-block with-errors">
                                                        <ul class="list-unstyled"></ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-sm-4 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" data-pk="front_label_job_location" data-type="text">Địa điểm</span>:</label>
                                                    <input type="text" name="i18n[1][address_city]" class="form-control required" data-msg-required="Job location is required"
                                                    />
                                                    <div class="help-block with-errors">
                                                        <ul class="list-unstyled"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" data-pk="ws_job_type" data-type="text">Chuyên ngành</span>:</label>
                                                    <select class="form-control" name="type_id">

                                                        <option value="1">Contract</option>

                                                        <option value="2">Full Time</option>

                                                        <option value="3">Internship</option>

                                                        <option value="4">Other</option>

                                                        <option value="5">Part Time</option>

                                                        <option value="6">Temp</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" data-pk="ws_job_type" data-type="text">Kiểu</span>:</label>
                                                    <select class="form-control" name="type_id">

                                                        <option value="1">Toàn thời gian</option>

                                                        <option value="2">Bán thời gian</option>

                                                        <option value="3">Thực tập</option>

                                                        <option value="4">Thời vụ</option>

                                                        <option value="5">Chính thức</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" data-pk="ws_job_type" data-type="text">Chức vụ</span>:</label>
                                                    <select class="form-control" name="type_id">

                                                        <option value="1">Contract</option>

                                                        <option value="2">Full Time</option>

                                                        <option value="3">Internship</option>

                                                        <option value="4">Other</option>

                                                        <option value="5">Part Time</option>

                                                        <option value="6">Temp</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" data-pk="front_label_salary" data-type="text">Lương</span>:</label>
                                                    <input type="text" name="job_salary" class="form-control" />
                                                </div>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" data-pk="front_label_education_level" data-type="text">Trình độ</span>:</label>

                                                    <select class="form-control" name="filter_id[]">

                                                        <option value="13"> Associate Degree</option>

                                                        <option value="14"> Bachelor&#039;s Degree</option>

                                                        <option value="15"> Certification</option>

                                                        <option value="16"> Doctorate</option>

                                                        <option value="17"> High School or equivalent</option>

                                                        <option value="18"> Master&#039;s Degree</option>

                                                        <option value="19"> Professional</option>

                                                        <option value="20"> Some College Coursework Completed</option>

                                                        <option value="21"> Some High School Coursework</option>

                                                        <option value="22"> Vocational</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-6 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" data-pk="front_label_year_experience" data-type="text">Kinh nghiệm</span>:</label>

                                                    <select class="form-control" name="filter_id[]">

                                                        <option value="8"> &lt; 1</option>

                                                        <option value="9"> 1 - 3</option>

                                                        <option value="10"> 3 - 5</option>

                                                        <option value="11"> 5 - 10</option>

                                                        <option value="12"> &gt; 10</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group editor-themcongviec">
                                            <label class="control-label">
                                                <span class="wc-editable" data-pk="front_label_job_description" data-type="text">Miêu tả chi tiết</span>:</label>
                                            <Editor
                                                editorState={editorState}
                                                wrapperClassName="demo-wrapper"
                                                editorClassName="demo-editor boderediter-edit"
                                                onEditorStateChange={this.onEditorStateChange}
                                            />
                                        </div>


                                        <button type="submit" class="btn btn-primary">
                                            <span class="wc-editable" data-pk="front_button_save" data-type="action">Lưu</span>
                                        </button>
                                    </form>
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

export default ThemCongViec;
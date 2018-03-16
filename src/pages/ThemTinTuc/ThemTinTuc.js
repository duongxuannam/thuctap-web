import React, { Component } from 'react';
import { EditorState, convertToRaw, } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class ThemTinTuc extends Component {
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
                                            <div class="col-sm-12 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable" data-pk="front_label_job_title" >Tiêu đề bài viết</span>
                                                    </label>
                                                    <input type="text" class="form-control required" />
                                                    <div class="help-block with-errors">
                                                        <ul class="list-unstyled"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-xs-12">
                                                <div class="form-group">
                                                    <label class="control-label">
                                                        <span class="wc-editable"  >Hình mình họa</span>
                                                    </label>
                                                    <input type="text" class="form-control required" />
                                                    <div class="help-block with-errors">
                                                        <ul class="list-unstyled"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group editor-themcongviec">
                                            <label class="control-label">
                                                <span class="wc-editable" >Nội dung</span>:</label>
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

export default ThemTinTuc;
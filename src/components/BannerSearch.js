import React, { Component } from 'react';

class BannerSearch extends Component {
    render() {
        return (
            <div class="section-background-intro-edit intro intro-home">
                <div class="search-jobs">
                    <div class="container">
                        <h1>
                            <span class="wc-editable" data-pk="ws_find_a_job" data-type="text">Tìm kiếm công việc</span>
                        </h1>
                        <form method="get" action="jobs.html">
                            <input type="hidden" name="job_search" value="1" />
                            <div class="row">
                                <div class="col-sm-5 col-xs-12">
                                    <div class="form-group">
                                        <input name="keyword" class="form-control" placeholder="job title, keywords or company name" type="text" />
                                        <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div class="col-sm-5 col-xs-12">
                                    <div class="form-group">
                                        <input name="location" class="form-control" placeholder="city or state" type="text" id="location" />
                                        <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div class="col-sm-2 col-xs-12">
                                    <button type="submit" class="btn btn-primary btn-lg">
                                        <span class="wc-editable" data-pk="ws_find" data-type="action">Tìm kiếm</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <p>
                            <a href="">Tìm kiếm nâng cao</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerSearch;

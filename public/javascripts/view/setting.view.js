export const settingView = () =>
    `<!-- BEGIN #content -->

    <!-- BEGIN container -->
    <div class="container">
        <!-- BEGIN row -->
        <div class="row justify-content-center">
            <!-- BEGIN col-10 -->
            <div class="col-xl-10">
                <!-- BEGIN row -->
                <div class="row">
                    <!-- BEGIN col-9 -->
                    <div class="col-xl-9">
                        <!-- BEGIN #general -->
                        <div id="general" class="mb-5">
                            <h4><i class="far fa-user fa-fw text-body text-opacity-50 me-1"></i> General</h4>
                            <p>View and update your general account information and settings.</p>
                            <div class="card">
                                <div class="list-group list-group-flush">
                                    <div class="list-group-item d-flex align-items-center">
                                        <div class="flex-1 text-break">
                                            <div>Name</div>
                                            <div class="text-body text-opacity-50">Sean Ngu</div>
                                        </div>
                                        <div class="w-100px">
                                            <a href="#modalEdit" data-bs-toggle="modal" class="btn btn-default w-100px">Edit</a>
                                        </div>
                                    </div>
                                    <div class="list-group-item d-flex align-items-center">
                                        <div class="flex-1 text-break">
                                            <div>Username</div>
                                            <div class="text-body text-opacity-50">@seantheme</div>
                                        </div>
                                        <div>
                                            <a href="#modalEdit" data-bs-toggle="modal" class="btn btn-default w-100px">Edit</a>
                                        </div>
                                    </div>
                                    <div class="list-group-item d-flex align-items-center">
                                        <div class="flex-1 text-break">
                                            <div>Phone</div>
                                            <div class="text-body text-opacity-50">+1-202-555-0183</div>
                                        </div>
                                        <div>
                                            <a href="#modalEdit" data-bs-toggle="modal" class="btn btn-default w-100px">Edit</a>
                                        </div>
                                    </div>
                                    <div class="list-group-item d-flex align-items-center">
                                        <div class="flex-1 text-break">
                                            <div>Email address</div>
                                            <div class="text-body text-opacity-50">support@seantheme.com</div>
                                        </div>
                                        <div>
                                            <a href="#modalEdit" data-bs-toggle="modal" class="btn btn-default w-100px">Edit</a>
                                        </div>
                                    </div>
                                    <div class="list-group-item d-flex align-items-center">
                                        <div class="flex-1 text-break">
                                            <div>Password</div>
                                        </div>
                                        <div>
                                            <a href="#modalEdit" data-bs-toggle="modal" class="btn btn-default w-100px">Edit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- END #general -->

                        <!-- BEGIN #languages -->
                        <div id="languages" class="mb-5">
                            <h4><i class="fa fa-language fa-fw text-body text-opacity-50 me-1"></i> Languages</h4>
                            <p>Language font support and auto translation enabled</p>
                            <div class="card">
                                <div class="list-group list-group-flush">
                                    <div class="list-group-item d-flex align-items-center">
                                        <div class="flex-1 text-break">
                                            <div>Language enabled</div>
                                            <div class="text-body text-opacity-50">
                                                English (default), Chinese, France, Portuguese, Japense
                                            </div>
                                        </div>
                                        <div>
                                            <a href="#modalEdit" data-bs-toggle="modal" class="btn btn-default w-100px">Edit</a>
                                        </div>
                                    </div>
                                    <div class="list-group-item d-flex align-items-center">
                                        <div class="flex-1 text-break">
                                            <div>Auto translation</div>
                                            <div class="text-body text-opacity-50 d-flex align-items-center">
                                                <i class="fa fa-circle fs-8px fa-fw text-success me-1"></i> Enabled
                                            </div>
                                        </div>
                                        <div>
                                            <a href="#modalEdit" data-bs-toggle="modal" class="btn btn-default w-100px">Edit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- END #languages -->

                    </div>
                    <!-- END col-9-->
                    <!-- BEGIN col-3 -->
                    <div class="col-xl-3">
                        <!-- BEGIN #sidebar-bootstrap -->
                        <nav id="sidebar-bootstrap" class="navbar navbar-sticky d-none d-xl-block">
                            <nav class="nav">
                                <a class="nav-link" href="#general" data-toggle="scroll-to">General</a>
                                <a class="nav-link" href="#languages" data-toggle="scroll-to">Languages</a>
                            </nav>
                        </nav>
                        <!-- END #sidebar-bootstrap -->
                    </div>
                    <!-- END col-3 -->
                </div>
                <!-- END row -->
            </div>
            <!-- END col-10 -->
        </div>
        <!-- END row -->
    </div>
    <!-- END container -->
</div>
<!-- END #content -->

<!-- BEGIN #modalEdit -->
<div class="modal fade" id="modalEdit">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit name</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <div class="row gx-3">
                        <div class="col-4">
                            <input class="form-control" placeholder="First" value="Sean">
                        </div>
                        <div class="col-4">
                            <input class="form-control" placeholder="Middle" value="">
                        </div>
                        <div class="col-4">
                            <input class="form-control" placeholder="Last" value="Ngu">
                        </div>
                    </div>
                </div>
                <div class="alert alert-secondary">
                    <b>Please note:</b>
                    If you change your name, you can't change it again for 60 days.
                    Don't add any unusual capitalization, punctuation, characters or random words.
                    <a href="#" class="alert-link">Learn more.</a>
                </div>
                <div class="mb-3">
                    <label class="form-label">Other Names</label>
                    <div>
                        <a href="#" class="btn btn-default"><i class="fa fa-plus fa-fw"></i> Add other names</a>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-theme">Save changes</button>
            </div>
        </div>
    </div>
</div>
<!-- END #modalEdit -->

<!-- BEGIN btn-scroll-top -->
<a href="#" data-toggle="scroll-to-top" class="btn-scroll-top fade"><i class="fa fa-arrow-up"></i></a>
<!-- END btn-scroll-top -->
`;
import {sideMenu} from "./sideMenu.js";
export const appLayout = (req, menu, content) => `
    <div>
        <div id="sidebar" class="app-sidebar">
            <!-- BEGIN scrollbar -->
            <div class="app-sidebar-content" data-scrollbar="true" data-height="100%">
                <!-- BEGIN menu -->
                <div class="menu">
                    <div class="menu-profile">
                        <a href="javascript:;" class="menu-profile-link" data-bs-toggle="dropdown">
                            <div class="menu-profile-cover with-shadow"></div>
                            
                            <div class="menu-profile-info mt-4">
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1 fw-bold">
                                        ${req.session.user?.name}(${req.session.user?.userId})
                                    </div>
                                    <div class="ms-auto"><i class="fa fa-chevron-down"></i></div>
                                </div>
                                <small>${req.session.user?.email}</small>
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end me-lg-3 mt-1 w-200px">
                            <a class="dropdown-item d-flex align-items-center" href="profile.html"><i
                                    class="far fa-user fa-fw fa-lg me-3"></i> Profile</a>
                            <a class="dropdown-item d-flex align-items-center" href="settingPage"><i
                                    class="fa fa-sliders fa-fw fa-lg me-3"></i> Settings</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item d-flex align-items-center" href="javascript:logout()"><i
                                    class="fa fa-arrow-right-from-bracket fa-fw fa-lg me-3"></i> Logout</a>
                        </div>
                    </div>
                    <div class="menu-header">Navigation</div>
                     <!-- 메뉴 영역 -->
                    ${sideMenu(req.path, menu)}
                </div>
                <!-- END menu -->
            </div>
            <!-- END scrollbar -->
        </div>

        <!-- 슬라이드 활성화시 블락되는 영역 -->
        <!-- BEGIN mobile-sidebar-backdrop -->
        <button class="app-sidebar-mobile-backdrop" data-toggle-target=".app"
                data-toggle-class="app-sidebar-mobile-toggled"></button>
    </div>


    <!-- 메뉴 싱크 -->
    <div id="content" class="app-content">
        ${content}
    </div>
    
    
    <div class="modal fade" id="modalLg">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title fs-5">Large modal</div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal fade" id="modalSm">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title fs-5">info</div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                </div>
            </div>
        </div>
    </div>
    
    <!-- BEGIN toasts-container -->
    <div class="toasts-container">
        <div class="toast fade hide mb-3" data-autohide="false" id="toast-1">
            <div class="toast-header">
                <i class="far fa-bell text-muted me-2"></i>
                <strong class="me-auto">Alarm</strong>
                <small>Just before</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
            </div>
            <div class="toast-body">
                Hello, world! This is a toast message.
            </div>
        </div>
    </div>
    <!-- END toasts-container -->
`;

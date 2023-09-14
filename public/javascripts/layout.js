import {App} from './appRoute.js';

const generateHTML = async (req, menuModel) => `
<!DOCTYPE html>
<html lang="ko">
<head>
    <link rel="icon" href="data:,">
    <title>Main Layout</title>

    <meta charset="utf-8">
    <title>Home</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- ================== BEGIN core-css ================== -->
    <link href="../assets/css/vendor.min.css" rel="stylesheet">
    <link href="../assets/css/app.min.css" rel="stylesheet">
    <!-- ================== END core-css ================== -->
</head>


<body>
<div>
    <header>
        <div id="header" class="app-header">
            <!-- BEGIN desktop-toggler -->
            <div class="desktop-toggler">
                <button type="button" class="menu-toggler" data-toggle-class="app-sidebar-collapsed"
                        data-toggle-target=".app">
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
            </div>
            <!-- END desktop-toggler -->

            <!-- BEGIN mobile-toggler -->
            <div class="mobile-toggler">
                <button type="button" class="menu-toggler" data-toggle-class="app-sidebar-mobile-toggled"
                        data-toggle-target=".app">
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
            </div>
            <!-- END mobile-toggler -->

            <!-- BEGIN brand -->
            <div class="brand">
                <a href="index.html" class="brand-logo">
                    Naver
                </a>
            </div>
            <!-- END brand -->

            <!-- BEGIN menu -->
            <div class="menu">
                <div class="menu-item dropdown dropdown-mobile-full">
                    <!-- 상단>admin panel -->
                    <a href="#" data-bs-toggle="dropdown" data-bs-display="static" class="menu-link">
                        <div class="menu-icon"><i class="bi bi-grid-3x3-gap nav-icon"></i></div>
                    </a>
                    <!-- 상단>admin panel>dropdown menu -->
                    <div class="dropdown-menu fade dropdown-menu-end w-300px text-center p-0 mt-1 overflow-hidden">
                        <div class="row gx-0 p-1 pb-0">
                            <div class="col-4">
                                <div class="h-100 p-1">
                                    <a href="email_inbox.html" class="dropdown-item p-2 rounded-2">
                                        <div class="position-relative pt-1">
                                            <i class="bi bi-circle-fill position-absolute text-primary end-0 me-2 fs-6px d-block"></i>
                                            <i class="bi bi-envelope fs-2 d-block text-body text-opacity-50"></i>
                                        </div>
                                        <div class="small">Inbox</div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="h-100 p-1">
                                    <a href="pos_customer_order.html" target="_blank"
                                       class="dropdown-item p-2 rounded-2">
                                        <div class="position-relative pt-1">
                                            <i class="bi bi-hdd-network fs-2 d-block text-body text-opacity-50"></i>
                                        </div>
                                        <div class="small">Pos System</div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="h-100 p-1">
                                    <a href="calendar.html" class="dropdown-item p-2 rounded-2">
                                        <div class="position-relative pt-1">
                                            <i class="bi bi-calendar4 fs-2 d-block text-body text-opacity-50"></i>
                                        </div>
                                        <div class="small">Calendar</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="row gx-0 p-1 pt-0">
                            <div class="col-4">
                                <div class="h-100 p-1">
                                    <a href="helper.html" class="dropdown-item p-2 rounded-2">
                                        <div class="position-relative pt-1">
                                            <i class="bi bi-terminal fs-2 d-block text-body text-opacity-50"></i>
                                        </div>
                                        <div class="small">Helper</div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="h-100 p-1">
                                    <a href="settings" class="dropdown-item p-2 rounded-2">
                                        <div class="position-relative pt-1">
                                            <i class="bi bi-circle-fill position-absolute text-primary end-0 me-2 fs-6px d-block"></i>
                                            <i class="bi bi-sliders fs-2 d-block text-body text-opacity-50"></i>
                                        </div>
                                        <div class="small">Settings</div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="h-100 p-1">
                                    <a href="widgets.html" class="dropdown-item p-2 rounded-2">
                                        <div class="position-relative pt-1">
                                            <i class="bi bi-collection-play fs-2 d-block text-body text-opacity-50"></i>
                                        </div>
                                        <div class="small">Widgets</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 상단>알림창 -->
<!--                <div class="menu-item dropdown dropdown-mobile-full">-->
<!--                    <a href="#" data-bs-toggle="dropdown" data-bs-display="static" class="menu-link">-->
<!--                        <div class="menu-icon"><i class="bi bi-bell nav-icon"></i></div>-->
<!--                        <div class="menu-badge bg-theme"></div>-->
<!--                    </a>-->
<!--                    <div class="dropdown-menu dropdown-menu-end mt-1 w-350px pt-1">-->
<!--                        <h6 class="dropdown-header mb-1">Notifications (0)</h6>-->
<!--                        <div class="dropdown-divider mt-1"></div>-->
<!--                        <a href="#" class="d-flex align-items-center dropdown-item text-wrap">-->
<!--                            No record found-->
<!--                        </a>-->
<!--                    </div>-->
<!--                </div>-->
                
                <div class="menu-item dropdown dropdown-mobile-full">
                    <a href="#" data-bs-toggle="dropdown" data-bs-display="static" class="menu-link">
                        <div class="menu-icon"><i class="far fa-id-badge nav-icon"></i></div>
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
                
            </div>
            <!-- END menu -->

            <!-- BEGIN menu-search -->
            <form class="menu-search" method="POST" name="header_search_form">
                <div class="menu-search-container">
                    <div class="menu-search-icon"><i class="bi bi-search"></i></div>
                    <div class="menu-search-input">
                        <input type="text" class="form-control form-control-lg" placeholder="Search menu...">
                    </div>
                    <div class="menu-search-icon">
                        <a href="#" data-toggle-class="app-header-menu-search-toggled" data-toggle-target=".app"><i
                                class="bi bi-x-lg"></i></a>
                    </div>
                </div>
            </form>
            <!-- END menu-search -->
        </div>
    </header>

    
    <div id="app" class="app">
        ${await App(req, menuModel)}
    </div>
    
    
    <a href="#" data-toggle="scroll-to-top" class="btn-scroll-top fade"><i class="fa fa-arrow-up"></i></a>
    <script>window.__INITIAL_MENU__ = ${JSON.stringify({menuList: menuModel.menuList})}</script>
    
</div>
<script type="module" src="/javascripts/main.js" ></script>
<script type="application/javascript" src="/commons/cookieManager.js"></script>

<!-- ================== BEGIN core-js ================== -->
<script src="../assets/js/vendor.min.js"></script>
<script src="../assets/js/app.min.js"></script>
<!-- ================== END core-js ================== -->

<script type="application/javascript" src="/commons/common.js"></script>
<script type="application/javascript" src="/commons/toast.js"></script>
<script type="application/javascript" src="/commons/alert.js"></script>
<script type="application/javascript" src="/commons/loading.js"></script>
<script type="application/javascript" src="/commons/auth.js"></script>
<script type="application/javascript" src="/commons/modal.js"></script>

</body>
</html>
`;

export default generateHTML;
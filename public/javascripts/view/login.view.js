import i18next from "i18next";

export const loginView = () =>
`<!DOCTYPE html>
<html lang="${i18next.language}">
    <head>
    <meta charset="utf-8">
    <title>Login</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">

<!-- ================== BEGIN core-css ================== -->
<link href="assets/css/vendor.min.css" rel="stylesheet">
    <link href="assets/css/app.min.css" rel="stylesheet">
        <!-- ================== END core-css ================== -->

    </head>
    <script type="application/javascript"> 
        
    </script>
    <body class='pace-top'>
    <!-- BEGIN #app -->
    <div id="app" class="app app-full-height app-without-header">
        <!-- BEGIN login -->
        <div class="login">
            <!-- BEGIN login-content -->
            <div class="login-content">
                    <h1 class="text-center">${i18next.t('login.view.title')}</h1>
                    <div class="text-body text-opacity-50 text-center mb-4">
                        ${i18next.t('login.view.info')}
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Id <span class="text-danger">*</span></label>
                        <input id="loginId" type="text" class="form-control form-control-lg fs-body" value="" placeholder="">
                    </div>
                    <div class="mb-3">
                        <div class="d-flex">
                            <label class="form-label">Password <span class="text-danger">*</span></label>
<!--                            <a href="#" class="ms-auto text-body text-decoration-none text-opacity-50">Forgot password?</a>-->
                        </div>
                        <input id="loginPw" type="password" class="form-control form-control-lg" value="" placeholder="">
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
<!--                            <input class="form-check-input" type="checkbox" value="" id="customCheck1">-->
<!--                                <label class="form-check-label" for="customCheck1">Remember me</label>-->
                        </div>
                    </div>
                    <button id="loginBtn" class="btn btn-theme btn-lg d-block w-100 fw-semibold mb-3">Sign In</button>
                    <!--					<div class="text-center text-body text-opacity-50">-->
                    <!--						Don't have an account yet? <a href="page_register.html">Sign up</a>.-->
                    <!--					</div>-->
            </div>
            <!-- END login-content -->
        </div>
        <!-- END login -->

        <!-- BEGIN btn-scroll-top -->
        <a href="#" data-toggle="scroll-to-top" class="btn-scroll-top fade"><i class="fa fa-arrow-up"></i></a>
        <!-- END btn-scroll-top -->
        
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

    </div>
    <!-- END #app -->

    <!-- ================== BEGIN core-js ================== -->
    <script src="assets/js/vendor.min.js"></script>
    <script src="assets/js/app.min.js"></script>
    <!-- ================== END core-js ================== -->
    
    <script type="module" src="/javascripts/controller/login.controller.js" ></script>
    <script type="module" src="/commons/translate.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/i18next/23.4.4/i18next.min.js"></script>
    <script type="application/javascript" src="/commons/alert.js"></script>
    <script type="application/javascript" src="/commons/loading.js"></script>
    <script type="application/javascript" src="/commons/common.js"></script>

    </body>
</html>
`;
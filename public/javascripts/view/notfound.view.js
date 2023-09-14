export const notfoundView = () => `
    
<body class='pace-top'>
	<!-- BEGIN #app -->
	<div id="app" class="app app-full-height app-without-header">
		<!-- BEGIN error -->
		<div class="error-page">
			<!-- BEGIN error-page-content -->
			<div class="error-page-content">
				<div class="error-code">404</div>
				<h1>Oops!</h1> 
				<h3>We can't seem to find the page you're looking for</h3>
				<hr class="opacity-1">
				<p class="mb-2">
					Here are some helpful links instead:
				</p>

				<a href="javascript:window.history.back();" class="btn btn-theme px-3 rounded-pill"><i class="fa fa-arrow-left me-1 ms-n1"></i> Go Back</a>
			</div>
			<!-- END error-page-content -->
		</div>
		<!-- END error -->

		<!-- BEGIN btn-scroll-top -->
		<a href="#" data-toggle="scroll-to-top" class="btn-scroll-top fade"><i class="fa fa-arrow-up"></i></a>
		<!-- END btn-scroll-top -->
	</div>
	<!-- END #app -->
</body>
`;
export const dualLayoutView = () =>
    `
<style>
.flexContainer {
    display: flex;

    /* 영역 구분을 위해 선을 설정 */
    height: 16rem;
    width: 100%;
}
.left {
    /* 초기 크기를 절반으로 설정 */
    width: 50%;

    /* 중앙 정렬 */
    align-items: center;
    display: flex;
    justify-content: center;
    min-width: 20%;
}
.resizer {
    background-color: transparent;
    cursor: ew-resize;
    height: 100%;
    width: 10px;
}
.right {
    /* left가 차지하고 남은 공간에 따라 유동적으로 변화 */
    flex: 1;

    /* 중앙 정렬 */
    align-items: center;
    display: flex;
    justify-content: center;
    min-width: 20%;
}

</style>

    <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">path</a></li>
        <li class="breadcrumb-item active">title</li>
    </ul>

    <h1 class="page-header">
        title
    </h1>

    <hr class="mb-4">

    <div class="flexContainer">
        <div class="card left">Left</div>
        <div class="resizer" id="dragMe"></div>
        <div class="card right">Right</div>
    </div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // 대상 Element 선택
    const resizer = document.getElementById("dragMe");
    const leftSide = resizer.previousElementSibling;
    const rightSide = resizer.nextElementSibling;

    // 마우스의 위치값 저장을 위해 선언
    let x = 0;
    let y = 0;

    // 크기 조절시 왼쪽 Element를 기준으로 삼기 위해 선언
    let leftWidth = 0;

    // resizer에 마우스 이벤트가 발생하면 실행하는 Handler
    const mouseDownHandler = function (e) {
        // 마우스 위치값을 가져와 x, y에 할당
        x = e.clientX;
        y = e.clientY;
        // left Element에 Viewport 상 width 값을 가져와 넣음
        leftWidth = leftSide.getBoundingClientRect().width;

        // 마우스 이동과 해제 이벤트를 등록
        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // 마우스가 움직이면 기존 초기 마우스 위치에서 현재 위치값과의 차이를 계산
        const dx = e.clientX - x;
        const dy = e.clientY - y;

        // 크기 조절 중 마우스 커서를 변경함
        // class="resizer"에 적용하면 위치가 변경되면서 커서가 해제되기 때문에 body에 적용
        document.body.style.cursor = "col-resize";

        // 이동 중 양쪽 영역(왼쪽, 오른쪽)에서 마우스 이벤트와 텍스트 선택을 방지하기 위해 추가
        leftSide.style.userSelect = "none";
        leftSide.style.pointerEvents = "none";

        rightSide.style.userSelect = "none";
        rightSide.style.pointerEvents = "none";

        //
        const newLeftWidth =
            ((leftWidth + dx) * 100) / resizer.parentNode.getBoundingClientRect().width;
        leftSide.style.width = newLeftWidth+'%';
    };

    const mouseUpHandler = function () {
        // 모든 커서 관련 사항은 마우스 이동이 끝나면 제거됨
        resizer.style.removeProperty("cursor");
        document.body.style.removeProperty("cursor");

        leftSide.style.removeProperty("user-select");
        leftSide.style.removeProperty("pointer-events");

        rightSide.style.removeProperty("user-select");
        rightSide.style.removeProperty("pointer-events");

        // 등록한 마우스 이벤트를 제거
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
    };

    // 마우스 down 이벤트를 등록
    resizer.addEventListener("mousedown", mouseDownHandler);
})
    
</script>
`;

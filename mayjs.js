// mid-list (상위 메뉴)의 메뉴 항목에 클릭 이벤트 추가
const bItems = document.querySelectorAll('.mid-list .page-nav-item a');
bItems.forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault(); // 기본 링크 동작 방지
    // 같은 그룹의 기존 active 클래스 모두 제거 (프로필 포함)
    bItems.forEach(i => i.classList.remove('active'));
    // 클릭된 메뉴에 active 클래스 추가
    this.classList.add('active');
  });
});

// page-nav-detail (하위 메뉴)의 메뉴 항목에 클릭 이벤트 추가
const detailItems = document.querySelectorAll('.page-nav-detail .page-nav-item a');
detailItems.forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault(); // 기본 링크 동작 방지
    // 같은 그룹의 기존 active 클래스 모두 제거
    detailItems.forEach(i => i.classList.remove('active'));
    // 클릭된 메뉴에 active 클래스 추가
    this.classList.add('active');
  });
});

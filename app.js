const express = require('express');
const app = express();
const path = require('path');

const PORT = 3100;

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일 경로 설정
app.use(express.static(path.join(__dirname, 'public')));

// 실행 중
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});

// 원 등록하기 - 개인정보보호 약관 동의 페이지 라우트 설정
app.get(['/', '/kinderRegister_01'], (req, res) => {
    res.render('kinderRegister_01'); 
});
// 원 등록하기 - 시설 정보 페이지 라우트 설정
app.get(['/', '/kinderRegister_02'], (req, res) => {
    res.render('kinderRegister_02'); 
});
// 원 등록하기 - 계약 정보 페이지 라우트 설정
app.get(['/', '/kinderRegister_03'], (req, res) => {
    res.render('kinderRegister_03'); 
});

// 로그인 페이지 라우트 설정
app.get(['/', '/login'], (req, res) => {
    res.render('login'); 
});

// 회원가입 - 약관 동의 페이지 라우트 설정
app.get(['/', '/joinUser_01'], (req, res) => {
    res.render('joinUser_01'); 
});
// 회원가입 - 개인정보 페이지 라우트 설정
app.get(['/', '/joinUser_02'], (req, res) => {
    res.render('joinUser_02'); 
});
// 회원가입 - 아이디비밀번호 페이지 라우트 설정
app.get(['/', '/joinUser_03'], (req, res) => {
    res.render('joinUser_03'); 
});
// 회원가입 - 원 찾기 페이지 라우트 설정
app.get(['/', '/joinUser_04'], (req, res) => {
    res.render('joinUser_04'); 
});
// 회원가입 - 역할선택 페이지 라우트 설정
app.get(['/', '/joinUser_choose'], (req, res) => {
    res.render('joinUser_choose'); 
});
// 회원가입 - 원장님 - 원 코드 페이지 라우트 설정
app.get(['/', '/joinDirector_code'], (req, res) => {
    res.render('joinDirector_code');
});
// 회원가입 - 원장님 - 원 찾기 페이지 라우트 설정
app.get(['/', '/joinDirector_01'], (req, res) => {
    res.render('joinDirector_01');
});
// 회원가입 - 원장님 - 프로필 페이지 라우트 설정
app.get(['/', '/joinDirector_02'], (req, res) => {
    res.render('joinDirector_02');
});
// 회원가입 - 원장님 - 반 등록 페이지 라우트 설정
app.get(['/', '/joinDirector_03'], (req, res) => {
    res.render('joinDirector_03');
});
// 회원가입 - 원장님 - 차량 등록 페이지 라우트 설정
app.get(['/', '/joinDirector_04'], (req, res) => {
    res.render('joinDirector_04');
});
// 회원가입 - 선생님 - 원 찾기 페이지 라우트 설정
app.get(['/', '/joinTeacher_01'], (req, res) => {
    res.render('joinTeacher_01');
});
// 회원가입 - 선생님 - 프로필 페이지 라우트 설정
app.get(['/', '/joinTeacher_02'], (req, res) => {
    res.render('joinTeacher_02');
});
// 회원가입 - 보호자 - 부모 프로필 페이지 라우트 설정
app.get(['/', '/joinParents_01'], (req, res) => {
    res.render('joinParents_01');
});
// 회원가입 - 보호자 - 자녀 등록 페이지 라우트 설정
app.get(['/', '/joinParents_02'], (req, res) => {
    res.render('joinParents_02');
});
// 회원가입 - 보호자 - 원 찾기 페이지 라우트 설정
app.get(['/', '/joinParents_03'], (req, res) => {
    res.render('joinParents_03');
});
// 회원가입 - 보호자 - 자녀 프로필 페이지 라우트 설정
app.get(['/', '/joinParents_04'], (req, res) => {
    res.render('joinParents_04');
});
// 회원가입 - 기사님 - 원 찾기 페이지 라우트 설정
app.get(['/', '/joinDriver_01'], (req, res) => {
    res.render('joinDriver_01');
});
// 회원가입 - 기사님 - 프로필 페이지 라우트 설정
app.get(['/', '/joinDriver_02'], (req, res) => {
    res.render('joinDriver_02');
});

// 원장님 - 등하원 - 인솔자 관리 페이지 라우트 설정
app.get(['/', '/Director_Goto_Teacher'], (req, res) => {
    res.render('Director_Goto_Teacher');
});
// 원장님 - 등하원 - 기사님 관리 페이지 라우트 설정
app.get(['/', '/Director_Goto_Driver'], (req, res) => {
    res.render('Director_Goto_Driver');
});
// 원장님 - 등하원 - 차량 예약 관리 페이지 라우트 설정
app.get(['/', '/Director_Goto_Child'], (req, res) => {
    res.render('Director_Goto_Child');
});
// 원장님 - 등하원 - 차량 노선 관리 페이지 라우트 설정
app.get(['/', '/Director_Goto_Route'], (req, res) => {
    res.render('Director_Goto_Route');
});
// 원장님 - 등하원 - 차량 노선 관리 (상세보기) 페이지 라우트 설정
app.get(['/', '/Director_Goto_RouteView'], (req, res) => {
    res.render('Director_Goto_RouteView');
});
// 원장님 - 등하원 - 차량 노선 관리 (추가/수정) 페이지 라우트 설정
app.get(['/', '/Director_Goto_RouteRegister'], (req, res) => {
    res.render('Director_Goto_RouteRegister');
});

// 원장님 - 출석부 - 출석부 작성 페이지 라우트 설정
app.get(['/', '/Director_Attendance_Register'], (req, res) => {
    res.render('Director_Attendance_Register');
});
// 원장님 - 출석부 - 출석부 조회 (날짜별) 페이지 라우트 설정
app.get(['/', '/Director_Attendance_CheckDay'], (req, res) => {
    res.render('Director_Attendance_CheckDay');
});
// 원장님 - 출석부 - 출석부 조회 (원아별) 페이지 라우트 설정
app.get(['/', '/Director_Attendance_CheckChild'], (req, res) => {
    res.render('Director_Attendance_CheckChild');
});

// 원장님 - 멤버 - 선생님 관리 페이지 라우트 설정
app.get(['/', '/Director_Member_Teacher'], (req, res) => {
    res.render('Director_Member_Teacher');
});
// 원장님 - 멤버 - 선생님 관리 승인요청 페이지 라우트 설정
app.get(['/', '/Director_Member_TApprove'], (req, res) => {
    res.render('Director_Member_TApprove');
});
// 원장님 - 멤버 - 선생님 관리 초대중 페이지 라우트 설정
app.get(['/', '/Director_Member_TInvite'], (req, res) => {
    res.render('Director_Member_TInvite');
});

// 원장님 - 멤버 - 원아 관리 페이지 라우트 설정
app.get(['/', '/Director_Member_Child'], (req, res) => {
    res.render('Director_Member_Child');
});
// 원장님 - 멤버 - 원아 관리 승인요청 페이지 라우트 설정
app.get(['/', '/Director_Member_CApprove'], (req, res) => {
    res.render('Director_Member_CApprove');
});
// 원장님 - 멤버 - 원아 관리 초대중 페이지 라우트 설정
app.get(['/', '/Director_Member_CInvite'], (req, res) => {
    res.render('Director_Member_CInvite');
});

// 원장님 - 멤버 - 기사님 관리 페이지 라우트 설정
app.get(['/', '/Director_Member_Driver'], (req, res) => {
    res.render('Director_Member_Driver');
});
// 원장님 - 멤버 - 기사님 승인요청 페이지 라우트 설정
app.get(['/', '/Director_Member_DApprove'], (req, res) => {
    res.render('Director_Member_DApprove');
});
// 원장님 - 멤버 - 기사님 초대중 페이지 라우트 설정
app.get(['/', '/Director_Member_DInvite'], (req, res) => {
    res.render('Director_Member_DInvite');
});

// 원장님 - 멤버 - 초대하기 페이지 라우트 설정
app.get(['/', '/Director_Member_Invite'], (req, res) => {
    res.render('Director_Member_Invite');
});

// 원장님 - 설정 - 원 정보 설정 페이지 라우트 설정
app.get(['/', '/Director_Setting_Kinder'], (req, res) => {
    res.render('Director_Setting_Kinder');
});
// 원장님 - 설정 - 원 정보 설정 (수정) 페이지 라우트 설정
app.get(['/', '/Director_Setting_KModify'], (req, res) => {
    res.render('Director_Setting_KModify');
});

// 원장님 - 설정 - 기능 설정 페이지 라우트 설정
app.get(['/', '/Director_Setting_Option'], (req, res) => {
    res.render('Director_Setting_Option');
});
// 원장님 - 설정 - 기능 설정 (수정) 페이지 라우트 설정
app.get(['/', '/Director_Setting_OModify'], (req, res) => {
    res.render('Director_Setting_OModify');
});

// 원장님 - 설정 - 반 설정 페이지 라우트 설정
app.get(['/', '/Director_Setting_Class'], (req, res) => {
    res.render('Director_Setting_Class');
});

// 원장님 - 설정 - 차량 설정 페이지 라우트 설정
app.get(['/', '/Director_Setting_Car'], (req, res) => {
    res.render('Director_Setting_Car');
});
// 원장님 - 설정 - 차량 설정(수정) 페이지 라우트 설정
app.get(['/', '/Director_Setting_CarModify'], (req, res) => {
    res.render('Director_Setting_CarModify');
});

// 원장님 - 공지사항 페이지 라우트 설정
app.get(['/', '/Director_Notice'], (req, res) => {
    res.render('Director_Notice');
});
// 원장님 - 공지사항 (수정) 페이지 라우트 설정
app.get(['/', '/Director_Notice_Modify'], (req, res) => {
    res.render('Director_Notice_Modify');
});

// 선생님 - 등하원 - 인솔 스케줄 페이지 라우트 설정
app.get(['/', '/Teacher_Goto_Schedule'], (req, res) => {
    res.render('Teacher_Goto_Schedule');
});
// 선생님 - 출석부 작성 페이지 라우트 설정
app.get(['/', '/Teacher_Attendance_Register'], (req, res) => {
    res.render('Teacher_Attendance_Register');
});
// 선생님 - 출석부 조회 페이지 라우트 설정
app.get(['/', '/Teacher_Attendance_CheckChild'], (req, res) => {
    res.render('Teacher_Attendance_CheckChild');
});
// 선생님 - 마이 페이지 - 알림 설정 페이지 라우트 설정
app.get(['/', '/Teacher_Mypage_Option'], (req, res) => {
    res.render('Teacher_Mypage_Option');
});
// 선생님 - 마이 페이지 - 알림 설정 (수정) 페이지 라우트 설정
app.get(['/', '/Teacher_Mypage_OModify'], (req, res) => {
    res.render('Teacher_Mypage_OModify');
});
// 선생님 - 마이 페이지 - 회원정보(로그인) 페이지 라우트 설정
app.get(['/', '/Teacher_Mypage_Login'], (req, res) => {
    res.render('Teacher_Mypage_Login');
});
// 선생님 - 마이 페이지 - 회원정보 페이지 라우트 설정
app.get(['/', '/Teacher_Mypage_User'], (req, res) => {
    res.render('Teacher_Mypage_User');
});

// 보호자 - 자녀 정보 (리스트) 페이지 라우트 설정
app.get(['/', '/Parents_Child_List'], (req, res) => {
    res.render('Parents_Child_List');
});
// 보호자 - 자녀 정보 (상세) 페이지 라우트 설정
app.get(['/', '/Parents_Child_Info'], (req, res) => {
    res.render('Parents_Child_Info');
});
// 보호자 - 등하원 - 실시간 위치 페이지 라우트 설정
app.get(['/', '/Parents_Goto_Location'], (req, res) => {
    res.render('Parents_Goto_Location');
});
// 보호자 - 등하원 - 차량 예약 페이지 라우트 설정
app.get(['/', '/Parents_Goto_Reserve'], (req, res) => {
    res.render('Parents_Goto_Reserve');
});
// 보호자 - 마이 페이지 - 알림 설정 페이지 라우트 설정
app.get(['/', '/Parents_Mypage_Option'], (req, res) => {
    res.render('Parents_Mypage_Option');
});
// 보호자 - 마이 페이지 - 알림 설정 (수정) 페이지 라우트 설정
app.get(['/', '/Parents_Mypage_OModify'], (req, res) => {
    res.render('Parents_Mypage_OModify');
});
// 보호자 - 마이 페이지 - 회원정보(로그인) 페이지 라우트 설정
app.get(['/', '/Parents_Mypage_Login'], (req, res) => {
    res.render('Parents_Mypage_Login');
});
// 보호자 - 마이 페이지 - 회원정보 페이지 라우트 설정
app.get(['/', '/Parents_Mypage_User'], (req, res) => {
    res.render('Parents_Mypage_User');
});

// 기사님 - 등하원 - 운행 스케줄 페이지 라우트 설정
app.get(['/', '/Driver_Goto_Schedule'], (req, res) => {
    res.render('Driver_Goto_Schedule');
});
// 기사님 - 등하원 - 운행 스케줄 페이지 라우트 설정
app.get(['/', '/Driver_Goto_History'], (req, res) => {
    res.render('Driver_Goto_History');
});
// 기사님 - 마이 페이지 - 알림 설정 페이지 라우트 설정
app.get(['/', '/Driver_Mypage_Option'], (req, res) => {
    res.render('Driver_Mypage_Option');
});
// 기사님 - 마이 페이지 - 알림 설정 (수정) 페이지 라우트 설정
app.get(['/', '/Driver_Mypage_OModify'], (req, res) => {
    res.render('Driver_Mypage_OModify');
});
// 기사님 - 마이 페이지 - 회원정보(로그인) 페이지 라우트 설정
app.get(['/', '/Driver_Mypage_Login'], (req, res) => {
    res.render('Driver_Mypage_Login');
});
// 기사님 - 마이 페이지 - 회원정보 페이지 라우트 설정
app.get(['/', '/Driver_Mypage_User'], (req, res) => {
    res.render('Driver_Mypage_User');
});
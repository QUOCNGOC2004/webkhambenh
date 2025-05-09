import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../../components/js/forHome/navbar8'
import Hero17 from '../../components/js/forHome/hero17'
import Features24 from '../../components/js/forHome/features24'
import CTA26 from '../../components/js/forHome/cta26'
import Features25 from '../../components/js/forHome/features25'
import Steps2 from '../../components/js/forHome/steps2'
import Testimonial17 from '../../components/js/forHome/testimonial17'
import Contact10 from '../../components/js/forHome/contact10'
import Footer4 from '../../components/js/forHome/footer4'
import '../../views/css/home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Hệ thống đặt lịch khám bệnh trực tuyến</title>
        <meta property="og:title" content="Hệ thống đặt lịch khám bệnh trực tuyến" />
      </Helmet>
      <Navbar8
        moTaQuanLyLichHen={
          <Fragment>
            <span className="home-text100">Quản lý lịch hẹn của bạn</span>
          </Fragment>
        }
        nguoiDung={
          <Fragment>
            <span className="home-text101">Người dùng</span>
          </Fragment>
        }
        tinTuc={
          <Fragment>
            <span className="home-text102">Tin tức</span>
          </Fragment>
        }
        tieuDeThanhToan={
          <Fragment>
            <span className="home-text103">Thanh toán</span>
          </Fragment>
        }
        trangChu={
          <Fragment>
            <span className="home-text104">Trang chủ</span>
          </Fragment>
        }
        tieuDeQuanLyLichHen={
          <Fragment>
            <span className="home-text105">Quản lý lịch hẹn</span>
          </Fragment>
        }
        tieuDeDatLich={
          <Fragment>
            <span className="home-text106">Đặt lịch hẹn</span>
          </Fragment>
        }
        them={
          <Fragment>
            <span className="home-text107">Thêm</span>
          </Fragment>
        }
        moTaThanhToan={
          <Fragment>
            <span className="home-text108">Thanh toán trước tiền hẹn khám</span>
          </Fragment>
        }
        moTaDatLich={
          <Fragment>
            <span className="home-text109">Đặt lịch khám trước với bác sĩ</span>
          </Fragment>
        }
        gioiThieu={
          <Fragment>
            <span className="home-text110">Giới thiệu</span>
          </Fragment>
        }
        tieuDeDanhSachBacSi={
          <Fragment>
            <span className="home-text111">Danh sách bác sĩ</span>
          </Fragment>
        }
        moTaDanhSachBacSi={
          <Fragment>
            <span className="home-text112">Xem danh sách bác sĩ</span>
          </Fragment>
        }
        dangNhapDangKy={
          <Fragment>
            <span className="home-text113">Đăng nhập/Đăng ký</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Tìm bác sĩ</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Đặt lịch ngay</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Chào mừng đến với Hệ thống đặt lịch khám bệnh trực tuyến
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Đặt lịch khám bệnh dễ dàng chỉ với vài cú nhấp chuột. Tìm bác sĩ phù hợp với nhu cầu của bạn và quản lý lịch hẹn một cách thuận tiện.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Xem lịch trống của bác sĩ và đặt lịch hẹn dễ dàng
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Đặt lịch hẹn</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Tìm kiếm danh sách bác sĩ với bộ lọc theo chuyên khoa và lịch trống
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Giao diện thân thiện</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Thiết kế hiện đại và phản hồi nhanh cho trải nghiệm người dùng tốt nhất
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Tìm bác sĩ</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">Đặt lịch khám ngay hôm nay</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Hãy chọn bác sĩ phù hợp với bạn và đặt lịch khám ngay hôm nay để
              được phục vụ tốt nhất.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Đặt lịch khám</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Trải nghiệm giao diện thích ứng với mọi kích thước màn hình, đảm bảo trải nghiệm nhất quán trên mọi thiết bị.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Website của chúng tôi cung cấp giao diện thân thiện giúp dễ dàng điều hướng và đặt lịch một cách thuận tiện.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">
              Lọc theo chuyên khoa và lịch trống
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Giao diện thân thiện</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Dễ dàng lọc danh sách bác sĩ theo chuyên khoa và lịch trống để tìm bác sĩ phù hợp với nhu cầu của bạn.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Thiết kế phản hồi</span>
          </Fragment>
        }
      ></Features25>
      
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Giới thiệu website và mục đích sử dụng cho người dùng.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Hiển thị danh sách bác sĩ với tùy chọn lọc theo chuyên khoa và lịch trống.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Trang đăng nhập/Đăng ký</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Cho phép người dùng tạo tài khoản hoặc đăng nhập để truy cập các tính năng bổ sung.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Trang chủ</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Danh sách bác sĩ</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Cung cấp thông tin chi tiết về bác sĩ bao gồm hồ sơ, lịch làm việc và đánh giá.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Trang chi tiết bác sĩ</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">Giáo viên</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">Kỹ sư phần mềm</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">Nguyễn Văn A</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Trần Văn C</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              Khả năng lọc bác sĩ theo chuyên khoa giúp tôi dễ dàng tìm được bác sĩ phù hợp với nhu cầu của mình.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Lê Thị B</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">Y tá</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Phạm Thị D</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              Đọc những chia sẻ từ bệnh nhân về trải nghiệm của họ với dịch vụ y tế của chúng tôi.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Quản lý Marketing</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              Tôi đã có trải nghiệm tuyệt vời khi đặt lịch khám qua website này. Quy trình đơn giản và hiệu quả.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Phản hồi từ bệnh nhân</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              Tôi rất khuyến nghị nền tảng này cho bất kỳ ai muốn đặt lịch khám bệnh trực tuyến. Nó thân thiện và tiện lợi.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              Là một chuyên gia y tế, tôi đánh giá cao hiệu quả và độ chính xác của hệ thống đặt lịch trên website này.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        noiDung1={
          <Fragment>
            <span className="home-text206">
              Liên hệ với chúng tôi để được tư vấn và hỗ trợ tốt nhất.
            </span>
          </Fragment>
        }
        moTaTruSoChinh={
          <Fragment>
            <span className="home-text207">123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</span>
          </Fragment>
        }
        tieuDe1={
          <Fragment>
            <span className="home-text208">Liên hệ</span>
          </Fragment>
        }
        moTaChiNhanh={
          <Fragment>
            <span className="home-text209">456 Đường DEF, Quận UVW, TP. Hà Nội</span>
          </Fragment>
        }
        truSoChinh={
          <Fragment>
            <span className="home-text210">Trụ sở chính</span>
          </Fragment>
        }
        chiNhanh={
          <Fragment>
            <span className="home-text211">Chi nhánh</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">Liên hệ</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">Danh sách bác sĩ</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">Trang chủ</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">Điều khoản sử dụng</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Đăng nhập/Đăng ký</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Trang quản lý lịch đã đặt</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Chính sách cookie</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Chính sách bảo mật</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home

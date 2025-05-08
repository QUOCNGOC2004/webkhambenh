import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import '../../css/forHome/navbar8.css'

const Navbar8 = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <header className="navbar8-container1">
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar8-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
          <nav className="navbar8-links1">
            <a
              href={props.trangChuUrl}
              className="navbar8-link11 thq-link thq-body-small"
            >
              {props.trangChu ?? ( 
                <Fragment>
                  <span className="navbar8-text18">Trang chủ</span>
                </Fragment>
              )}
            </a>
            <a 
              href={props.tinTucUrl} 
              className="thq-link thq-body-small"
            >
              {props.tinTuc ?? (
                <Fragment>
                  <span className="navbar8-text16">Tin tức</span>
                </Fragment>
              )}
            </a>
            <a
              href={props.gioiThieuUrl}
              className="navbar8-link31 thq-link thq-body-small"
            >
              {props.gioiThieu ?? (
                <Fragment>
                  <span className="navbar8-text24">Giới thiệu</span>
                </Fragment>
              )}
            </a>
            <div
              onClick={() => setLink5DropdownVisible(!link5DropdownVisible)}
              className="navbar8-link4-dropdown-trigger"
            >
              <span className="thq-link thq-body-small">
                {props.them ?? (
                  <Fragment>
                    <span className="navbar8-text21">
                      Thêm
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="navbar8-icon-container1">
                {link5DropdownVisible && (
                  <div className="navbar8-container2">
                    <svg viewBox="0 0 1024 1024" className="navbar8-icon10">
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                )}
                {!link5DropdownVisible && (
                  <div className="navbar8-container3">
                    <svg viewBox="0 0 1024 1024" className="navbar8-icon12">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </nav>
          <div className="navbar8-buttons1">
            <button className="navbar8-action11 thq-button-animated thq-button-filled">
              <span>
                {props.nguoiDung ?? (
                  <Fragment>
                    <span className="navbar8-text15">Người dùng</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="navbar8-action21 thq-button-outline thq-button-animated">
              <span>
                {props.dangNhapDangKy ?? (
                  <Fragment>
                    <span className="navbar8-text27">Đăng nhập/Đăng ký</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar8-icon14">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar8-mobile-menu">
          <div className="navbar8-nav">
            <div className="navbar8-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar8-logo"
              />
              <div data-thq="thq-close-menu" className="navbar8-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar8-icon16">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar8-links2">
              <a
                href={props.trangChuUrl}
                className="navbar8-link12 thq-link thq-body-small"
              >
                {props.trangChu ?? (
                  <Fragment>
                    <span className="navbar8-text18">Trang chủ</span>
                  </Fragment>
                )}
              </a>
              <a 
                href={props.tinTucUrl} 
                className="thq-link thq-body-small"
              >
                {props.tinTuc ?? (
                  <Fragment>
                    <span className="navbar8-text16">Tin tức</span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.gioiThieuUrl}
                className="navbar8-link32 thq-link thq-body-small"
              >
                {props.gioiThieu ?? (
                  <Fragment>
                    <span className="navbar8-text24">Giới thiệu</span>
                  </Fragment>
                )}
              </a>
              <div className="navbar8-link4-accordion">
                <div
                  onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                  className="navbar8-trigger"
                >
                  <span className="thq-link thq-body-small">
                    {props.them ?? (
                      <Fragment>
                        <span className="navbar8-text21">
                          Thêm
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div className="navbar8-icon-container2">
                    {link5AccordionOpen && (
                      <div className="navbar8-container4">
                        <svg viewBox="0 0 1024 1024" className="navbar8-icon18">
                          <path d="M298 426h428l-214 214z"></path>
                        </svg>
                      </div>
                    )}
                    {!link5AccordionOpen && (
                      <div className="navbar8-container5">
                        <svg viewBox="0 0 1024 1024" className="navbar8-icon20">
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {link5AccordionOpen && (
                  <div className="navbar8-container6">
                    <a href={props.lienKetThanhToan}>
                      <div className="navbar8-menu-item1">
                        <img
                          alt={props.hinhAnhThanhToanAlt}
                          src={props.hinhAnhThanhToanSrc}
                          className="navbar8-page1-image1"
                        />
                        <div className="navbar8-content1">
                          <span className="navbar8-page11 thq-body-large">
                            {props.tieuDeThanhToan ?? (
                              <Fragment>
                                <span className="navbar8-text17">
                                  Thanh toán
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.moTaThanhToan ?? (
                              <Fragment>
                                <span className="navbar8-text22">
                                  Thanh toán trước tiền hẹn khám
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.lienKetDatLich}>
                      <div className="navbar8-menu-item2">
                        <img
                          alt={props.hinhAnhDatLichAlt}
                          src={props.hinhAnhDatLichSrc}
                          className="navbar8-page2-image1"
                        />
                        <div className="navbar8-content2">
                          <span className="navbar8-page21 thq-body-large">
                            {props.tieuDeDatLich ?? (
                              <Fragment>
                                <span className="navbar8-text20">
                                  Đặt lịch hẹn
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.moTaDatLich ?? (
                              <Fragment>
                                <span className="navbar8-text23">
                                  Đặt lịch khám trước với bác sĩ
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.lienKetDanhSachBacSi}>
                      <div className="navbar8-menu-item3">
                        <img
                          alt={props.hinhAnhDanhSachBacSiAlt}
                          src={props.hinhAnhDanhSachBacSiSrc}
                          className="navbar8-page3-image1"
                        />
                        <div className="navbar8-content3">
                          <span className="navbar8-page31 thq-body-large">
                            {props.tieuDeDanhSachBacSi ?? (
                              <Fragment>
                                <span className="navbar8-text25">
                                  Danh sách bác sĩ
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.moTaDanhSachBacSi ?? (
                              <Fragment>
                                <span className="navbar8-text26">
                                  Xem danh sách bác sĩ
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.lienKetQuanLyLichHen}>
                      <div className="navbar8-menu-item4">
                        <img
                          alt={props.hinhAnhQuanLyLichHenAlt}
                          src={props.hinhAnhQuanLyLichHenSrc}
                          className="navbar8-page4-image1"
                        />
                        <div className="navbar8-content4">
                          <span className="navbar8-page41 thq-body-large">
                            {props.tieuDeQuanLyLichHen ?? (
                              <Fragment>
                                <span className="navbar8-text19">
                                  Quản lý lịch hẹn
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.moTaQuanLyLichHen ?? (
                              <Fragment>
                                <span className="navbar8-text14">
                                  Quản lý lịch hẹn của bạn
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </nav>
            <div className="navbar8-buttons2">
              <button className="thq-button-filled">
                <span>
                  {props.nguoiDung ?? (
                    <Fragment>
                      <span className="navbar8-text15">Người dùng</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline">
                <span>
                  {props.dangNhapDangKy ?? (
                    <Fragment>
                      <span className="navbar8-text27">Đăng nhập/Đăng ký</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        {link5DropdownVisible && (
          <div className="navbar8-container7 thq-box-shadow">
            <div className="navbar8-link5-menu-list">
              <a href={props.lienKetThanhToan}>
                <div className="navbar8-menu-item5">
                  <img
                    alt={props.hinhAnhThanhToanAlt}
                    src={props.hinhAnhThanhToanSrc}
                    className="navbar8-page1-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content5">
                    <span className="navbar8-page12 thq-body-large">
                      {props.tieuDeThanhToan ?? (
                        <Fragment>
                          <span className="navbar8-text17">
                            Thanh toán
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.moTaThanhToan ?? (
                        <Fragment>
                          <span className="navbar8-text22">
                            Thanh toán trước tiền hẹn khám
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.lienKetDatLich}>
                <div className="navbar8-menu-item6">
                  <img
                    alt={props.hinhAnhDatLichAlt}
                    src={props.hinhAnhDatLichSrc}
                    className="navbar8-page2-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content6">
                    <span className="navbar8-page22 thq-body-large">
                      {props.tieuDeDatLich ?? (
                        <Fragment>
                          <span className="navbar8-text20">
                            Đặt lịch hẹn
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.moTaDatLich ?? (
                        <Fragment>
                          <span className="navbar8-text23">
                            Đặt lịch khám trước với bác sĩ
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.lienKetDanhSachBacSi}>
                <div className="navbar8-menu-item7">
                  <img
                    alt={props.hinhAnhDanhSachBacSiAlt}
                    src={props.hinhAnhDanhSachBacSiSrc}
                    className="navbar8-page3-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content7">
                    <span className="navbar8-page32 thq-body-large">
                      {props.tieuDeDanhSachBacSi ?? (
                        <Fragment>
                          <span className="navbar8-text25">
                            Danh sách bác sĩ
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.moTaDanhSachBacSi ?? (
                        <Fragment>
                          <span className="navbar8-text26">
                            Xem danh sách bác sĩ
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.lienKetQuanLyLichHen}>
                <div className="navbar8-menu-item8">
                  <img
                    alt={props.hinhAnhQuanLyLichHenAlt}
                    src={props.hinhAnhQuanLyLichHenSrc}
                    className="navbar8-page4-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content8">
                    <span className="navbar8-page42 thq-body-large">
                      {props.tieuDeQuanLyLichHen ?? (
                        <Fragment>
                          <span className="navbar8-text19">
                            Quản lý lịch hẹn
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.moTaQuanLyLichHen ?? (
                        <Fragment>
                          <span className="navbar8-text14">
                            Quản lý lịch hẹn của bạn
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )}
      </header>
      {link5DropdownVisible && (
        <div
          onClick={() => setLink5DropdownVisible(false)}
          className="navbar8-container8"
        ></div>
      )}
    </header>
  )
}

Navbar8.defaultProps = {
  // Logo properties
  logoAlt: 'Logo của trang web',
  logoSrc: 'https://cdn.haitrieu.com/wp-content/uploads/2023/10/Icon-CTy-Tap-doan-Phuong-Hoan.png',

  // Navigation links
  trangChu: undefined,
  trangChuUrl: '/',
  tinTuc: undefined,
  tinTucUrl: 'https://hs.phenikaa-uni.edu.vn/vi/category/tin-tuc-su-kien',
  gioiThieu: undefined,
  gioiThieuUrl: 'https://phenikaamec.com/',
  them: undefined,

  // Action buttons
  nguoiDung: undefined,
  dangNhapDangKy: undefined,

  // Page 1 properties (Thanh toan)
  tieuDeThanhToan: undefined,
  moTaThanhToan: undefined,
  hinhAnhThanhToanAlt: 'Hình ảnh cho Thanh toán',
  hinhAnhThanhToanSrc: 'https://images.unsplash.com/photo-1532045349218-5e783e9b5e2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM3OTY3NHw&ixlib=rb-4.0.3&q=80&w=1080',
  lienKetThanhToan: '/thanh-toan',

  // Page 2 properties (Dat lich)
  tieuDeDatLich: undefined,
  moTaDatLich: undefined,
  hinhAnhDatLichAlt: 'Hình ảnh cho Đặt lịch',
  hinhAnhDatLichSrc: 'https://images.unsplash.com/photo-1711335755442-aabbc8aa64f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM3OTY3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  lienKetDatLich: '/dat-lich',

  // Page 3 properties (Danh sach bac si)
  tieuDeDanhSachBacSi: undefined,
  moTaDanhSachBacSi: undefined,
  hinhAnhDanhSachBacSiAlt: 'Hình ảnh cho Danh sách bác sĩ',
  hinhAnhDanhSachBacSiSrc: 'https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM3OTY3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  lienKetDanhSachBacSi: '/danh-sach-bs',

  // Page 4 properties (Quan ly lich hen)
  tieuDeQuanLyLichHen: undefined,
  moTaQuanLyLichHen: undefined,
  hinhAnhQuanLyLichHenAlt: 'Hình ảnh cho Trang quản lý lịch đã đặt',
  hinhAnhQuanLyLichHenSrc: 'https://images.unsplash.com/photo-1741242302244-168c45da19f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NjM3OTY3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  lienKetQuanLyLichHen: '/quan-ly-lich'
}
Navbar8.propTypes = {
  // Logo properties
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,

  // Navigation links
  trangChu: PropTypes.element,
  trangChuUrl: PropTypes.string,
  tinTuc: PropTypes.element,
  tinTucUrl: PropTypes.string,
  gioiThieu: PropTypes.element,
  gioiThieuUrl: PropTypes.string,
  them: PropTypes.element,

  // Action buttons
  nguoiDung: PropTypes.element,
  dangNhapDangKy: PropTypes.element,

  // Page 1 properties (Thanh toan)
  tieuDeThanhToan: PropTypes.element,
  moTaThanhToan: PropTypes.element,
  hinhAnhThanhToanAlt: PropTypes.string,
  hinhAnhThanhToanSrc: PropTypes.string,
  lienKetThanhToan: PropTypes.string,

  // Page 2 properties (Dat lich)
  tieuDeDatLich: PropTypes.element,
  moTaDatLich: PropTypes.element,
  hinhAnhDatLichAlt: PropTypes.string,
  hinhAnhDatLichSrc: PropTypes.string,
  lienKetDatLich: PropTypes.string,

  // Page 3 properties (Danh sach bac si)
  tieuDeDanhSachBacSi: PropTypes.element,
  moTaDanhSachBacSi: PropTypes.element,
  hinhAnhDanhSachBacSiAlt: PropTypes.string,
  hinhAnhDanhSachBacSiSrc: PropTypes.string,
  lienKetDanhSachBacSi: PropTypes.string,

  // Page 4 properties (Quan ly lich hen)
  tieuDeQuanLyLichHen: PropTypes.element,
  moTaQuanLyLichHen: PropTypes.element,
  hinhAnhQuanLyLichHenAlt: PropTypes.string,
  hinhAnhQuanLyLichHenSrc: PropTypes.string,
  lienKetQuanLyLichHen: PropTypes.string
}

export default Navbar8

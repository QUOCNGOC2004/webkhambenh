import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Web khám bệnh nhóm 13</title>
        <meta property="og:title" content="Married Harmless Swan" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">Page Four Description</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Main Action</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">login.html</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Trang chủ</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">index.html</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Trang quản lý lịch đã đặt</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Đăng nhập/Đăng ký</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">appointment-management.html</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">Page Two Description</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">doctor-list.html</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Danh sách bác sĩ</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Secondary Action</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Secondary action</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Get Started</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Welcome to our Online Booking System
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Easily schedule your medical appointments with just a few clicks.
              Find the right doctor for your needs and manage your appointments
              hassle-free.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              View doctor&apos;s availability and schedule appointments easily
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Book Appointments</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Explore a list of doctors with filters by specialty and
              availability
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">User-friendly Interface</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Modern and responsive design for seamless user experience
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Find Doctors</span>
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
              Enjoy a responsive design that adapts to different screen sizes,
              ensuring a consistent experience across devices.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Our website provides a user-friendly interface for easy navigation
              and seamless booking experience.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">
              Filter by Specialization and Availability
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">User-Friendly Interface</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Easily filter through a list of doctors based on their
              specialization and availability to find the right match for your
              needs.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Responsive Design</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$49/mo</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Get started</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Get started</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">or $299 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Get started</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Feature text goes here</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Feature text goes here</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Feature text goes here</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$29/mo</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">or $499 yearly</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">or $200 yearly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">$20/mo</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Introduce the website and its purpose to users.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Display a list of doctors with filtering options by specialty and
              availability.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Login/Register Page</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Allow users to create an account or log in to access more
              features.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Homepage</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">List of Doctors</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Provide detailed information about a specific doctor including
              their profile, schedule, and reviews.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Doctor Details Page</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">Teacher</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">Software Engineer</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">David Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              The ability to filter doctors based on their specialties made it
              easy for me to find the right healthcare provider for my needs.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">Nurse</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Emily Brown</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              Read what our patients have to say about their experience with our
              healthcare services.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Marketing Manager</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              I had a great experience booking an appointment through this
              website. The process was seamless and efficient.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">What Our Patients Say</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              I highly recommend this platform for anyone looking to schedule
              medical appointments online. It&apos;s user-friendly and
              convenient.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              As a healthcare professional myself, I appreciate the efficiency
              and accuracy of the booking system on this website.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">123 Main Street, City, Country</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Contact Us</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">456 Park Avenue, City, Country</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Headquarters</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Branch Office</span>
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

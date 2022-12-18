import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import Modal from '../components/elements/Modal';
import ButtonGroup from '../components/elements/Button';
import Button from '../components/elements/Button';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Report = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  } 

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
  
  const users = [
    {
       id: 1,
       home_number: '101호',
       build_name : '청운빌딩',
       user_name : '이진중',
       create_time : 'Sep 3, 2021',
       phone_number : '010-0000-0000'
    },
    {
        id: 2,
        home_number: '101호',
        build_name : '청운빌딩',
        user_name : '이진중',
        create_time : 'Sep 3, 2021',
        phone_number : '010-0000-0000'
     },
     {
        id: 3,
        home_number: '101호',
        build_name : '청운빌딩',
        user_name : '이진중',
        create_time : 'Sep 3, 2021',
        phone_number : '010-0000-0000'
     },
 ];


  function Authout({ user }){
    return(
      <div class="bigBox">
      <div class="report-cover">
        <div class="row g-0">
            <div class="col-sm-8">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <span class="fs-sm text-muted border-start ps-3 ms-3">{user.create_time} </span>
                  <span class="d-flex align-items-center fw-bold text-dark text-decoration-none me-3">
                    , {user.build_name}
                  </span>
                  <span class="d-flex align-items-center fw-bold text-dark text-decoration-none me-3">
                    , {user.home_number}
                  </span>
                </div>
                <h3 class="h4">
                <span>{user.user_name} </span>
                <span>: {user.phone_number} </span>
                </h3>
                <span>
                    <Button tag="a" color="primary" wideMobile href="#">
                    세입자 받기
                    </Button>
                    <span> </span>
                    <Button tag="a" color="primary" wideMobile href="#">
                    거절하기
                    </Button>
                    </span>
                <hr class="my-4"/>
                <div class="d-flex align-items-center justify-content-between">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  

  function ReportList(){
    return(
      <div>
        { users.map((user,index) => (<Authout user={user} key={index} />)) }
      </div>
    )
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <div className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                {ReportList()}                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Report.propTypes = propTypes;
Report.defaultProps = defaultProps;

export default Report;
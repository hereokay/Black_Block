import React, { useState,useEffect } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import Modal from '../components/elements/Modal';
import axios from 'axios';

import "./Report.css";
import { CurrencyYenSharp } from '@mui/icons-material';

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
       user_id: '101호',
       create_time : 'Sep 3, 2021',
       content : '나는 이런게 불만이에요. 처리해주세요',
       isAnonymous:false
    },
    {
      id: 2,
      user_id: ' velopert',
      create_time : 'Sep 3, 2021',
      content : '불만불만',
      isAnonymous:true
    },
    {
      id: 3,
      user_id: "302호",
      create_time : "Sep 3, 2021",
      content : "찡찡",
      isAnonymous:false
    }
 ];

  function spaceinsert(str){
    var year = str.substr(0,4);
    var month = str.substr(4,2);
    var day = str.substr(6,2);
    return("날짜 : " +year+" "+ month+ " "+day)
  }  

  function Article2({ user }){
    return(
      <>
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — {user.content}
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">{spaceinsert(user.createTime)}</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <span href="#0">{
                      user.anonymous === false ? user.userAddress : "****"
                    }</span>
                  </span>
                </div>
              </div>
      </>
    )
  }

  const {match,history} = props
  const {ownerTel} = match.params    
  const [data,setData] = useState([])
useEffect(()=>{
    axios.get(`http://3.36.144.134:8080/api/report/list/${ownerTel}`)
    .then(res=>{
        setData(res.data)
        console.log(res.data[0])
    })
},[])


  

  function ReportList(){
    return(
      <div>
        { data.map((user,index) => (<Article2 user={user} key={index} />)) }
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
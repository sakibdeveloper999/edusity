import React from 'react'
import './Programs.css'
import Programs_1 from '../../assets/program-1.png'
import Programs_2 from '../../assets/program-2.png'
import Programs_3 from '../../assets/program-3.png'
import Programs_icon_1 from '../../assets/program-icon-1.png'
import Programs_icon_2 from '../../assets/program-icon-2.png'
import Programs_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
    return (
        <div className='programs' >
            <div className="program">
                <img src={Programs_1} alt="" />
                <div className="caption">
                    <img src={Programs_icon_1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={Programs_2} alt="" />
                <div className="caption">
                    <img src={Programs_icon_2} alt="" />
                    <p>Masters Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={Programs_3} alt="" />
                <div className="caption">
                    <img src={Programs_icon_3} alt="" />
                    <p>Post Degree</p>
                </div>
            </div>
        </div>
    )
}

export default Programs
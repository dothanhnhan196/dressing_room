import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-background">
                </div>
                <div className="useravatar">
                    <img alt="cybersoft.edu.vn" src="images/cybersoft.png" />
                </div>
                <div className="card-info"> <span className="card-title">CyberSoft.edu.vn - Đào tạo chuyên gia lập trình - Dự án thử đồ trực tuyến - Virtual Dressing Room</span>
                </div>
            </div>
        )
    }
}

import { useState } from 'react';
import style from './Information.module.scss'
import {ArrowRight,ArrowDropUp,ArrowDropDown} from '@mui/icons-material';

function Information() {
    const [isVisible, setIsVisible] = useState(false);

    const informationArr = [
        {
            title:"Petrolimex công bố thông tin ký hợp đồng kiểm toán BCTC năm 2024",
            date:"Thông tin cổ đông | 03/04/2024"
        },
        {
            title:"Thông báo chi trả cổ tức PLX năm 2023 bằng tiền và các mẫu biểu",
            date:"Thông tin cổ đông | 02/06/2024"
        },
        {
            title:"Thông báo về ngày đăng ký cuối cùng để thực hiện quyền chi trả cổ tức năm 2023 bằng tiền",
            date:"Thông tin cổ đông | 01/05/2024"
        },
        {
            title:"Nghị quyết HĐQT về việc chi trả cổ tức năm 2023",
            date:"Thông tin cổ đông | 22/05/2024"
        },
        {
            title:"Giấy chứng nhận đăng ký Doanh nghiệp Công ty cổ phần của Petrolimex (Đăng ký thay đổi lần thứ 14)",
            date:"Thông tin cổ đông | 02/05/2024"
        },
        {
            title:"Quyết định về việc chỉ định Thư ký Tập đoàn, Người phụ trách quản trị Tập đoàn",
            date:"Thông tin cổ đông | 03/05/2024"
        }
    ] 

    const report= ["Giải trình Báo cáo tài chính Quý I/2024","Báo cáo tài chính Quý I/2024 của Công ty Mẹ - 2024",
                    "Báo cáo tài chính hợp nhất Quý I/2024","Giải trình báo cáo tài chính năm 2023 (sau kiểm toán)",
                    "Báo cáo tài chính hợp nhất Quý IV/2023","Báo cáo tài chính hợp nhất đã được kiểm toán năm 2023"]

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div>
            <div className={style.container}>
                <div className={style.contentHeader} style={{backgroundImage:'url("https://portals.petrolimex.com.vn/_themes/sunrise/img/investorsDetail-featured-bg.jpg")'}}>
                    <div className={style.contentHeaderLeft}>
                        <p>Trang chủ     |    Nhà đầu tư    |   <span>Quan hệ nhà đầu tư</span></p>
                        <h1>Quan hệ nhà đầu tư</h1>
                        <h3>THÔNG TIN CỔ ĐÔNG</h3>
                        <ul className={style.listInfor}>
                            {informationArr.map((item,i)=>(
                                <li key={i} className={style.inforItem}>
                                    <h4>{item.title}</h4>
                                    <p>{item.date}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={style.contentHeaderRight}>
                        <h4>THÔNG TIN NHÀ ĐẦU TƯ</h4>
                        <img src='https://files.petrolimex.com.vn/files/6783dc1271ff449e95b74a9520964169/image=png/f11d9f6ce7d24a389229720194cdd613/BiaPLX%20BCTN%202023.png' alt='baocaothuongnien'/>
                        <span>Báo cáo thường niên năm 2024</span>
                    </div>
                </div>

                <div className={style.reportFinalcial}>
                    <h2>Kết quả kinh doanh</h2>
                    <span>Xem tất cả<ArrowRight style={{fontSize:24}}/></span>
                    <div className={style.reportList}>
                        {report.map((item,i)=>(
                            <div className={style.reportItem}>
                                <img src='https://portals.petrolimex.com.vn/_themes/sunrise/img/business-results-icon.svg' alt='fileImage'/>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={style.event}>
                    <h2>Sự kiện</h2>
                    <div className={style.eventContent}>
                        <div className={style.eventLeft}>
                            <div className={style.eventItem}>
                                <h3>Thông báo mời họp và Tài liệu Đại hội đồng cổ đông năm 2022</h3>
                                <span>Thông tin cổ đông | 18/05/2022</span>
                            </div>
                            <div className={style.eventItem}>
                                <h3>ĐHĐCĐ Petrolimex họp thành công phiên bất thường năm 2022</h3>
                                <span>Tin chuyên ngành | 29/03/2022</span>
                            </div>
                            <div className={style.eventItem}>
                                <h3>Thông báo mời họp và Tài liệu Đại hội đồng cổ đông bất thường năm 2022</h3>
                                <span>Thông tin cổ đông | 08/03/2022</span>
                            </div>
                            <span className={style.viewAll}>Xem tất cả<ArrowRight style={{fontSize:24}}/></span>
                        </div>
                        <div className={style.eventRight} style={{backgroundImage:'url("https://portals.petrolimex.com.vn/_themes/sunrise/img/eventBlog-1.jpg")'}}></div>
                    </div>
                </div>

                <div className={style.contact} style={{backgroundImage:'url("https://portals.petrolimex.com.vn/_themes/sunrise/img/ctaContent-2.jpg")'}}>
                    <h1>Thông tin liên hệ</h1>
                    <p>Nếu anh/chị có thắc mắc hoặc góp ý, hãy liên hệ với nhóm quan hệ nhà đầu tư của chúng tôi</p>
                    <div className={`${style.contactDetail} ${isVisible ? style.expand :''}`}>
                        <div className={style.detailLeft}>
                            <h4>THÔNG TIN LIÊN HỆ CỔ ĐÔNG</h4>
                            <p>Địa chỉ: Ban Tổng hợp, Văn phòng Petrolimex, Tầng 24, Tòa VCCI, Số 9 Đào Duy Anh, Đống Đa, Hà Nội</p>
                            <span>Điện thoại: <b>(024) 3851-2603</b></span>
                        </div>
                        <div className={style.detailRight}>
                            <h4>THÔNG TIN LIÊN HỆ NHÀ ĐẦU TƯ</h4>
                            <p>Địa chỉ: Nhóm Quan hệ nhà đầu tư, Văn phòng Petrolimex, Tầng 24, Tòa VCCI, Số 9 Đào Duy Anh, Đống Đa, Hà Nội</p>
                            <span>Điện thoại: <b>(024) 3851-2603</b></span>
                        </div>
                    </div>
                    <span className={style.contactToggle} onClick={toggleVisibility}>{`${isVisible ? 'Thu gọn': 'Thông tin chi tiết'}`} {isVisible ?<ArrowDropUp style={{fontSize:26}}/>:<ArrowDropDown style={{fontSize:26}}/>}</span>
                </div>
            </div>
        </div>
    )
}

export default Information;
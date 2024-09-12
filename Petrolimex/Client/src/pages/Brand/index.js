import style from './Brand.module.scss'
import { useState } from 'react';
import {ArrowDropUp,ArrowRight,ArrowDropDown} from '@mui/icons-material'

function Brand() {
    const [isVisible, setIsVisible] = useState(false);

    const menuBar = [
        {
            image:'https://portals.petrolimex.com.vn/_themes/sunrise/img/ctaPageLink-2.png',
            title:'Thương hiệu & Bảo vệ nhãn hiệu'
        },
        {
            image:'https://portals.petrolimex.com.vn/_themes/sunrise/img/ctaPageLink-4.png',
            title:'Câu hỏi thường gặp'
        },
        {
            image:'https://portals.petrolimex.com.vn/_themes/sunrise/img/ctaPageLink-3.png',
            title:'Hoá đơn điện tử'
        },
        {
            image:'https://portals.petrolimex.com.vn/_themes/sunrise/img/ctaPageLink-1.png',
            title:'Giá bán lẻ & Mạng lưới xăng dầu'
        }
    ]
    

    const listNews = [
        {
            title:'Xâm phạm nhãn hiệu Petrolimex: Đáng báo động',
            date:'Petrolimex trên báo chí | 29/03/2021'
        },
        {
            title:'Đây không phải Cửa hàng Xăng dầu Petrolimex (24)',
            date:'Bảo vệ nhãn hiệu | 08/07/2020'
        },
        {
            title:'Petrolimex phản đối đơn đăng ký nhãn hiệu số 4-2020-06704 của Công ty TNHH TM-DV Hào Phát Phú Petro',
            date:'Bảo vệ nhãn hiệu | 05/06/2020'
        },
        {
            title:'TVC thương hiệu Petrolimex 2019',
            date:'Phát triển thương hiệu | 05/12/2019'
        },
        {
            title:'Công ty CP đầu tư xăng dầu Miền Bắc đã gỡ bỏ dấu hiệu xâm phạm nhãn hiệu Petrolimex',
            date:'Bảo vệ nhãn hiệu | 31/05/2019'
        }
    ]

    const pricePetro=[
        {
            name:'Xăng RON 95-V',
            price1:'23.410	',
            price2:'23.870'
        },
        {
            name:'Xăng RON 95-III',
            price1:'22.880	',
            price2:'23.330'
        },
        {
            name:'Xăng E5 RON 92-II',
            price1:'21.900	',
            price2:'22.330'
        },
        {
            name:'DO 0,001S-V',
            price1:'20.390	',
            price2:'20.790'
        },
        {
            name:'DO 0,05S-II',
            price1:'20.190	',
            price2:'20.590'
        },
        {
            name:'Dầu hỏa 2-K',
            price1:'20.320	',
            price2:'20.720'
        }
    ]

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <div className={style.container}>
                <div className={style.titleImage}>
                    <img src='https://portals.petrolimex.com.vn/_themes/sunrise/img/ttkh-page-title.jpg' alt='service'/>
                    <div className={style.title}>
                        <span>Trang chủ | Dịch vụ khách hàng</span>
                        <h1>Dịch vụ khách hàng</h1>
                    </div>
                </div>

                <div className={style.brandMenuBar}>
                    {menuBar.map((item,i)=>(
                        <div className={style.menuBarItem} key={i}>
                            <img src={item.image} alt='menubarimg'/>
                            <h4>{item.title}</h4>
                        </div>
                    ))}
                </div>

                <div className={style.brandContent} style={{backgroundImage:'url("https://portals.petrolimex.com.vn/_themes/sunrise/img/peroBrand-bg.jpg")'}}>
                    <div className={style.contentLeft}>
                        <h3>Thương hiệu Petrolimex</h3>
                        <div className={style.brandImage}>
                            <img src='https://portals.petrolimex.com.vn/_themes/sunrise/img/petroleum-logo.jpg' alt="brand img"/>
                        </div>
                        <p>Đây không phải Cửa hàng Xăng dầu Petrolimex (25)</p>
                        <span>Xăng dầu là loại hàng hóa đặc biệt mang tính chiến lược không thể thiếu và liên quan mật thiết đến đời sống kinh tế xã hội, an ninh quốc gia.</span>
                        <h4 onClick={toggleVisibility}>{isVisible ? (<> Thu gọn <ArrowDropUp style={{ fontSize: 26 }} /> </>) : (<>Chi Tiết <ArrowDropDown style={{ fontSize: 26 }} /></>)}</h4>
                        <ul style={isVisible ? {maxHeight:'236px',borderColor:'#818eff'} : {height:'auto'}}>
                            <li>
                                <img src='https://icolor.vn/wp-content/uploads/2021/03/D%E1%BA%A5u-hi%E1%BB%87u-c%C6%A1-b%E1%BA%A3n-nh%E1%BA%ADn-di%E1%BB%87n-c%E1%BB%ADa-h%C3%A0ng-x%C4%83ng-d%E1%BA%A7u-Petrolimex-6.jpg' alt="brand img"/>
                                <span>Quy chuẩn nhận diện Petrolimex</span>
                            </li>
                            <li>
                                <img src='https://files.petrolimex.com.vn/thumbnailwebps/6783DC1271FF449E95B74A9520964169/1/600/0/54a9f1419aa64bf9b9832b43eecd4c02/Logo%20Petrolimex_nhandien.jpg.webp' alt="brand img"/>
                                <span>Hệ thống nhận diện thương hiệu</span>
                            </li>
                            <li>
                                <img src='https://files.petrolimex.com.vn/files/6783dc1271ff449e95b74a9520964169/image=jpeg/c1e40f22e817450b999817a03aa80c5e/PETROLIMEX%20NHA%20BE%20-%2045K%20-%2010637555%20-%20V1_page-0001.jpg' alt="brand img"/>
                                <span>Giấy chứng nhận nhãn hiệu</span>
                            </li>
                        </ul>
                    </div>
                    <div className={style.contentRight}>
                        <h3>Bảo vệ nhãn hiệu Petrolimex</h3>
                        <div className={style.brandNewsList}>
                            {listNews.map((item,i)=>(
                                <div className={style.brandNewsItem} key={i}>
                                    <h4>{item.title}</h4>
                                    <span>{item.date}</span>
                                </div>
                            ))}
                        </div>
                        <span>Xem tất cả<ArrowRight style={{fontSize:23}}/></span>
                    </div>
                </div> 

                <div className={style.saleProduct}>
                    <h2>Sản phẩm và Khuyến mại</h2>
                    <div className={style.productList}>
                        <div className={style.prodcutItem}>
                            <img src='https://files.petrolimex.com.vn/thumbnails/6783dc1271ff449e95b74a9520964169/0/0/0/8d33cdb903734343a97cef6108ef47da/0/094728/3446a69d22054d22a7bcdd2a5ca39d4a.jpg' alt='sale img'/>
                            <h4>Thẻ ATM nội địa của 41 ngân hàng có thể mua xăng dầu tại CHXD Petrolimex trên toàn quốc</h4>
                        </div>
                        <div className={style.prodcutItem}>
                            <img src='https://files.petrolimex.com.vn/thumbnails/6783dc1271ff449e95b74a9520964169/0/0/0/5ec1f929911a48bbb9c1405db0563be7/0/095843/127c0dbc3c7e4be49b55840b717814d4.jpg' alt='sale img'/>
                            <h4>Quy trình bán hàng</h4>
                        </div>
                        <div className={style.prodcutItem}>
                            <img src='https://files.petrolimex.com.vn/thumbnails/6783dc1271ff449e95b74a9520964169/0/0/0/100a9095a3254ff8b6f23674db607c67/0/100706/0dee74bf49b041258d08bc6b5c4f6c5c.jpg' alt='sale img'/>
                            <h4>Thẻ xăng dầu Flexicard</h4>
                        </div>
                        <div className={style.prodcutItem}>
                            <img src='https://files.petrolimex.com.vn/thumbnails/6783dc1271ff449e95b74a9520964169/0/0/0/def69d4cf8cf4c60909531e85fc81a58/0/101633/c7398a8d6d68465b99694902ff9643d7.jpg' alt='sale img'/>
                            <h4>Hóa đơn điện tử</h4>
                        </div>
                    </div>
                </div>

                <div className={style.invoice}>
                    <h2>Tiện ích hoá đơn điện tử</h2>
                    <p>Dễ dàng tra cứu hoá đơn và các tiện ích thanh toán khác chỉ với vài thao tác đơn giản</p>
                    <button>Tra cứu hóa đơn <ArrowRight style={{fontSize:21}}/></button>
                </div>

                <div className={style.petroPrice}>
                    <div className={style.listPrice}>
                        <h3>Giá bán lẻ xăng dầu</h3>
                        <table className={style.tablePrice}>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Vùng 1</th>
                                <th>Vùng 2</th>
                            </tr>
                            {pricePetro.map((item,i)=>(
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.price1}</td>
                                    <td>{item.price2}</td>
                                </tr>
                            ))}
                        </table>
                        <p>Giá của Petrolimex cập nhật lúc  15:00 - 25/7/2024</p>
                        <span>*đơn vị: VND</span>
                    </div>    
                    <div className={style.location}>
                        <h3>Cửa hàng xăng dầu</h3>
                        <a href='https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN' className={style.searchMap} target='blank'>Tra cứu cửa hàng <ArrowRight style={{fontSize:24}}/></a>
                        <a href='https://www.petrolimex.com.vn/stations.html' className={style.allLocation} target='blank'></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand;
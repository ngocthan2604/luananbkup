import style from './Introduce.module.scss'
import introduceImage from "../../assets/images/introduce.png"

function Introduce() {
    return (
        <div>
            <div className={style.container}>
                <div className={style.titleImage}>
                    <img src='https://portals.petrolimex.com.vn/_themes/sunrise/img/about-page-title.jpg' alt='introduce'/>
                    <div className={style.title}>
                        <span>Trang chủ | Giới thiệu Petrolimex</span>
                        <h1>Giới thiệu Petrolimex</h1>
                    </div>
                </div>
                <div className={style.contentText}>
                    <div className={style.contentLeft}>
                        Petrolimex giữ vững vị trí chủ lực trên thị trường xăng dầu nội địa
                    </div>
                    <div className={style.contentRight}>
                        <div className={style.contentItem}>
                            Tập đoàn Xăng dầu Việt Nam (tên viết tắt là Petrolimex) hiện nay được hình 
                            thành từ việc cổ phần hóa và cấu trúc lại Tổng công ty Xăng dầu \Việt 
                            Nam. Lĩnh vực kinh doanh chính của Petrolimex là xuất nhập khẩu và kinh 
                            doanh xăng dầu, lọc - hóa dầu, đầu tư vốn vào các doanh nghiệp khác để kinh doanh 
                            các ngành nghề mà Petrolimex đang kinh doanh và các ngành nghề kinh doanh khác
                            theo quy định của pháp luật.
                        </div>
                        <div className={style.contentItem}>
                            <h3>Petrolimex luôn bảo đảm đầy đủ và kịp thời các chủng loại xăng dầu</h3>
                            <span>
                                Petrolimex luôn bảo đảm đầy đủ và kịp thời các chủng loại xăng dầu phục vụ 
                                sự nghiệp phát triển kinh tế - xã hội của đất nước, bảo đảm an ninh quốc phòng 
                                và nhu cầu tiêu dùng của nhân dân
                            </span>
                        </div>
                        <div className={style.contentItem}>
                            <h3>Petrolimex luôn tiên phong áp dụng công nghệ mới</h3>
                            <span>
                                Tiên phong trong việc áp dụng công nghệ mới vào hoạt động sản xuất kinh 
                                doanh, tăng năng suất lao động, phục vụ khách hàng ngày một tốt hơn đồng 
                                thời đảm bảo công tác an toàn, an ninh năng lượng, quản lý và kinh doanh 
                                có hiệu quả
                            </span>
                        </div>
                        <div className={style.contentItem}>
                            <h3>Petrolimex phát triển kinh doanh dịch vụ gia tăng ngoài xăng dầu</h3>
                            <span>
                                Tập trung ưu tiên nghiên cứu và hoàn thiện các mô hình, phương án kinh doanh 
                                cũng như lựa chọn đối tác phù hợp để phát triển dịch vụ gia tặng tại hệ thống 
                                cửa hàng xăng dầu Petrolimex, tận dụng tối đa lợi thế chuỗi bán lẻ, làm gia tăng 
                                hiệu quả kinh doanh và lợi nhuận.
                            </span>
                        </div>
                    </div>
                </div>
                <div className={style.titleImageSecond} style={{backgroundImage:'url("https://files.petrolimex.com.vn/files/6783dc1271ff449e95b74a9520964169/image=jpeg/837f925785bb46b2b42fc66f15fc52da/%E1%BA%A3nh%20ch%E1%BB%A7%20tich%20pc%2022-4.jpg")'}}>
                    <img src='https://portals.petrolimex.com.vn/_themes/sunrise/img/slogan-ceo-icon.svg' alt='kitu'/>
                    <p>
                        Đứng từ góc độ phát triển bền vững, Petrolimex tự hào là một doanh nghiệp luôn 
                        có trách nhiệm với xã hội, luôn tôn trọng và hài hòa lợi ích của các bên liên quan, bảo 
                        vệ môi trường và đóng góp lớn cho ngân sách Nhà nước. Petrolimex luôn là doanh nghiệp 
                        tiên phong trong chuyển đổi và kinh doanh các sản phẩm năng lượng sạch, thân thiện môi 
                        trường.
                    </p>
                    <span>ÔNG PHẠM VĂN THANH</span>
                    <span>CHỦ TỊCH HỘI ĐỒNG QUẢN TRỊ</span>
                </div>
                <div className={style.primaryValue}>
                    <ul>
                        <li>
                            <h1>Giá trị cốt lõi</h1>
                            <span>Được kết tinh từ công sức, tri thức của các thế hệ CBCNV-NLĐ Petrolimex trong 
                                suốt 68 năm qua cùng định hướng chiến lược phát triển mang hơi thở của thời đại.
                                Từ giá trị cốt lõi, thương hiệu Petrolimex sẽ luôn giữ vững được bản sắc riêng 
                                của mình, các hoạt động sản xuất – kinh doanh nhất quán với định hướng phát triển 
                                bền vững vì lợi ích của cổ đông, đối tác, bạn hàng và khách hàng.
                            </span>
                        </li>
                        <li>
                            <p>Đa dạng</p>
                            <span>Đánh giá cao sự khác biệt và tính phong phú</span>
                        </li>
                        <li>
                            <p>Di sản</p>
                            <span>Tự hào là Việt Nam</span>
                        </li>
                        <li>
                            <p>Nhân bản</p>
                            <span>Đặt con người làm trung tâm trong mọi hành động</span>
                        </li>
                        <li>
                            <p>Phát triển</p>
                            <span>Không ngừng vươn lên và đổi mới để hoàn thiện</span>
                        </li>
                    </ul>
                    <div className={style.imageCoreValue}>
                        <img src={introduceImage} alt='giatricoloi'/>
                    </div>
                </div>
                <div className={style.progress} style={{backgroundImage:'url("https://portals.petrolimex.com.vn/_themes/sunrise/img/peroBrand-bg.jpg")'}}>
                    <h2>Hình thành <br/> và phát triển</h2>
                    <img src="https://portals.petrolimex.com.vn/_themes/sunrise/img/history-img-pc.png" alt='progress'/>
                </div>
                <div className={style.managementModel}>
                    <h1>Mô hình quản trị</h1>
                    <img src='https://files.petrolimex.com.vn/files/6783dc1271ff449e95b74a9520964169/image=png/251451bb5d444a9d9ac171c1864ce63c/Mohinh-quantri-052024-xam.png' alt='mohinhquantri'/>
                </div>
                <div className={style.organizationalModel}>
                    <h1>Mô hình tổ chức</h1>
                    <div className={style.person}>
                        <img src='https://portals.petrolimex.com.vn/_themes/sunrise/img/team-1.jpg' alt='person'/>
                        <h4>Ông Phạm Văn Thanh</h4> 
                        <span>Chủ tịch HĐQT</span>
                    </div>
                    <div className={style.listPerson}>
                        <div className={style.person}>
                            <img src='https://portals.petrolimex.com.vn/_themes/sunrise/img/team-7.jpg' alt='person'/>
                            <h4>Ông Đào Nam Hải</h4> 
                            <span>Uỷ viên</span>
                        </div>
                        <div className={style.person}>
                            <img src='https://portals.petrolimex.com.vn/_themes/sunrise/img/team-6.jpg' alt='person'/>
                            <h4>Ông Trần Ngọc Năm</h4> 
                            <span>Uỷ viên</span>
                        </div>
                        <div className={style.person}>
                            <img src='https://portals.petrolimex.com.vn/_themes/sunrise/img/team-9.jpg' alt='person'/>
                            <h4>Ông Lưu Văn Tuyển</h4> 
                            <span>Uỷ viên</span>
                        </div>
                        <div className={style.person}>
                            <img src='https://portals.petrolimex.com.vn/_themes/sunrise/img/team-17.jpg' alt='person'/>
                            <h4>Ông Nguyễn Anh Dũng</h4> 
                            <span>Uỷ viên</span>
                        </div>
                    </div>
                    <div className={style.listPerson}>
                        <div className={style.person}>
                            <img src='https://files.petrolimex.com.vn/files/6783dc1271ff449e95b74a9520964169/image=png/f69626c8ee6d485ab5fe266c253e950d/O%20Tran%20Tuan%20Linh%20260x320.png' alt='person'/>
                            <h4>Ông Trần Tuấn Linh</h4> 
                            <span>Uỷ viên</span>
                        </div>
                        <div className={style.person}>
                            <img src='https://files.petrolimex.com.vn/files/6783dc1271ff449e95b74a9520964169/image=png/638a76f4a53f46fd8850cb8a65d0dd9a/O%20Dinh%20Thai%20Huong-260x320.png' alt='person'/>
                            <h4>Ông Đinh Thái Hương</h4> 
                            <span>Uỷ viên</span>
                        </div>
                        <div className={style.person}>
                            <img src='https://files.petrolimex.com.vn/files/6783dc1271ff449e95b74a9520964169/image=png/8aa2048ef16147eaa0c181f65b8f90ca/O%20Endo%20Tsuyoshi-260x320.png' alt='person'/>
                            <h4>Ông Endo Tsuyoshi</h4> 
                            <span>Uỷ viên</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce;

    
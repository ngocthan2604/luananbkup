import style from './Activity.module.scss'

function Activity() {
    const listActivity = [
        {
            title:"Kinh doanh xăng dầu",
            url:"https://portals.petrolimex.com.vn/_themes/sunrise/img/industry-cta-1.jpg"
        },
        {
            title:"Vận tải xăng dầu",
            url:"https://portals.petrolimex.com.vn/_themes/sunrise/img/industry-cta-4.jpg"
        },
        {
            title:"Khí hoá lỏng (Gas)",
            url:"https://portals.petrolimex.com.vn/_themes/sunrise/img/industry-cta-3.jpg"
        },
        {
            title:"Hoá dầu",
            url:"https://portals.petrolimex.com.vn/_themes/sunrise/img/industry-cta-2.jpg"
        },
        {
            title:"Xây dựng và Thương mại",
            url:"https://portals.petrolimex.com.vn/_themes/sunrise/img/industry-cta-6.jpg"
        },
        {
            title:"Dịch vụ Tài chính",
            url:"https://portals.petrolimex.com.vn/_themes/sunrise/img/industry-cta-5.jpg"
        }
    ]
    return (
        <div>
            <div className={style.container}>
                <div className={style.titleImage}>
                        <img src='https://portals.petrolimex.com.vn/_themes/sunrise/img/lvhd-page-title-pc.jpg' alt='introduce'/>
                        <div className={style.title}>
                            <span>Trang chủ | Lĩnh vực hoạt động</span>
                            <h1>Lĩnh vực hoạt động</h1>
                        </div>
                </div>
                <div className={style.content}>
                    {listActivity.map((item,i)=>(
                        <div className={style.contentItem} key={i} style={{backgroundImage:`url("${item.url}")`}}>
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Activity;
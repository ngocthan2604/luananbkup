import Header from "@/layouts/Header";
import style from './Timekeeping.module.scss'
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { apiGetProfileUser, apiCreateTimeKeeing, apiGetAllTimeKeeing,apiSearchTimekeeping } from "@/services/apis";

function Timekeeping() {

    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [userData, setUserData] = useState(null)
    const [toastTitleStart, seTtoastTitleStart] = useState(null)
    const [toastTitleEnd, seTtoastTitleEnd] = useState(null)
    const [roleId, setRoleId] = useState(null)
    const [listTimekeeing, setListTimeKeeing] = useState([])
    const [searchType, setSearchType] = useState('id')
    const [searchValue, setSearchValue] = useState('')
    const [searchResults, setSearchResults] = useState([])


    useEffect(() => {
        (async () => {
            const response = await apiGetProfileUser()
            setUserData(response?.data?.data);
            setRoleId(response?.data?.data?.roleData?.roleId)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            if (roleId) {
                const response = await apiGetAllTimeKeeing(roleId)
                if (response?.data?.statusCode === 2) {
                    setListTimeKeeing(response?.data?.data)
                }
            }
        })()
    }, [roleId])

    const handleSearch = async () => {
        let response;
    
        try {
            // Gọi API dựa trên searchType
            if (searchType === 'id') {
                response = await apiSearchTimekeeping('id', searchValue);  // Gửi với id
            } else if (searchType === 'date') {
                response = await apiSearchTimekeeping('date', searchValue); // Gửi với date
            } else {
                toast.error('searchType không hợp lệ!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                return;
            }
    
            // Kiểm tra kết quả trả về từ API
            if (response?.data?.statusCode === 2) {
                setSearchResults(response?.data?.data || []); // Đảm bảo kết quả luôn là mảng
                if (response?.data?.data.length === 0) {
                    toast.error('Không có kết quả nào!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            } else {
                toast.error('Nhập đủ thông tin tìm kiếm!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
            toast.error('Nhập đủ thông tin tìm kiếm!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };
    

    const handleResetSearch = async () => {
        const response = await apiGetAllTimeKeeing(roleId);
        if (response?.data?.statusCode === 2) {
            setSearchResults(response?.data?.data || []);
            setSearchValue('');
        }
    };

    const getTimeCurrentStart = () => {
        const currentTime = new Date();

        const year = String(currentTime.getFullYear());
        const month = String(currentTime.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
        const day = String(currentTime.getDate()).padStart(2, '0');
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();

        // Tạo đối tượng userData từ thông tin thời gian
        const newUserData = {
            day: day,
            month: month,
            year: year,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };

        // Thiết lập state userData
        setStartTime(newUserData);
    }
    const getTimeCurrentEnd = () => {
        const currentTime = new Date();

        const year = String(currentTime.getFullYear());
        const month = String(currentTime.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
        const day = String(currentTime.getDate()).padStart(2, '0');
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();

        // Tạo đối tượng userData từ thông tin thời gian
        const newUserData = {
            day: day,
            month: month,
            year: year,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };

        // Thiết lập state userData
        setEndTime(newUserData);
    }
    useEffect(() => {
        getTimeCurrentStart()
    }, [])
    useEffect(() => {

        getTimeCurrentEnd()
    }, [])



    useEffect(() => {
        if (startTime && userData) {

            const title = `Mã Nhân Viên : ${userData?.id} - ${userData.lastName} ${userData.firstName} ,
                Giờ Vào ${startTime.hours}h${startTime.minutes}p Ngày ${startTime.day} Tháng ${startTime.month} Năm ${startTime.year}
            `
            seTtoastTitleStart(title);
        }
    }, [startTime, userData])



    useEffect(() => {
        if (endTime && userData) {
            const title = `Mã Nhân Viên : ${userData?.id} - ${userData.lastName} ${userData.firstName} ,
            Giờ Ra ${endTime.hours}h${endTime.minutes}p Ngày ${endTime.day} Tháng ${endTime.month} Năm ${startTime.year}
        `
            seTtoastTitleEnd(title);
        }
    }, [endTime, userData])


    const handleBtnTimeStart = async () => {

        const response = await apiCreateTimeKeeing({ userId: userData?.id, time: `Giờ Vào ${endTime.hours}h${endTime.minutes}p Ngày ${endTime.day} Tháng ${endTime.month} Năm ${startTime.year}`, type: 'start' })
        if (response?.data?.statusCode === 2) {
            toast.success(toastTitleStart, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

        }

    }

    const handleBtnTimeEnd = async () => {
        const response = await apiCreateTimeKeeing({ userId: userData?.id, time: `Giờ Ra ${endTime.hours}h${endTime.minutes}p Ngày ${endTime.day} Tháng ${endTime.month} Năm ${startTime.year}`, type: 'end' })
        if (response?.data?.statusCode === 2) {
            toast.success(toastTitleEnd, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

        }
    }
      
    return (
        <>
            <Header />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div>
                {/* <div>Giờ Vào : {JSON.stringify(startTime)}</div>
                <div>Giờ Ra : {JSON.stringify(endTime)}</div> */}
            </div>
            <div className={style.container}>
                <Button variant="contained" disableElevation sx={{ fontSize: "18px" }} onClick={handleBtnTimeStart}>Giờ Vào</Button>
                <Button variant="contained" color="success" sx={{ fontSize: "18px" }} onClick={handleBtnTimeEnd}>Giờ Ra</Button>
            </div>
            
            {roleId !== 'R0' && (
                <div className={style.searchData}>
                    <input
                        type={searchType === 'id' ? 'number' : 'date'}
                        placeholder={searchType === 'id' ? 'Nhập ID' : 'Chọn ngày tháng'}
                        className={style.searchInput}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <select
                        id="searchType"
                        className={style.searchDropdown}
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}
                    >
                        <option value="id">Tìm theo ID</option>
                        <option value="date">Tìm theo ngày tháng</option>
                    </select>

                    <button className={style.searchButton} onClick={handleSearch}>
                        Tìm kiếm
                    </button>

                    {searchResults.length > 0 && (
                        <button
                            id="resetButton"
                            className={`${style.searchButton} ${style.resetButton}`}
                            onClick={handleResetSearch}
                        >
                            Xóa tìm kiếm
                        </button>
                    )}
                </div>
            )}

            <table className={style.customers}>
                {listTimekeeing &&
                    <tbody>
                        <tr>
                            <th>STT</th>
                            <th>Mã Nhân Viên</th>
                            <th>Time</th>
                        </tr>
                        {(searchResults.length > 0 ? searchResults : listTimekeeing).map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.userId}</td>
                            <td>{item.time}</td>
                        </tr>
                        ))}
                    </tbody>

                }
            </table>
        </>
    );
}

export default Timekeeping;
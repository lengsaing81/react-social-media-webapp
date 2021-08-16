import './profile.css';
import Topbar from '../../components/topbar/Topbar.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                            <img src="assets/person/7.jpeg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">John Smith</h4>
                            <span className="profileInfoDesc">Hello, world</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />
                    </div>
                    
                </div>
            </div>
        </>
    )
};

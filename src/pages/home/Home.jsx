import Topbar from '../../components/topbar/Topbar.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './home.css';

export default function Home() {
    return (
    <>
        <Topbar />
        <div className="homeContainer">
            <div className="homeWrapper">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </div>
    </>);
}
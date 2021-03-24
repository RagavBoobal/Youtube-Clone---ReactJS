import React from 'react'
import './MainArea.css';
import {MdHistory, MdHome, MdPlaylistPlay, MdRssFeed, MdVideoLibrary} from 'react-icons/md'
import {FaFutbol, FaGripfire, FaMusic, FaNewspaper} from 'react-icons/fa';
import {BsFillCollectionPlayFill} from 'react-icons/bs'
import {MdWatchLater} from 'react-icons/md'
import {GiGamepad} from 'react-icons/gi'
import ReactPlayer from 'react-player'
function MainArea(){
    return(
        <div className="MainArea">

            <div className="Sidebar">
                <div className="Home">
                    <div className="Quick_Icon">
                        <MdHome color="red"fontSize="3rem"/>
                        <div>Home</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaGripfire color="grey"fontSize="3rem"/>
                        <div>Trending</div>
                    </div>
                    <div className="Quick_Icon">
                        <BsFillCollectionPlayFill color="grey"fontSize="3rem"/>
                        <div>Subcriptions</div>
                    </div>
                </div>
                <div className="Library">
                    <div className="Quick_Icon">
                        <MdHome color="grey"fontSize="3rem"/>
                        <div>Home</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdVideoLibrary color="grey"fontSize="3rem"/>
                        <div>Video Library</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdHistory color="grey"fontSize="3rem"/>
                        <div>History</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdWatchLater color="grey"fontSize="3rem"/>
                        <div>Watch Later</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdPlaylistPlay color="grey"fontSize="3rem"/>
                        <div>YouTube Clone</div>
                    </div>
                </div>
                <div className="More_From_Youtube">
                    <div className="Quick_Icon">
                        <GiGamepad color="grey"fontSize="3rem"/>
                        <div>Gaming</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdRssFeed color="grey"fontSize="3rem"/>
                        <div>Live</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaFutbol color="grey"fontSize="3rem"/>
                        <div>Sports</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaMusic color="grey"fontSize="3rem"/>
                        <div>Music</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaNewspaper color="grey"fontSize="3rem"/>
                        <div>News</div>
                    </div>
                </div>
            </div>
            <div className="Main">
                <div className="Videos">
                    <div className="Video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=6qHfB9njDjo"
                            height="170px"
                            width="280px"
                        controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/Voilin1.jpg"alt="Voilin"style={{height:"35",width:"35px",borderRadius:"50%"}}/>
                            <div>Agayam Thepiditha Violin Cover</div>
                        </div>
                        <div className="view">
                        4k views-Mar 21,2021
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="Video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=wCr0l6zS9QE"
                            height="170px"
                            width="280px"
                        controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/Voilin1.jpg"alt="Voilin"style={{height:"35",width:"35px",borderRadius:"50%"}}/>
                            <div>Pookal Pookum Violin Cover</div>
                        </div>
                        <div className="view">
                        200k views-May 24,2019    
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="Video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=g7jAVQyDxes"
                            height="170px"
                            width="280px"
                        controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/Voilin1.jpg"alt="Voilin"style={{height:"35",width:"35px",borderRadius:"50%"}}/>
                            <div>Mazhaithuli Mazhaithuli Violin Cover</div>
                        </div>
                        <div className="view">
                         15k views-Jan 14,2021 
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="Video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=9_k4UcqksjU"
                            height="170px"
                            width="280px"
                        controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/Voilin1.jpg"alt="Voilin"style={{height:"35",width:"35px",borderRadius:"50%"}}/>
                            <div>Pachai Niramey Violin Cover</div>
                        </div>
                        <div className="view">
                         400k views-Nov 10,2017
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="Video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=7tFZrE0ohLk"
                            height="170px"
                            width="280px"
                        controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/Voilin1.jpg"alt="Voilin"style={{height:"35",width:"35px",borderRadius:"50%"}}/>
                            <div>Elangaathu veesuthey Violin Cover</div>
                        </div>
                        <div className="view">
                         81k views-Aug 10,2018
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
    )
}
export default MainArea
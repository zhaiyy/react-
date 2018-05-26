import React from 'react'
import './player.less'
import Progress from '../components/progress'

let duration = null

class Player extends React.Component{
    constructor(props) {
        super(props)
        console.log(this)
        this.state = {
            progress: 0,
            isPlay: true,
            volume:0
        }
        this.play = this.play.bind(this)
    };
    componentDidMount() {
        $("#player").bind($.jPlayer.event.timeupdate, (e) => {
            duration = e.jPlayer.status.duration
            this.setState({
                progress: e.jPlayer.status.currentPercentAbsolute,
                volume: e.jPlayer.options.volume *100,
            });
        });
    };
    componentWillUnmount() {
        $("#player").unbind($.jPlayer.event.timeupdate);
    };
    onProgressChangeHandler(progress){
        $("#player").jPlayer('play',duration*progress);
    };
    changeVolumeHandler(volume){
        $("#player").jPlayer('volume',volume);

    };
    play() {
        if(this.state.isPlay){
            $("#player").jPlayer('pause');
        }else{
            $("#player").jPlayer('play');
        }
        this.setState({
            isPlay : !this.state.isPlay
        })
    }
    render(){
        const {currentMusicItem: {title = '', artist = '', cover = ''} = {}} = this.props;
        return (
            <div className="player-page">
                <h1 className="caption">我的私人音乐坊 &gt;</h1>
                <div className="mt20 row">
                    <div className="controll-wrapper">
                        <h2 className="music-title">{title}</h2>
                        <h3 className="music-artist mt10">{artist}</h3>
                        <div className="row mt20">
                            <div className="left-time -col-auto">-leftTime</div>
                            <div className="volume-container">
                                <i className="icon-volume rt" style={{top: 5, left: -5}}></i>
                                <div className="volume-wrapper">
                                    <Progress
                                        progress={this.state.volume}
                                        onProgressChange={this.changeVolumeHandler}
                                        barColor='#aaa'
                                    >
                                    </Progress>
                                </div>
                            </div>
                        </div>
                        <div style={{height: 10, lineHeight: '10px'}}>
                            <Progress
                                progress={this.state.progress}
                                onProgressChange={this.onProgressChangeHandler}
                            >
                            </Progress>
                        </div>
                        <div className="mt35 row">
                            <div>
                                <i className="icon prev" ></i>
                                <i className={`icon ml20 ${this.state.isPlay ? 'pause' : 'play'}`}
                                onClick={this.play}></i>
                                <i className="icon next ml20" ></i>
                            </div>
                            <div className="-col-auto">
                                <i className={`icon `} ></i>
                            </div>
                        </div>
                    </div>
                    <div className="-col-auto cover">
                        <img src={cover} alt={title}/>
                    </div>
                </div>
            </div>

        );
    }
}
export default  Player;
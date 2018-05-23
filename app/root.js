import React from 'react'
import Header from './components/header'
import Player from './page/palyer'
import MusicList from './page/musicList'
import {MUSIC_LIST} from './config/config'


class Root extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            currentMusicItem:MUSIC_LIST[2],
            musicList:MUSIC_LIST

        }
    };
    componentDidMount() {
        $("#player").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3: "http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3"
                }).jPlayer('play');
            },
            supplied: "mp3",
            wmode: "window",
            useStateClassSkin: true
        });
    };
    render(){
        return (
            <div>
                <Header></Header>
{/*
                <Player currentMusicItem={this.state.currentMusicItem}></Player>
*/}
                <MusicList currentMusicItem={this.state.currentMusicItem}
                    musicList={this.state.musicList}></MusicList>
            </div>
        );
    }
}
export default  Root;
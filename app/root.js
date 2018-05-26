import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './page/app'
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
    render() {
        let This = this;
        const MusicLists = () => (
            <MusicList currentMusicItem={This.state.currentMusicItem} musicList={this.state.musicList}/>
        );

        const Players = () => (
            <Player currentMusicItem={This.state.currentMusicItem} repeatType='1' isPlay={This.state.playState} />
        );
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" component={Players}></Route>
                        <Route  path="/list" component={MusicLists}></Route>
                    </Switch>
                </App>
            </Router>

        );
    }
}
export default  Root;
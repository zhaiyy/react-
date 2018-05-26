import React from 'react'
import Header from '../components/header'
import {MUSIC_LIST} from '../config/config'


class App  extends React.Component{
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
        const childrenWithProps = React.Children.map(this.props.children, child => React.cloneElement(child,
            {
                currentMusicItem: this.state.currentMusicItem,
            }
        ));
        return (
            <div>
                <Header></Header>
                {childrenWithProps}
            </div>
        );
    }
}

export default App
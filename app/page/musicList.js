import React from 'react'
import MusicListItem from '../components/musicListItem'


class musicList extends React.Component{
    constructor(props) {
        super(props)

    };
    render(){
        let listEle = null
        const {musicList = [],currentMusicItem={}} = this.props
        listEle = musicList.map((item)=> {
            return <MusicListItem
                focus={item == currentMusicItem}
                key={item.id} musicItem = {item}>
                {item.title}
                </MusicListItem>
        })
        return (
            <ul>
                {listEle}
            </ul>

        );
    }
}
export default  musicList;
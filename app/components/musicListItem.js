import React from 'react'
import './musicListItem.less'

class musicListItem extends React.Component{
    render(){
        let musicItem = this.props.musicItem
        return (
            <li className={`components-musicListItem row ${this.props.focus?'focus':''}`}>
                <p><strong>{musicItem.title} - {musicItem.artist}</strong></p>
                <p className='-col-auto delete'></p>
            </li>
        );
    }
}
export default  musicListItem;
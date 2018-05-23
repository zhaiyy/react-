import React from 'react'
import './progress.less'

class Progress extends React.Component{
    constructor(props){
        super(props)
        this.barColor = '#2f9842'
        this.progressBar = null
        this.progressRef = ele => {
            this.progressBar = ele
        }
        this.changeProgress = this.changeProgress.bind(this);
    }
    changeProgress(e) {
        let progressBar = this.progressBar;
        let progress = (e.clientX  - progressBar.
        getBoundingClientRect().left)/progressBar.clientWidth
        this.props.onProgressChange && this.props.onProgressChange(progress)

    };
    render(){
        return (
            <div className='components-progress row'  ref ={this.progressRef}
                 onClick={this.changeProgress}>
                <div className="progress" style={{width: `${this.props.progress}%`,backgroundColor:this.barColor}}></div>
            </div>
        );
    }
}
export default  Progress;
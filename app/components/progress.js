import React,{Component} from 'react'
import './progress.less'

class Progress extends React.Component{
    constructor(props){
        super(props)
        this.progressBar = null
        this.progressRef = ele => {
            this.progressBar = ele
        }
        this.changeProgress = this.changeProgress.bind(this);
    }
    static get defaultProps (){
        return {
            barColor: '#2f9842'
        }
    };
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
                <div className="progress" style={{width: `${this.props.progress}%`,backgroundColor:this.props.barColor}}></div>
            </div>
        );
    }
}
export default  Progress;
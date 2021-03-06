import React,{ Component } from 'react'
import Typing from 'react-typing-animation';
import style from '../styles/headline.jss'

class Title extends Component {
    constructor(props){
        super(props)
        this.state = {
           titleIndex: 0,
           override: false,
           
        }
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.handleResize)
    }

    handleResize = async () => {
        await this.setState({
            override: true
        })
        await this.setState({
            override: false
        })
        
    }

    isVowel = (letter) => (
        letter.toLowerCase() === 'a' ||
        letter.toLowerCase() === 'e' ||
        letter.toLowerCase() === 'i' ||
        letter.toLowerCase() === 'o' ||
        letter.toLowerCase() === 'u'
    )

    render(){
        let content = (
            <React.Fragment>
                <Typing
                    loop={true}
                    onFinishedTyping={(() => {
                        const newIndex = this.state.titleIndex === this.props.titles.length -1
                            ? 0
                            : this.state.titleIndex +1
                        this.setState({ titleIndex: newIndex})
                    })}
                    onStartedTyping={window.addEventListener('resize', <Typing.Reset count={1} delay={5} />)}
                >
                    <Typing.Speed ms={50} />
                    <div id={'title'} style={style().title}>
                        {this.props.titles[this.state.titleIndex]}
                    </div>
                    <Typing.Delay ms={1000} />
                    <Typing.Backspace count={this.props.titles[this.state.titleIndex].length + 1} />
                    <Typing.Reset count={1} delay={5} />
                </Typing>
            </React.Fragment>
           )

        let text = this.isVowel(this.props.titles[this.state.titleIndex][0])
            ? "I'm an "
            : "I'm a "
        return (
            <React.Fragment>
            <span> 
                {text}
            </span>
            {this.state.override ? <div></div> : content}
            </React.Fragment>
        )
    }
}

export default Title
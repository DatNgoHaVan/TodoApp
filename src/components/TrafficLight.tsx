import * as React from 'react';
import '../styles/sass/TrafficLight.scss';
import classNames from 'classnames';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

interface IProps {

}

interface IState {
    currentColor: number;
}

class TrafficLight extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            currentColor: RED
        }

        setInterval(() => {
            //console.log(this.state.currentColor);
            this.setState({
                currentColor: this.getNextColor(this.state.currentColor)
            });
        },1000)
    }

    getNextColor(color: number): number {
        switch (color) {
            case RED:
                return ORANGE!;
            case ORANGE:
                return GREEN;
            case GREEN:
                return RED;
        }
        return 0;
    }

    render() {
        const {currentColor} = this.state;
        console.log('Rendering..',this.state.currentColor);
        return <div className="TrafficLight">
            <div className={classNames('bulb', 'red',
                { active: currentColor === RED })} />
            <div className={classNames('bulb', 'orange',
                { active: currentColor === ORANGE })} />
            <div className={classNames('bulb', 'green',
                { active: currentColor === GREEN })} />
        </div>
    }
}

export default TrafficLight;
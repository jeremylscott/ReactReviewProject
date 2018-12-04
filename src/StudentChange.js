import React from 'react'

export default function StudentChange (props) {
    
    return (
    <div className='App'>
        <div className='header'>
            <div className='home'>Home</div>
            <div className='directory'>DevMountain Directory</div>
            <div className='headerSpace'></div>
        <div/>
        <div className='main'>
            <span className='pageCounter'> {props.currentIndex + 1} of {props.totalIndex}</span>

            <span className='student-name'>
                <strong>Name: {props.name}</strong>
            </span>
            <br />
            <span className='introduction'>
                <span className='from'/>
                {' '}
                <strong>From: {props.from}</strong>
            </span>
            <span className='funFact'>
                    {' '}
                <strong>Fun fact: {props.funFact}</strong>
            </span>
            <br />
            <span><strong>Would you rather...</strong></span>
            <br/>
                <span className='questionAndAnswer'>
                    <span className='cityOrCountry'>
                        <strong>...live in the city or country? </strong>{props.cityOrCountry}
                    </span>
                    <span className='indoorsOrOutdoors'>
                        <strong>...be indoors our outdoors? </strong>{props.indoorsOrOutdoors}
                    </span>
                    <span className='travel'>
                        <strong>...travel every day or never leave home? </strong>{props.travel}
                    </span>
                    <span className='topsOrSubway'>
                        <strong>...eat at Top's or Subway? </strong>{props.food}
                    </span>
                    <span className='dogOrCat'>
                        <strong>...have a dog or a cat? </strong>{props.dogOrCat}
                    </span>
                </span>
                <div>
                    <button className='previous' onClick={props.moveBackward}>{'< '}Previous</button>
                    <button className ='previous' onClick={props.editStudent}>Edit</button>
                    <button className ='previous' onClick={props.deleteStudent}>Delete</button>
                    <button className ='previous' onClick={props.newStudent}>New</button>
                    <button id='next' onClick={props.moveForward}>Next{' >'}</button>
                </div>
        </div>  
    </div>
    </div>  

    )
}